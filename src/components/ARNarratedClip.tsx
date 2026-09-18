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
  Tag
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { LandmarkRecognition, LandmarkHistory, NarrationAudio, ARKeypoint, TourChapter } from "../types";
import { TRAVEL_STICKERS, TravelSticker } from "../data/travelStickers";
import { useLanguage } from "../context/LanguageContext";
import { translateText } from "../services/api";
import { Globe } from "lucide-react";

interface ARNarratedClipProps {
  imageDataUrl: string;
  recognition: LandmarkRecognition;
  history: LandmarkHistory;
  narration?: NarrationAudio;
  onRegenerateVoice?: (voiceName: string) => Promise<void>;
  isRegeneratingVoice?: boolean;
}

export const ARNarratedClip: React.FC<ARNarratedClipProps> = ({
  imageDataUrl,
  recognition,
  history,
  narration,
  onRegenerateVoice,
  isRegeneratingVoice = false,
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

  // AR visual HUD toggles
  const [showPins, setShowPins] = useState<boolean>(true);
  const [showScanline, setShowScanline] = useState<boolean>(true);
  const [showTelemetry, setShowTelemetry] = useState<boolean>(true);
  const [activePin, setActivePin] = useState<ARKeypoint | null>(null);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);
  const [activeSticker, setActiveSticker] = useState<TravelSticker | null>(() => TRAVEL_STICKERS[0]);
  const [showStickerPicker, setShowStickerPicker] = useState<boolean>(false);
  const speechIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Multi-Language Tour Guide Support
  const { currentLanguage, t } = useLanguage();
  const [translatedScript, setTranslatedScript] = useState<string>("");
  const [isTranslating, setIsTranslating] = useState<boolean>(false);

  // Translate narration subtitles and speech whenever the selected language or chapter changes
  useEffect(() => {
    const rawText = history.chapters?.[activeChapterIndex]?.script || history.narrationScript;
    if (!rawText) return;

    if (currentLanguage.code === "en") {
      setTranslatedScript(rawText);
      return;
    }

    let isMounted = true;
    setIsTranslating(true);
    translateText(rawText, currentLanguage.code, currentLanguage.name)
      .then((res) => {
        if (isMounted && res?.translatedText) {
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
  }, [currentLanguage.code, currentLanguage.name, activeChapterIndex, history]);

  // Stop any active speech on unmount
  useEffect(() => {
    return () => {
      if (speechIntervalRef.current) clearInterval(speechIntervalRef.current);
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  // Audio setup and sync
  useEffect(() => {
    if (audioRef.current && narration?.audioBase64) {
      audioRef.current.src = narration.audioBase64;
      audioRef.current.playbackRate = playbackRate;
      // Auto-play when ready
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch((e) => {
            console.log("Audio autoplay prevented by browser:", e);
            setIsPlaying(false);
          });
      }
    } else if (narration?.useClientFallback || !narration?.audioBase64) {
      // Set duration estimate for speech synthesis
      setDuration(narration?.durationEstimateSec || 30);
    }
  }, [narration?.audioBase64, narration?.useClientFallback]);

  const togglePlay = () => {
    // If a non-English language is active, use client SpeechSynthesis to speak in that language
    const isNonEnglish = currentLanguage.code !== "en";

    // If standard English audio is available and user is viewing English
    if (!isNonEnglish && narration?.audioBase64 && audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
      return;
    }

    // SpeechSynthesis playback in user's selected language
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      if (isPlaying) {
        window.speechSynthesis.cancel();
        if (speechIntervalRef.current) clearInterval(speechIntervalRef.current);
        setIsPlaying(false);
      } else {
        window.speechSynthesis.cancel();
        // Pause any HTML5 English audio if playing
        if (audioRef.current) audioRef.current.pause();

        const textToSpeak = translatedScript || history.chapters?.[activeChapterIndex]?.script || history.narrationScript;
        const utterance = new SpeechSynthesisUtterance(textToSpeak);
        utterance.rate = playbackRate;
        utterance.lang = currentLanguage.code;

        utterance.onend = () => {
          setIsPlaying(false);
          if (speechIntervalRef.current) clearInterval(speechIntervalRef.current);
        };

        window.speechSynthesis.speak(utterance);
        setIsPlaying(true);

        const estDur = duration || 30;
        const startTime = Date.now() - (currentTime * 1000);
        if (speechIntervalRef.current) clearInterval(speechIntervalRef.current);
        speechIntervalRef.current = setInterval(() => {
          const elapsed = (Date.now() - startTime) / 1000;
          if (elapsed >= estDur) {
            setCurrentTime(estDur);
            setIsPlaying(false);
            if (speechIntervalRef.current) clearInterval(speechIntervalRef.current);
          } else {
            setCurrentTime(elapsed);
          }
        }, 200);
      }
    }
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    const curr = audioRef.current.currentTime;
    setCurrentTime(curr);
    const dur = audioRef.current.duration || narration?.durationEstimateSec || 30;
    setDuration(dur);

    // Auto-advance chapters based on progress ratio
    if (history.chapters && history.chapters.length > 0 && dur > 0) {
      const progressRatio = curr / dur;
      const chapterIdx = Math.min(
        history.chapters.length - 1,
        Math.floor(progressRatio * history.chapters.length)
      );
      if (chapterIdx !== activeChapterIndex) {
        setActiveChapterIndex(chapterIdx);
        // Highlight matching pin if focusPointId exists
        const focusId = history.chapters[chapterIdx]?.focusPointId;
        if (focusId) {
          const matchPin = recognition.arKeypoints.find((p) => p.id === focusId);
          if (matchPin) setActivePin(matchPin);
        }
      }
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = parseFloat(e.target.value);
    setCurrentTime(target);
    if (audioRef.current) {
      audioRef.current.currentTime = target;
    }
  };

  const restartAudio = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = 0;
    audioRef.current.play();
    setIsPlaying(true);
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    const nextMuted = !isMuted;
    audioRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const changePlaybackRate = (rate: number) => {
    setPlaybackRate(rate);
    if (audioRef.current) {
      audioRef.current.playbackRate = rate;
    }
  };

  const selectChapter = (index: number) => {
    setActiveChapterIndex(index);
    if (!audioRef.current || duration <= 0) return;
    const targetTime = (index / (history.chapters?.length || 4)) * duration;
    audioRef.current.currentTime = targetTime;
    setCurrentTime(targetTime);
    if (!isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    }

    const focusId = history.chapters?.[index]?.focusPointId;
    if (focusId) {
      const matchPin = recognition.arKeypoints.find((p) => p.id === focusId);
      if (matchPin) setActivePin(matchPin);
    }
  };

  const handleVoiceChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newVoice = e.target.value;
    setSelectedVoice(newVoice);
    if (onRegenerateVoice) {
      await onRegenerateVoice(newVoice);
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
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
        className="hidden"
      />

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
            className={`absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#22d3ee] pointer-events-none opacity-80 ${
              isPlaying ? "animate-pulse" : ""
            }`}
            style={{
              animation: "ar-scan 6s linear infinite alternate",
            }}
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
                  AR OPTIC TRACKING • LOCKED
                </span>
              </div>
              <h2 className="text-base sm:text-xl font-bold text-white tracking-tight mt-0.5">
                {recognition.name}
              </h2>
              <div className="flex items-center space-x-2 text-xs text-slate-300 font-mono mt-0.5">
                <MapPin className="w-3 h-3 text-cyan-400" />
                <span>
                  {recognition.city}, {recognition.country}
                </span>
                <span className="text-slate-600">•</span>
                <span className="text-cyan-400/90">{recognition.periodEra}</span>
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
                  <span className="text-cyan-300">{recognition.architecturalStyle}</span>
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
                    className={`absolute w-8 h-8 rounded-full border transition-all duration-300 ${
                      isSelected
                        ? "border-cyan-400 bg-cyan-400/20 scale-125"
                        : "border-cyan-400/60 group-hover:border-cyan-300 group-hover:scale-110"
                    } animate-ping`}
                    style={{ animationDuration: "3s" }}
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

                {/* Floating AR Inspection Card when pin is clicked */}
                {isSelected && (
                  <div
                    id={`ar-popup-${pin.id}`}
                    className="absolute top-8 left-1/2 -translate-x-1/2 w-60 sm:w-72 bg-slate-950/95 backdrop-blur-xl border border-cyan-400/80 rounded-xl p-3.5 shadow-2xl text-left z-30 animate-in fade-in zoom-in-95 duration-150"
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
                        className="text-cyan-400 hover:text-cyan-300 font-semibold"
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
                  AR Narrated Audio Guide
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                  Gemini 3.1 Flash TTS
                </span>
              </div>
              <p className="text-xs text-slate-400">
                AI Tour Guide Voice: <span className="text-cyan-300 font-medium">{selectedVoice}</span> (24kHz Studio Audio)
              </p>
            </div>
          </div>

          {/* Animated Audio Equalizer Wave */}
          <div className="flex items-center space-x-1 h-6 px-3 py-1 rounded-lg bg-slate-950/80 border border-slate-800">
            {[40, 70, 30, 90, 50, 80, 45, 95, 60, 35].map((height, idx) => (
              <div
                key={idx}
                className={`w-1 rounded-full bg-cyan-400 transition-all duration-150 ${
                  isPlaying ? "animate-pulse opacity-100" : "opacity-30 h-1"
                }`}
                style={{
                  height: isPlaying ? `${Math.max(4, Math.round(height * Math.random()))}px` : "4px",
                  animationDelay: `${idx * 0.1}s`,
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
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center space-x-2.5">
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

              {/* Restart */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                type="button"
                id="narration-restart-btn"
                onClick={restartAudio}
                className="p-2.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
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
                className="p-2.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
                title={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4" />}
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
              <span>LIVE TOUR SUBTITLES</span>
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
                  Translating...
                </span>
              )}
              <span>Chapter {activeChapterIndex + 1} of {history.chapters?.length || 4}</span>
            </div>
          </div>

          <p className="text-sm text-slate-200 leading-relaxed font-sans" dir={currentLanguage.dir || "ltr"}>
            {translatedScript || (activeChapter ? activeChapter.script : history.narrationScript)}
          </p>
        </div>

        {/* Chapter Navigation Timeline */}
        {history.chapters && history.chapters.length > 0 && (
          <div className="space-y-2 pt-1">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center space-x-1">
              <span>Tour Chapters (Click to Jump)</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
              {history.chapters.map((chap, idx) => {
                const isChapActive = activeChapterIndex === idx;
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
                      <span className={isChapActive ? "text-cyan-400 font-semibold flex items-center gap-1" : "text-slate-500"}>
                        {isChapActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />}
                        CH 0{idx + 1}
                      </span>
                      <span className="text-slate-500">{chap.timestampHint || `0:${idx * 20}`}</span>
                    </div>
                    <div className="text-xs font-semibold text-slate-100 line-clamp-1">
                      {chap.title}
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
