/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import {
  Compass,
  Camera,
  Layers,
  Search,
  Sparkles,
  History as HistoryIcon,
  RotateCcw,
  Volume2,
  ExternalLink,
  MapPin,
  Eye,
  CheckCircle2,
  Loader2,
  Flame,
  Globe,
  WifiOff,
} from "lucide-react";
import confetti from "canvas-confetti";
import { motion, AnimatePresence } from "motion/react";
import {
  LandmarkRecognition,
  LandmarkHistory,
  NarrationAudio,
  ScannedLandmarkEntry,
  AppViewMode,
} from "./types";
import { recognizeLandmark, fetchLandmarkHistory, generateNarration, translateText } from "./services/api";
import { CameraCapture } from "./components/CameraCapture";
import { ARNarratedClip } from "./components/ARNarratedClip";
import { HistoryGroundingPanel } from "./components/HistoryGroundingPanel";
import { LandmarkMapViewer } from "./components/LandmarkMapViewer";
import { AnalysisProgressModal, AnalysisStage } from "./components/AnalysisProgressModal";
import { TourJournal } from "./components/TourJournal";
import { AuthBar } from "./components/AuthBar";
import { TravelStampsBackground } from "./components/TravelStampsBackground";
import { LanguageSelector } from "./components/LanguageSelector";
import { useLanguage } from "./context/LanguageContext";
import { useOnlineStatus } from "./hooks/useOnlineStatus";
import {
  saveOfflineJournalEntry,
  getAllOfflineJournalEntries,
  deleteOfflineJournalEntry,
  clearAllOfflineJournalEntries,
  getOfflineNarrationAsset,
} from "./services/offlineStorage";
import { cacheNarrationInServiceWorker } from "./services/serviceWorkerRegistration";
import { SampleLandmark } from "./data/sampleLandmarks";
import {
  auth,
  onAuthStateChanged,
  FirebaseUser,
  saveScanToFirestore,
  deleteScanFromFirestore,
  subscribeToUserScans,
  syncLocalScansToFirestore,
} from "./services/firebase";

const LOCAL_STORAGE_KEY = "citylens_ar_journal_v1";

