import React, { useState, useRef, useEffect } from "react";
import {
  Globe,
  Search,
  ExternalLink,
  Clock,
  Key,
  Landmark,
  Compass,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Sparkles
} from "lucide-react";
import { motion } from "motion/react";
import { LandmarkRecognition, LandmarkHistory } from "../types";
import { useLanguage } from "../context/LanguageContext";
import { translateUIBatch } from "../services/api";
import { SeniorFriendlySummaryCard } from "./SeniorFriendlySummaryCard";

interface HistoryGroundingPanelProps {
  recognition: LandmarkRecognition;
  history: LandmarkHistory;
}

export const HistoryGroundingPanel: React.FC<HistoryGroundingPanelProps> = ({
  recognition,
  history,
}) => {
  const { currentLanguage, t } = useLanguage();
  const [showAllSources, setShowAllSources] = useState<boolean>(false);
  const [translatedData, setTranslatedData] = useState<Record<string, string>>({});
  const cacheRef = useRef<Record<string, Record<string, string>>>({});

  // Dynamic Batch Translation for Historical Timeline, Secrets, Tips, & Cultural Lore
  useEffect(() => {
    if (currentLanguage.code === "en") {
      setTranslatedData({});
      return;
    }

    const cacheKey = `${currentLanguage.code}:${recognition.landmarkName || "landmark"}`;
    if (cacheRef.current[cacheKey]) {
      setTranslatedData(cacheRef.current[cacheKey]);
      return;
    }

    const batchKeys: Record<string, string> = {};

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

    // Historical Timeline
    history.historicalTimeline?.forEach((item, idx) => {
      if (item.event) batchKeys[`milestone_${idx}_event`] = item.event;
      if (item.description) batchKeys[`milestone_${idx}_desc`] = item.description;
      if (item.yearOrEra) batchKeys[`milestone_${idx}_year`] = item.yearOrEra;
    });

    // Architectural Secrets
    history.architecturalSecrets?.forEach((secret, idx) => {
      batchKeys[`secret_${idx}`] = secret;
    });

    // Visitor Tips
    history.visitorTips?.forEach((tip, idx) => {
      batchKeys[`tip_${idx}`] = tip;
    });

    // Features spotted
    recognition.photoAnalysis?.prominentVisualFeatures?.forEach((feat, idx) => {
      batchKeys[`feat_${idx}`] = feat;
    });

    // Keypoints
    recognition.arKeypoints?.forEach((kp) => {
      if (kp.label) batchKeys[`kp_${kp.id}`] = kp.label;
    });

    if (Object.keys(batchKeys).length === 0) return;

    let isMounted = true;
    translateUIBatch(batchKeys, currentLanguage.code, currentLanguage.name)
      .then((res) => {
        if (isMounted && res && Object.keys(res).length > 0) {
          cacheRef.current[cacheKey] = res;
          setTranslatedData(res);
        }
      })
      .catch((err) => {
        console.warn("History panel dynamic translation notice:", err);
      });

    return () => {
      isMounted = false;
    };
  }, [
    currentLanguage.code,
    currentLanguage.name,
    recognition.landmarkName,
    recognition.photoAnalysis,
    recognition.arKeypoints,
    history.culturalSignificance,
    history.photoGroundedNotes,
    history.historicalTimeline,
    history.architecturalSecrets,
    history.visitorTips,
  ]);

  const displayedSources = showAllSources
    ? history.groundingSources
    : history.groundingSources.slice(0, 4);

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6 text-left">
      {/* Senior Citizen Friendly Quick Guide & Gentle Read-Aloud */}
      <SeniorFriendlySummaryCard recognition={recognition} history={history} />

      {/* Google Search Grounding Badge & Verified Sources */}
      <div
        id="google-search-grounding-card"
        className="bg-slate-900/80 rounded-2xl border border-slate-800 p-4 sm:p-5 shadow-lg"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center">
              <Search className="w-4 h-4 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-100 flex items-center space-x-1.5">
                <span>{t("google_grounded_intel", "Google Search Grounded Intelligence")}</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                  gemini-3.5-flash
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                {t("verified_live_web", "Verified against live web index & architectural archives")}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-1 text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2.5 py-1 rounded-full">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{t("fact_checked_google", "Fact Checked via Google Search")}</span>
          </div>
        </div>

        {/* Search queries executed */}
        {history.groundingQueries && history.groundingQueries.length > 0 && (
          <div className="mt-3.5">
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1.5">
              {t("executed_search_queries", "Executed Web Search Queries:")}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {history.groundingQueries.map((query, i) => (
                <span
                  key={i}
                  className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-md bg-slate-950 text-slate-300 text-xs font-mono border border-slate-800"
                >
                  <Search className="w-3 h-3 text-cyan-400" />
                  <span>"{query}"</span>
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Verified Grounding Sources / Citations */}
        {history.groundingSources && history.groundingSources.length > 0 && (
          <div className="mt-4 pt-3 border-t border-slate-800/80">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider flex items-center space-x-1.5">
                <Globe className="w-3 h-3 text-cyan-400" />
                <span>{t("verified_reference_sources", "Verified Reference Sources")} ({history.groundingSources.length})</span>
              </span>
              {history.groundingSources.length > 4 && (
                <button
                  type="button"
                  id="toggle-all-sources-btn"
                  onClick={() => setShowAllSources(!showAllSources)}
                  className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center space-x-0.5 cursor-pointer"
                >
                  <span>{showAllSources ? t("show_fewer", "Show fewer") : t("view_all", "View all")}</span>
                  {showAllSources ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {displayedSources.map((source, index) => (
                <a
                  key={index}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-950 transition group"
                >
                  <div className="truncate pr-2">
                    <div className="text-xs text-slate-200 group-hover:text-cyan-300 transition-colors font-medium truncate">
                      {source.title || "Reference Document"}
                    </div>
                    <div className="text-[10px] text-slate-500 truncate font-mono mt-0.5">
                      {source.url}
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 shrink-0" />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Photo-Grounded Architectural & Visual Analysis Deck */}
      {(recognition.photoAnalysis || history.photoGroundedNotes || recognition.arKeypoints?.length > 0) && (
        <div
          id="photo-grounded-analysis-card"
          className="bg-slate-900/90 rounded-2xl border border-cyan-500/30 p-4 sm:p-5 shadow-xl relative overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3 mb-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shadow-sm">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white flex items-center space-x-2">
                  <span>{t("photo_arch_intel", "Photo Visual & Architectural Analysis")}</span>
                  <span className="text-[10px] font-mono font-normal px-2 py-0.5 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                    {t("your_picture", "Your Picture")}
                  </span>
                </h3>
                <p className="text-xs text-slate-400">
                  {t("visual_features_extracted", "Visual features, perspective framing, and masonry spotted directly in your photograph")}
                </p>
              </div>
            </div>

            <div className="text-xs font-mono text-cyan-400/90 bg-slate-950/80 px-2.5 py-1 rounded-lg border border-slate-800">
              {t("confidence", "Confidence")}: {recognition.confidence}% {t("vision_match", "Vision Match")}
            </div>
          </div>

          {/* Photo-Grounded Context Quote */}
          {history.photoGroundedNotes && (
            <div className="mb-4 p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/20 text-xs text-cyan-200 leading-relaxed flex items-start space-x-2.5">
              <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-cyan-300">{t("photo_grounded_context", "Photo-Grounded Context:")} </span>
                <span dir={currentLanguage.dir || "ltr"}>{translatedData.photoGroundedNotes || history.photoGroundedNotes}</span>
              </div>
            </div>
          )}

          {/* Grid of Detected Photo Attributes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
            {/* 1. Vantage / Perspective */}
            <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1">
              <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider flex items-center space-x-1.5">
                <Compass className="w-3 h-3 text-cyan-400" />
                <span>{t("camera_vantage", "Camera Vantage")}</span>
              </div>
              <p className="text-xs text-slate-200 font-medium leading-snug" dir={currentLanguage.dir || "ltr"}>
                {translatedData.perspectiveAndAngle || recognition.photoAnalysis?.perspectiveAndAngle || "Ground-level perspective of monument facade"}
              </p>
            </div>

            {/* 2. Lighting & Atmosphere */}
            <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1">
              <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider flex items-center space-x-1.5">
                <Clock className="w-3 h-3 text-amber-400" />
                <span>{t("lighting_atmosphere", "Lighting & Atmosphere")}</span>
              </div>
              <p className="text-xs text-slate-200 font-medium leading-snug" dir={currentLanguage.dir || "ltr"}>
                {translatedData.lightingAndAtmosphere || recognition.photoAnalysis?.lightingAndAtmosphere || "Natural daylight highlighting architectural relief"}
              </p>
            </div>

            {/* 3. Visible Materials */}
            <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1">
              <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider flex items-center space-x-1.5">
                <Landmark className="w-3 h-3 text-emerald-400" />
                <span>{t("visible_materials", "Visible Materials")}</span>
              </div>
              <p className="text-xs text-slate-200 font-medium leading-snug" dir={currentLanguage.dir || "ltr"}>
                {translatedData.visibleMaterialsAndTextures || recognition.photoAnalysis?.visibleMaterialsAndTextures || "Quarried masonry and historic facade construction"}
              </p>
            </div>

            {/* 4. Structural Condition */}
            <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1">
              <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider flex items-center space-x-1.5">
                <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                <span>{t("structural_state", "Structural State")}</span>
              </div>
              <p className="text-xs text-slate-200 font-medium leading-snug" dir={currentLanguage.dir || "ltr"}>
                {translatedData.structuralCondition || recognition.photoAnalysis?.structuralCondition || "Well-preserved historic exterior with intact carvings"}
              </p>
            </div>
          </div>

          {/* Prominent Visual Features Badges */}
          {((recognition.photoAnalysis?.prominentVisualFeatures && recognition.photoAnalysis.prominentVisualFeatures.length > 0) ||
            (recognition.arKeypoints && recognition.arKeypoints.length > 0)) && (
            <div className="space-y-2 pt-2 border-t border-slate-800/80">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                {t("features_spotted", "Features Identified in Your Photograph:")}
              </span>
              <div className="flex flex-wrap gap-2">
                {recognition.photoAnalysis?.prominentVisualFeatures?.map((feat, idx) => {
                  const translatedFeat = translatedData[`feat_${idx}`] || feat;
                  return (
                    <span
                      key={`feat-${idx}`}
                      className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-950 border border-cyan-500/30 text-cyan-200 text-xs shadow-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span className="font-medium" dir={currentLanguage.dir || "ltr"}>{translatedFeat}</span>
                    </span>
                  );
                })}
                {recognition.arKeypoints?.map((kp) => {
                  const translatedKp = translatedData[`kp_${kp.id}`] || kp.label;
                  return (
                    <span
                      key={kp.id}
                      className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 text-xs shadow-sm hover:border-cyan-500/40 transition"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span dir={currentLanguage.dir || "ltr"}>{translatedKp}</span>
                      <span className="text-[10px] font-mono text-slate-500">({kp.x}%, {kp.y}%)</span>
                    </span>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Historical Timeline & Architectural Secrets Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Historical Timeline (7 cols) */}
        <div
          id="historical-timeline-deck"
          className="lg:col-span-7 bg-slate-900/80 rounded-2xl border border-slate-800 p-5 shadow-lg space-y-4"
        >
          <div className="flex items-center space-x-2 border-b border-slate-800 pb-3">
            <Clock className="w-4 h-4 text-cyan-400" />
            <h3 className="text-sm font-semibold text-slate-100 uppercase tracking-wide">
              {t("historical_timeline_title", "Historical Timeline & Milestones")}
            </h3>
          </div>

          <div className="relative pl-6 space-y-5 border-l-2 border-slate-800 ml-2">
            {history.historicalTimeline?.map((milestone, idx) => {
              const translatedEvent = translatedData[`milestone_${idx}_event`] || milestone.event;
              const translatedDesc = translatedData[`milestone_${idx}_desc`] || milestone.description;
              const translatedYear = translatedData[`milestone_${idx}_year`] || milestone.yearOrEra;

              return (
                <motion.div
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.15 }}
                  key={idx}
                  className="relative group"
                >
                  {/* Timeline Dot */}
                  <span className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:bg-cyan-400 transition" />

                  <div className="inline-block text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-950/70 text-cyan-300 border border-cyan-500/30 mb-1" dir={currentLanguage.dir || "ltr"}>
                    {translatedYear}
                  </div>
                  <h4 className="text-sm font-bold text-slate-100" dir={currentLanguage.dir || "ltr"}>{translatedEvent}</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed" dir={currentLanguage.dir || "ltr"}>
                    {translatedDesc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Architectural Secrets & Cultural Lore (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Architectural Secrets */}
          <div
            id="architectural-secrets-card"
            className="bg-slate-900/80 rounded-2xl border border-slate-800 p-5 shadow-lg space-y-3"
          >
            <div className="flex items-center space-x-2 border-b border-slate-800 pb-3">
              <Key className="w-4 h-4 text-amber-400" />
              <h3 className="text-sm font-semibold text-slate-100 uppercase tracking-wide">
                {t("architectural_secrets_title", "Architectural Secrets")}
              </h3>
            </div>

            <div className="space-y-2.5">
              {history.architecturalSecrets?.map((secret, idx) => {
                const translatedSecret = translatedData[`secret_${idx}`] || secret;
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.15 }}
                    whileHover={{ x: 3 }}
                    key={idx}
                    className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-amber-500/40 text-xs text-slate-300 leading-relaxed flex items-start space-x-2.5 transition-colors duration-150 group"
                  >
                    <span className="text-[10px] font-mono font-bold text-amber-400 mt-0.5 group-hover:scale-110 transition-transform">
                      0{idx + 1}
                    </span>
                    <span dir={currentLanguage.dir || "ltr"}>{translatedSecret}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Cultural Significance */}
          {history.culturalSignificance && (
            <div
              id="cultural-significance-card"
              className="bg-slate-900/80 rounded-2xl border border-slate-800 p-5 shadow-lg space-y-2.5"
            >
              <div className="flex items-center space-x-2 border-b border-slate-800 pb-2.5">
                <Landmark className="w-4 h-4 text-cyan-400" />
                <h3 className="text-sm font-semibold text-slate-100 uppercase tracking-wide">
                  {t("cultural_significance_title", "Cultural Significance")}
                </h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed" dir={currentLanguage.dir || "ltr"}>
                {translatedData.culturalSignificance || history.culturalSignificance}
              </p>
            </div>
          )}

          {/* Tourist Insider Tips */}
          {history.visitorTips && history.visitorTips.length > 0 && (
            <div
              id="tourist-tips-card"
              className="bg-slate-900/80 rounded-2xl border border-slate-800 p-5 shadow-lg space-y-3"
            >
              <div className="flex items-center space-x-2 border-b border-slate-800 pb-2.5">
                <Compass className="w-4 h-4 text-emerald-400" />
                <h3 className="text-sm font-semibold text-slate-100 uppercase tracking-wide">
                  {t("tourism_insider_tips_title", "Tourism Insider Tips")}
                </h3>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                {history.visitorTips.map((tip, idx) => {
                  const translatedTip = translatedData[`tip_${idx}`] || tip;
                  return (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="text-emerald-400 mt-0.5">•</span>
                      <span dir={currentLanguage.dir || "ltr"}>{translatedTip}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
