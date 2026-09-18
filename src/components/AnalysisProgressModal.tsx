import React from "react";
import { Sparkles, Search, Volume2, CheckCircle, Loader2, AlertCircle, HelpCircle, RefreshCw } from "lucide-react";
import { motion } from "motion/react";

export type AnalysisStage = "idle" | "recognizing" | "grounding" | "synthesizing" | "complete" | "error";

interface AnalysisProgressModalProps {
  currentStage: AnalysisStage;
  landmarkName?: string;
  error?: string | null;
  onRetry?: () => void;
  onCancel?: () => void;
}

export const AnalysisProgressModal: React.FC<AnalysisProgressModalProps> = ({
  currentStage,
  landmarkName,
  error,
  onRetry,
  onCancel,
}) => {
  if (currentStage === "idle" || currentStage === "complete") return null;

  const steps = [
    {
      id: "recognizing",
      title: "Landmark Recognition",
      model: "Gemini Vision",
      desc: "Analyzing architectural geometry & visual keypoints",
      icon: Sparkles,
    },
    {
      id: "grounding",
      title: "Google Search Grounding",
      model: "Gemini + Search",
      desc: "Querying live web index for history, secrets & milestones",
      icon: Search,
    },
    {
      id: "synthesizing",
      title: "AR Audio Narration",
      model: "Gemini TTS",
      desc: "Synthesizing spatial tour guide commentary",
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

  const isDemandBusy = Boolean(
    error &&
    (error.toLowerCase().includes("high demand") ||
     error.toLowerCase().includes("busy") ||
     error.toLowerCase().includes("503") ||
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

  return (
    <div
      id="analysis-progress-backdrop"
      className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        id="analysis-progress-dialog"
        className="w-full max-w-md bg-slate-900 border border-cyan-500/40 rounded-2xl p-6 shadow-2xl shadow-cyan-950/60 relative overflow-hidden"
      >
        {/* Holographic scanning line at top */}
        <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent ${error ? (isNotLandmark ? "via-amber-400" : "via-rose-500") : "via-cyan-400"} to-transparent animate-pulse`} />

        {/* Center Radar / Optic Animation or Error Icon */}
        <div className="flex flex-col items-center text-center">
          <div className="relative w-16 h-16 mb-4 flex items-center justify-center">
            {error ? (
              <div className={`w-14 h-14 rounded-2xl ${isNotLandmark ? "bg-amber-950/70 border-amber-500/60 shadow-amber-950/60" : "bg-rose-950/70 border-rose-500/60 shadow-rose-950/60"} border flex items-center justify-center shadow-lg`}>
                {isDemandBusy ? (
                  <RefreshCw className="w-7 h-7 text-amber-400 animate-spin" style={{ animationDuration: "12s" }} />
                ) : isNotLandmark ? (
                  <HelpCircle className="w-7 h-7 text-amber-400" />
                ) : (
                  <AlertCircle className="w-7 h-7 text-rose-400" />
                )}
              </div>
            ) : (
              <>
                <div className="absolute inset-0 rounded-full border border-cyan-400/40 border-dashed animate-radar" />
                <motion.div
                  animate={{ scale: [1, 1.12, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-12 h-12 rounded-full bg-gradient-to-tr from-cyan-950 to-blue-950 border border-cyan-500/60 flex items-center justify-center shadow-lg shadow-cyan-500/30"
                >
                  <Sparkles className="w-6 h-6 text-cyan-400" />
                </motion.div>
              </>
            )}
          </div>

          <h3 className="text-lg font-bold text-white tracking-tight">
            {error
              ? isDemandBusy
                ? "AI Service Experiencing High Demand"
                : isNotLandmark
                ? "Photo is Not a Recognized Landmark"
                : "Landmark Not Recognized"
              : landmarkName
              ? `Exploring ${landmarkName}...`
              : "Analyzing City Landmark..."}
          </h3>

          <p className="text-xs text-slate-300 mt-2 max-w-sm leading-relaxed">
            {error || "Executing multi-model AI pipeline: computer vision, search grounding, and audio synthesis."}
          </p>

          {isNotLandmark && (
            <div className="mt-3.5 w-full text-left bg-slate-950/80 border border-amber-500/30 rounded-xl p-3 text-[11px] text-slate-300 space-y-1.5">
              <div className="font-semibold text-amber-400 flex items-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Tips for Landmark Exploration:</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-slate-400 pl-1">
                <li>Capture historical monuments, cathedrals, towers, bridges, or statues.</li>
                <li>Avoid photos of people, animals, indoor rooms, or ordinary objects.</li>
                <li>Or try any of the 6 instant presets below on the home screen!</li>
              </ul>
            </div>
          )}
        </div>

        {/* Pipeline Step List */}
        {!error ? (
          <div className="mt-6 space-y-3">
            {steps.map((step) => {
              const status = getStepStatus(step.id);
              const Icon = step.icon;

              return (
                <motion.div
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.15 }}
                  key={step.id}
                  className={`flex items-start space-x-3 p-3 rounded-xl border transition-all duration-150 ${
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
          <div className="mt-6 flex flex-col items-center space-y-3">
            <div className="flex space-x-3 w-full">
              {onRetry && (
                <button
                  type="button"
                  id="retry-analysis-btn"
                  onClick={onRetry}
                  className="flex-1 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs transition active:scale-95 flex items-center justify-center space-x-1.5"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>{isDemandBusy ? "Try Again Now" : "Retry Photo"}</span>
                </button>
              )}
              {onCancel && (
                <button
                  type="button"
                  id="cancel-analysis-btn"
                  onClick={onCancel}
                  className="flex-1 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-xs transition"
                >
                  Choose Another Photo
                </button>
              )}
            </div>
          </div>
        )}

        <div className="mt-4 pt-3 border-t border-slate-800 text-center">
          <span className="text-[10px] font-mono text-slate-500 tracking-wider">
            Powered by Google DeepMind Gemini API & Google Search
          </span>
        </div>
      </motion.div>
    </div>
  );
};
