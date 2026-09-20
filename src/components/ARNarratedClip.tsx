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
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { LandmarkRecognition, LandmarkHistory, NarrationAudio, ARKeypoint, TourChapter } from "../types";
import { TRAVEL_STICKERS, TravelSticker } from "../data/travelStickers";
import { SAMPLE_LANDMARKS } from "../data/sampleLandmarks";
import { useLanguage } from "../context/LanguageContext";
import { translateText, generateNarration, translateUIBatch } from "../services/api";
import { Globe } from "lucide-react";

interface ARNarratedClipProps {
  imageDataUrl: string;
  recognition: LandmarkRecognition;
  history: LandmarkHistory;
  narration?: NarrationAudio;
  onRegenerateVoice?: (voiceName: string, customScript?: string) => Promise<void>;
  isRegeneratingVoice?: boolean;
  onSelectPreset?: (preset: any) => void;
}

export const ARNarratedClip: React.FC<ARNarratedClipProps> = ({
  imageDataUrl,
  recognition,
  history,
  narration,
  onRegenerateVoice,
  isRegeneratingVoice = false,
  onSelectPreset,
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

  // Synchronized playback refs to prevent stale closures and concurrency races
  const isPlayingRef = useRef<boolean>(false);
  const activeChapterIndexRef = useRef<number>(0);
  const currentTimeRef = useRef<number>(0);
  const durationRef = useRef<number>(narration?.durationEstimateSec || 30);
  const playbackRateRef = useRef<number>(1);
  const isMutedRef = useRef<boolean>(false);
  const autoAdvanceRef = useRef<boolean>(true);

  // Speech synthesis queue and heartbeat refs
  const sentencesQueueRef = useRef<string[]>([]);
  const sentenceIndexRef = useRef<number>(0);
  const activeUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const speechTimerRef = useRef<NodeJS.Timeout | null>(null);
  const keepAliveTimerRef = useRef<NodeJS.Timeout | null>(null);
  const activePlaybackModeRef = useRef<"html5" | "speech" | "none">("none");

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
  const [showScanline, setShowScanline] = useState<boolean>(true);
  const [showTelemetry, setShowTelemetry] = useState<boolean>(true);
  const [activePin, setActivePin] = useState<ARKeypoint | null>(null);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);
  const [activeSticker, setActiveSticker] = useState<TravelSticker | null>(() => TRAVEL_STICKERS[0]);
  const [showStickerPicker, setShowStickerPicker] = useState<boolean>(false);
  const translationCacheRef = useRef<Record<string, string>>({});

  // Multi-Language Tour Guide Support
  const { currentLanguage, t } = useLanguage();
  const [translatedScript, setTranslatedScript] = useState<string>("");
  const [isTranslating, setIsTranslating] = useState<boolean>(false);

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

    const cacheKey = `${currentLanguage.code}:${recognition.landmarkName || "landmark"}`;
    if (dynamicCacheRef.current[cacheKey]) {
      setTranslatedDynamic(dynamicCacheRef.current[cacheKey]);
      return;
    }

    const batchKeys: Record<string, string> = {};
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
    if (recognition.architecturalStyle) {
      batchKeys["architecturalStyle"] = recognition.architecturalStyle;
    }
    if (recognition.periodEra) {
      batchKeys["periodEra"] = recognition.periodEra;
    }
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
    recognition.landmarkName,
    recognition.architecturalStyle,
    recognition.periodEra,
    recognition.photoAnalysis,
    recognition.arKeypoints,
    history.photoGroundedNotes,
    history.chapters,
  ]);

  // Synchronize incoming narration prop
  useEffect(() => {
    if (narration) {
      const voiceKey = narration.voiceName || selectedVoice;
      if (narration.audioBase64) {
        languageAudioMapRef.current[`${currentLanguage.code}_${voiceKey}`] = narration;
        if (currentLanguage.code === "en") {
          languageAudioMapRef.current[`en_${voiceKey}`] = narration;
        }
      }
      setActiveNarration(narration);
      if (narration.voiceName) {
        setSelectedVoice(narration.voiceName);
      }
    }
    setAudioPlaybackError(false);
  }, [narration]);

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

    generateNarration(scriptToNarrate, selectedVoice, currentLanguage.name)
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
    if (speechTimerRef.current) {
      clearInterval(speechTimerRef.current);
      speechTimerRef.current = null;
    }
    if (keepAliveTimerRef.current) {
      clearInterval(keepAliveTimerRef.current);
      keepAliveTimerRef.current = null;
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
    if (currentTimeRef.current < 4) return; // Guard against instantaneous false triggers

    if (speechTimerRef.current) {
      clearInterval(speechTimerRef.current);
      speechTimerRef.current = null;
    }
    if (keepAliveTimerRef.current) {
      clearInterval(keepAliveTimerRef.current);
      keepAliveTimerRef.current = null;
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
      // 500ms audio transition pause between chapters
      setTimeout(() => {
        if (isPlayingRef.current) {
          playChapter(nextIdx);
        }
      }, 500);
    } else {
      // Completed entire tour or auto-advance off
      setIsPlaying(false);
      isPlayingRef.current = false;
      setCurrentTime(durationRef.current);
      activePlaybackModeRef.current = "none";
    }
  };

  // Sequential sentence-by-sentence speaker for uninterrupted narration
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

    const utterance = new SpeechSynthesisUtterance(sentenceText);
    utterance.rate = playbackRateRef.current;
    if (isMutedRef.current) {
      utterance.volume = 0;
    }

    // BCP-47 regional pronunciation mapping
    const langMap: Record<string, string> = {
      gu: "gu-IN", hi: "hi-IN", bn: "bn-IN", mr: "mr-IN", ta: "ta-IN", te: "te-IN",
      ur: "ur-PK", pa: "pa-IN", ar: "ar-SA", ja: "ja-JP", zh: "zh-CN", ko: "ko-KR",
      ru: "ru-RU", es: "es-ES", fr: "fr-FR", de: "de-DE", it: "it-IT", pt: "pt-PT", en: "en-US",
    };
    const bcp47 = langMap[currentLanguage.code] || currentLanguage.code;
    utterance.lang = bcp47;

    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      const voices = window.speechSynthesis.getVoices();
      const match = voices.find((v) => v.lang === bcp47 || v.lang.startsWith(currentLanguage.code));
      if (match) utterance.voice = match;
    }

    utterance.onend = () => {
      activeUtteranceRef.current = null;
      (window as any).__activeTourUtterance = null;
      sentenceIndexRef.current = idx + 1;
      setTimeout(() => {
        if (isPlayingRef.current && activePlaybackModeRef.current === "speech") {
          speakNextSentence();
        }
      }, 150);
    };

    utterance.onerror = (e) => {
      console.warn("Speech synthesis notice:", e);
      activeUtteranceRef.current = null;
      (window as any).__activeTourUtterance = null;
      if (e.error !== "canceled" && e.error !== "interrupted") {
        sentenceIndexRef.current = idx + 1;
        speakNextSentence();
      }
    };

    activeUtteranceRef.current = utterance;
    (window as any).__activeTourUtterance = utterance;
    window.speechSynthesis.speak(utterance);
  };

  const startSentenceSpeech = (fullText: string, totalEstimatedSec: number) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      setIsPlaying(false);
      isPlayingRef.current = false;
      return;
    }

    activePlaybackModeRef.current = "speech";
    window.speechSynthesis.cancel();

    // Natural sentence splitting preserving punctuation boundaries
    const rawSentences = fullText
      .replace(/([.?!;:\n])\s+/g, "$1|")
      .split("|")
      .map((s) => s.trim())
      .filter((s) => s.length > 0);

    const sentences = rawSentences.length > 0 ? rawSentences : [fullText];
    sentencesQueueRef.current = sentences;
    sentenceIndexRef.current = 0;

    setIsPlaying(true);
    isPlayingRef.current = true;

    const startTime = Date.now();
    if (speechTimerRef.current) clearInterval(speechTimerRef.current);
    speechTimerRef.current = setInterval(() => {
      const elapsed = (Date.now() - startTime) / 1000;
      if (elapsed >= totalEstimatedSec) {
        setCurrentTime(totalEstimatedSec);
        currentTimeRef.current = totalEstimatedSec;
      } else {
        setCurrentTime(elapsed);
        currentTimeRef.current = elapsed;
      }
    }, 250);

    // Keep-alive heartbeat ensures Chromium doesn't pause speech
    if (keepAliveTimerRef.current) clearInterval(keepAliveTimerRef.current);
    keepAliveTimerRef.current = setInterval(() => {
      if (typeof window !== "undefined" && "speechSynthesis" in window && window.speechSynthesis.speaking) {
        window.speechSynthesis.pause();
        window.speechSynthesis.resume();
      }
    }, 8000);

    speakNextSentence();
  };

  // Play designated chapter reliably
  const playChapter = (chapIdx: number) => {
    stopAllPlayback();
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

    // HTML5 studio audio is only used for English Chapter 0 if base64 exists
    const canUseStudioAudio =
      currentLanguage.code === "en" &&
      chapIdx === 0 &&
      Boolean(narration?.audioBase64) &&
      !narration?.useClientFallback &&
      !audioPlaybackError;

    if (canUseStudioAudio && audioRef.current) {
      activePlaybackModeRef.current = "html5";
      audioRef.current.src = narration!.audioBase64;
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
          console.warn("Studio audio play failed, falling back to speech synthesis:", err);
          setAudioPlaybackError(true);
          startSentenceSpeech(scriptText, estSec);
        });
    } else {
      startSentenceSpeech(scriptText, estSec);
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
    if (activePlaybackModeRef.current === "html5" && currentTimeRef.current >= 4) {
      onChapterNaturallyFinished();
    }
  };

  // User playback controls
  const togglePlay = () => {
    if (isPlaying) {
      stopAllPlayback();
      setIsPlaying(false);
      isPlayingRef.current = false;
    } else {
      playChapter(activeChapterIndex);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = parseFloat(e.target.value);
    setCurrentTime(target);
    currentTimeRef.current = target;
    if (activePlaybackModeRef.current === "html5" && audioRef.current) {
      audioRef.current.currentTime = target;
    }
  };

  const restartAudio = () => {
    playChapter(activeChapterIndex);
  };

  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    isMutedRef.current = nextMuted;
    if (audioRef.current) {
      audioRef.current.muted = nextMuted;
    }
    if (activeUtteranceRef.current) {
      activeUtteranceRef.current.volume = nextMuted ? 0 : 1;
    }
  };

  const changePlaybackRate = (rate: number) => {
    setPlaybackRate(rate);
    playbackRateRef.current = rate;
    if (audioRef.current) {
      audioRef.current.playbackRate = rate;
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
        className="relative w-full aspect-[4/3] sm:aspect-[16/10] max-h-[620px] bg-slate-950 rounded-2xl border border-cyan-500/40 overflow-hidden shadow-2xl shadow-cyan-950/40 select-none group"
      >
        {/* Landmark Photo Layer */}
        <img
          src={imageDataUrl}
          alt={recognition.name}
          className="absolute inset-0 w-full h-full object-contain sm:object-cover bg-slate-950"
        />

        {/* AR Optics Vignette and Holographic Shading */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/60 pointer-events-none" />

        {/* AR Grid Matrix Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d412_1px,transparent_1px),linear-gradient(to_bottom,#06b6d412_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

        {/* Animated AR Laser Scanline */}
        {showScanline && (
          <div
            className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#22d3ee] pointer-events-none opacity-80 animate-ar-scan"
          />
        )}

        {/* TOP AR TELEMETRY HUD */}
        {showTelemetry && (
          <div className="absolute top-3 inset-x-3 sm:top-5 sm:inset-x-5 flex items-start justify-between z-20 pointer-events-none">
            {/* Top Left: Landmark HUD Badge */}
            <div className="bg-slate-950/80 backdrop-blur-md border border-cyan-500/30 px-3.5 py-2 rounded-xl text-left pointer-events-auto shadow-lg">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span className="text-[10px] font-mono tracking-wider text-cyan-300 uppercase font-semibold">
                  {recognition.isLandmark === false ? "VISUAL SUBJECT TRACKING • LOCKED" : "AR OPTIC TRACKING • LOCKED"}
                </span>
              </div>
              <h2 className="text-base sm:text-xl font-bold text-white tracking-tight mt-0.5">
                {recognition.name}
              </h2>
              <div className="flex items-center space-x-2 text-xs text-slate-300 font-mono mt-0.5">
                <MapPin className="w-3 h-3 text-cyan-400" />
                <span>
                  {recognition.city ? `${recognition.city}, ${recognition.country}` : (recognition.country || recognition.detectedCategory?.toUpperCase() || "VISUAL ANALYSIS")}
                </span>
                <span className="text-slate-600">•</span>
                <span className="text-cyan-400/90">{recognition.periodEra && recognition.periodEra !== "N/A" ? recognition.periodEra : "FEATURED"}</span>
              </div>
            </div>

            {/* Top Right: Telemetry Diagnostics & Travel Sticker Stamp */}
            <div className="hidden sm:flex flex-col items-end space-y-1.5">
              <div className="flex flex-col items-end space-y-1 bg-slate-950/80 backdrop-blur-md border border-slate-700/60 px-3 py-1.5 rounded-xl font-mono text-[11px] text-slate-300 shadow-lg">
                <div className="flex items-center space-x-2 text-cyan-400">
                  <Compass className="w-3.5 h-3.5" />
                  <span>BEARING 042° NNE</span>
                  <span className="text-slate-600">|</span>
                  <span>ALT 84M</span>
                </div>
                <div className="text-[10px] text-slate-400">
                  CONFIDENCE: <span className="text-emerald-400 font-semibold">{recognition.confidence}%</span> |{" "}
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

        {/* SPATIAL AR TARGET RETICLE PINS */}
        {showPins &&
          recognition.arKeypoints.map((pin) => {
            const isSelected = activePin?.id === pin.id;
            const isNearLeft = pin.x < 30;
            const isNearRight = pin.x > 70;
            const isNearBottom = pin.y > 65;

            const popupAlignClass = isNearLeft
              ? "left-0 translate-x-0"
              : isNearRight
              ? "right-0 translate-x-0"
              : "left-1/2 -translate-x-1/2";

            const popupVerticalClass = isNearBottom ? "bottom-8" : "top-8";

            return (
              <div
                key={pin.id}
                id={`ar-pin-${pin.id}`}
                style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                className="absolute z-20 -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
              >
                {/* Pulsing Target Reticle */}
                <button
                  type="button"
                  onClick={() => setActivePin(isSelected ? null : pin)}
                  className="group relative flex items-center justify-center p-1 focus:outline-none"
                  title={`${pin.label}: Click to inspect in AR`}
                >
                  {/* Outer Pulsing Rings */}
                  <span
                    className={`absolute w-7 h-7 rounded-full border transition-all duration-300 ${
                      isSelected
                        ? "border-cyan-400 bg-cyan-400/20 scale-125 animate-ping"
                        : "border-cyan-400/50 group-hover:border-cyan-300 group-hover:scale-110"
                    }`}
                    style={{ animationDuration: "2.5s" }}
                  />

                  {/* Pin Dot Center */}
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shadow-lg transition-all duration-200 ${
                      isSelected
                        ? "bg-cyan-400 border-white text-slate-950 scale-110 shadow-cyan-400"
                        : "bg-slate-950/90 border-cyan-400 text-cyan-300 group-hover:bg-cyan-400 group-hover:text-slate-950"
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                  </div>

                  {/* Label pill on hover or active */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-0.5 rounded text-[10px] font-mono whitespace-nowrap backdrop-blur-md border shadow-lg transition-all duration-200 ${
                      isSelected
                        ? "bg-cyan-950/90 text-cyan-200 border-cyan-400 opacity-100"
                        : "bg-slate-950/80 text-slate-300 border-slate-700/70 opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    {pin.label}
                  </div>
                </button>

                {/* Floating AR Inspection Card when pin is clicked with smart edge clamping */}
                {isSelected && (
                  <div
                    id={`ar-popup-${pin.id}`}
                    className={`absolute ${popupVerticalClass} ${popupAlignClass} w-60 sm:w-72 bg-slate-950/95 backdrop-blur-xl border border-cyan-400/80 rounded-xl p-3.5 shadow-2xl text-left z-30 animate-in fade-in zoom-in-95 duration-150`}
                  >
                    <div className="flex items-center justify-between border-b border-cyan-500/30 pb-1.5 mb-2">
                      <div className="flex items-center space-x-1.5">
                        <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                        <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-300 font-semibold">
                          FEATURE INSPECTION
                        </span>
                      </div>
                      <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                        {pin.featureType}
                      </span>
                    </div>
                    <div className="text-sm font-bold text-white">{pin.label}</div>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      {pin.description}
                    </p>
                    <div className="mt-2.5 flex items-center justify-between pt-1 text-[10px] font-mono text-slate-400">
                      <span>COORD ({pin.x}%, {pin.y}%)</span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActivePin(null);
                        }}
                        className="text-cyan-400 hover:text-cyan-300 font-semibold cursor-pointer"
                      >
                        [Dismiss]
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

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
              title="Toggle AR Spatial Pins"
            >
              <Layers className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Pins</span>
            </button>

            <button
              type="button"
              id="toggle-ar-scanline-btn"
              onClick={() => setShowScanline(!showScanline)}
              className={`p-1.5 rounded-lg text-xs font-mono flex items-center space-x-1 transition ${
                showScanline ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40" : "text-slate-400 hover:text-white"
              }`}
              title="Toggle Laser Scanline"
            >
              <Radio className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Scan</span>
            </button>

            <button
              type="button"
              id="toggle-ar-telemetry-btn"
              onClick={() => setShowTelemetry(!showTelemetry)}
              className={`p-1.5 rounded-lg text-xs font-mono flex items-center space-x-1 transition ${
                showTelemetry ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40" : "text-slate-400 hover:text-white"
              }`}
              title="Toggle Telemetry HUD"
            >
              {showTelemetry ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">HUD</span>
            </button>

            <button
              type="button"
              id="toggle-ar-stickers-btn"
              onClick={() => setShowStickerPicker(!showStickerPicker)}
              className={`p-1.5 rounded-lg text-xs font-mono flex items-center space-x-1 transition ${
                showStickerPicker ? "bg-pink-500/25 text-pink-300 border border-pink-500/50" : "text-slate-400 hover:text-pink-300"
              }`}
              title="Pick Travel Sticker Stamp"
            >
              <Tag className="w-3.5 h-3.5 text-pink-400" />
              <span className="hidden sm:inline">Sticker</span>
            </button>
          </div>

          {/* Right Tools */}
          <div className="flex items-center space-x-1 bg-slate-950/80 backdrop-blur-md px-2 py-1 rounded-xl border border-slate-800">
            <button
              type="button"
              id="ar-share-btn"
              onClick={handleCopyShare}
              className="p-1.5 rounded-lg text-xs font-mono text-slate-300 hover:text-white transition flex items-center space-x-1"
              title="Share Landmark Tour"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copiedLink ? "Copied" : "Share"}</span>
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

        {/* Floating Sticker Picker Drawer in AR Viewport */}
        {showStickerPicker && (
          <div
            id="ar-sticker-picker-modal"
            className="absolute bottom-14 left-4 right-4 sm:left-auto sm:right-4 sm:w-96 max-h-72 bg-slate-950/95 backdrop-blur-xl border border-pink-500/50 rounded-2xl p-3.5 z-30 shadow-2xl overflow-y-auto pointer-events-auto animate-in fade-in zoom-in-95 duration-150"
          >
            <div className="flex items-center justify-between border-b border-pink-500/30 pb-2 mb-2.5">
              <div className="flex items-center space-x-1.5">
                <Tag className="w-3.5 h-3.5 text-pink-400" />
                <span className="text-xs font-bold text-white tracking-wide">
                  Choose AR Travel Sticker
                </span>
              </div>
              <button
                type="button"
                onClick={() => setShowStickerPicker(false)}
                className="text-slate-400 hover:text-white text-xs font-mono px-1.5 py-0.5"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {TRAVEL_STICKERS.map((stk) => {
                const isCurrent = activeSticker?.id === stk.id;
                return (
                  <button
                    key={stk.id}
                    type="button"
                    onClick={() => {
                      setActiveSticker(stk);
                      setShowStickerPicker(false);
                    }}
                    className={`p-2 rounded-xl text-left border transition flex flex-col justify-between bg-gradient-to-b ${stk.bgGradient} ${
                      isCurrent
                        ? `${stk.borderColor} ring-2 ring-pink-400 shadow-md`
                        : "border-slate-800 hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-lg">{stk.emoji}</span>
                      <span className="text-[8px] font-mono text-slate-400 uppercase">
                        {stk.generation}
                      </span>
                    </div>
                    <div className={`text-[10px] font-black mt-1 leading-tight ${stk.textColor}`}>
                      {stk.label}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* AR NARRATION AUDIO PLAYER & TELEPROMPTER DECK */}
      <div
        id="ar-narration-player-deck"
        className="bg-slate-900/90 rounded-2xl border border-slate-800 p-4 sm:p-5 shadow-xl space-y-4"
      >
        {/* Top Header: Voice synthesis status & Live wave */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center shadow-inner">
              <Sparkles className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-semibold text-slate-200">
                  {t("voice_narration", "AR Narrated Audio Guide")}
                </span>
                {isRegeneratingVoice || isGeneratingLanguageAudio ? (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-500/30 flex items-center space-x-1">
                    <Loader2 className="w-3 h-3 animate-spin text-cyan-400" />
                    <span>Synthesizing Studio Audio ({currentLanguage.name})...</span>
                  </span>
                ) : (!audioPlaybackError && activeNarration?.audioBase64 && !activeNarration?.useClientFallback) ? (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-500/30 flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Gemini 3.1 Flash TTS ({currentLanguage.name})</span>
                  </span>
                ) : (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-950/80 text-amber-300 border border-amber-500/30 flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>Browser Speech Engine ({currentLanguage.name})</span>
                  </span>
                )}
              </div>
              <div className="text-xs text-slate-400 flex items-center space-x-2 mt-0.5">
                {isRegeneratingVoice || isGeneratingLanguageAudio ? (
                  <span>Generating {currentLanguage.name} narration with Gemini Flash TTS...</span>
                ) : (!audioPlaybackError && activeNarration?.audioBase64 && !activeNarration?.useClientFallback) ? (
                  <span>AI Tour Guide Voice: <strong className="text-cyan-300 font-medium">{selectedVoice}</strong> (24kHz Studio Audio • {currentLanguage.name})</span>
                ) : (
                  <div className="flex items-center space-x-2">
                    <span>Voice Guide: Natural Spoken Narration ({currentLanguage.name})</span>
                    {onRegenerateVoice && (
                      <button
                        type="button"
                        id="retry-studio-audio-btn"
                        onClick={() => handleVoiceChange({ target: { value: selectedVoice } } as any)}
                        className="text-[11px] text-cyan-400 hover:text-cyan-300 underline font-mono flex items-center space-x-1 cursor-pointer"
                      >
                        <RefreshCw className="w-3 h-3" />
                        <span>Retry Studio Audio</span>
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Animated Audio Equalizer Wave */}
          <div className="flex items-center space-x-1 h-6 px-3 py-1 rounded-lg bg-slate-950/80 border border-slate-800">
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
          <div className="flex items-center space-x-2 text-xs">
            <Sliders className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-400">Voice:</span>
            <select
              id="voice-selector"
              value={selectedVoice}
              onChange={handleVoiceChange}
              disabled={isRegeneratingVoice}
              className="bg-slate-950 border border-slate-700 text-slate-200 rounded-lg px-2.5 py-1 text-xs focus:ring-1 focus:ring-cyan-500 outline-none"
            >
              <option value="Kore">Kore (Warm Female)</option>
              <option value="Fenrir">Fenrir (Deep Male)</option>
              <option value="Puck">Puck (Energetic)</option>
              <option value="Zephyr">Zephyr (Serene)</option>
            </select>
          </div>
        </div>

        {/* Audio Scrubber & Controls */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400">
            <span>{formatTime(currentTime)}</span>
            <span className="text-[11px] text-cyan-400/90">
              {activeChapter ? `${activeChapter.title}` : "Interactive Landmark Tour"}
            </span>
            <span>{formatTime(duration)}</span>
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
          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            <div className="flex items-center space-x-2">
              {/* Previous Chapter */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                type="button"
                id="narration-prev-chapter-btn"
                onClick={goToPreviousChapter}
                disabled={activeChapterIndex === 0}
                className={`p-2 rounded-full transition cursor-pointer ${
                  activeChapterIndex === 0
                    ? "text-slate-600 cursor-not-allowed opacity-40"
                    : "text-slate-400 hover:text-cyan-300 hover:bg-slate-800"
                }`}
                title="Previous Chapter"
              >
                <SkipBack className="w-4 h-4" />
              </motion.button>

              {/* Play / Pause with Motion Spring */}
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                type="button"
                id="narration-play-pause-btn"
                onClick={togglePlay}
                className="w-11 h-11 rounded-full bg-gradient-to-tr from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 text-slate-950 flex items-center justify-center shadow-lg shadow-cyan-500/35 transition cursor-pointer"
                title={isPlaying ? "Pause Tour" : "Play Tour"}
              >
                {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
              </motion.button>

              {/* Next Chapter */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                type="button"
                id="narration-next-chapter-btn"
                onClick={goToNextChapter}
                disabled={activeChapterIndex >= (history.chapters?.length || 1) - 1}
                className={`p-2 rounded-full transition cursor-pointer ${
                  activeChapterIndex >= (history.chapters?.length || 1) - 1
                    ? "text-slate-600 cursor-not-allowed opacity-40"
                    : "text-slate-400 hover:text-cyan-300 hover:bg-slate-800"
                }`}
                title="Next Chapter"
              >
                <SkipForward className="w-4 h-4" />
              </motion.button>

              {!isPlaying && (
                <span className="text-xs font-semibold text-cyan-300 tracking-wide select-none hidden sm:inline">
                  {t("play_audio_tour", "Play Audio Tour")}
                </span>
              )}

              {/* Restart */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                type="button"
                id="narration-restart-btn"
                onClick={restartAudio}
                className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
                title="Restart Audio"
              >
                <RotateCcw className="w-4 h-4" />
              </motion.button>

              {/* Mute */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                type="button"
                id="narration-mute-btn"
                onClick={toggleMute}
                className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
                title={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4" />}
              </motion.button>

              {/* Auto-Advance Toggle */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                type="button"
                id="narration-auto-advance-toggle"
                onClick={() => setAutoAdvance(!autoAdvance)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-mono border transition flex items-center space-x-1.5 cursor-pointer ${
                  autoAdvance
                    ? "bg-cyan-500/15 border-cyan-500/40 text-cyan-300"
                    : "bg-slate-900 border-slate-800 text-slate-500 hover:text-slate-300"
                }`}
                title="Auto-advance to next chapter upon completion"
              >
                <span className={`w-1.5 h-1.5 rounded-full ${autoAdvance ? "bg-cyan-400 animate-pulse" : "bg-slate-600"}`} />
                <span>Auto-Advance: {autoAdvance ? "ON" : "OFF"}</span>
              </motion.button>
            </div>

            {/* Playback speed buttons */}
            <div className="flex items-center space-x-1 text-xs font-mono">
              {[1, 1.25, 1.5].map((rate) => (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  key={rate}
                  type="button"
                  id={`speed-btn-${rate}x`}
                  onClick={() => changePlaybackRate(rate)}
                  className={`px-2.5 py-1 rounded-lg transition ${
                    playbackRate === rate
                      ? "bg-cyan-500/25 text-cyan-300 border border-cyan-500/50 font-bold shadow-sm"
                      : "text-slate-400 hover:text-white hover:bg-slate-800"
                  }`}
                >
                  {rate}x
                </motion.button>
              ))}
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
                  const matchPin = recognition.arKeypoints.find(
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
    </div>
  );
};
