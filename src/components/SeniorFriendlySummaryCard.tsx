import React, { useState, useEffect } from "react";
import {
  Glasses,
  Volume2,
  Square,
  Landmark,
  MapPin,
  Calendar,
  Sparkles,
  Info,
  CheckCircle2,
} from "lucide-react";
import { motion } from "motion/react";
import { LandmarkRecognition, LandmarkHistory } from "../types";
import { useAccessibility } from "../context/AccessibilityContext";
import { useLanguage } from "../context/LanguageContext";
import { translateText, translateUIBatch } from "../services/api";

interface SeniorFriendlySummaryCardProps {
  recognition: LandmarkRecognition;
  history: LandmarkHistory;
}

export const SeniorFriendlySummaryCard: React.FC<SeniorFriendlySummaryCardProps> = ({
  recognition,
  history,
}) => {
  const { isSeniorMode, speechRate, speakText, stopSpeaking, isSpeaking } = useAccessibility();
  const { currentLanguage, t } = useLanguage();
  const [translatedData, setTranslatedData] = useState<{
    name?: string;
    location?: string;
    yearBuilt?: string;
    significance?: string;
  }>({});

  const landmarkName = recognition.name || "Historic Landmark";
  const location = [recognition.city, recognition.country].filter(Boolean).join(", ") || "City Landmark";
  const yearBuilt = recognition.periodEra || history.historicalTimeline?.[0]?.yearOrEra || "Historic Era";
  const significance =
    history.culturalSignificance ||
    recognition.summary ||
    "A world-renowned cultural and historical monument admired by travelers across generations.";

  useEffect(() => {
    if (currentLanguage.code === "en") {
      setTranslatedData({});
      return;
    }

    const batchKeys: Record<string, string> = {
      name: landmarkName,
      location: location,
      yearBuilt: yearBuilt,
      significance: significance,
    };

    let isMounted = true;
    translateUIBatch(batchKeys, currentLanguage.code, currentLanguage.name)
      .then((res) => {
        if (isMounted && res) {
          setTranslatedData(res);
        }
      })
      .catch(() => {});

    return () => {
      isMounted = false;
    };
  }, [currentLanguage.code, currentLanguage.name, landmarkName, location, yearBuilt, significance]);

  const effectiveName = translatedData.name || landmarkName;
  const effectiveLocation = translatedData.location || location;
  const effectiveYearBuilt = translatedData.yearBuilt || yearBuilt;
  const effectiveSignificance = translatedData.significance || significance;

  const handleReadAloud = () => {
    if (isSpeaking) {
      stopSpeaking();
    } else {
      const speechScript =
        currentLanguage.code === "en"
          ? `${effectiveName}, located in ${effectiveLocation}. Built in ${effectiveYearBuilt}. ${effectiveSignificance}`
          : `${effectiveName}। ${effectiveLocation}। ${effectiveYearBuilt}। ${effectiveSignificance}`;
      speakText(speechScript, currentLanguage.code);
    }
  };

  return (
    <div
      id="senior-friendly-landmark-summary"
      className={`rounded-2xl p-4 sm:p-5 border transition-all shadow-xl relative overflow-hidden ${
        isSeniorMode
          ? "bg-gradient-to-br from-amber-950/40 via-slate-900 to-slate-950 border-amber-500/60 ring-2 ring-amber-500/20"
          : "bg-slate-900/90 border-slate-700/80"
      }`}
    >
      {/* Glow highlight */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3 mb-3.5">
        <div className="flex items-center space-x-2.5">
          <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0 shadow-sm">
            <Glasses className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="text-sm sm:text-base font-bold text-white tracking-wide">
                {t("senior_quick_guide", "Senior Citizen Quick Guide")}
              </h3>
              <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40">
                {t("easy_reading", "Easy Reading")}
              </span>
            </div>
            <p className="text-xs text-slate-400">
              {t("senior_guide_sub", "Clear facts & gentle audio narration for comfortable visits")}
            </p>
          </div>
        </div>

        {/* Read Aloud Button */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          type="button"
          id="senior-read-aloud-btn"
          onClick={handleReadAloud}
          className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-bold transition shadow-md cursor-pointer ${
            isSpeaking
              ? "bg-rose-600 hover:bg-rose-500 text-white shadow-rose-950/50 animate-pulse"
              : "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-amber-950/40"
          }`}
          title="Listen to this summary read aloud clearly"
        >
          {isSpeaking ? (
            <>
              <Square className="w-4 h-4 fill-white" />
              <span>{t("stop_reading", "Stop Audio")}</span>
            </>
          ) : (
            <>
              <Volume2 className="w-4 h-4 text-slate-950" />
              <span>{t("read_aloud_btn", "Listen to Story (Gentle 0.85x)")}</span>
            </>
          )}
        </motion.button>
      </div>

      {/* High-Legibility Core Facts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-3.5">
        <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1">
          <div className="text-[11px] font-mono text-amber-400 uppercase tracking-wider flex items-center space-x-1.5">
            <Landmark className="w-3.5 h-3.5 text-amber-400" />
            <span>{t("monument", "Monument")}</span>
          </div>
          <p className="text-sm font-bold text-white leading-snug" dir={currentLanguage.dir || "ltr"}>{effectiveName}</p>
        </div>

        <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1">
          <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider flex items-center space-x-1.5">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            <span>{t("location", "Location")}</span>
          </div>
          <p className="text-sm font-bold text-white leading-snug" dir={currentLanguage.dir || "ltr"}>{effectiveLocation}</p>
        </div>

        <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1">
          <div className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider flex items-center space-x-1.5">
            <Calendar className="w-3.5 h-3.5 text-emerald-400" />
            <span>{t("built_in", "Built In")}</span>
          </div>
          <p className="text-sm font-bold text-white leading-snug" dir={currentLanguage.dir || "ltr"}>{effectiveYearBuilt}</p>
        </div>
      </div>

      {/* Clear, Uncluttered Significance Paragraph */}
      <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/90 text-slate-100 text-xs sm:text-sm leading-relaxed mb-3">
        <span className="font-bold text-amber-300 mr-1.5">
          {t("what_makes_it_special", "Why it is famous:")}
        </span>
        <span dir={currentLanguage.dir || "ltr"}>{effectiveSignificance}</span>
      </div>

      {/* Senior Citizen Accessibility & Comfort Tips */}
      <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-500/30 flex items-start space-x-2 text-xs text-amber-200">
        <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
        <div className="space-y-0.5">
          <span className="font-bold text-amber-300">
            {t("senior_comfort_tip", "Senior Traveler Accessibility & Comfort Advice:")}{" "}
          </span>
          <span>
            {t(
              "senior_comfort_advice",
              "Paved pathways, resting benches, and elevator access are typically available. Early morning or late afternoon visits avoid midday crowds and high sun."
            )}
          </span>
        </div>
      </div>
    </div>
  );
};
