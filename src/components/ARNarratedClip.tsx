import React, { useState, useRef, useEffect } from "react";
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Maximize2,
  Eye,
  EyeOff,
  Layers,
  Sparkles,
  MapPin,
  Compass,
  Radio,
  Sliders,
  Share2,
  Check,
  ChevronRight,
  Info,
  Tag,
  Loader2,
  Landmark,
  Camera,
  AlertCircle,
  RefreshCw,
  SkipBack,
  SkipForward,
  Glasses,
  X,
  GraduationCap,
  History,
  ScrollText,
  Clock,
  Search,
  ExternalLink,
  Image as ImageIcon,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { LandmarkRecognition, LandmarkHistory, NarrationAudio, ARKeypoint, TourChapter } from "../types";
import { TRAVEL_STICKERS, TravelSticker } from "../data/travelStickers";
import { SAMPLE_LANDMARKS } from "../data/sampleLandmarks";
import { useLanguage } from "../context/LanguageContext";
import { useAccessibility } from "../context/AccessibilityContext";
import { translateText, generateNarration, translateUIBatch } from "../services/api";
import { ARScanOverlay } from "./ARScanOverlay";
import { Globe } from "lucide-react";
import { LandmarkSearchModal } from "./LandmarkSearchModal";

interface ARNarratedClipProps {
  imageDataUrl: string;
  recognition: LandmarkRecognition;
  history: LandmarkHistory;
  narration?: NarrationAudio;
  onRegenerateVoice?: (voiceName: string, customScript?: string) => Promise<void>;
  isRegeneratingVoice?: boolean;
  onSelectPreset?: (preset: any) => void;
  onSwitchLandmark?: (landmarkName: string) => Promise<void> | void;
}

