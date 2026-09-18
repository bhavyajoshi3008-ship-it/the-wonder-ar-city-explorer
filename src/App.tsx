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
import { recognizeLandmark, fetchLandmarkHistory, generateNarration } from "./services/api";
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
  const [viewMode, setViewMode] = useState<AppViewMode>("capture");
  const [activeTab, setActiveTab] = useState<"ar_tour" | "map" | "history">("ar_tour");
  const [activePhoto, setActivePhoto] = useState<string | null>(null);
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

  // Load journal from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        setJournalEntries(JSON.parse(saved));
      }
    } catch (e) {
      console.warn("Failed to load journal from localStorage:", e);
    }
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
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(entries.slice(0, 25)));
    } catch (e) {
      console.warn("Failed to persist journal locally:", e);
    }

    // Persist to Cloud Firestore if signed in
    if (user && latestEntry) {
      setSyncingIds((prev) => (prev.includes(latestEntry.id) ? prev : [...prev, latestEntry.id]));
      try {
        await saveScanToFirestore(user.uid, latestEntry);
      } catch (err) {
        console.warn("Failed to persist scan to Firestore:", err);
      } finally {
        // Keep syncing state visible for a gentle period (600ms) to provide clear feedback
        setTimeout(() => {
          setSyncingIds((prev) => prev.filter((id) => id !== latestEntry.id));
        }, 600);
      }
    }
  };

  const handlePhotoSelected = async (imageDataUrl: string, samplePreset?: SampleLandmark) => {
    setActivePhoto(imageDataUrl);
    setAnalysisError(null);
    setAnalysisStage("recognizing");

    try {
      // Step 1: AI Recognizes the landmark using Gemini Vision
      const recResult = await recognizeLandmark(imageDataUrl, samplePreset?.name);

      // Check if image is an actual landmark vs human / animal / other subject
      if (recResult.isLandmark === false) {
        const categoryLabels: Record<string, string> = {
          person: "a person or portrait",
          animal: "an animal or pet",
          nature: "a natural landscape without a landmark",
          food: "food or beverage",
          object: "an everyday object",
          indoor: "an indoor interior",
          other: "a non-landmark subject",
        };
        const categoryDesc = categoryLabels[recResult.detectedCategory || "other"] || "a non-landmark subject";
        const reason = recResult.notLandmarkReason || `This photo looks like ${categoryDesc} rather than a recognized city landmark.`;
        throw new Error(`${reason} Please point your camera at a historic monument, civic building, cathedral, bridge, or famous landmark.`);
      }

      setRecognition(recResult);

      // Step 2: Fetches history via Google Search Grounding with Gemini 3.8 Flash
      setAnalysisStage("grounding");
      let histResult: LandmarkHistory;
      try {
        histResult = await fetchLandmarkHistory({
          landmarkName: recResult.name,
          city: recResult.city,
          country: recResult.country,
          architecturalStyle: recResult.architecturalStyle,
        });
      } catch (histErr) {
        console.warn("History fetch issue, generating fallback history for landmark:", histErr);
        histResult = {
          historicalTimeline: [
            {
              yearOrEra: recResult.periodEra || "Historic Era",
              event: "Monument Construction",
              description: `Conceived and built in the ${recResult.architecturalStyle} architectural style.`
            },
            {
              yearOrEra: "Modern Era",
              event: "World Heritage & Cultural Icon",
              description: `Recognized as a premier cultural wonder of ${recResult.city}, attracting visitors worldwide.`
            }
          ],
          architecturalSecrets: [
            `Distinguished by classic ${recResult.architecturalStyle} geometry and structural proportions.`,
            `Key highlighted features include: ${recResult.arKeypoints.map((k) => k.label).join(", ")}.`,
            `Architecturally engineered to dominate the urban skyline of ${recResult.city}.`
          ],
          culturalSignificance: recResult.summary || "A monumental landmark steeped in cultural and architectural identity.",
          visitorTips: [
            "Best visited early morning or at golden hour for striking architectural illumination.",
            "Tap on AR keypoint pins on the photo to examine intricate architectural facets.",
            "Use the Google Maps tab below for real-time walking directions and 360° Street View."
          ],
          narrationScript: `Welcome to ${recResult.name} in ${recResult.city}, ${recResult.country}. Standing before this iconic ${recResult.architecturalStyle} masterpiece, you can explore each distinctive architectural detail, from its signature facade to its soaring height. Let's delve into its history and spatial design!`,
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
              title: `${recResult.name} - Official Architectural Dossier`,
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
        audioResult = await generateNarration(histResult.narrationScript, "Kore");
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
      console.error("Landmark analysis workflow failed:", err);
      setAnalysisError(err?.message || "Failed to analyze landmark");
      setAnalysisStage("error");
    }
  };

  const handleRegenerateVoice = async (voiceName: string) => {
    if (!history?.narrationScript) return;
    setIsRegeneratingVoice(true);
    try {
      const result = await generateNarration(history.narrationScript, voiceName);
      setNarration(result);
    } catch (err) {
      console.error("Failed to switch tour guide voice:", err);
    } finally {
      setIsRegeneratingVoice(false);
    }
  };

  const handleSelectJournalEntry = (entry: ScannedLandmarkEntry) => {
    setActivePhoto(entry.imageDataUrl);
    setRecognition(entry.recognition);
    setHistory(entry.history);
    setNarration(entry.narration || null);
    setViewMode("ar_tour");
  };

  const handleDeleteJournalEntry = async (scanId: string) => {
    const updated = journalEntries.filter((e) => e.id !== scanId);
    setJournalEntries(updated);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated.slice(0, 25)));
    } catch {}

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
    saveJournal([]);
    if (user) {
      for (const entry of entriesToDelete) {
        try {
          await deleteScanFromFirestore(user.uid, entry.id);
        } catch {}
      }
    }
  };

  const resetToCapture = () => {
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

      {/* Main App Content Viewport */}
      <main className="flex-1 p-4 sm:p-6 md:p-8 flex flex-col items-center">
        {viewMode === "capture" && (
          <div className="w-full max-w-5xl space-y-6">
            <div className="text-center max-w-2xl mx-auto mb-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {t("hero_title", "Explore Any City Landmark in Augmented Reality")}
              </h2>
              <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                {t("hero_subtitle", "Take a photo or upload an image of any monument or building. Our multi-model AI recognizes the architecture, grounds its history via live Google Search, and renders an interactive AR-narrated clip with integrated Google Maps.")}
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
        landmarkName={recognition?.name}
        error={analysisError}
        onRetry={() => {
          if (activePhoto) handlePhotoSelected(activePhoto);
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
      />
    </div>
  );
}
