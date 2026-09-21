import React, { useState, useRef, useEffect } from "react";
import {
  Glasses,
  Check,
  Volume2,
  Sliders,
  Sparkles,
  Type,
  Sun,
  Eye,
  RotateCcw,
  Languages,
  X,
  Play,
  Square,
  HelpCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useAccessibility, TextSize } from "../context/AccessibilityContext";
import { useLanguage } from "../context/LanguageContext";

export const SeniorModeControl: React.FC = () => {
  const {
    isSeniorMode,
    textSize,
    highContrast,
    speechRate,
    isSpeaking,
    toggleSeniorMode,
    setTextSize,
    setHighContrast,
    setSpeechRate,
    speakText,
    stopSpeaking,
  } = useAccessibility();

  const { currentLanguage, resetToEnglish, t } = useLanguage();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const handleTestVoice = () => {
    if (isSpeaking) {
      stopSpeaking();
    } else {
      const sampleText =
        currentLanguage.code === "en"
          ? "Welcome to CityLens AR. The narration is set to a calm, comfortable pace for clear and effortless listening."
          : t(
              "senior_voice_sample",
              "Welcome to CityLens AR. The narration is set to a calm, comfortable pace for clear and effortless listening."
            );
      speakText(sampleText, currentLanguage.code);
    }
  };

  return (
    <div className="relative inline-block" ref={modalRef}>
      {/* Header Quick Button */}
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        type="button"
        id="senior-mode-toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center space-x-1 sm:space-x-2 px-2 py-1.5 sm:px-3 sm:py-1.5 rounded-xl border font-medium text-xs transition-all shadow-sm cursor-pointer shrink-0 ${
          isSeniorMode
            ? "bg-amber-500/20 text-amber-300 border-amber-500/60 shadow-amber-950/40 ring-2 ring-amber-500/30"
            : "bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border-slate-700/80 hover:border-amber-500/40"
        }`}
        title={t("senior_mode_title", "Senior Citizen Friendly & Easy Reading Controls")}
        aria-label="Senior Citizen Mode"
      >
        <Glasses
          className={`w-4 h-4 shrink-0 transition-transform ${
            isSeniorMode ? "text-amber-400 scale-110" : "text-slate-400"
          }`}
        />
        <span className="font-semibold tracking-wide hidden sm:inline">
          <span>Senior Mode: </span>
          <span className={isSeniorMode ? "text-amber-300 font-bold" : "text-slate-400"}>
            {isSeniorMode ? "ON" : "OFF"}
          </span>
        </span>
        <span className="sm:hidden text-[11px] font-bold font-mono">
          <span className={isSeniorMode ? "text-amber-300" : "text-slate-400"}>
            {isSeniorMode ? "ON" : "OFF"}
          </span>
        </span>
        {isSeniorMode && (
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse shrink-0" />
        )}
      </motion.button>

      {/* Senior Friendly Configuration Dialog / Mobile Bottom Sheet */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Mobile Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 sm:hidden"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="fixed inset-x-0 bottom-0 z-50 rounded-t-3xl sm:rounded-2xl bg-slate-950 border-t-2 sm:border-2 border-amber-500/40 shadow-2xl sm:absolute sm:inset-x-auto sm:right-0 sm:bottom-auto sm:mt-2 sm:w-96 text-slate-100 flex flex-col max-h-[85vh] p-4 sm:p-5 pb-8 sm:pb-5 backdrop-blur-2xl"
            >
              {/* Mobile Drawer Grab Bar */}
              <div className="w-10 h-1 rounded-full bg-slate-700 mx-auto mb-3 sm:hidden" />

              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
              <div className="flex items-center space-x-2.5">
                <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shadow-sm">
                  <Glasses className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white flex items-center space-x-2">
                    <span>{t("senior_friendly_heading", "Senior Citizen Friendly")}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 font-semibold">
                      Easy View
                    </span>
                  </h3>
                  <p className="text-xs text-slate-400">
                    {t("senior_mode_desc", "Comfortable reading, slow speech & large buttons")}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center border border-slate-800 transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4 overflow-y-auto pr-1">
              {/* Master 1-Tap Senior Mode Toggle */}
              <div className="p-3.5 rounded-xl bg-gradient-to-r from-amber-950/40 to-slate-900 border border-amber-500/40 flex items-center justify-between gap-3">
                <div className="space-y-0.5">
                  <div className="text-xs font-bold text-amber-300 flex items-center space-x-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>{t("senior_mode_master", "Senior Citizen Easy Mode")}</span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-snug">
                    {t("senior_mode_master_desc", "Enlarges text, slows narration speech, and boosts contrast.")}
                  </p>
                </div>

                <button
                  type="button"
                  id="senior-mode-master-switch"
                  onClick={() => toggleSeniorMode()}
                  className={`relative inline-flex h-7 w-13 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                    isSeniorMode ? "bg-amber-500" : "bg-slate-800"
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                      isSeniorMode ? "translate-x-6" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>

              {/* Text Size Controls */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-200">
                  <div className="flex items-center space-x-1.5">
                    <Type className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{t("text_size", "Text & Reading Size")}</span>
                  </div>
                  <span className="text-[11px] text-amber-400 font-mono font-medium">
                    {textSize === "normal" ? "Standard (100%)" : textSize === "large" ? "Large (112%)" : "Extra Large (125%)"}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {(
                    [
                      { id: "normal", label: "A", sub: "Standard" },
                      { id: "large", label: "A+", sub: "Large" },
                      { id: "xlarge", label: "A++", sub: "Senior" },
                    ] as const
                  ).map((size) => {
                    const isSelected = textSize === size.id;
                    return (
                      <button
                        key={size.id}
                        type="button"
                        id={`text-size-btn-${size.id}`}
                        onClick={() => setTextSize(size.id)}
                        className={`p-2 rounded-xl text-center border transition-all cursor-pointer ${
                          isSelected
                            ? "bg-cyan-500/20 text-cyan-300 border-cyan-400 ring-1 ring-cyan-400/40 shadow-sm"
                            : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
                        }`}
                      >
                        <div className="font-bold text-sm sm:text-base">{size.label}</div>
                        <div className="text-[10px] text-slate-400 font-mono mt-0.5">{size.sub}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Narration Audio Speed (Gentle Pace for Seniors) */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-200">
                  <div className="flex items-center space-x-1.5">
                    <Volume2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>{t("speech_speed", "Audio Tour Narration Pace")}</span>
                  </div>
                  <span className="text-[11px] text-amber-400 font-mono font-medium">
                    {speechRate === 0.85 ? "0.85x (Gentle)" : `${speechRate}x`}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {[
                    { rate: 0.85, label: "0.85x", tag: "Gentle / Senior" },
                    { rate: 1.0, label: "1.0x", tag: "Standard" },
                    { rate: 1.25, label: "1.25x", tag: "Brisk" },
                  ].map((s) => {
                    const isSelected = speechRate === s.rate;
                    return (
                      <button
                        key={s.rate}
                        type="button"
                        id={`speech-rate-btn-${s.rate}`}
                        onClick={() => setSpeechRate(s.rate)}
                        className={`p-2 rounded-xl text-center border transition-all cursor-pointer ${
                          isSelected
                            ? "bg-amber-500/20 text-amber-300 border-amber-400 ring-1 ring-amber-400/40 shadow-sm"
                            : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
                        }`}
                      >
                        <div className="font-bold text-xs sm:text-sm font-mono">{s.label}</div>
                        <div className="text-[10px] text-slate-400 mt-0.5 truncate">{s.tag}</div>
                      </button>
                    );
                  })}
                </div>

                {/* Sample Voice Player */}
                <button
                  type="button"
                  id="test-senior-voice-btn"
                  onClick={handleTestVoice}
                  className="w-full mt-1.5 py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-700 text-xs text-amber-200 flex items-center justify-center space-x-2 transition cursor-pointer"
                >
                  {isSpeaking ? (
                    <>
                      <Square className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
                      <span>{t("stop_audio_test", "Stop Voice Preview")}</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      <span>{t("test_voice_pace", "Listen to Gentle Voice Sample (0.85x)")}</span>
                    </>
                  )}
                </button>
              </div>

              {/* High Contrast Outdoor Mode */}
              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-xs font-semibold text-slate-200 flex items-center space-x-1.5">
                    <Sun className="w-3.5 h-3.5 text-amber-400" />
                    <span>{t("high_contrast", "High-Contrast Outdoor Reading")}</span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    {t("high_contrast_desc", "Sharper contrast for daylight viewing without eye strain.")}
                  </p>
                </div>
                <input
                  type="checkbox"
                  id="high-contrast-toggle"
                  checked={highContrast}
                  onChange={(e) => setHighContrast(e.target.checked)}
                  className="w-5 h-5 accent-amber-500 rounded cursor-pointer"
                />
              </div>

              {/* Language Default Reset Indicator */}
              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center space-x-1.5">
                  <Languages className="w-3.5 h-3.5 text-cyan-400" />
                  <span>
                    {t("active_language", "Language")}:{" "}
                    <span className="text-white font-semibold">{currentLanguage.name}</span>
                  </span>
                </div>

                {currentLanguage.code !== "en" && (
                  <button
                    type="button"
                    id="reset-to-english-btn"
                    onClick={resetToEnglish}
                    className="flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-[11px] text-cyan-300 font-medium transition cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Default English (🇬🇧)</span>
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </>
        )}
      </AnimatePresence>
    </div>
  );
};