export const ARNarratedClip: React.FC<ARNarratedClipProps> = ({
  imageDataUrl,
  recognition,
  history,
  narration,
  onRegenerateVoice,
  isRegeneratingVoice = false,
  onSelectPreset,
  onSwitchLandmark,
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const viewportContainerRef = useRef<HTMLDivElement | null>(null);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(narration?.durationEstimateSec || 30);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [playbackRate, setPlaybackRate] = useState<number>(1);
  const [selectedVoice, setSelectedVoice] = useState<string>(narration?.voiceName || "Kore");
  const [activeChapterIndex, setActiveChapterIndex] = useState<number>(0);
  const [audioPlaybackError, setAudioPlaybackError] = useState<boolean>(false);
  const [completedChapters, setCompletedChapters] = useState<Set<number>>(new Set());
  const [autoAdvance, setAutoAdvance] = useState<boolean>(true);
  const [showChangeLandmarkModal, setShowChangeLandmarkModal] = useState<boolean>(false);
  const [showPhotosModal, setShowPhotosModal] = useState<boolean>(false);
  const [selectedPhotoModalIndex, setSelectedPhotoModalIndex] = useState<number>(0);

  // Synchronized playback refs to prevent stale closures and concurrency races
  const isPlayingRef = useRef<boolean>(false);
  const activeChapterIndexRef = useRef<number>(0);
  const currentTimeRef = useRef<number>(0);
  const durationRef = useRef<number>(narration?.durationEstimateSec || 30);
  const playbackRateRef = useRef<number>(1);
  const isMutedRef = useRef<boolean>(false);
  const autoAdvanceRef = useRef<boolean>(true);
  const isPausedRef = useRef<boolean>(false);
  const speechSessionIdRef = useRef<number>(0);
  const speechErrorCountRef = useRef<number>(0);

  // Speech synthesis queue and playback refs
  const sentencesQueueRef = useRef<string[]>([]);
  const sentenceIndexRef = useRef<number>(0);
  const activeUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const speechTimerRef = useRef<NodeJS.Timeout | null>(null);
  const activePlaybackModeRef = useRef<"html5" | "speech" | "none">("none");

  // Pre-load speech synthesis voices on mount to eliminate voice-list latency or robotic default accents
  useEffect(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.getVoices();
      const onVoicesChanged = () => {
        window.speechSynthesis.getVoices();
      };
      window.speechSynthesis.addEventListener("voiceschanged", onVoicesChanged);
      return () => {
        window.speechSynthesis.removeEventListener("voiceschanged", onVoicesChanged);
      };
    }
  }, []);

  // Synchronize state values into refs
  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  useEffect(() => {
    activeChapterIndexRef.current = activeChapterIndex;
  }, [activeChapterIndex]);

  useEffect(() => {
    currentTimeRef.current = currentTime;
  }, [currentTime]);

  useEffect(() => {
    durationRef.current = duration;
  }, [duration]);

  useEffect(() => {
    playbackRateRef.current = playbackRate;
  }, [playbackRate]);

  useEffect(() => {
    isMutedRef.current = isMuted;
  }, [isMuted]);

  useEffect(() => {
    autoAdvanceRef.current = autoAdvance;
  }, [autoAdvance]);

  // AR visual HUD toggles
  const [showPins, setShowPins] = useState<boolean>(true);
  const [showScanline, setShowScanline] = useState<boolean>(false);
  const [showTelemetry, setShowTelemetry] = useState<boolean>(true);
  const [activePin, setActivePin] = useState<ARKeypoint | null>(null);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);
  const [activeSticker, setActiveSticker] = useState<TravelSticker | null>(() => TRAVEL_STICKERS[0]);
  const [showStickerPicker, setShowStickerPicker] = useState<boolean>(false);
  const [stickerGenerationFilter, setStickerGenerationFilter] = useState<string>("All");
  const [imageAspect, setImageAspect] = useState<number | null>(null);
  const translationCacheRef = useRef<Record<string, string>>({});

  // Close sticker picker on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && showStickerPicker) {
        setShowStickerPicker(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showStickerPicker]);

  // Clean, high-legibility short badge for mobile AR HUD telemetry
  const getMobileShortBadge = () => {
    if (!recognition.periodEra || recognition.periodEra === "N/A") {
      return recognition.city || recognition.country || "ACTIVE";
    }
    // Extract primary 3-4 digit year(s) from complex strings like "Fountain: 1782; Palace: 1919 (Neoclassical...)"
    const years = recognition.periodEra.match(/\b\d{3,4}(?:[–-]\d{2,4})?\b/g);
    if (years && years.length > 0) {
      const yearStr = years.slice(0, 2).join(" · ");
      return recognition.city ? `${recognition.city} · ${yearStr}` : yearStr;
    }
    // For classical or ancient dates like "70–80 AD"
    const classicalMatch = recognition.periodEra.match(/\b\d{1,3}(?:[–-]\d{1,3})?\s*(?:AD|BC|BCE|CE)\b/i);
    if (classicalMatch) {
      return recognition.city ? `${recognition.city} · ${classicalMatch[0]}` : classicalMatch[0];
    }
    // Fallback: short phrase before punctuation
    const shortEra = recognition.periodEra.split(/[;(,]/)[0].trim();
    const cleanEra = shortEra.length > 16 ? shortEra.slice(0, 14) + "…" : shortEra;
    return recognition.city ? `${recognition.city} · ${cleanEra}` : cleanEra;
  };

  // Multi-Language Tour Guide Support
  const { currentLanguage, t } = useLanguage();
  const { isSeniorMode, speechRate } = useAccessibility();
  const [translatedScript, setTranslatedScript] = useState<string>("");
  const [isTranslating, setIsTranslating] = useState<boolean>(false);

  // Synchronize senior mode playback rate
  useEffect(() => {
    if (isSeniorMode) {
      const targetRate = speechRate || 0.85;
      setPlaybackRate(targetRate);
      playbackRateRef.current = targetRate;
      if (audioRef.current) {
        audioRef.current.playbackRate = targetRate;
      }
    }
  }, [isSeniorMode, speechRate]);

  // Dynamic Photo Architecture & Chapters Translation
  const [translatedDynamic, setTranslatedDynamic] = useState<Record<string, string>>({});
  const dynamicCacheRef = useRef<Record<string, Record<string, string>>>({});

  // Active studio audio state for the current language & voice
  const [activeNarration, setActiveNarration] = useState<NarrationAudio | null>(narration || null);
  const [isGeneratingLanguageAudio, setIsGeneratingLanguageAudio] = useState<boolean>(false);
  const languageAudioMapRef = useRef<Record<string, NarrationAudio>>({});

  // Effect to translate dynamic photo intelligence, chapters, and landmark metadata into chosen language
  useEffect(() => {
    if (currentLanguage.code === "en") {
      setTranslatedDynamic({});
      return;
    }

    const cacheKey = `${currentLanguage.code}:${recognition.name || "landmark"}`;
    if (dynamicCacheRef.current[cacheKey]) {
      setTranslatedDynamic(dynamicCacheRef.current[cacheKey]);
      return;
    }

    const batchKeys: Record<string, string> = {};
    if (recognition.name) {
      batchKeys["landmarkName"] = recognition.name;
    }
    if (recognition.architecturalStyle) {
      batchKeys["architecturalStyle"] = recognition.architecturalStyle;
    }
    if (recognition.periodEra) {
      batchKeys["periodEra"] = recognition.periodEra;
    }
    if (recognition.summary) {
      batchKeys["summary"] = recognition.summary;
    }
    if (history.culturalSignificance) {
      batchKeys["culturalSignificance"] = history.culturalSignificance;
    }
    if (history.photoGroundedNotes) {
      batchKeys["photoGroundedNotes"] = history.photoGroundedNotes;
    }
    if (recognition.photoAnalysis?.perspectiveAndAngle) {
      batchKeys["perspectiveAndAngle"] = recognition.photoAnalysis.perspectiveAndAngle;
    }
    if (recognition.photoAnalysis?.lightingAndAtmosphere) {
      batchKeys["lightingAndAtmosphere"] = recognition.photoAnalysis.lightingAndAtmosphere;
    }
    if (recognition.photoAnalysis?.visibleMaterialsAndTextures) {
      batchKeys["visibleMaterialsAndTextures"] = recognition.photoAnalysis.visibleMaterialsAndTextures;
    }
    if (recognition.photoAnalysis?.structuralCondition) {
      batchKeys["structuralCondition"] = recognition.photoAnalysis.structuralCondition;
    }
    history.historicalTimeline?.forEach((item, idx) => {
      if (item.event) batchKeys[`timeline_${idx}_event`] = item.event;
      if (item.description) batchKeys[`timeline_${idx}_desc`] = item.description;
      if (item.yearOrEra) batchKeys[`timeline_${idx}_year`] = item.yearOrEra;
    });
    history.architecturalSecrets?.forEach((sec, idx) => {
      batchKeys[`secret_${idx}`] = sec;
    });
    history.visitorTips?.forEach((tip, idx) => {
      batchKeys[`tip_${idx}`] = tip;
    });
    history.chapters?.forEach((chap, idx) => {
      if (chap.title) {
        batchKeys[`chapter_${idx}_title`] = chap.title;
      }
      if (chap.script) {
        batchKeys[`chapter_${idx}_script`] = chap.script;
      }
    });
    if (history.narrationScript) {
      batchKeys["narrationScript"] = history.narrationScript;
    }
    recognition.photoAnalysis?.prominentVisualFeatures?.forEach((feat, idx) => {
      batchKeys[`feat_${idx}`] = feat;
    });
    recognition.arKeypoints?.forEach((kp) => {
      if (kp.label) {
        batchKeys[`kp_${kp.id}`] = kp.label;
      }
      if (kp.description) {
        batchKeys[`kp_desc_${kp.id}`] = kp.description;
      }
    });

    if (Object.keys(batchKeys).length === 0) return;

    let isMounted = true;
    translateUIBatch(batchKeys, currentLanguage.code, currentLanguage.name)
      .then((res) => {
        if (isMounted && res && Object.keys(res).length > 0) {
          dynamicCacheRef.current[cacheKey] = res;
          setTranslatedDynamic(res);
        }
      })
      .catch((err) => {
        console.warn("Dynamic data translation notice:", err);
      });

    return () => {
      isMounted = false;
    };
  }, [
    currentLanguage.code,
    currentLanguage.name,
    recognition.name,
    recognition.architecturalStyle,
    recognition.periodEra,
    recognition.summary,
    recognition.photoAnalysis,
    recognition.arKeypoints,
    history.photoGroundedNotes,
    history.culturalSignificance,
    history.historicalTimeline,
    history.architecturalSecrets,
    history.visitorTips,
    history.chapters,
    history.narrationScript,
  ]);

  // Synchronize incoming narration prop
  useEffect(() => {
    if (narration) {
      const voiceKey = narration.voiceName || selectedVoice;
      if (narration.audioBase64) {
        if (currentLanguage.code === "en") {
          languageAudioMapRef.current[`en_${voiceKey}`] = narration;
          languageAudioMapRef.current[`en_chap_0_${voiceKey}`] = narration;
          setActiveNarration(narration);
        }
      } else {
        setActiveNarration(narration);
      }
      if (narration.voiceName) {
        setSelectedVoice(narration.voiceName);
      }
    }
    setAudioPlaybackError(false);
  }, [narration, currentLanguage.code]);

  // Translate narration subtitles and speech whenever the selected language or chapter changes (with caching)
  useEffect(() => {
    const rawText = history.chapters?.[activeChapterIndex]?.script || history.narrationScript;
    if (!rawText) return;

    if (currentLanguage.code === "en") {
      setTranslatedScript(rawText);
      setIsTranslating(false);
      return;
    }

    const dynScript = translatedDynamic[`chapter_${activeChapterIndex}_script`];
    if (dynScript) {
      setTranslatedScript(dynScript);
      setIsTranslating(false);
      return;
    }

    const cacheKey = `${currentLanguage.code}:chap_${activeChapterIndex}:${rawText.slice(0, 50)}`;
    if (translationCacheRef.current[cacheKey]) {
      setTranslatedScript(translationCacheRef.current[cacheKey]);
      setIsTranslating(false);
      return;
    }

    let isMounted = true;
    setIsTranslating(true);
    translateText(rawText, currentLanguage.code, currentLanguage.name)
      .then((res) => {
        if (isMounted && res?.translatedText) {
          translationCacheRef.current[cacheKey] = res.translatedText;
          setTranslatedScript(res.translatedText);
        }
      })
      .catch(() => {
        if (isMounted) setTranslatedScript(rawText);
      })
      .finally(() => {
        if (isMounted) setIsTranslating(false);
      });

    return () => {
      isMounted = false;
    };
  }, [currentLanguage.code, currentLanguage.name, activeChapterIndex, history.chapters, history.narrationScript, translatedDynamic]);

  // Helper to reliably get the script of any chapter in current language
  const getActiveChapterScript = (index: number): string => {
    const raw = history.chapters?.[index]?.script || history.narrationScript || "";
    if (currentLanguage.code === "en") return raw;
    return (
      translatedDynamic[`chapter_${index}_script`] ||
      translationCacheRef.current[`${currentLanguage.code}:chap_${index}:${raw.slice(0, 50)}`] ||
      (index === activeChapterIndex && translatedScript ? translatedScript : raw)
    );
  };

  // Generate or retrieve Studio Audio for English chapter 0
  useEffect(() => {
    const rawChapterText = history.chapters?.[activeChapterIndex]?.script || history.narrationScript;
    if (!rawChapterText) return;

    const cacheKey = `${currentLanguage.code}_chap_${activeChapterIndex}_${selectedVoice}`;
    if (languageAudioMapRef.current[cacheKey]) {
      setActiveNarration(languageAudioMapRef.current[cacheKey]);
      return;
    }

    if (currentLanguage.code === "en" && activeChapterIndex === 0 && narration?.audioBase64) {
      setActiveNarration(narration);
      return;
    }

    // For non-English, wait until translatedScript is ready
    if (currentLanguage.code !== "en" && (!translatedScript || isTranslating)) {
      return;
    }

    let isMounted = true;
    setIsGeneratingLanguageAudio(true);

    const scriptToNarrate = currentLanguage.code === "en" ? rawChapterText : (translatedScript || rawChapterText);

    generateNarration(scriptToNarrate, selectedVoice, currentLanguage.name, currentLanguage.code)
      .then((res) => {
        if (!isMounted) return;
        if (res?.audioBase64) {
          languageAudioMapRef.current[cacheKey] = res;
          setActiveNarration(res);
          setAudioPlaybackError(false);
        } else {
          setActiveNarration(res);
        }
      })
      .catch((err) => {
        console.warn(`Audio generation notice for ${currentLanguage.name} ch ${activeChapterIndex}:`, err);
      })
      .finally(() => {
        if (isMounted) setIsGeneratingLanguageAudio(false);
      });

    return () => {
      isMounted = false;
    };
  }, [
    currentLanguage.code,
    currentLanguage.name,
    activeChapterIndex,
    translatedScript,
    isTranslating,
    selectedVoice,
    history.chapters,
    history.narrationScript,
    narration,
  ]);

  // Clean stop for all playback engines (HTML5 audio & Web Speech API)
  const stopAllPlayback = () => {
    activePlaybackModeRef.current = "none";
    isPausedRef.current = false;
    speechSessionIdRef.current += 1;
    if (speechTimerRef.current) {
      clearInterval(speechTimerRef.current);
      speechTimerRef.current = null;
    }
    sentencesQueueRef.current = [];
    sentenceIndexRef.current = 0;
    activeUtteranceRef.current = null;
    (window as any).__activeTourUtterance = null;

    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  // Stop playback when language changes to prevent narration collision
  useEffect(() => {
    stopAllPlayback();
    setIsPlaying(false);
    isPlayingRef.current = false;
    setCurrentTime(0);
    currentTimeRef.current = 0;
  }, [currentLanguage.code]);

  // Stop any active speech and audio on unmount
  useEffect(() => {
    return () => {
      stopAllPlayback();
    };
  }, []);

  // Naturally called when a chapter is 100% finished
  const onChapterNaturallyFinished = () => {
    if (!isPlayingRef.current) return;
    // Guard against instant false triggers while ensuring completed chapters finish
    if (currentTimeRef.current < 1 && durationRef.current > 3) return;

    if (speechTimerRef.current) {
      clearInterval(speechTimerRef.current);
      speechTimerRef.current = null;
    }

    const currentIdx = activeChapterIndexRef.current;
    const totalChapters = history.chapters?.length || 1;

    // Mark current chapter complete
    setCompletedChapters((prev) => {
      const updated = new Set(prev);
      updated.add(currentIdx);
      return updated;
    });

    if (autoAdvanceRef.current && currentIdx < totalChapters - 1) {
      const nextIdx = currentIdx + 1;
      // 400ms smooth audio transition pause between chapters
      setTimeout(() => {
        if (isPlayingRef.current) {
          playChapter(nextIdx);
        }
      }, 400);
    } else {
      // Completed entire tour or auto-advance off
      setIsPlaying(false);
      isPlayingRef.current = false;
      isPausedRef.current = false;
      setCurrentTime(durationRef.current);
      activePlaybackModeRef.current = "none";
    }
  };

  // Helper to start the progress timer for speech synthesis
  const startSpeechTimer = (initialElapsedSec = 0, totalDurationSec = 30) => {
    if (speechTimerRef.current) clearInterval(speechTimerRef.current);
    const startTimestamp = Date.now() - initialElapsedSec * 1000;
    speechTimerRef.current = setInterval(() => {
      if (!isPlayingRef.current || activePlaybackModeRef.current !== "speech") return;
      const elapsed = (Date.now() - startTimestamp) / 1000;
      if (elapsed >= totalDurationSec) {
        setCurrentTime(totalDurationSec);
        currentTimeRef.current = totalDurationSec;
      } else {
        setCurrentTime(elapsed);
        currentTimeRef.current = elapsed;
      }
    }, 200);
  };

  // Sequential sentence-by-sentence speaker for uninterrupted narration without jitter or overlapping voices
  const speakNextSentence = () => {
    if (!isPlayingRef.current || activePlaybackModeRef.current !== "speech") return;
    const sentences = sentencesQueueRef.current;
    const idx = sentenceIndexRef.current;

    if (idx >= sentences.length) {
      onChapterNaturallyFinished();
      return;
    }

    const sentenceText = sentences[idx];
    if (!sentenceText.trim()) {
      sentenceIndexRef.current = idx + 1;
      speakNextSentence();
      return;
    }

    const sessionId = speechSessionIdRef.current;
    const utterance = new SpeechSynthesisUtterance(sentenceText);
    utterance.rate = playbackRateRef.current;
    utterance.volume = isMutedRef.current ? 0 : 1;

    // BCP-47 regional pronunciation mapping for authentic spoken accents across world languages
    const langMap: Record<string, string> = {
      gu: "gu-IN", hi: "hi-IN", bn: "bn-IN", mr: "mr-IN", ta: "ta-IN", te: "te-IN",
      ur: "ur-PK", pa: "pa-IN", kn: "kn-IN", ml: "ml-IN", ne: "ne-NP",
      ar: "ar-SA", ja: "ja-JP", zh: "zh-CN", "zh-CN": "zh-CN", "zh-TW": "zh-TW", ko: "ko-KR",
      ru: "ru-RU", es: "es-ES", fr: "fr-FR", de: "de-DE", it: "it-IT", pt: "pt-PT", en: "en-US",
      id: "id-ID", th: "th-TH", vi: "vi-VN", tr: "tr-TR", nl: "nl-NL", pl: "pl-PL",
      uk: "uk-UA", el: "el-GR", he: "he-IL", sv: "sv-SE", no: "nb-NO", da: "da-DK",
      fi: "fi-FI", cs: "cs-CZ", hu: "hu-HU", ro: "ro-RO", fa: "fa-IR", ms: "ms-MY", sw: "sw-KE",
    };
    const bcp47 = langMap[currentLanguage.code] || currentLanguage.code;
    utterance.lang = bcp47;

    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      const voices = window.speechSynthesis.getVoices();
      if (voices.length > 0) {
        const isFemale = selectedVoice === "Kore" || selectedVoice === "Zephyr";
        const langVoices = voices.filter((v) => v.lang === bcp47 || v.lang.startsWith(currentLanguage.code));
        const genderMatch = isFemale
          ? langVoices.find((v) => /female|zira|samantha|victoria|karen|siri/i.test(v.name))
          : langVoices.find((v) => /male|david|alex|george|daniel|guy/i.test(v.name));

        const match = genderMatch || langVoices[0] || voices.find((v) => v.lang.startsWith(currentLanguage.code));
        if (match) utterance.voice = match;
      }
    }

    utterance.onend = () => {
      activeUtteranceRef.current = null;
      (window as any).__activeTourUtterance = null;
      if (speechSessionIdRef.current !== sessionId) return;

      sentenceIndexRef.current = idx + 1;
      setTimeout(() => {
        if (speechSessionIdRef.current === sessionId && isPlayingRef.current && activePlaybackModeRef.current === "speech") {
          speakNextSentence();
        }
      }, 70);
    };

    utterance.onerror = (e) => {
      activeUtteranceRef.current = null;
      (window as any).__activeTourUtterance = null;
      if (speechSessionIdRef.current !== sessionId) return;

      if (e.error !== "canceled" && e.error !== "interrupted") {
        speechErrorCountRef.current += 1;
        // If synthesis errors occur (e.g. browser voice engine blocked or unsupported voice):
        // Don't flash-skip all sentences in 70ms!
        // Instead, pace through sentences with natural reading duration so the teleprompter works smoothly
        const readingDelayMs = Math.min(5500, Math.max(2200, Math.round((sentenceText.length * 60) / playbackRateRef.current)));
        sentenceIndexRef.current = idx + 1;
        setTimeout(() => {
          if (speechSessionIdRef.current === sessionId && isPlayingRef.current && activePlaybackModeRef.current === "speech") {
            speakNextSentence();
          }
        }, readingDelayMs);
      }
    };

    activeUtteranceRef.current = utterance;
    (window as any).__activeTourUtterance = utterance;
    try {
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      }
      window.speechSynthesis.speak(utterance);
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      }
    } catch {
      // Graceful fallback to teleprompter timer
      const readingDelayMs = Math.min(5500, Math.max(2200, Math.round((sentenceText.length * 60) / playbackRateRef.current)));
      sentenceIndexRef.current = idx + 1;
      setTimeout(() => {
        if (speechSessionIdRef.current === sessionId && isPlayingRef.current && activePlaybackModeRef.current === "speech") {
          speakNextSentence();
        }
      }, readingDelayMs);
    }
  };

  const startSentenceSpeech = (fullText: string, totalEstimatedSec: number, resumeFromIdx = 0, resumeElapsedSec = 0) => {
    activePlaybackModeRef.current = "speech";
    speechSessionIdRef.current += 1;
    speechErrorCountRef.current = 0;

    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      try {
        window.speechSynthesis.cancel();
      } catch {}
    }

    // Natural sentence splitting preserving punctuation boundaries
    const rawSentences = fullText
      .replace(/([.?!;:\n])\s+/g, "$1|")
      .split("|")
      .map((s) => s.trim())
      .filter((s) => s.length > 0);

    const sentences = rawSentences.length > 0 ? rawSentences : [fullText];
    sentencesQueueRef.current = sentences;
    sentenceIndexRef.current = Math.min(resumeFromIdx, Math.max(0, sentences.length - 1));

    setIsPlaying(true);
    isPlayingRef.current = true;
    isPausedRef.current = false;

    startSpeechTimer(resumeElapsedSec, totalEstimatedSec);
    speakNextSentence();
  };

  // Play designated chapter reliably
  const playChapter = (chapIdx: number) => {
    stopAllPlayback();
    isPausedRef.current = false;
    setActiveChapterIndex(chapIdx);
    activeChapterIndexRef.current = chapIdx;
    setCurrentTime(0);
    currentTimeRef.current = 0;

    // Focus AR reticle on matching keypoint
    const focusId = history.chapters?.[chapIdx]?.focusPointId;
    if (focusId) {
      const matchPin = recognition.arKeypoints?.find((p) => p.id === focusId);
      if (matchPin) setActivePin(matchPin);
    }

    const scriptText = getActiveChapterScript(chapIdx);
    if (!scriptText) {
      setIsPlaying(false);
      isPlayingRef.current = false;
      return;
    }

    const words = scriptText.split(/\s+/).filter(Boolean).length;
    const estSec = Math.max(12, Math.round(words / (2.4 * playbackRateRef.current)));
    setDuration(estSec);
    durationRef.current = estSec;

    // Check if studio audio is available in cache specifically for this chapter and language
    const cacheKey = `${currentLanguage.code}_chap_${chapIdx}_${selectedVoice}`;
    const cachedChapterAudio = languageAudioMapRef.current[cacheKey];
    const isEnglish = currentLanguage.code === "en";
    const candidateAudio = cachedChapterAudio?.audioBase64
      ? cachedChapterAudio
      : (isEnglish && chapIdx === 0 && narration?.audioBase64 && !narration?.useClientFallback)
      ? narration
      : null;

    const canUseStudioAudio = Boolean(candidateAudio?.audioBase64) && !audioPlaybackError;

    if (canUseStudioAudio && audioRef.current) {
      activePlaybackModeRef.current = "html5";
      audioRef.current.src = candidateAudio!.audioBase64;
      audioRef.current.playbackRate = playbackRateRef.current;
      audioRef.current.muted = isMutedRef.current;
      audioRef.current.currentTime = 0;
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          isPlayingRef.current = true;
          setAudioPlaybackError(false);
        })
        .catch((err) => {
          console.warn("Studio audio play notice, smoothly continuing via browser speech:", err);
          setAudioPlaybackError(true);
          startSentenceSpeech(scriptText, estSec, 0, 0);
        });
    } else {
      startSentenceSpeech(scriptText, estSec, 0, 0);
    }
  };

  // HTML5 audio event handlers
  const handleAudioTimeUpdate = () => {
    if (activePlaybackModeRef.current !== "html5" || !audioRef.current) return;
    const curr = audioRef.current.currentTime;
    setCurrentTime(curr);
    currentTimeRef.current = curr;
    const dur = audioRef.current.duration;
    if (dur && !isNaN(dur) && isFinite(dur) && dur > 0) {
      setDuration(dur);
      durationRef.current = dur;
    }
  };

  const handleAudioEnded = () => {
    if (activePlaybackModeRef.current === "html5") {
      onChapterNaturallyFinished();
    }
  };

  // User playback controls with genuine Pause & Resume support
  const togglePlay = () => {
    if (isPlaying) {
      // Pause current playback
      isPausedRef.current = true;
      setIsPlaying(false);
      isPlayingRef.current = false;
      if (speechTimerRef.current) {
        clearInterval(speechTimerRef.current);
        speechTimerRef.current = null;
      }
      if (activePlaybackModeRef.current === "html5" && audioRef.current) {
        audioRef.current.pause();
      } else if (activePlaybackModeRef.current === "speech") {
        speechSessionIdRef.current += 1;
        if (typeof window !== "undefined" && "speechSynthesis" in window) {
          window.speechSynthesis.cancel();
        }
      }
    } else {
      // Resume if paused and within same chapter, otherwise play chapter fresh
      if (isPausedRef.current && currentTimeRef.current < durationRef.current - 0.5) {
        setIsPlaying(true);
        isPlayingRef.current = true;
        isPausedRef.current = false;
        if (activePlaybackModeRef.current === "html5" && audioRef.current) {
          audioRef.current.play().catch(() => {
            const scriptText = getActiveChapterScript(activeChapterIndexRef.current);
            startSentenceSpeech(scriptText, durationRef.current, sentenceIndexRef.current, currentTimeRef.current);
          });
        } else {
          const scriptText = getActiveChapterScript(activeChapterIndexRef.current);
          startSentenceSpeech(scriptText, durationRef.current, sentenceIndexRef.current, currentTimeRef.current);
        }
      } else {
        playChapter(activeChapterIndex);
      }
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = parseFloat(e.target.value);
    setCurrentTime(target);
    currentTimeRef.current = target;
    if (activePlaybackModeRef.current === "html5" && audioRef.current) {
      audioRef.current.currentTime = target;
    } else if (activePlaybackModeRef.current === "speech") {
      const dur = durationRef.current || 1;
      const fraction = Math.min(0.99, Math.max(0, target / dur));
      const sentences = sentencesQueueRef.current;
      if (sentences.length > 0) {
        const targetSentenceIdx = Math.min(
          sentences.length - 1,
          Math.floor(fraction * sentences.length)
        );
        sentenceIndexRef.current = targetSentenceIdx;
        speechSessionIdRef.current += 1;
        if (typeof window !== "undefined" && "speechSynthesis" in window) {
          window.speechSynthesis.cancel();
        }
        if (isPlayingRef.current) {
          startSpeechTimer(target, dur);
          speakNextSentence();
        }
      }
    }
  };

  const restartAudio = () => {
    isPausedRef.current = false;
    playChapter(activeChapterIndex);
  };

  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    isMutedRef.current = nextMuted;
    if (audioRef.current) {
      audioRef.current.muted = nextMuted;
    }
    if (activePlaybackModeRef.current === "speech" && typeof window !== "undefined" && "speechSynthesis" in window) {
      if (nextMuted) {
        window.speechSynthesis.cancel();
      } else if (isPlayingRef.current) {
        speakNextSentence();
      }
    }
  };

  const changePlaybackRate = (rate: number) => {
    setPlaybackRate(rate);
    playbackRateRef.current = rate;
    if (audioRef.current) {
      audioRef.current.playbackRate = rate;
    }
    if (activePlaybackModeRef.current === "speech" && isPlayingRef.current) {
      speechSessionIdRef.current += 1;
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
      speakNextSentence();
      const scriptText = getActiveChapterScript(activeChapterIndexRef.current);
      const words = scriptText.split(/\s+/).filter(Boolean).length;
      const newDuration = Math.max(12, Math.round(words / (2.4 * rate)));
      setDuration(newDuration);
      durationRef.current = newDuration;
      startSpeechTimer(currentTimeRef.current, newDuration);
    }
  };

  const selectChapter = (index: number) => {
    const wasPlaying = isPlayingRef.current;
    stopAllPlayback();
    setActiveChapterIndex(index);
    activeChapterIndexRef.current = index;
    setCurrentTime(0);
    currentTimeRef.current = 0;

    const focusId = history.chapters?.[index]?.focusPointId;
    if (focusId) {
      const matchPin = recognition.arKeypoints?.find((p) => p.id === focusId);
      if (matchPin) setActivePin(matchPin);
    }

    const scriptText = getActiveChapterScript(index);
    const words = scriptText.split(/\s+/).filter(Boolean).length;
    const estSec = Math.max(12, Math.round(words / (2.4 * playbackRateRef.current)));
    setDuration(estSec);
    durationRef.current = estSec;

    if (wasPlaying) {
      playChapter(index);
    } else {
      setIsPlaying(false);
      isPlayingRef.current = false;
    }
  };

  const goToPreviousChapter = () => {
    if (activeChapterIndex > 0) {
      selectChapter(activeChapterIndex - 1);
    }
  };

  const goToNextChapter = () => {
    const totalChapters = history.chapters?.length || 1;
    if (activeChapterIndex < totalChapters - 1) {
      selectChapter(activeChapterIndex + 1);
    }
  };

  const handleVoiceChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newVoice = e.target.value;
    setSelectedVoice(newVoice);
    setAudioPlaybackError(false);
    stopAllPlayback();
    setIsPlaying(false);
    isPlayingRef.current = false;
    const scriptToNarrate = getActiveChapterScript(activeChapterIndex);
    if (onRegenerateVoice) {
      await onRegenerateVoice(newVoice, scriptToNarrate);
    }
  };

  const toggleFullscreen = () => {
    if (!viewportContainerRef.current) return;
    if (!document.fullscreenElement) {
      viewportContainerRef.current.requestFullscreen?.().catch((err) => {
        console.warn("Fullscreen request error:", err);
      });
    } else {
      document.exitFullscreen?.();
    }
  };

  const handleCopyShare = () => {
    navigator.clipboard.writeText(
      `Exploring ${recognition.name} in ${recognition.city} with Photo Tourism & Landmark AR Explorer!`
    );
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${mins}:${s < 10 ? "0" : ""}${s}`;
  };

  const activeChapter: TourChapter | undefined = history.chapters?.[activeChapterIndex];

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6">
      {/* Hidden native audio element */}
      <audio
        ref={audioRef}
        onTimeUpdate={handleAudioTimeUpdate}
        onEnded={handleAudioEnded}
        onError={(e) => {
          console.warn("HTML5 audio playback error event:", e);
          setAudioPlaybackError(true);
        }}
        className="hidden"
      />

      {/* Special Subject Tour Notice for Portraits & Non-Landmarks */}
      {recognition.isLandmark === false && (
        <div
          id="subject-analysis-notice"
          className="px-4 py-3 rounded-2xl bg-gradient-to-r from-amber-950/70 via-slate-900/90 to-cyan-950/70 border border-amber-500/40 text-left shadow-lg backdrop-blur-md"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-start space-x-2.5">
              <div className="w-7 h-7 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300 shrink-0 mt-0.5">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-bold text-amber-300 uppercase tracking-wider font-mono">
                    {recognition.detectedCategory === "person" ? "Special Figure & Portrait Tour" : "Special Visual Subject Tour"}
                  </span>
                  <span className="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-200 text-[10px] font-mono">
                    {recognition.name}
                  </span>
                </div>
                <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                  {recognition.notLandmarkReason || `Custom AR visual keypoints and biographical narration synthesized for ${recognition.name}.`}
                </p>
              </div>
            </div>

            {/* Quick Landmark Switcher */}
            {onSelectPreset && (
              <div className="flex items-center gap-1.5 shrink-0 self-start sm:self-auto overflow-x-auto pt-1 sm:pt-0">
                <span className="text-[11px] text-slate-400 font-medium whitespace-nowrap">Tour Monuments:</span>
                {SAMPLE_LANDMARKS.slice(0, 3).map((landmark) => (
                  <button
                    key={landmark.id}
                    type="button"
                    onClick={() => onSelectPreset(landmark)}
                    className="px-2.5 py-1 rounded-lg bg-cyan-950/80 hover:bg-cyan-900/80 text-cyan-300 border border-cyan-500/30 text-[11px] font-medium transition flex items-center space-x-1 whitespace-nowrap"
                  >
                    <span>{landmark.name.split(" ")[0]}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Main AR Stage Viewport */}
      <div
        ref={viewportContainerRef}
        id="ar-viewport-stage"
        onClick={() => setActivePin(null)}
        style={imageAspect ? { aspectRatio: `${imageAspect}` } : { minHeight: "340px" }}
        className="relative w-full bg-slate-950 rounded-2xl border border-cyan-500/40 overflow-hidden shadow-2xl shadow-cyan-950/40 select-none max-h-[640px] flex items-center justify-center cursor-default"
      >
        {/* Landmark Photo Layer - Matches container aspect ratio with zero empty letterbox bands */}
        <img
          src={imageDataUrl}
          alt={recognition.name}
          onLoad={(e) => {
            const img = e.currentTarget;
            if (img.naturalWidth && img.naturalHeight) {
              const ratio = img.naturalWidth / img.naturalHeight;
              setImageAspect(Math.max(0.72, Math.min(ratio, 1.95)));
            }
          }}
          className="w-full h-full object-cover select-none pointer-events-none block"
        />

        {/* AR Optics Vignette and Holographic Shading */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/60 pointer-events-none" />

        {/* Animated AR Laser Scanline (only if user explicitly enables it) */}
        {showScanline && (
          <ARScanOverlay
            variant="active"
            label={t("ar_optic_tracking", "AR // MESH TRACKING")}
            showLabel={false}
          />
        )}

        {/* TOP AR TELEMETRY HUD */}
        {showTelemetry && (
          <div className="absolute top-2.5 inset-x-2.5 sm:top-4 sm:inset-x-4 flex items-start justify-between z-20 pointer-events-none">
            {/* Mobile Compact AR Status Pill - High legibility with always-vibrant beacon and clean short badge */}
            <div className="sm:hidden flex items-center space-x-1.5 max-w-[96%]">
              <div className="bg-slate-950/90 backdrop-blur-md border border-cyan-500/40 px-2.5 py-1 rounded-full text-left pointer-events-auto shadow-lg flex items-center space-x-1.5 min-w-0">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-80" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                </span>
                <span className="text-[10px] font-mono tracking-wider text-cyan-300 uppercase font-semibold shrink-0">
                  {recognition.isLandmark === false ? t("ar_tracking", "TRACKING") : t("ar_locked", "AR LOCKED")}
                </span>
                <span className="text-slate-600 text-xs shrink-0">•</span>
                <span className="text-[10px] font-mono text-cyan-400/90 truncate font-medium">
                  {getMobileShortBadge()}
                </span>
                <button
                  type="button"
                  onClick={() => setShowChangeLandmarkModal(true)}
                  className="ml-1 px-1.5 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/40 text-[9px] font-mono text-cyan-300 hover:bg-cyan-900 transition flex items-center space-x-1 cursor-pointer shrink-0"
                  title="Change monument"
                >
                  <RefreshCw className="w-2.5 h-2.5" />
                  <span>Fix</span>
                </button>
              </div>

              {activeSticker && (
                <button
                  type="button"
                  onClick={() => setShowStickerPicker(true)}
                  className="pointer-events-auto bg-slate-950/90 backdrop-blur-md border border-pink-500/50 px-2 py-1 rounded-full shadow-lg flex items-center space-x-1 shrink-0 hover:scale-105 active:scale-95 transition-transform cursor-pointer"
                  title="Change travel sticker stamp"
                >
                  <span className="text-xs">{activeSticker.emoji}</span>
                  <span className={`text-[9px] font-black uppercase tracking-wider ${activeSticker.textColor}`}>
                    {activeSticker.label.split(" ")[0]}
                  </span>
                </button>
              )}
            </div>

            {/* Desktop Full Landmark HUD Badge */}
            <div className="hidden sm:block bg-slate-950/85 backdrop-blur-md border border-cyan-500/30 px-3.5 py-2 rounded-xl text-left pointer-events-auto shadow-lg max-w-md">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center space-x-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-80" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
                  </span>
                  <span className="text-[10px] font-mono tracking-wider text-cyan-300 uppercase font-semibold">
                    {recognition.isLandmark === false ? t("ar_subject_tracking", "VISUAL SUBJECT TRACKING • LOCKED") : t("ar_optic_tracking", "AR OPTIC TRACKING • LOCKED")}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setShowChangeLandmarkModal(true)}
                  className="px-2 py-0.5 rounded-lg bg-cyan-950/80 border border-cyan-500/40 text-[10px] font-mono text-cyan-300 hover:text-white hover:bg-cyan-900 transition flex items-center space-x-1 cursor-pointer shrink-0"
                  title="Correct or change monument"
                >
                  <RefreshCw className="w-2.5 h-2.5" />
                  <span>Change Monument</span>
                </button>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-white tracking-tight mt-0.5 truncate" title={recognition.name}>
                {recognition.name}
              </h2>
              <div className="flex items-center space-x-2 text-xs text-slate-300 font-mono mt-0.5 truncate">
                <MapPin className="w-3 h-3 text-cyan-400 shrink-0" />
                <span className="truncate">
                  {recognition.city ? `${recognition.city}, ${recognition.country}` : (recognition.country || recognition.detectedCategory?.toUpperCase() || "VISUAL ANALYSIS")}
                </span>
                <span className="text-slate-600">•</span>
                <span className="text-cyan-400/90 shrink-0">{recognition.periodEra && recognition.periodEra !== "N/A" ? recognition.periodEra : "FEATURED"}</span>
              </div>

              {/* UNESCO / College Official Badges */}
              {(recognition.unescoInfo?.isWorldHeritage || recognition.collegeInfo?.isCollegeOrUniversity) && (
                <div className="flex items-center space-x-1.5 mt-1.5 pt-1.5 border-t border-slate-800">
                  {recognition.unescoInfo?.isWorldHeritage && (
                    <span className="inline-flex items-center space-x-1 px-1.5 py-0.5 rounded text-[10px] font-mono bg-cyan-950/80 text-cyan-300 border border-cyan-600/60 shadow-sm">
                      <Globe className="w-3 h-3 text-cyan-400 shrink-0" />
                      <span>UNESCO #{recognition.unescoInfo.unescoId || "HERITAGE"} {recognition.unescoInfo.inscriptionYear ? `(${recognition.unescoInfo.inscriptionYear})` : ""}</span>
                    </span>
                  )}
                  {recognition.collegeInfo?.isCollegeOrUniversity && (
                    <span className="inline-flex items-center space-x-1 px-1.5 py-0.5 rounded text-[10px] font-mono bg-amber-950/80 text-amber-300 border border-amber-600/60 shadow-sm">
                      <GraduationCap className="w-3 h-3 text-amber-400 shrink-0" />
                      <span>{recognition.collegeInfo.institutionName || "HISTORIC UNIVERSITY"} {recognition.collegeInfo.foundedYear ? `EST. ${recognition.collegeInfo.foundedYear}` : ""}</span>
                    </span>
                  )}
                </div>
              )}

              {/* Google Images & Visual Search Deep Links & Photo Gallery */}
              <div className="flex flex-wrap items-center gap-1.5 mt-2 pt-2 border-t border-slate-800">
                <a
                  href={recognition.googleImagesUrl || `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(recognition.name + " " + (recognition.city || ""))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 px-2 py-0.5 rounded text-[10px] font-mono bg-indigo-950/80 hover:bg-indigo-900 text-indigo-300 border border-indigo-500/60 shadow-sm transition cursor-pointer"
                  title={`Open Google Images for ${recognition.name}`}
                >
                  <Search className="w-2.5 h-2.5 text-indigo-400 shrink-0" />
                  <span>Google Images</span>
                  <ExternalLink className="w-2.5 h-2.5 text-indigo-400 shrink-0" />
                </a>

                <a
                  href={recognition.googleLensSearchUrl || "https://lens.google.com/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950/80 hover:bg-cyan-900 text-cyan-300 border border-cyan-500/60 shadow-sm transition cursor-pointer"
                  title="Reverse visual search on Google Lens"
                >
                  <Camera className="w-2.5 h-2.5 text-cyan-400 shrink-0" />
                  <span>Google Lens</span>
                  <ExternalLink className="w-2.5 h-2.5 text-cyan-400 shrink-0" />
                </a>

                {(recognition.referencePhotos?.length || 0) > 0 && (
                  <button
                    type="button"
                    onClick={() => setShowPhotosModal(true)}
                    className="inline-flex items-center space-x-1 px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-950/80 hover:bg-emerald-900 text-emerald-300 border border-emerald-500/60 shadow-sm transition cursor-pointer"
                    title="View verified reference photos found on Google & Wikimedia"
                  >
                    <ImageIcon className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
                    <span>{recognition.referencePhotos?.length} Google Photos</span>
                  </button>
                )}
              </div>

              {/* Quick-Switch Suggested Candidates */}
              {recognition.candidateMatches && recognition.candidateMatches.length > 1 && (
                <div className="flex flex-wrap items-center gap-1.5 mt-2 pt-2 border-t border-slate-800">
                  <span className="text-[10px] text-slate-400 font-mono">Suggested:</span>
                  {recognition.candidateMatches.slice(0, 4).map((cand: any, cIdx: number) => {
                    const candStr = typeof cand === "string" ? cand : (cand?.name || String(cand));
                    const isCurrent = candStr.toLowerCase().trim() === (recognition.name || "").toLowerCase().trim();
                    return (
                      <button
                        key={candStr || cIdx}
                        type="button"
                        onClick={() => {
                          if (!isCurrent && onSwitchLandmark) onSwitchLandmark(candStr);
                        }}
                        disabled={isCurrent}
                        className={`px-2 py-0.5 rounded text-[10px] font-mono transition cursor-pointer ${
                          isCurrent
                            ? "bg-cyan-500/25 text-cyan-300 border border-cyan-500/50 font-bold"
                            : "bg-slate-900/90 hover:bg-slate-800 text-slate-300 border border-slate-700 hover:text-white"
                        }`}
                        title={`Switch tour to ${candStr}`}
                      >
                        {candStr.split(",")[0]}
                      </button>
                    );
                  })}
                  <button
                    type="button"
                    onClick={() => setShowChangeLandmarkModal(true)}
                    className="text-[10px] text-cyan-400 hover:text-cyan-300 hover:underline font-mono"
                  >
                    All...
                  </button>
                </div>
              )}
            </div>

            {/* Top Right: Telemetry Diagnostics & Travel Sticker Stamp */}
            <div className="hidden sm:flex flex-col items-end space-y-1.5">
              <div className="flex flex-col items-end space-y-1 bg-slate-950/80 backdrop-blur-md border border-slate-700/60 px-3 py-1.5 rounded-xl font-mono text-[11px] text-slate-300 shadow-lg">
                <div className="flex items-center space-x-2 text-cyan-400">
                  <Compass className="w-3.5 h-3.5" />
                  <span>{t("ar_bearing", "BEARING 042° NNE")}</span>
                  <span className="text-slate-600">|</span>
                  <span>{t("ar_alt", "ALT 84M")}</span>
                </div>
                <div className="text-[10px] text-slate-400">
                  {t("ar_confidence", "CONFIDENCE:")} <span className="text-emerald-400 font-semibold">{recognition.confidence}%</span> |{" "}
                  <span className="text-cyan-300">
                    {recognition.isLandmark === false
                      ? (recognition.detectedCategory?.toUpperCase() || "SUBJECT")
                      : recognition.architecturalStyle}
                  </span>
                </div>
              </div>

              {/* Active Travel Sticker Stamp overlay on the clip */}
              {activeSticker && (
                <motion.div
                  key={activeSticker.id}
                  initial={{ scale: 0.8, rotate: -10, opacity: 0 }}
                  animate={{ scale: 1, rotate: 0, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  onClick={() => setShowStickerPicker(true)}
                  className={`pointer-events-auto cursor-pointer px-3 py-1.5 rounded-xl border bg-gradient-to-b ${activeSticker.bgGradient} ${activeSticker.borderColor} shadow-xl backdrop-blur-md flex items-center space-x-2 hover:scale-105 transition-transform`}
                  title="Click to change travel sticker vibe"
                >
                  <span className="text-lg">{activeSticker.emoji}</span>
                  <div className="text-left leading-none">
                    <span className={`text-[10px] font-black uppercase tracking-wider block ${activeSticker.textColor}`}>
                      {activeSticker.label}
                    </span>
                    <span className="text-[9px] font-mono text-slate-300/80 block">
                      {activeSticker.generation} Sticker
                    </span>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        )}

        {/* Needs Identification Banner */}
        {recognition.needsUserIdentification && (
          <div className="absolute top-16 sm:top-20 inset-x-3 sm:inset-x-8 z-40 pointer-events-auto">
            <div className="bg-amber-950/95 backdrop-blur-md border-2 border-amber-400/80 p-3 sm:p-4 rounded-2xl shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-3 text-white">
              <div className="flex items-center space-x-3 text-left">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/50 flex items-center justify-center text-amber-400 shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-amber-200">
                    Which monument does your photo depict?
                  </h4>
                  <p className="text-xs text-amber-100/80">
                    Tap to select the landmark for 100% authentic UNESCO history, architectural secrets & spoken tour.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowChangeLandmarkModal(true)}
                className="w-full sm:w-auto px-4 py-2 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 text-slate-950 font-bold text-xs sm:text-sm rounded-xl shadow-lg transition cursor-pointer shrink-0"
              >
                Select Monument
              </button>
            </div>
          </div>
        )}

        {/* SPATIAL AR TARGET RETICLE PINS */}
        {showPins &&
          (recognition.arKeypoints || []).map((pin) => {
            const isSelected = activePin?.id === pin.id;
            const hasOtherSelected = activePin !== null && !isSelected;
            const safeX = Math.min(Math.max(pin.x, 8), 92);
            const safeY = Math.min(Math.max(pin.y, 8), 92);

            return (
              <div
                key={pin.id}
                id={`ar-pin-${pin.id}`}
                style={{ left: `${safeX}%`, top: `${safeY}%` }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto transition-opacity duration-200 ${
                  isSelected ? "z-30" : hasOtherSelected ? "z-20 opacity-40 hover:opacity-100" : "z-20 opacity-100"
                }`}
              >
                {/* Pulsing Target Reticle - Scoped to group/pin so hovering doesn't open all other labels */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActivePin(isSelected ? null : pin);
                  }}
                  className="group/pin relative flex items-center justify-center p-1 focus:outline-none cursor-pointer"
                  title={`${pin.label}: Click to inspect in AR`}
                >
                  {/* Outer Pulsing Rings */}
                  <span
                    className={`absolute w-7 h-7 rounded-full border transition-all duration-300 ${
                      isSelected
                        ? "border-cyan-400 bg-cyan-400/20 scale-125 animate-ping"
                        : "border-cyan-400/50 group-hover/pin:border-cyan-300 group-hover/pin:scale-110"
                    }`}
                    style={{ animationDuration: "2.5s" }}
                  />

                  {/* Pin Dot Center */}
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shadow-lg transition-all duration-200 ${
                      isSelected
                        ? "bg-cyan-400 border-white text-slate-950 scale-110 shadow-cyan-400"
                        : "bg-slate-950/90 border-cyan-400 text-cyan-300 group-hover/pin:bg-cyan-400 group-hover/pin:text-slate-950"
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                  </div>

                  {/* Desktop-only individual hover label (Never clutters mobile screen, hidden when selected) */}
                  <div
                    className={`hidden sm:block absolute top-full left-1/2 -translate-x-1/2 mt-1.5 px-2 py-0.5 rounded text-[10px] font-mono whitespace-nowrap backdrop-blur-md border shadow-lg transition-all duration-150 pointer-events-none z-30 ${
                      isSelected
                        ? "hidden"
                        : "bg-slate-950/90 text-cyan-200 border-cyan-500/40 opacity-0 group-hover/pin:opacity-100"
                    }`}
                  >
                    {pin.label}
                  </div>
                </button>
              </div>
            );
          })}

        {/* DEDICATED AR FEATURE INSPECTION CARD (Rendered above all pins at z-40 to prevent reticle poke-through) */}
        <AnimatePresence>
          {showPins && activePin && (
            <>
              {/* Mobile View: Docked neatly above bottom controls without covering them or overlapping pins */}
              <motion.div
                key={`mobile-popup-${activePin.id}`}
                initial={{ opacity: 0, y: 15, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.96 }}
                transition={{ duration: 0.18 }}
                id={`ar-popup-mobile-${activePin.id}`}
                className="sm:hidden absolute bottom-14 inset-x-2.5 z-40 bg-slate-950/95 backdrop-blur-xl border border-cyan-400/80 rounded-2xl p-3 shadow-2xl text-left pointer-events-auto shadow-cyan-950/60"
              >
                <div className="flex items-center justify-between border-b border-cyan-500/30 pb-1.5 mb-1.5">
                  <div className="flex items-center space-x-1.5">
                    <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse shrink-0" />
                    <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-300 font-semibold">
                      {t("ar_feature_inspection", "FEATURE INSPECTION")}
                    </span>
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                      {activePin.featureType}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActivePin(null);
                    }}
                    className="w-6 h-6 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition cursor-pointer"
                    title={t("close_inspection", "Close Inspection")}
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="text-sm font-bold text-white tracking-tight" dir={currentLanguage.dir || "ltr"}>
                  {translatedDynamic[`kp_${activePin.id}`] || activePin.label}
                </div>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed line-clamp-3" dir={currentLanguage.dir || "ltr"}>
                  {translatedDynamic[`kp_desc_${activePin.id}`] || activePin.description}
                </p>
                <div className="mt-2 flex items-center justify-between pt-1 border-t border-slate-800/80 text-[10px] font-mono text-slate-400">
                  <span className="text-cyan-400/80">{t("ar_target_coord", "TARGET COORD:")} {activePin.x}%, {activePin.y}%</span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActivePin(null);
                    }}
                    className="text-cyan-400 hover:text-cyan-300 font-semibold cursor-pointer underline"
                  >
                    {t("dismiss", "Dismiss")}
                  </button>
                </div>
              </motion.div>

              {/* Desktop View: Anchored near the pin with smart vertical & horizontal clamping */}
              <motion.div
                key={`desktop-popup-${activePin.id}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                id={`ar-popup-${activePin.id}`}
                style={{
                  left: `${Math.min(Math.max(activePin.x, 20), 80)}%`,
                  top: activePin.y > 60 ? `${Math.max(activePin.y - 4, 18)}%` : `${Math.min(activePin.y + 4, 65)}%`,
                }}
                className={`hidden sm:block absolute ${
                  activePin.y > 60 ? "-translate-y-full" : "translate-y-2"
                } -translate-x-1/2 w-72 bg-slate-950/95 backdrop-blur-xl border border-cyan-400/80 rounded-xl p-3.5 shadow-2xl text-left z-40 pointer-events-auto`}
              >
                <div className="flex items-center justify-between border-b border-cyan-500/30 pb-1.5 mb-2">
                  <div className="flex items-center space-x-1.5">
                    <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                    <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-300 font-semibold">
                      {t("ar_feature_inspection", "FEATURE INSPECTION")}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                      {activePin.featureType}
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActivePin(null);
                      }}
                      className="w-5 h-5 rounded hover:bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition cursor-pointer"
                      title={t("close_inspection", "Close Inspection")}
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
                <div className="text-sm font-bold text-white" dir={currentLanguage.dir || "ltr"}>
                  {translatedDynamic[`kp_${activePin.id}`] || activePin.label}
                </div>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed" dir={currentLanguage.dir || "ltr"}>
                  {translatedDynamic[`kp_desc_${activePin.id}`] || activePin.description}
                </p>
                <div className="mt-2.5 flex items-center justify-between pt-1 text-[10px] font-mono text-slate-400 border-t border-slate-800/80">
                  <span>{t("coord_label", "COORD")} ({activePin.x}%, {activePin.y}%)</span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActivePin(null);
                    }}
                    className="text-cyan-400 hover:text-cyan-300 font-semibold cursor-pointer underline"
                  >
                    [{t("dismiss", "Dismiss")}]
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* BOTTOM HUD CONTROLS OVERLAY */}
        <div className="absolute bottom-3 inset-x-3 sm:bottom-4 sm:inset-x-4 z-20 flex items-center justify-between pointer-events-auto">
          {/* Quick AR HUD Toggles */}
          <div className="flex items-center space-x-1 bg-slate-950/80 backdrop-blur-md px-2 py-1 rounded-xl border border-slate-800">
            <button
              type="button"
              id="toggle-ar-pins-btn"
              onClick={() => setShowPins(!showPins)}
              className={`p-1.5 rounded-lg text-xs font-mono flex items-center space-x-1 transition ${
                showPins ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40" : "text-slate-400 hover:text-white"
              }`}
              title={t("toggle_pins_title", "Toggle AR Spatial Pins")}
            >
              <Layers className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{t("pins_label", "Pins")}</span>
            </button>

            <button
              type="button"
              id="toggle-ar-scanline-btn"
              onClick={() => setShowScanline(!showScanline)}
              className={`p-1.5 rounded-lg text-xs font-mono flex items-center space-x-1 transition ${
                showScanline ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40" : "text-slate-400 hover:text-white"
              }`}
              title={t("toggle_scanline_title", "Toggle Laser Scanline")}
            >
              <Radio className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{t("scan_label", "Scan")}</span>
            </button>

            <button
              type="button"
              id="toggle-ar-telemetry-btn"
              onClick={() => setShowTelemetry(!showTelemetry)}
              className={`p-1.5 rounded-lg text-xs font-mono flex items-center space-x-1 transition ${
                showTelemetry ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40" : "text-slate-400 hover:text-white"
              }`}
              title={t("toggle_hud_title", "Toggle Telemetry HUD")}
            >
              {showTelemetry ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{t("hud_label", "HUD")}</span>
            </button>

            <button
              type="button"
              id="toggle-ar-stickers-btn"
              onClick={() => setShowStickerPicker(true)}
              className={`p-1.5 rounded-lg text-xs font-mono flex items-center space-x-1 transition cursor-pointer ${
                showStickerPicker || activeSticker
                  ? "bg-pink-500/25 text-pink-300 border border-pink-500/50"
                  : "text-slate-400 hover:text-pink-300"
              }`}
              title={t("pick_sticker_title", "Pick Travel Sticker Stamp")}
            >
              <Tag className="w-3.5 h-3.5 text-pink-400" />
              <span className="hidden sm:inline">{t("stickers_label", "Stickers")}</span>
            </button>
          </div>

          {/* Right Tools */}
          <div className="flex items-center space-x-1 bg-slate-950/80 backdrop-blur-md px-2 py-1 rounded-xl border border-slate-800">
            <button
              type="button"
              id="ar-share-btn"
              onClick={handleCopyShare}
              className="p-1.5 rounded-lg text-xs font-mono text-slate-300 hover:text-white transition flex items-center space-x-1"
              title={t("share_tour_title", "Share Landmark Tour")}
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copiedLink ? t("copied", "Copied") : t("share_tour", "Share")}</span>
            </button>

            <button
              type="button"
              id="ar-fullscreen-btn"
              onClick={toggleFullscreen}
              className="p-1.5 rounded-lg text-xs font-mono text-slate-300 hover:text-white transition"
              title="Toggle Fullscreen AR View"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* AR NARRATION AUDIO PLAYER & TELEPROMPTER DECK */}
      <div
        id="ar-narration-player-deck"
        className="bg-slate-900/90 rounded-2xl border border-slate-800 p-4 sm:p-5 shadow-xl space-y-4"
      >
        {/* Top Header: Voice synthesis status & Live wave */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 border-b border-slate-800 pb-3">
          <div className="flex items-center space-x-3 min-w-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center shadow-inner shrink-0">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <span className="text-xs sm:text-sm font-bold text-slate-100">
                  {t("voice_narration", "AR Audio Narration")}
                </span>
                {isRegeneratingVoice || isGeneratingLanguageAudio ? (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-500/30 flex items-center space-x-1 shrink-0">
                    <Loader2 className="w-2.5 h-2.5 animate-spin text-cyan-400" />
                    <span>Synthesizing ({currentLanguage.name})...</span>
                  </span>
                ) : (!audioPlaybackError && activeNarration?.audioBase64 && !activeNarration?.useClientFallback) ? (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-500/30 flex items-center space-x-1 shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Gemini 3.1 TTS ({currentLanguage.name})</span>
                  </span>
                ) : (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-950/80 text-amber-300 border border-amber-500/30 flex items-center space-x-1 shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>Speech Engine ({currentLanguage.name})</span>
                  </span>
                )}
              </div>
              <div className="text-[11px] sm:text-xs text-slate-400 flex flex-wrap items-center gap-1.5 sm:gap-2 mt-0.5">
                {isRegeneratingVoice || isGeneratingLanguageAudio ? (
                  <span>Generating {currentLanguage.name} narration...</span>
                ) : (!audioPlaybackError && activeNarration?.audioBase64 && !activeNarration?.useClientFallback) ? (
                  <span>Voice: <strong className="text-cyan-300 font-medium">{selectedVoice}</strong> (Studio 24kHz)</span>
                ) : (
                  <div className="flex items-center space-x-2">
                    <span>Natural Spoken Audio</span>
                    {onRegenerateVoice && (
                      <button
                        type="button"
                        id="retry-studio-audio-btn"
                        onClick={() => handleVoiceChange({ target: { value: selectedVoice } } as any)}
                        className="text-[11px] text-cyan-400 hover:text-cyan-300 underline font-mono flex items-center space-x-1 cursor-pointer"
                      >
                        <RefreshCw className="w-2.5 h-2.5" />
                        <span>Retry AI Audio</span>
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Audio Controls & Equalizer row */}
          <div className="flex items-center justify-between sm:justify-end gap-2 w-full sm:w-auto shrink-0 pt-1 sm:pt-0">
            {/* Animated Audio Equalizer Wave */}
            <div className="flex items-center space-x-1 h-7 px-2.5 py-1 rounded-lg bg-slate-950/80 border border-slate-800">
              {[0.4, 0.7, 0.3, 0.9, 0.5, 0.8, 0.45, 0.95, 0.6, 0.35].map((_, idx) => (
                <div
                  key={idx}
                  className={`w-1 rounded-full bg-cyan-400 ${
                    isPlaying ? "animate-soundwave" : "opacity-30 h-1"
                  }`}
                  style={{
                    animationDelay: `${idx * 0.12}s`,
                  }}
                />
              ))}
            </div>

            {/* Voice Selector Dropdown */}
            <div className="flex items-center space-x-1.5 text-xs">
              <Sliders className="w-3.5 h-3.5 text-slate-400" />
              <select
                id="voice-selector"
                value={selectedVoice}
                onChange={handleVoiceChange}
                disabled={isRegeneratingVoice}
                className="bg-slate-950 border border-slate-700 text-slate-200 rounded-lg px-2 py-1 text-xs focus:ring-1 focus:ring-cyan-500 outline-none cursor-pointer max-w-[135px] sm:max-w-none truncate"
              >
                <option value="Kore">Kore (Warm)</option>
                <option value="Fenrir">Fenrir (Deep)</option>
                <option value="Puck">Puck (Energetic)</option>
                <option value="Charon">Charon (Calm)</option>
                <option value="Aoede">Aoede (Serene)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Audio Scrubber & Controls */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400 px-0.5">
            <span className="shrink-0">{formatTime(currentTime)}</span>
            <span className="text-[11px] text-cyan-400/90 truncate max-w-[180px] sm:max-w-xs text-center px-1">
              {activeChapter ? `${activeChapter.title}` : "Interactive Landmark Tour"}
            </span>
            <span className="shrink-0">{formatTime(duration)}</span>
          </div>

          {/* Scrubber bar */}
          <input
            id="narration-scrubber"
            type="range"
            min={0}
            max={duration || 1}
            step={0.1}
            value={currentTime}
            onChange={handleSeek}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
          />

          {/* Playback Button Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-1">
            <div className="flex items-center justify-center sm:justify-start space-x-1.5 sm:space-x-2">
              {/* Previous Chapter */}
              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.94 }}
                type="button"
                id="narration-prev-chapter-btn"
                onClick={goToPreviousChapter}
                disabled={activeChapterIndex === 0}
                className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center transition cursor-pointer ${
                  activeChapterIndex === 0
                    ? "text-slate-600 cursor-not-allowed opacity-40"
                    : "text-slate-300 hover:text-cyan-300 hover:bg-slate-800"
                }`}
                title="Previous Chapter"
              >
                <SkipBack className="w-4 h-4" />
              </motion.button>

              {/* Play / Pause */}
              <div className="relative">
                {isPlaying && (
                  <div className="absolute -inset-1 rounded-2xl bg-cyan-400/30 animate-pulse pointer-events-none" />
                )}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  id="narration-play-pause-btn"
                  onClick={togglePlay}
                  className="relative px-4 h-11 sm:h-12 rounded-2xl bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 text-slate-950 flex items-center justify-center gap-1.5 shadow-lg shadow-cyan-500/30 transition cursor-pointer font-bold text-xs sm:text-sm"
                  title={isPlaying ? "Pause Tour" : "Play Spoken AR Tour"}
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-5 h-5 fill-current" />
                      <span className="hidden sm:inline">Pause</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                      <span>{t("play_audio_btn", "Play AR Tour")}</span>
                    </>
                  )}
                </motion.button>
              </div>

              {/* Next Chapter */}
              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.94 }}
                type="button"
                id="narration-next-chapter-btn"
                onClick={goToNextChapter}
                disabled={activeChapterIndex >= (history.chapters?.length || 1) - 1}
                className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center transition cursor-pointer ${
                  activeChapterIndex >= (history.chapters?.length || 1) - 1
                    ? "text-slate-600 cursor-not-allowed opacity-40"
                    : "text-slate-300 hover:text-cyan-300 hover:bg-slate-800"
                }`}
                title="Next Chapter"
              >
                <SkipForward className="w-4 h-4" />
              </motion.button>

              {/* Restart */}
              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.94 }}
                type="button"
                id="narration-restart-btn"
                onClick={restartAudio}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 transition flex items-center justify-center cursor-pointer"
                title="Restart Audio"
              >
                <RotateCcw className="w-4 h-4" />
              </motion.button>

              {/* Mute */}
              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.94 }}
                type="button"
                id="narration-mute-btn"
                onClick={toggleMute}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 transition flex items-center justify-center cursor-pointer"
                title={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4" />}
              </motion.button>
            </div>

            {/* Auto-Advance & Playback Speed Controls - Guaranteed zero clipping on all mobile devices */}
            <div className="flex flex-wrap items-center justify-between sm:justify-end gap-1.5 sm:gap-2 border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-800/80 w-full sm:w-auto">
              {/* Auto-Advance Toggle */}
              <button
                type="button"
                id="narration-auto-advance-toggle"
                onClick={() => setAutoAdvance(!autoAdvance)}
                className={`h-8 sm:h-9 px-2 sm:px-2.5 rounded-lg text-[11px] sm:text-xs font-mono border transition flex items-center space-x-1.5 cursor-pointer shrink-0 ${
                  autoAdvance
                    ? "bg-cyan-500/15 border-cyan-500/40 text-cyan-300"
                    : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"
                }`}
                title="Auto-advance to next chapter upon completion"
              >
                <span className={`w-1.5 h-1.5 rounded-full ${autoAdvance ? "bg-cyan-400 animate-pulse" : "bg-slate-600"}`} />
                <span>Auto: {autoAdvance ? "ON" : "OFF"}</span>
              </button>

              {/* Playback speed buttons */}
              <div className="flex items-center gap-1 sm:space-x-1 text-xs font-mono shrink-0">
                {[0.85, 1, 1.25, 1.5].map((rate) => (
                  <button
                    key={rate}
                    type="button"
                    id={`speed-btn-${rate}x`}
                    onClick={() => changePlaybackRate(rate)}
                    className={`h-8 sm:h-9 px-1.5 sm:px-2.5 rounded-lg transition cursor-pointer text-[11px] sm:text-xs whitespace-nowrap ${
                      playbackRate === rate
                        ? rate === 0.85
                          ? "bg-amber-500/25 text-amber-300 border border-amber-500/50 font-bold"
                          : "bg-cyan-500/25 text-cyan-300 border border-cyan-500/50 font-bold"
                        : "text-slate-400 hover:text-white hover:bg-slate-800 bg-slate-950/60 border border-transparent"
                    }`}
                    title={
                      rate === 0.85
                        ? "Gentle 0.85x speech pace for senior comfort and clear enunciation"
                        : `${rate}x speed`
                    }
                  >
                    {rate === 0.85 ? "0.85x 👓" : `${rate}x`}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Teleprompter / Narration Subtitle Box */}
        <div
          id="narration-teleprompter"
          className="bg-slate-950/70 rounded-xl p-3.5 border border-slate-800 text-left relative overflow-hidden shadow-inner"
        >
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 border-b border-slate-800/80 pb-1.5 mb-2">
            <span className="text-cyan-400 uppercase tracking-wider font-semibold flex items-center space-x-1.5">
              <Radio className="w-3 h-3 text-cyan-400 animate-pulse" />
              <span>{t("live_tour_subtitles", "LIVE TOUR SUBTITLES")}</span>
              {currentLanguage.code !== "en" && (
                <span className="flex items-center gap-1 text-[10px] text-cyan-300 bg-cyan-950 px-2 py-0.5 rounded-full border border-cyan-500/30">
                  <Globe className="w-2.5 h-2.5" />
                  <span>{currentLanguage.flag} {currentLanguage.nativeName}</span>
                </span>
              )}
            </span>
            <div className="flex items-center space-x-2">
              {isTranslating && (
                <span className="text-cyan-400 animate-pulse text-[10px] font-mono">
                  {t("translating", "Translating...")}
                </span>
              )}
              <span>{t("chapter_prefix", "Chapter")} {activeChapterIndex + 1} {t("of_chapters", "of")} {history.chapters?.length || 4}</span>
            </div>
          </div>

          <p className="text-sm text-slate-200 leading-relaxed font-sans" dir={currentLanguage.dir || "ltr"}>
            {getActiveChapterScript(activeChapterIndex)}
          </p>
        </div>

        {/* Chapter Navigation Timeline */}
        {history.chapters && history.chapters.length > 0 && (
          <div className="space-y-2 pt-1">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center space-x-1">
              <span>{t("tour_chapters", "Tour Chapters (Click to Jump)")}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
              {history.chapters.map((chap, idx) => {
                const isChapActive = activeChapterIndex === idx;
                const isChapCompleted = completedChapters.has(idx);
                const translatedTitle = translatedDynamic[`chapter_${idx}_title`] || chap.title;
                return (
                  <motion.button
                    whileHover={{ y: -2, scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    key={chap.id || idx}
                    type="button"
                    id={`chapter-card-${idx}`}
                    onClick={() => selectChapter(idx)}
                    className={`p-2.5 rounded-xl text-left border transition-all duration-200 cursor-pointer ${
                      isChapActive
                        ? "bg-gradient-to-br from-cyan-950/70 to-blue-950/40 border-cyan-400 text-cyan-200 shadow-md shadow-cyan-950 ring-1 ring-cyan-400/30"
                        : "bg-slate-950/50 border-slate-800/80 text-slate-400 hover:border-slate-700 hover:text-slate-300"
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                      <span
                        className={
                          isChapActive
                            ? "text-cyan-400 font-semibold flex items-center gap-1"
                            : isChapCompleted
                            ? "text-emerald-400 font-medium flex items-center gap-1"
                            : "text-slate-500 flex items-center gap-1"
                        }
                      >
                        {isChapActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />}
                        {isChapCompleted && !isChapActive && <Check className="w-3 h-3 text-emerald-400" />}
                        {t("ch_label", "CH")} 0{idx + 1}
                      </span>
                      <span className="text-slate-500">
                        {(() => {
                          const chapScript = getActiveChapterScript(idx);
                          const words = chapScript.split(/\s+/).filter(Boolean).length;
                          const estSec = Math.max(12, Math.round(words / 2.4));
                          if (isChapActive && isPlaying) {
                            return `${formatTime(currentTime)} / ${formatTime(duration || estSec)}`;
                          }
                          return isChapCompleted ? "Done" : `~${formatTime(estSec)}`;
                        })()}
                      </span>
                    </div>
                    <div className="text-xs font-semibold text-slate-100 line-clamp-1" dir={currentLanguage.dir || "ltr"}>
                      {translatedTitle}
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* PHOTO ARCHITECTURAL INTELLIGENCE & VISUAL DETAILS DECK */}
      {(recognition.photoAnalysis || history.photoGroundedNotes || recognition.arKeypoints?.length > 0) && (
        <div
          id="ar-photo-analysis-deck"
          className="bg-slate-900/90 rounded-2xl border border-cyan-500/30 p-4 sm:p-5 shadow-xl space-y-3.5 relative overflow-hidden"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shadow-sm">
                <Camera className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center space-x-2">
                  <span>{t("photo_arch_intel", "Photo Architectural Intelligence")}</span>
                  <span className="text-[10px] font-mono font-normal px-2 py-0.5 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                    {t("spotted_in_picture", "Spotted In Your Picture")}
                  </span>
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  {t("visual_features_extracted", "Visual features, materials, and camera perspective extracted from your photo")}
                </p>
              </div>
            </div>

            <div className="text-xs font-mono text-cyan-400 bg-slate-950/80 px-2.5 py-1 rounded-lg border border-slate-800" dir={currentLanguage.dir || "ltr"}>
              {translatedDynamic.architecturalStyle || recognition.architecturalStyle} • {translatedDynamic.periodEra || recognition.periodEra || "Historic Period"}
            </div>
          </div>

          {/* Photo-Grounded Context Quote if available */}
          {history.photoGroundedNotes && (
            <div className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-500/20 text-xs text-cyan-200 leading-relaxed flex items-start space-x-2.5">
              <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-cyan-300">{t("photo_grounded_context", "Photo-Grounded Narration Context:")} </span>
                <span dir={currentLanguage.dir || "ltr"}>{translatedDynamic.photoGroundedNotes || history.photoGroundedNotes}</span>
              </div>
            </div>
          )}

          {/* Key Extracted Photographic Attributes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1">
              <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider flex items-center space-x-1.5">
                <Compass className="w-3.5 h-3.5 text-cyan-400" />
                <span>{t("camera_vantage", "Camera Vantage")}</span>
              </div>
              <p className="text-xs text-slate-200 font-medium leading-snug" dir={currentLanguage.dir || "ltr"}>
                {translatedDynamic.perspectiveAndAngle || recognition.photoAnalysis?.perspectiveAndAngle || "Ground-level perspective of monument facade"}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1">
              <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider flex items-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>{t("lighting_atmosphere", "Lighting & Atmosphere")}</span>
              </div>
              <p className="text-xs text-slate-200 font-medium leading-snug" dir={currentLanguage.dir || "ltr"}>
                {translatedDynamic.lightingAndAtmosphere || recognition.photoAnalysis?.lightingAndAtmosphere || "Natural daylight highlighting architectural relief"}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1">
              <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider flex items-center space-x-1.5">
                <Landmark className="w-3.5 h-3.5 text-emerald-400" />
                <span>{t("visible_masonry", "Visible Masonry")}</span>
              </div>
              <p className="text-xs text-slate-200 font-medium leading-snug" dir={currentLanguage.dir || "ltr"}>
                {translatedDynamic.visibleMaterialsAndTextures || recognition.photoAnalysis?.visibleMaterialsAndTextures || "Quarried stone facade with artisanal masonry"}
              </p>
            </div>
          </div>

          {/* Features Spotted in Photo: Click to locate on image */}
          {((recognition.photoAnalysis?.prominentVisualFeatures && recognition.photoAnalysis.prominentVisualFeatures.length > 0) ||
            (recognition.arKeypoints && recognition.arKeypoints.length > 0)) && (
            <div className="pt-2 border-t border-slate-800/80 space-y-2">
              <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider flex items-center justify-between">
                <span>{t("features_spotted", "Features Spotted in Photo (Click to Inspect on Image):")}</span>
                <span className="text-cyan-400">{t("features_spotted_hint", "Clicking highlights pin & jumps to chapter")}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {recognition.photoAnalysis?.prominentVisualFeatures?.map((feature, i) => {
                  const translatedFeat = translatedDynamic[`feat_${i}`] || feature;
                  const matchPin = (recognition.arKeypoints || []).find(
                    (kp) =>
                      kp.label.toLowerCase().includes(feature.toLowerCase()) ||
                      feature.toLowerCase().includes(kp.label.toLowerCase())
                  );
                  const isPinActive = activePin && matchPin && activePin.id === matchPin.id;

                  return (
                    <button
                      key={`feat-btn-${i}`}
                      type="button"
                      id={`photo-feat-${i}`}
                      onClick={() => {
                        setShowPins(true);
                        if (matchPin) {
                          setActivePin(matchPin);
                          // Jump to matching chapter if present
                          const chapIdx = history.chapters?.findIndex(
                            (c) => c.focusPointId === matchPin.id || c.title.toLowerCase().includes(feature.toLowerCase())
                          );
                          if (chapIdx !== undefined && chapIdx >= 0) {
                            selectChapter(chapIdx);
                          }
                        }
                      }}
                      className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-medium border transition cursor-pointer ${
                        isPinActive
                          ? "bg-cyan-500/25 border-cyan-400 text-cyan-200 shadow-md ring-1 ring-cyan-400/40"
                          : "bg-slate-950/80 border-slate-800 text-slate-300 hover:border-cyan-500/40 hover:text-white"
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${isPinActive ? "bg-cyan-300 animate-ping" : "bg-cyan-400"}`} />
                      <span dir={currentLanguage.dir || "ltr"}>{translatedFeat}</span>
                      {matchPin && <MapPin className="w-3 h-3 text-cyan-400 ml-0.5" />}
                    </button>
                  );
                })}

                {recognition.arKeypoints?.map((kp) => {
                  const translatedKp = translatedDynamic[`kp_${kp.id}`] || kp.label;
                  return (
                    <button
                      key={kp.id}
                      type="button"
                      onClick={() => {
                        setShowPins(true);
                        setActivePin(kp);
                        const chapIdx = history.chapters?.findIndex((c) => c.focusPointId === kp.id);
                        if (chapIdx !== undefined && chapIdx >= 0) {
                          selectChapter(chapIdx);
                        }
                      }}
                      className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-medium border transition cursor-pointer ${
                        activePin?.id === kp.id
                          ? "bg-emerald-500/20 border-emerald-400 text-emerald-200 shadow-md ring-1 ring-emerald-400/40"
                          : "bg-slate-950/80 border-slate-800 text-slate-300 hover:border-emerald-500/40 hover:text-white"
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${activePin?.id === kp.id ? "bg-emerald-300 animate-ping" : "bg-emerald-400"}`} />
                      <span dir={currentLanguage.dir || "ltr"}>{translatedKp}</span>
                      <span className="text-[10px] font-mono text-slate-500">({kp.x}%, {kp.y}%)</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}

      {/* MONUMENT HISTORICAL CHRONICLE & ARCHITECTURAL SECRETS DECK */}
      {(history.culturalSignificance || (history.historicalTimeline && history.historicalTimeline.length > 0) || (history.architecturalSecrets && history.architecturalSecrets.length > 0)) && (
        <div
          id="ar-monument-history-deck"
          className="bg-slate-900/90 rounded-2xl border border-amber-500/30 p-4 sm:p-5 shadow-xl space-y-4 relative overflow-hidden"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-950/80 border border-amber-500/40 flex items-center justify-center text-amber-400 shadow-sm">
                <History className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider flex items-center space-x-2">
                  <span>{t("historical_chronicle", "Historical Chronicle & Provenance")}</span>
                  {history.historicalTimeline && history.historicalTimeline.length > 0 && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-950/80 text-amber-300 border border-amber-500/30">
                      {history.historicalTimeline.length} {t("milestones", "Milestones")}
                    </span>
                  )}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  {recognition.name} • {recognition.city}, {recognition.country}
                </p>
              </div>
            </div>
            <div className="text-xs font-mono text-amber-300 bg-amber-950/60 px-2.5 py-1 rounded-lg border border-amber-500/30">
              {recognition.periodEra || "Historical Heritage"}
            </div>
          </div>

          {/* Cultural Narrative & History Summary */}
          {history.culturalSignificance && (
            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1.5">
              <div className="text-[10px] font-mono text-amber-400 uppercase tracking-wider flex items-center space-x-1.5">
                <ScrollText className="w-3.5 h-3.5 text-amber-400" />
                <span>{t("cultural_heritage_significance", "History & Heritage Significance")}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed" dir={currentLanguage.dir || "ltr"}>
                {translatedDynamic.culturalSignificance || history.culturalSignificance}
              </p>
            </div>
          )}

          {/* Chronological Historical Timeline Milestones */}
          {history.historicalTimeline && history.historicalTimeline.length > 0 && (
            <div className="space-y-2.5">
              <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider flex items-center space-x-1.5">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                <span>{t("chronological_milestones", "Historical Milestones Across Eras")}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {history.historicalTimeline.map((item, idx) => {
                  const translatedEvent = translatedDynamic[`timeline_${idx}_event`] || item.event;
                  const translatedDesc = translatedDynamic[`timeline_${idx}_desc`] || item.description;
                  return (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-cyan-500/40 transition space-y-1"
                    >
                      <div className="flex items-center justify-between text-[11px] font-mono">
                        <span className="text-cyan-300 font-bold px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/30">
                          {item.yearOrEra}
                        </span>
                        <span className="text-slate-500 text-[10px]">#0{idx + 1}</span>
                      </div>
                      <h4 className="text-xs font-semibold text-white pt-1" dir={currentLanguage.dir || "ltr"}>
                        {translatedEvent}
                      </h4>
                      <p className="text-xs text-slate-300 leading-snug" dir={currentLanguage.dir || "ltr"}>
                        {translatedDesc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Architectural Secrets & Engineering Marvels */}
          {history.architecturalSecrets && history.architecturalSecrets.length > 0 && (
            <div className="space-y-2 pt-1 border-t border-slate-800/80">
              <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider flex items-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>{t("architectural_secrets", "Architectural Secrets & Mysteries")}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {history.architecturalSecrets.map((secret, idx) => {
                  const translatedSecret = translatedDynamic[`secret_${idx}`] || secret;
                  return (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-amber-950/20 border border-amber-500/20 text-xs text-amber-200/90 leading-relaxed flex items-start space-x-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5" />
                      <span dir={currentLanguage.dir || "ltr"}>{translatedSecret}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Spacious, Full-Featured AR Travel Sticker Stamps Modal Dialog */}
      <AnimatePresence>
        {showStickerPicker && (
          <div
            id="ar-sticker-picker-modal"
            className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200 cursor-pointer"
            onClick={() => setShowStickerPicker(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 35, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 35, scale: 0.96 }}
              transition={{ type: "spring", damping: 25, stiffness: 320 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl max-h-[88vh] sm:max-h-[82vh] bg-slate-950 border border-pink-500/50 rounded-t-3xl sm:rounded-3xl shadow-2xl shadow-pink-950/60 flex flex-col overflow-hidden cursor-default pointer-events-auto"
            >
              {/* Mobile Drag Indicator */}
              <div className="w-12 h-1 rounded-full bg-slate-800 mx-auto mt-2.5 mb-1 sm:hidden" />

              {/* Modal Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-pink-500/30 bg-slate-900/40">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-2xl bg-pink-950/80 border border-pink-500/40 flex items-center justify-center text-pink-400 shadow-md shadow-pink-950/50 shrink-0">
                    <Tag className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center space-x-2">
                      <span>{t("travel_stickers_title", "AR Travel Sticker Stamps")}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-pink-950/80 text-pink-300 border border-pink-500/30">
                        {TRAVEL_STICKERS.length} {t("souvenirs_count", "Souvenirs")}
                      </span>
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5 hidden sm:block">
                      {t("travel_stickers_subtitle", "Select a multi-generational souvenir badge to overlay on your live tour photograph")}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  id="close-sticker-picker-btn"
                  onClick={() => setShowStickerPicker(false)}
                  className="w-8 h-8 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 flex items-center justify-center transition cursor-pointer"
                  title={t("close_modal", "Close Sticker Picker (Esc)")}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Generation & Vibe Filter Tabs */}
              <div className="px-5 py-2.5 border-b border-slate-800/80 bg-slate-900/20 flex items-center space-x-2 overflow-x-auto no-scrollbar shrink-0">
                {[
                  { id: "All", label: t("all_stamps", "All Stamps") },
                  { id: "Gen Z", label: `✨ ${t("gen_z", "Gen Z")}` },
                  { id: "Millennial", label: `🥐 ${t("millennial", "Millennial")}` },
                  { id: "Gen X", label: `🚂 ${t("gen_x", "Gen X")}` },
                  { id: "Boomer / Golden", label: `🏛️ ${t("golden_era", "Golden Era")}` },
                ].map((tab) => {
                  const isSelected = stickerGenerationFilter === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setStickerGenerationFilter(tab.id)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-medium font-mono whitespace-nowrap transition cursor-pointer ${
                        isSelected
                          ? "bg-pink-500/25 text-pink-300 border border-pink-500/50 shadow-sm"
                          : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/60 border border-transparent"
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* Large, Rich Sticker Cards Grid */}
              <div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 overflow-y-auto custom-dark-scrollbar max-h-[58vh]">
                {TRAVEL_STICKERS.filter(
                  (s) => stickerGenerationFilter === "All" || s.generation === stickerGenerationFilter || s.generation === "All"
                ).map((stk) => {
                  const isCurrent = activeSticker?.id === stk.id;
                  return (
                    <button
                      key={stk.id}
                      type="button"
                      onClick={() => {
                        setActiveSticker(stk);
                        setShowStickerPicker(false);
                      }}
                      className={`group relative p-4 sm:p-4.5 rounded-2xl text-left border-2 transition-all duration-200 flex flex-col justify-between bg-gradient-to-br ${stk.bgGradient} ${
                        isCurrent
                          ? `${stk.borderColor} ring-2 ring-pink-400/90 shadow-xl shadow-pink-950/60 scale-[1.02]`
                          : "border-slate-800/80 hover:border-slate-600/80 hover:scale-[1.01]"
                      } cursor-pointer`}
                    >
                      {/* Top Row: Huge Emoji + Badges */}
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-3xl sm:text-4xl filter drop-shadow select-none">
                          {stk.emoji}
                        </span>
                        <div className="flex items-center space-x-1.5">
                          <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-slate-950/85 border border-slate-700/80 text-slate-300 font-bold tracking-wider">
                            {stk.generation}
                          </span>
                          {isCurrent && (
                            <span className="w-6 h-6 rounded-full bg-pink-500 text-slate-950 flex items-center justify-center shadow-md">
                              <Check className="w-3.5 h-3.5 stroke-[3]" />
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Bottom Row: Big Bold Title + Tagline */}
                      <div className="mt-3">
                        <div className={`text-sm sm:text-base font-black tracking-wide leading-tight ${stk.textColor}`}>
                          {stk.label}
                        </div>
                        <p className="text-xs text-slate-300/90 mt-1 line-clamp-2 leading-relaxed font-medium italic">
                          "{stk.tagline}"
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Modal Footer */}
              <div className="px-5 py-3.5 border-t border-slate-800/90 bg-slate-900/60 flex items-center justify-between gap-3 shrink-0">
                <div className="flex items-center space-x-2 min-w-0">
                  {activeSticker ? (
                    <div className="flex items-center space-x-2 text-xs text-slate-300 truncate">
                      <span className="text-slate-400 font-mono">{t("stamped_label", "Stamped:")}</span>
                      <span className="text-sm">{activeSticker.emoji}</span>
                      <span className={`font-black truncate ${activeSticker.textColor}`}>
                        {activeSticker.label}
                      </span>
                    </div>
                  ) : (
                    <span className="text-xs text-slate-500 font-mono">{t("no_sticker_active", "No sticker stamp active")}</span>
                  )}
                </div>

                <div className="flex items-center space-x-2 shrink-0">
                  {activeSticker && (
                    <button
                      type="button"
                      onClick={() => {
                        setActiveSticker(null);
                        setShowStickerPicker(false);
                      }}
                      className="px-3 py-2 rounded-xl text-xs font-mono text-slate-400 hover:text-white hover:bg-slate-800/80 transition cursor-pointer"
                    >
                      {t("clear_stamp", "Clear Stamp")}
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => setShowStickerPicker(false)}
                    className="px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-pink-600 hover:bg-pink-500 text-white shadow-lg shadow-pink-950/50 transition cursor-pointer"
                  >
                    {t("done_btn", "Done")}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* High-Resolution Google & Verified Photos Modal Gallery */}
      <AnimatePresence>
        {showPhotosModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-slate-950 border border-slate-800 rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-hidden flex flex-col shadow-2xl relative"
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-5 border-b border-slate-800/80 flex items-center justify-between bg-slate-900/60">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-2xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                    <ImageIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                      <span>{recognition.name}</span>
                      <span className="text-xs font-normal text-slate-400">
                        ({(recognition.referencePhotos?.length || 0)} Verified Photos)
                      </span>
                    </h3>
                    <p className="text-xs text-slate-400">
                      High-resolution visual documentation indexed on Google Images & Wikimedia
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <a
                    href={recognition.googleImagesUrl || `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(recognition.name + " " + (recognition.city || ""))}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs flex items-center space-x-1.5 shadow-sm transition"
                  >
                    <Search className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Google Images</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <button
                    type="button"
                    onClick={() => setShowPhotosModal(false)}
                    className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Body */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
                {/* Active Photo Spotlight */}
                {(() => {
                  const photos = recognition.referencePhotos || [];
                  const safeIdx = Math.min(selectedPhotoModalIndex, Math.max(0, photos.length - 1));
                  const activePhoto = photos[safeIdx];
                  if (!activePhoto) return null;
                  return (
                    <div className="bg-slate-900/80 rounded-2xl border border-slate-800 overflow-hidden">
                      <div className="relative aspect-video max-h-[420px] w-full bg-black/60 flex items-center justify-center overflow-hidden">
                        <img
                          src={activePhoto.imageUrl}
                          alt={activePhoto.title}
                          className="w-full h-full object-contain"
                          crossOrigin="anonymous"
                        />
                      </div>
                      <div className="p-3 sm:p-4 border-t border-slate-800 bg-slate-950/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
                        <div>
                          <div className="font-bold text-white text-sm">
                            {activePhoto.title}
                          </div>
                          <div className="text-slate-400 text-[11px] mt-0.5">
                            {activePhoto.description || "Verified high-resolution visual documentation"}
                          </div>
                        </div>
                        <div className="text-[11px] font-mono text-slate-400 shrink-0 flex items-center space-x-2">
                          <span>{activePhoto.author}</span>
                          <span>•</span>
                          <span className="text-emerald-400">{activePhoto.license || "CC License"}</span>
                        </div>
                      </div>
                    </div>
                  );
                })()}

                {/* Thumbnails Strip */}
                {recognition.referencePhotos && recognition.referencePhotos.length > 1 && (
                  <div className="space-y-2">
                    <div className="text-xs font-mono text-slate-400">All Available Photographs:</div>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
                      {recognition.referencePhotos.map((photo, pIdx) => (
                        <button
                          key={photo.id || pIdx}
                          type="button"
                          onClick={() => setSelectedPhotoModalIndex(pIdx)}
                          className={`relative aspect-video rounded-xl overflow-hidden border-2 transition cursor-pointer ${
                            selectedPhotoModalIndex === pIdx
                              ? "border-cyan-400 shadow-md shadow-cyan-900/40 scale-105"
                              : "border-slate-800 opacity-60 hover:opacity-100"
                          }`}
                        >
                          <img
                            src={photo.thumbnailUrl || photo.imageUrl}
                            alt={photo.title}
                            className="w-full h-full object-cover"
                            crossOrigin="anonymous"
                            loading="lazy"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <LandmarkSearchModal
        isOpen={showChangeLandmarkModal}
        onClose={() => setShowChangeLandmarkModal(false)}
        onSelectLandmark={(name) => {
          onSwitchLandmark?.(name);
          setShowChangeLandmarkModal(false);
        }}
        currentLandmarkName={recognition.name}
      />
    </div>
  );
};
