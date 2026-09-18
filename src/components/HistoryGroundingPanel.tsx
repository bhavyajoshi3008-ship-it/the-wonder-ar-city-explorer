import React, { useState } from "react";
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
import { translateText } from "../services/api";

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
  const [translatedCultural, setTranslatedCultural] = useState<string>("");

  React.useEffect(() => {
    if (!history.culturalSignificance) return;
    if (currentLanguage.code === "en") {
      setTranslatedCultural(history.culturalSignificance);
      return;
    }
    let isMounted = true;
    translateText(history.culturalSignificance, currentLanguage.code, currentLanguage.name)
      .then((res) => {
        if (isMounted && res?.translatedText) setTranslatedCultural(res.translatedText);
      })
      .catch(() => {
        if (isMounted) setTranslatedCultural(history.culturalSignificance);
      });
    return () => {
      isMounted = false;
    };
  }, [history.culturalSignificance, currentLanguage.code]);

  const displayedSources = showAllSources
    ? history.groundingSources
    : history.groundingSources.slice(0, 4);

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6 text-left">
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
                <span>Google Search Grounded Intelligence</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                  gemini-3.5-flash
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                Verified against live web index & architectural archives
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-1 text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2.5 py-1 rounded-full">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Fact Checked via Google Search</span>
          </div>
        </div>

        {/* Search queries executed */}
        {history.groundingQueries && history.groundingQueries.length > 0 && (
          <div className="mt-3.5">
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1.5">
              Executed Web Search Queries:
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
                <span>Verified Reference Sources ({history.groundingSources.length})</span>
              </span>
              {history.groundingSources.length > 4 && (
                <button
                  type="button"
                  id="toggle-all-sources-btn"
                  onClick={() => setShowAllSources(!showAllSources)}
                  className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center space-x-0.5"
                >
                  <span>{showAllSources ? "Show fewer" : "View all"}</span>
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
              Historical Timeline & Milestones
            </h3>
          </div>

          <div className="relative pl-6 space-y-5 border-l-2 border-slate-800 ml-2">
            {history.historicalTimeline?.map((milestone, idx) => (
              <motion.div
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.15 }}
                key={idx}
                className="relative group"
              >
                {/* Timeline Dot */}
                <span className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:bg-cyan-400 transition" />

                <div className="inline-block text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-950/70 text-cyan-300 border border-cyan-500/30 mb-1">
                  {milestone.yearOrEra}
                </div>
                <h4 className="text-sm font-bold text-slate-100">{milestone.event}</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  {milestone.description}
                </p>
              </motion.div>
            ))}
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
                Architectural Secrets
              </h3>
            </div>

            <div className="space-y-2.5">
              {history.architecturalSecrets?.map((secret, idx) => (
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
                  <span>{secret}</span>
                </motion.div>
              ))}
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
                  Cultural Significance
                </h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed" dir={currentLanguage.dir || "ltr"}>
                {translatedCultural || history.culturalSignificance}
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
                  Tourism Insider Tips
                </h3>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                {history.visitorTips.map((tip, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-emerald-400 mt-0.5">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