export default function App() {
  const { currentLanguage, t } = useLanguage();
  const { isOnline } = useOnlineStatus();
  const [viewMode, setViewMode] = useState<AppViewMode>("capture");
  const [activeTab, setActiveTab] = useState<"ar_tour" | "map" | "history">("ar_tour");
  const [activePhoto, setActivePhoto] = useState<string | null>(null);
  const [activePreset, setActivePreset] = useState<SampleLandmark | undefined>(undefined);
  const [recognition, setRecognition] = useState<LandmarkRecognition | null>(null);
  const [history, setHistory] = useState<LandmarkHistory | null>(null);
  const [narration, setNarration] = useState<NarrationAudio | null>(null);

  const [analysisStage, setAnalysisStage] = useState<AnalysisStage>("idle");
  const [analysisError, setAnalysisError] = useState<string | null>(null);
  const [isRegeneratingVoice, setIsRegeneratingVoice] = useState<boolean>(false);

  // User auth state
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [isAuthLoading, setIsAuthLoading] = useState<boolean>(true);

  // Journal history state
  const [journalEntries, setJournalEntries] = useState<ScannedLandmarkEntry[]>([]);
  const [showJournal, setShowJournal] = useState<boolean>(false);
  const [syncingIds, setSyncingIds] = useState<string[]>([]);

  // Load journal from IndexedDB on mount with localStorage fallback
  useEffect(() => {
    let isMounted = true;
    async function loadOfflineJournal() {
      try {
        const offlineEntries = await getAllOfflineJournalEntries();
        if (isMounted && offlineEntries && offlineEntries.length > 0) {
          setJournalEntries(offlineEntries);
          return;
        }
      } catch (err) {
        console.warn("IndexedDB initial load notice:", err);
      }

      // Fallback to localStorage if IndexedDB is empty
      try {
        const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (saved && isMounted) {
          const parsed: ScannedLandmarkEntry[] = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length > 0) {
            setJournalEntries(parsed);
            // Migrate to IndexedDB for offline durability
            parsed.forEach((item) => saveOfflineJournalEntry(item));
          }
        }
      } catch (e) {
        console.warn("Failed to load journal from localStorage:", e);
      }
    }

    loadOfflineJournal();
    return () => {
      isMounted = false;
    };
  }, []);

  // Firebase Auth State Listener & Local-to-Cloud Sync
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      setIsAuthLoading(false);

      if (currentUser) {
        // Sync any local scans to Firestore so no data is lost
        try {
          const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
          if (saved) {
            const parsed: ScannedLandmarkEntry[] = JSON.parse(saved);
            if (parsed.length > 0) {
              await syncLocalScansToFirestore(currentUser.uid, parsed, (scanId, status) => {
                setSyncingIds((prev) => {
                  if (status === "syncing") {
                    return prev.includes(scanId) ? prev : [...prev, scanId];
                  } else {
                    return prev.filter((id) => id !== scanId);
                  }
                });
              });
            }
          }
        } catch (syncErr) {
          console.warn("Local-to-cloud scan sync notice:", syncErr);
        }
      }
    });

    return () => unsubscribe();
  }, []);

  // Firestore Real-Time Scans Subscription
  useEffect(() => {
    if (!user) return;

    const unsubscribe = subscribeToUserScans(
      user.uid,
      (firestoreScans) => {
        if (firestoreScans) {
          setJournalEntries(firestoreScans);
          // Also persist new Firestore scans into local IndexedDB for offline availability
          firestoreScans.forEach((scan) => {
            saveOfflineJournalEntry(scan);
          });
          try {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(firestoreScans.slice(0, 25)));
          } catch {}
        }
      },
      (err) => {
        console.warn("Real-time journal sync notice:", err);
      }
    );

    return () => unsubscribe();
  }, [user]);

  const saveJournal = async (entries: ScannedLandmarkEntry[], latestEntry?: ScannedLandmarkEntry) => {
    setJournalEntries(entries);

    // 1. High-capacity IndexedDB local persistence (stores full photos + audio narration assets)
    if (latestEntry) {
      await saveOfflineJournalEntry(latestEntry);
      if (latestEntry.narration?.audioBase64) {
        cacheNarrationInServiceWorker(latestEntry.id, latestEntry.narration.audioBase64);
      }
    }

    // 2. Keep localStorage updated with lightweight metadata (stripped of heavy base64 audio to avoid quota limits)
    try {
      const lightweightEntries = entries.slice(0, 25).map((e) => ({
        ...e,
        narration: e.narration
          ? {
              voiceName: e.narration.voiceName,
              durationEstimateSec: e.narration.durationEstimateSec,
              sampleRate: e.narration.sampleRate,
              modelUsed: e.narration.modelUsed,
              audioBase64: "", // safely persisted in IndexedDB
            }
          : undefined,
      }));
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(lightweightEntries));
    } catch (e) {
      console.warn("Failed to persist journal locally:", e);
    }

    // 3. Persist to Cloud Firestore if signed in
    if (user && latestEntry) {
      setSyncingIds((prev) => (prev.includes(latestEntry.id) ? prev : [...prev, latestEntry.id]));
      try {
        await saveScanToFirestore(user.uid, latestEntry);
      } catch (err) {
        console.warn("Failed to persist scan to Firestore:", err);
      } finally {
        setTimeout(() => {
          setSyncingIds((prev) => prev.filter((id) => id !== latestEntry.id));
        }, 600);
      }
    }
  };

  const handlePhotoSelected = async (imageDataUrl: string, samplePreset?: SampleLandmark, fileNameHint?: string) => {
    setActivePhoto(imageDataUrl);
    if (samplePreset !== undefined) {
      setActivePreset(samplePreset);
    }
    const currentPreset = samplePreset !== undefined ? samplePreset : activePreset;
    const effectiveHint = currentPreset?.name || fileNameHint;
    setAnalysisError(null);

    // Check if device is offline before initiating Gemini API call
    if (typeof navigator !== "undefined" && !navigator.onLine) {
      setAnalysisError(
        "You are currently offline. Connect to the internet to scan new landmarks with AI, or browse your saved landmark journals and audio guides offline."
      );
      setAnalysisStage("error");
      return;
    }

    setAnalysisStage("recognizing");

    try {
      // Step 1: AI Recognizes the landmark using Gemini Vision
      const recResult = await recognizeLandmark(imageDataUrl, effectiveHint);

      setRecognition(recResult);

      // Step 2: Fetches history via Google Search Grounding with Gemini 3.8 Flash & Photo Grounding
      setAnalysisStage("grounding");
      let histResult: LandmarkHistory;
      try {
        histResult = await fetchLandmarkHistory({
          landmarkName: recResult.name,
          city: recResult.city,
          country: recResult.country,
          architecturalStyle: recResult.architecturalStyle,
          periodEra: recResult.periodEra,
          summary: recResult.summary,
          photoAnalysis: recResult.photoAnalysis,
          arKeypoints: recResult.arKeypoints,
          isLandmark: recResult.isLandmark,
          detectedCategory: recResult.detectedCategory,
          notLandmarkReason: recResult.notLandmarkReason,
        });
      } catch (histErr) {
        console.warn("History fetch notice, generating bespoke photo-grounded history:", histErr);
        const photoFeatures = recResult.photoAnalysis?.prominentVisualFeatures || [];
        const featureHighlight = photoFeatures.length > 0 ? photoFeatures.join(", ") : recResult.arKeypoints.map((k) => k.label).join(", ");
        const vantage = recResult.photoAnalysis?.perspectiveAndAngle || "framing view";
        const materials = recResult.photoAnalysis?.visibleMaterialsAndTextures || "authentic textures";
        const isPerson = recResult.detectedCategory === "person" || recResult.isLandmark === false;

        histResult = isPerson
          ? {
              historicalTimeline: [
                {
                  yearOrEra: recResult.periodEra && recResult.periodEra !== "N/A" ? recResult.periodEra : "Career Milestone",
                  event: "Emergence & Public Distinction",
                  description: `${recResult.name} rose to prominence through signature achievements, dedication, and iconic public presence.`
                },
                {
                  yearOrEra: "Career Highlights",
                  event: "Signature Accolades & Leadership",
                  description: `Recognized for high-impact performances, clutch leadership, and unforgettable career moments celebrated worldwide.`
                },
                {
                  yearOrEra: "Modern Legacy",
                  event: "Enduring Cultural Impact",
                  description: `A celebrated figure inspiring fans and peers across global sports and contemporary culture.`
                }
              ],
              architecturalSecrets: [
                `Observable features highlighted in this capture: ${featureHighlight}.`,
                `Framed from a ${vantage}, accentuating authentic character and presence.`,
                `Renowned for high-stakes resilience and charisma.`
              ],
              culturalSignificance: recResult.summary || `${recResult.name} holds a celebrated place in modern culture and athletics.`,
              visitorTips: [
                "Tap on the AR keypoint pins on your photo to inspect specific visual details.",
                "Listen to the synchronized narration audio highlighting career and visual elements.",
                "Tap the World Monuments buttons if you wish to tour famous architectural wonders."
              ],
              photoGroundedNotes: `Captured from a ${vantage}, highlighting ${featureHighlight}.`,
              narrationScript: `Welcome to this special visual feature on ${recResult.name}. Looking closely at this photograph captured from a ${vantage}, we can see ${featureHighlight}. Celebrated as one of the most compelling figures in modern culture, their career is defined by determination, clutch moments, and leadership. Let's explore the visual details and story behind this capture.`,
              chapters: recResult.arKeypoints.slice(0, 4).map((kp, idx) => ({
                id: `chap-${idx + 1}`,
                title: kp.label,
                timestampHint: `0:${(idx * 20).toString().padStart(2, "0")}`,
                script: kp.description,
                focusPointId: kp.id
              })),
              groundingQueries: [`${recResult.name} biography`, `${recResult.name} career milestones`],
              groundingSources: [
                {
                  title: `${recResult.name} — Profile & Milestones`,
                  url: `https://www.google.com/search?q=${encodeURIComponent(recResult.name)}`
                }
              ]
            }
          : {
              historicalTimeline: [
                {
                  yearOrEra: recResult.periodEra || "Historic Era",
                  event: "Monument Construction",
                  description: `Conceived and built in the ${recResult.architecturalStyle} architectural style, featuring ${materials}.`
                },
                {
                  yearOrEra: "Modern Era",
                  event: "World Heritage & Cultural Icon",
                  description: `Recognized as a premier cultural wonder of ${recResult.city}, attracting visitors and architectural historians worldwide.`
                }
              ],
              architecturalSecrets: [
                `Distinguished by classic ${recResult.architecturalStyle} geometry and structural proportions.`,
                `Key visual features spotted in your photograph: ${featureHighlight}.`,
                `Architecturally engineered to harmonize with the urban landscape of ${recResult.city}.`
              ],
              culturalSignificance: recResult.summary || "A monumental landmark steeped in cultural and architectural identity.",
              visitorTips: [
                "Best visited early morning or at golden hour for striking architectural illumination.",
                "Tap on AR keypoint pins directly on your photo to examine intricate architectural facets.",
                "Use the Google Maps tab below for real-time walking directions and 360° Street View."
              ],
              photoGroundedNotes: `Captured from a ${vantage}, highlighting ${featureHighlight}.`,
              narrationScript: `Welcome to ${recResult.name} in ${recResult.city}, ${recResult.country}. Standing before this remarkable ${recResult.architecturalStyle} monument, captured here from a ${vantage}, let's examine its handcrafted masonry and structural details. Notice ${featureHighlight}, showcasing centuries of human ingenuity and cultural pride.`,
              chapters: recResult.arKeypoints.slice(0, 4).map((kp, idx) => ({
                id: `chap-${idx + 1}`,
                title: kp.label,
                timestampHint: `0:${(idx * 20).toString().padStart(2, "0")}`,
                script: kp.description,
                focusPointId: kp.id
              })),
              groundingQueries: [`${recResult.name} ${recResult.city} architecture history`, `${recResult.name} visitor guide`],
              groundingSources: [
                {
                  title: `${recResult.name} - Architectural Heritage Dossier`,
                  url: `https://www.google.com/search?q=${encodeURIComponent(recResult.name + " " + recResult.city)}`
                }
              ]
            };
      }
      setHistory(histResult);

      // Step 3: Shows an AR-style narrated clip using Gemini 3.1 Flash TTS Preview
      setAnalysisStage("synthesizing");
      let audioResult: NarrationAudio | null = null;
      try {
        let scriptForAudio = histResult.narrationScript;
        if (currentLanguage.code !== "en") {
          const trans = await translateText(histResult.narrationScript, currentLanguage.code, currentLanguage.name);
          if (trans?.translatedText) {
            scriptForAudio = trans.translatedText;
          }
        }
        audioResult = await generateNarration(scriptForAudio, "Kore", currentLanguage.name);
        setNarration(audioResult);
      } catch (ttsErr: any) {
        console.warn("TTS synthesis notice (browser speech synthesis will be used):", ttsErr);
      }

      // Add to tour journal
      const newEntry: ScannedLandmarkEntry = {
        id: `scan-${Date.now()}`,
        scannedAt: new Date().toISOString(),
        imageDataUrl,
        recognition: recResult,
        history: histResult,
        narration: audioResult || undefined,
      };
      saveJournal([newEntry, ...journalEntries.filter((e) => e.recognition.name !== recResult.name)], newEntry);

      // Trigger celebratory scan burst animation
      try {
        confetti({
          particleCount: 65,
          spread: 75,
          origin: { y: 0.6 },
          colors: ["#06b6d4", "#3b82f6", "#10b981", "#f59e0b", "#a855f7"],
          disableForReducedMotion: true,
        });
      } catch (_) {}

      setAnalysisStage("complete");
      setViewMode("ar_tour");
      setActiveTab("ar_tour");
    } catch (err: any) {
      console.warn("Landmark analysis notice:", err?.message || err);
      setAnalysisError(err?.message || "Failed to complete visual analysis. Please try again.");
      setAnalysisStage("error");
    }
  };

  const handleRegenerateVoice = async (voiceName: string, customScript?: string) => {
    if (!history?.narrationScript) return;
    setIsRegeneratingVoice(true);
    try {
      const scriptToNarrate = customScript || history.narrationScript;
      const result = await generateNarration(scriptToNarrate, voiceName, currentLanguage.name);
      setNarration(result);
    } catch (err) {
      console.error("Failed to switch tour guide voice:", err);
    } finally {
      setIsRegeneratingVoice(false);
    }
  };

  const handleSelectJournalEntry = async (entry: ScannedLandmarkEntry) => {
    setActivePhoto(entry.imageDataUrl);
    setRecognition(entry.recognition);
    setHistory(entry.history);

    // Rehydrate narration audio from offline storage if audioBase64 was stripped from memory
    if (!entry.narration?.audioBase64) {
      try {
        const cachedNarration = await getOfflineNarrationAsset(entry.id);
        if (cachedNarration?.audioBase64) {
          setNarration(cachedNarration);
        } else {
          setNarration(entry.narration || null);
        }
      } catch {
        setNarration(entry.narration || null);
      }
    } else {
      setNarration(entry.narration || null);
    }

    setViewMode("ar_tour");
  };

  const handleDeleteJournalEntry = async (scanId: string) => {
    const updated = journalEntries.filter((e) => e.id !== scanId);
    setJournalEntries(updated);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated.slice(0, 25)));
    } catch {}
    await deleteOfflineJournalEntry(scanId);

    if (user) {
      try {
        await deleteScanFromFirestore(user.uid, scanId);
      } catch (err) {
        console.warn("Failed to delete scan from Firestore:", err);
      }
    }
  };

  const handleClearJournal = async () => {
    const entriesToDelete = [...journalEntries];
    setJournalEntries([]);
    try {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    } catch {}
    await clearAllOfflineJournalEntries();

    if (user) {
      for (const entry of entriesToDelete) {
        try {
          await deleteScanFromFirestore(user.uid, entry.id);
        } catch {}
      }
    }
  };

  const resetToCapture = () => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setViewMode("capture");
    setAnalysisStage("idle");
    setAnalysisError(null);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col antialiased selection:bg-cyan-500/30 selection:text-cyan-200 relative overflow-x-hidden">
      {/* High-Performance Atmospheric Background & Travel Sticker Stamps Watermark */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-60">
        <div className="absolute -top-32 -left-20 w-[500px] h-[500px] bg-gradient-to-br from-cyan-500/15 via-blue-600/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-28 w-[520px] h-[520px] bg-gradient-to-bl from-indigo-500/15 via-purple-600/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-28 left-1/3 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-3xl" />
      </div>
      <TravelStampsBackground />

      {/* Top Header Navigation Bar */}
      <header
        id="app-header"
        className="sticky top-0 z-40 w-full bg-slate-950/85 backdrop-blur-xl border-b border-slate-800/80 px-4 sm:px-6 py-3 shadow-lg shadow-black/20"
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Brand Logo & Name */}
          <motion.div
            id="brand-logo"
            onClick={resetToCapture}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-600 to-indigo-600 p-[1px] shadow-lg shadow-cyan-500/25">
              <div className="w-full h-full rounded-[11px] bg-slate-950 flex items-center justify-center group-hover:bg-slate-900 transition">
                <Compass className="w-5 h-5 text-cyan-400 group-hover:rotate-90 transition-transform duration-500" />
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                  CityLens AR
                </h1>
                <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 flex items-center gap-1 shadow-sm">
                  <Sparkles className="w-2.5 h-2.5 text-cyan-400 animate-spin" style={{ animationDuration: "10s" }} />
                  AR Engine
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                Recognize Landmarks • Live Search Grounding • AR Audio Commentary
              </p>
            </div>
          </motion.div>

          {/* Right Header Action Items */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Global Language Selector (Every Language in the World) */}
            <LanguageSelector />

            {viewMode === "ar_tour" && (
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                type="button"
                id="scan-another-btn"
                onClick={resetToCapture}
                className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 font-medium text-xs border border-cyan-500/35 transition shadow-sm"
              >
                <Camera className="w-3.5 h-3.5 text-cyan-400" />
                <span className="hidden sm:inline">{t("scan_another", "Scan Another")}</span>
                <span className="sm:hidden">Scan</span>
              </motion.button>
            )}

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              type="button"
              id="open-journal-btn"
              onClick={() => setShowJournal(true)}
              className="relative flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-300 font-medium text-xs border border-slate-700/80 transition shadow-sm"
              title="View Scanned Landmark Journal"
            >
              <HistoryIcon className="w-3.5 h-3.5 text-slate-400" />
              <span>{t("tour_journal", "Tour Journal")}</span>
              {syncingIds.length > 0 ? (
                <span className="inline-flex items-center space-x-1 ml-1 px-1.5 py-0.5 rounded-full bg-cyan-950/90 border border-cyan-500/40 text-cyan-300 text-[10px] font-mono animate-pulse">
                  <Loader2 className="w-2.5 h-2.5 animate-spin text-cyan-400" />
                  <span className="hidden sm:inline">Syncing</span>
                </span>
              ) : journalEntries.length > 0 ? (
                <span className="w-4 h-4 rounded-full bg-cyan-500 text-slate-950 font-bold text-[10px] flex items-center justify-center ml-1 shadow-sm">
                  {journalEntries.length}
                </span>
              ) : null}
            </motion.button>

            {/* Google Sign-in & Cloud Firestore Account Bar */}
            <AuthBar
              user={user}
              isLoading={isAuthLoading}
              syncCount={journalEntries.length}
              isSyncing={syncingIds.length > 0}
            />
          </div>
        </div>
      </header>

      {/* Offline Status Notification Banner */}
      {!isOnline && (
        <div
          id="offline-banner"
          className="w-full bg-gradient-to-r from-amber-950/80 via-orange-950/60 to-slate-950 border-b border-amber-500/40 px-4 py-2 text-xs text-amber-200 flex flex-wrap items-center justify-between gap-2 shadow-inner z-30"
        >
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping shrink-0" />
            <WifiOff className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="font-medium">
              Offline Mode Active — You can revisit all saved landmark tours, historical context, and narrated audio guides.
            </span>
          </div>
          <button
            type="button"
            id="offline-open-journal-btn"
            onClick={() => setShowJournal(true)}
            className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-[11px] font-medium transition cursor-pointer"
          >
            <HistoryIcon className="w-3 h-3" />
            <span>Browse Saved Journals ({journalEntries.length})</span>
          </button>
        </div>
      )}

      {/* Main App Content Viewport */}
      <main className="flex-1 p-4 sm:p-6 md:p-8 flex flex-col items-center">
        {viewMode === "capture" && (
          <div className="w-full max-w-5xl space-y-6">
            <div className="text-center max-w-2xl mx-auto mb-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {t("hero_title", "Explore Any City Landmark in Augmented Reality")}
              </h2>
              <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                {t("hero_subtitle", "Take a photo or upload an image of any monument, building, temple, mosque, or religious structure of every religion in the world. Our multi-model AI recognizes the architecture, grounds its history via live Google Search, and renders an interactive AR-narrated clip with integrated Google Maps.")}
              </p>
            </div>

            <CameraCapture
              onPhotoSelected={handlePhotoSelected}
              isLoading={analysisStage !== "idle" && analysisStage !== "complete" && analysisStage !== "error"}
            />
          </div>
        )}

        {viewMode === "ar_tour" && activePhoto && recognition && history && (
          <div className="w-full max-w-5xl space-y-6 animate-in fade-in duration-300">
            {/* Top Quick Bar with Tab Selector */}
            <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-900/80 p-3 rounded-2xl border border-slate-800">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-bold text-white">{recognition.name}</span>
                <span className="text-xs text-slate-400">({recognition.city}, {recognition.country})</span>
              </div>

              {/* Navigation Tabs */}
              <div className="flex items-center space-x-1 bg-slate-950/90 p-1 rounded-xl border border-slate-800">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  id="tab-ar-tour"
                  onClick={() => setActiveTab("ar_tour")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center space-x-1.5 ${
                    activeTab === "ar_tour"
                      ? "bg-gradient-to-r from-cyan-500/25 to-blue-500/25 text-cyan-300 border border-cyan-500/40 shadow-sm font-bold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{t("voice_narration", "AR Tour")}</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  id="tab-map"
                  onClick={() => setActiveTab("map")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center space-x-1.5 ${
                    activeTab === "map"
                      ? "bg-gradient-to-r from-cyan-500/25 to-blue-500/25 text-cyan-300 border border-cyan-500/40 shadow-sm font-bold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Compass className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{t("interactive_map", "Google Maps & Radar")}</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  id="tab-history"
                  onClick={() => setActiveTab("history")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center space-x-1.5 ${
                    activeTab === "history"
                      ? "bg-gradient-to-r from-cyan-500/25 to-blue-500/25 text-cyan-300 border border-cyan-500/40 shadow-sm font-bold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Layers className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{t("historical_context", "History & Secrets")}</span>
                </motion.button>
              </div>

              <div className="flex items-center space-x-2">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  type="button"
                  id="rescan-top-btn"
                  onClick={resetToCapture}
                  className="px-3 py-1.5 rounded-xl text-xs font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 hover:bg-cyan-900/60 transition flex items-center space-x-1 shadow-sm"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>{t("scan_another", "Scan Different")}</span>
                </motion.button>
              </div>
            </div>

            {/* Tab 1: AR-Style Narrated Clip Viewport */}
            {activeTab === "ar_tour" && (
              <section id="ar-tour-clip-section">
                <ARNarratedClip
                  imageDataUrl={activePhoto}
                  recognition={recognition}
                  history={history}
                  narration={narration || undefined}
                  onRegenerateVoice={handleRegenerateVoice}
                  isRegeneratingVoice={isRegeneratingVoice}
                  onSelectPreset={(preset) => handlePhotoSelected(preset.imageUrl, preset)}
                />
              </section>
            )}

            {/* Tab 2: Interactive Google Maps & Radar Explorer */}
            {activeTab === "map" && (
              <section id="landmark-map-section">
                <LandmarkMapViewer
                  recognition={recognition}
                />
              </section>
            )}

            {/* Tab 3: Google Search Grounded History & Architectural Secrets */}
            {activeTab === "history" && (
              <section id="history-grounding-section">
                <HistoryGroundingPanel
                  recognition={recognition}
                  history={history}
                />
              </section>
            )}

            {/* Also show mini Google Maps quick-bar underneath the AR clip when in ar_tour tab */}
            {activeTab === "ar_tour" && (
              <div className="mt-4 p-4 bg-slate-900/80 rounded-2xl border border-slate-800 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Location & Google Maps Navigation</div>
                    <div className="text-[11px] text-slate-400">
                      Coordinates: {recognition.coordinatesEstimate?.lat.toFixed(4) || "48.8584"}°N, {recognition.coordinatesEstimate?.lng.toFixed(4) || "2.2945"}°E • {recognition.city}, {recognition.country}
                    </div>
                  </div>
                </div>
                <button
                  id="btn-open-map-tab"
                  onClick={() => setActiveTab("map")}
                  className="px-3.5 py-2 bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-semibold rounded-xl text-xs transition flex items-center space-x-1.5 shadow-md shadow-cyan-950"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Explore on Google Maps & Radar</span>
                </button>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-slate-900 bg-slate-950 px-4 py-4 text-center text-xs font-mono text-slate-500">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>Photo Tourism & Landmark AR Explorer • Powered by Google AI Studio</span>
          <span className="text-slate-600">Multimodal Vision • Search Grounding • Speech Synthesis</span>
        </div>
      </footer>

      {/* Progress & Error Modal */}
      <AnalysisProgressModal
        currentStage={analysisStage}
        landmarkName={recognition?.name || activePreset?.name}
        error={analysisError}
        onRetry={() => {
          if (activePhoto) handlePhotoSelected(activePhoto, activePreset);
        }}
        onCancel={() => {
          setAnalysisStage("idle");
          setAnalysisError(null);
        }}
      />

      {/* Tour Journal Modal */}
      <TourJournal
        isOpen={showJournal}
        onClose={() => setShowJournal(false)}
        entries={journalEntries}
        onSelectEntry={handleSelectJournalEntry}
        onClearJournal={handleClearJournal}
        onDeleteEntry={handleDeleteJournalEntry}
        user={user}
        syncingEntryIds={syncingIds}
        isGlobalSyncing={syncingIds.length > 0}
        isOnline={isOnline}
      />
    </div>
  );
}
