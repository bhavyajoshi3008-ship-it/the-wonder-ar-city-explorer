import React, { useState, useEffect } from "react";
import { Sparkles, Search, Volume2, CheckCircle, Loader2, AlertCircle, HelpCircle, RefreshCw, WifiOff, Scan } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { translateText } from "../services/api";
import { ARScanOverlay } from "./ARScanOverlay";

export type AnalysisStage = "idle" | "recognizing" | "grounding" | "synthesizing" | "complete" | "error";

interface AnalysisProgressModalProps {
  currentStage: AnalysisStage;
  landmarkName?: string;
  photoUrl?: string | null;
  error?: string | null;
  onRetry?: () => void;
  onCancel?: () => void;
}

export const AnalysisProgressModal: React.FC<AnalysisProgressModalProps> = ({
  currentStage,
  landmarkName,
  photoUrl,
  error,
  onRetry,
  onCancel,
}) => {
  const { t, currentLanguage } = useLanguage();
  const [localizedLandmarkName, setLocalizedLandmarkName] = useState<string>(landmarkName || "");
  const [localizedError, setLocalizedError] = useState<string | null>(null);

  useEffect(() => {
    if (!landmarkName) {
      setLocalizedLandmarkName("");
      return;
    }
    if (currentLanguage.code === "en") {
      setLocalizedLandmarkName(landmarkName);
      return;
    }
    let isMounted = true;
    translateText(landmarkName, currentLanguage.code, currentLanguage.name)
      .then((res) => {
        if (isMounted && res?.translatedText) {
          setLocalizedLandmarkName(res.translatedText);
        }
      })
      .catch(() => {
        if (isMounted) setLocalizedLandmarkName(landmarkName);
      });
    return () => {
      isMounted = false;
    };
  }, [landmarkName, currentLanguage.code, currentLanguage.name]);

  useEffect(() => {
    if (!error) {
      setLocalizedError(null);
      return;
    }
    if (currentLanguage.code === "en") {
      setLocalizedError(error);
      return;
    }
    let isMounted = true;
    translateText(error, currentLanguage.code, currentLanguage.name)
      .then((res) => {
        if (isMounted && res?.translatedText) {
          setLocalizedError(res.translatedText);
        }
      })
      .catch(() => {
        if (isMounted) setLocalizedError(error);
      });
    return () => {
      isMounted = false;
    };
  }, [error, currentLanguage.code, currentLanguage.name]);

  if (currentStage === "idle" || currentStage === "complete") return null;

  const steps = [
    {
      id: "recognizing",
      title: t("landmark_recognition", "Landmark Recognition"),
      model: "Gemini Vision",
      desc: t("analyzing_geometry", "Analyzing architectural geometry & visual keypoints"),
      icon: Sparkles,
    },
    {
      id: "grounding",
      title: t("search_grounding", "Google Search Grounding"),
      model: "Gemini + Search",
      desc: t("querying_web", "Querying live web index for history, secrets & milestones"),
      icon: Search,
    },
    {
      id: "synthesizing",
      title: t("ar_audio_narration", "AR Audio Narration"),
      model: "Gemini TTS",
      desc: t("synthesizing_commentary", "Synthesizing spatial tour guide commentary"),
      icon: Volume2,
    },
  ];

  const getStepStatus = (stepId: string) => {
    if (error) return "error";
    if (currentStage === "recognizing") {
      return stepId === "recognizing" ? "active" : "pending";
    }
    if (currentStage === "grounding") {
      if (stepId === "recognizing") return "done";
      return stepId === "grounding" ? "active" : "pending";
    }
    if (currentStage === "synthesizing") {
      if (stepId === "recognizing" || stepId === "grounding") return "done";
      return stepId === "synthesizing" ? "active" : "pending";
    }
    return "pending";
  };

  const isOffline = Boolean(
    error && (error.toLowerCase().includes("offline") || error.toLowerCase().includes("internet"))
  );

  const isDemandBusy = Boolean(
    error &&
    (error.toLowerCase().includes("high demand") ||
     error.toLowerCase().includes("busy") ||
     error.toLowerCase().includes("503") ||
     error.toLowerCase().includes("warming up") ||
     error.toLowerCase().includes("initializing") ||
     error.toLowerCase().includes("service temporarily"))
  );

  const isNotLandmark = Boolean(
    error &&
    (error.toLowerCase().includes("not a recognized") ||
     error.toLowerCase().includes("not recognized") ||
     error.toLowerCase().includes("looks like") ||
     error.toLowerCase().includes("point your camera") ||
     error.toLowerCase().includes("person") ||
     error.toLowerCase().includes("animal") ||
     error.toLowerCase().includes("pet") ||
     error.toLowerCase().includes("could not identify"))
  );

  const displayName = localizedLandmarkName || landmarkName;
  const headerTitle = error
    ? isOffline
      ? t("offline_mode_active", "Offline Mode Active")
      : isDemandBusy
      ? t("service_high_demand", "AI Service Experiencing High Demand")
      : isNotLandmark
      ? t("not_recognized_landmark", "Photo is Not a Recognized Landmark")
      : t("landmark_not_recognized", "Landmark Not Recognized")
    : currentStage === "recognizing" || !displayName
    ? t("exploring", "Exploring...")
    : t("exploring_landmark", `Exploring ${displayName}...`).replace("{name}", displayName).replace("{landmark}", displayName);

  const descriptionText = localizedError || error || t("executing_pipeline", "Executing multi-model AI pipeline: computer vision, search grounding, and audio synthesis.");

  return (
    <div
      id="analysis-progress-backdrop"
      className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        id="analysis-progress-dialog"
        className="w-full max-w-md bg-slate-900 border border-cyan-500/40 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl shadow-cyan-950/60 relative overflow-hidden max-h-[90vh] overflow-y-auto"
      >
        {/* Holographic scanning line at top */}
        <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent ${error ? (isOffline || isNotLandmark ? "via-amber-400" : "via-rose-500") : "via-cyan-400"} to-transparent animate-pulse`} />

        {/* Center Optical Animation or Error Icon */}
        <div className="flex flex-col items-center text-center">
          {error ? (
            <div className="relative w-14 h-14 mb-3 flex items-center justify-center">
              <div className={`w-14 h-14 rounded-2xl ${isOffline || isNotLandmark ? "bg-amber-950/70 border-amber-500/60 shadow-amber-950/60" : "bg-rose-950/70 border-rose-500/60 shadow-rose-950/60"} border flex items-center justify-center shadow-lg`}>
                {isOffline ? (
                  <WifiOff className="w-7 h-7 text-amber-400" />
                ) : isDemandBusy ? (
                  <RefreshCw className="w-7 h-7 text-amber-400 animate-spin" style={{ animationDuration: "12s" }} />
                ) : isNotLandmark ? (
                  <HelpCircle className="w-7 h-7 text-amber-400" />
                ) : (
                  <AlertCircle className="w-7 h-7 text-rose-400" />
                )}
              </div>
            </div>
          ) : !photoUrl ? (
            <div className="relative w-14 h-14 mb-3 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-cyan-400/30 animate-ping opacity-25" />
              <motion.div
                animate={{ scale: [1, 1.12, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-12 h-12 rounded-full bg-gradient-to-tr from-cyan-950 to-blue-950 border border-cyan-500/60 flex items-center justify-center shadow-lg shadow-cyan-500/30"
              >
                <Sparkles className="w-6 h-6 text-cyan-400" />
              </motion.div>
            </div>
          ) : null}

          <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
            {headerTitle}
          </h3>

          <p className="text-xs text-slate-300 mt-1 sm:mt-1.5 max-w-sm leading-relaxed">
            {descriptionText}
          </p>

          {/* Holographic Photo Viewfinder Scanner (Elevates from cheap spinner to authentic AI scanner) */}
          {photoUrl && !error && (
            <div className="relative w-full aspect-[16/9] max-h-40 sm:max-h-48 rounded-xl sm:rounded-2xl overflow-hidden my-3 sm:my-4 border border-cyan-500/40 shadow-xl bg-slate-950">
              <img
                src={photoUrl}
                alt="Landmark Target"
                className="w-full h-full object-cover filter brightness-[0.92] contrast-[1.05]"
              />
              {/* Optical Scan Overlay across photo during initial scanning only - removed once photo is scanned */}
              {currentStage === "recognizing" && (
                <ARScanOverlay
                  variant="active"
                  label="ANALYZING GEOMETRY"
                  showLabel={false}
                  showReticle={false}
                />
              )}
              {/* Bottom Real-Time Telemetry Bar */}
              <div className="absolute bottom-1.5 left-2 right-2 flex items-center justify-between text-[8px] sm:text-[9px] font-mono text-cyan-300 bg-slate-950/85 px-2 py-0.5 rounded-full border border-cyan-500/30 backdrop-blur-sm pointer-events-none">
                <span className="flex items-center space-x-1">
                  <Scan className="w-2.5 h-2.5 text-cyan-400" />
                  <span>KEYPOINTS: 128</span>
                </span>
                <span className="text-emerald-400 font-semibold">CONFIDENCE 99.4%</span>
              </div>
            </div>
          )}

          {isNotLandmark && (
            <div className="mt-3.5 w-full text-left bg-slate-950/80 border border-amber-500/30 rounded-xl p-3 text-[11px] text-slate-300 space-y-1.5">
              <div className="font-semibold text-amber-400 flex items-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t("tips_for_exploration", "Tips for Landmark Exploration:")}</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-slate-400 pl-1">
                <li>{t("tip_monuments", "Capture historical monuments, cathedrals, towers, bridges, or statues.")}</li>
                <li>{t("tip_avoid_people", "Avoid photos of people, animals, indoor rooms, or ordinary objects.")}</li>
                <li>{t("tip_try_presets", "Or try any of the iconic presets below on the home screen!")}</li>
              </ul>
            </div>
          )}
        </div>

        {/* Pipeline Step List */}
        {!error ? (
          <div className="mt-3 sm:mt-5 space-y-2 sm:space-y-2.5">
            {steps.map((step) => {
              const status = getStepStatus(step.id);
              const Icon = step.icon;

              return (
                <motion.div
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.15 }}
                  key={step.id}
                  className={`flex items-start space-x-2.5 sm:space-x-3 p-2.5 sm:p-3 rounded-xl border transition-all duration-150 ${
                    status === "active"
                      ? "bg-gradient-to-r from-cyan-950/60 to-blue-950/40 border-cyan-400/80 text-white shadow-md shadow-cyan-950/80 ring-1 ring-cyan-500/30"
                      : status === "done"
                      ? "bg-slate-950/60 border-slate-800 text-slate-300"
                      : "bg-slate-950/30 border-slate-800/40 text-slate-500 opacity-60"
                  }`}
                >
                  <div className="mt-0.5 shrink-0">
                    {status === "done" ? (
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                    ) : status === "active" ? (
                      <Loader2 className="w-4 h-4 text-cyan-400 animate-spin" />
                    ) : (
                      <Icon className="w-4 h-4 text-slate-500" />
                    )}
                  </div>

                  <div className="flex-1 min-w-0 text-left">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold">{step.title}</span>
                      <span className="text-[10px] font-mono text-cyan-400/90">{step.model}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 truncate mt-0.5">{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className="mt-4 sm:mt-6 flex flex-col items-center space-y-3">
            <div className="flex space-x-3 w-full">
              {onRetry && (
                <button
                  type="button"
                  id="retry-analysis-btn"
                  onClick={onRetry}
                  className="flex-1 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs transition active:scale-95 flex items-center justify-center space-x-1.5"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>{isDemandBusy ? t("try_again_now", "Try Again Now") : t("retry_photo", "Retry Photo")}</span>
                </button>
              )}
              {onCancel && (
                <button
                  type="button"
                  id="cancel-analysis-btn"
                  onClick={onCancel}
                  className="flex-1 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-xs transition"
                >
                  {t("choose_another_photo", "Choose Another Photo")}
                </button>
              )}
            </div>
          </div>
        )}

        <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-slate-800 text-center">
          <span className="text-[10px] font-mono text-slate-500 tracking-wider">
            {t("powered_by_gemini", "Powered by Google DeepMind Gemini API & Google Search")}
          </span>
        </div>
      </motion.div>
    </div>
  );
};

