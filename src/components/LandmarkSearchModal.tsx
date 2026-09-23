import React, { useState, useEffect, useRef } from "react";
import { Search, MapPin, X, Landmark, Sparkles, Compass, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { searchLandmarks, LandmarkSearchResult } from "../services/api";
import { useLanguage } from "../context/LanguageContext";

interface LandmarkSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectLandmark: (landmarkName: string) => void;
  title?: string;
  subtitle?: string;
  currentLandmarkName?: string;
}

const POPULAR_LANDMARKS = [
  { name: "Taj Mahal", city: "Agra, India", flag: "🇮🇳" },
  { name: "Colosseum", city: "Rome, Italy", flag: "🇮🇹" },
  { name: "Big Ben", city: "London, UK", flag: "🇬🇧" },
  { name: "Eiffel Tower", city: "Paris, France", flag: "🇫🇷" },
  { name: "Petra", city: "Ma'an, Jordan", flag: "🇯🇴" },
  { name: "Golden Temple", city: "Amritsar, India", flag: "🇮🇳" },
  { name: "Pyramids of Giza", city: "Giza, Egypt", flag: "🇪🇬" },
  { name: "Machu Picchu", city: "Cusco, Peru", flag: "🇵🇪" },
  { name: "Sagrada Família", city: "Barcelona, Spain", flag: "🇪🇸" },
  { name: "Angkor Wat", city: "Siem Reap, Cambodia", flag: "🇰🇭" },
  { name: "Hagia Sophia", city: "Istanbul, Turkey", flag: "🇹🇷" },
  { name: "Statue of Liberty", city: "New York, USA", flag: "🇺🇸" },
  { name: "Great Wall of China", city: "Beijing, China", flag: "🇨🇳" },
  { name: "Qutub Minar", city: "New Delhi, India", flag: "🇮🇳" },
  { name: "Christ the Redeemer", city: "Rio de Janeiro, Brazil", flag: "🇧🇷" },
  { name: "Leaning Tower of Pisa", city: "Pisa, Italy", flag: "🇮🇹" },
];

export const LandmarkSearchModal: React.FC<LandmarkSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectLandmark,
  title = "Search or Change Landmark",
  subtitle = "Select which monument to tour with 3D AR keypoints, synchronized speech narration & authentic history",
  currentLandmarkName,
}) => {
  const { t } = useLanguage();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<LandmarkSearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setIsSearching(true);
      searchLandmarks("").then((res) => {
        setResults(res);
        setIsSearching(false);
      });
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const timer = setTimeout(() => {
      setIsSearching(true);
      searchLandmarks(query).then((res) => {
        setResults(res);
        setIsSearching(false);
      });
    }, 180);
    return () => clearTimeout(timer);
  }, [query, isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.18 }}
          className="relative w-full max-w-xl bg-slate-900 border border-cyan-500/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
        >
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-slate-800 flex items-start justify-between bg-slate-950/60">
            <div>
              <div className="flex items-center space-x-2">
                <Landmark className="w-5 h-5 text-cyan-400" />
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">{title}</h3>
              </div>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">{subtitle}</p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Search Input */}
          <div className="p-4 border-b border-slate-800 bg-slate-900/90">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan-400 pointer-events-none" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type any monument name (e.g., Taj Mahal, Colosseum, Big Ben)..."
                className="w-full bg-slate-950 border border-slate-700 focus:border-cyan-400 rounded-xl pl-10 pr-10 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition shadow-inner"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Quick Chips */}
            <div className="flex items-center gap-1.5 overflow-x-auto mt-3 pb-1 scrollbar-none text-xs">
              <span className="text-[11px] text-slate-500 font-mono shrink-0">Popular:</span>
              {POPULAR_LANDMARKS.slice(0, 6).map((lm) => (
                <button
                  key={lm.name}
                  type="button"
                  onClick={() => {
                    onSelectLandmark(lm.name);
                    onClose();
                  }}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium border shrink-0 transition cursor-pointer flex items-center space-x-1 ${
                    currentLandmarkName?.toLowerCase() === lm.name.toLowerCase()
                      ? "bg-cyan-500/20 border-cyan-400 text-cyan-300 font-semibold"
                      : "bg-slate-800/80 hover:bg-slate-750 border-slate-700 text-slate-300 hover:text-white hover:border-cyan-500/40"
                  }`}
                >
                  <span>{lm.flag}</span>
                  <span>{lm.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Results List */}
          <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-2">
            {isSearching && results.length === 0 ? (
              <div className="py-8 text-center text-slate-500 text-xs font-mono">
                Searching verified heritage dossiers & encyclopedia...
              </div>
            ) : results.length > 0 ? (
              results.map((item) => {
                const isSelected = currentLandmarkName?.toLowerCase() === item.name.toLowerCase();
                return (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => {
                      onSelectLandmark(item.name);
                      onClose();
                    }}
                    className={`w-full text-left p-3 rounded-xl border transition flex items-center justify-between gap-3 cursor-pointer group ${
                      isSelected
                        ? "bg-cyan-950/40 border-cyan-500/50 text-white"
                        : "bg-slate-950/60 hover:bg-slate-800/80 border-slate-800/80 hover:border-cyan-500/30 text-slate-200"
                    }`}
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-sm text-white group-hover:text-cyan-300 transition-colors truncate">
                          {item.name}
                        </span>
                        {item.localName && (
                          <span className="text-[11px] text-slate-400 font-serif truncate hidden xs:inline">
                            ({item.localName})
                          </span>
                        )}
                        {item.source === "verified" && (
                          <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-700/50 shrink-0">
                            VERIFIED
                          </span>
                        )}
                      </div>
                      <div className="flex items-center space-x-2 text-xs text-slate-400 mt-0.5">
                        <MapPin className="w-3 h-3 text-cyan-400 shrink-0" />
                        <span className="truncate">{item.city ? `${item.city}${item.country ? `, ${item.country}` : ""}` : item.country || "Global Heritage"}</span>
                        {item.architecturalStyle && (
                          <>
                            <span className="text-slate-600">•</span>
                            <span className="text-slate-400 truncate">{item.architecturalStyle}</span>
                          </>
                        )}
                      </div>
                      {item.summary && (
                        <p className="text-[11px] text-slate-400/90 line-clamp-1 mt-1 font-sans">
                          {item.summary}
                        </p>
                      )}
                    </div>
                    {isSelected ? (
                      <div className="w-6 h-6 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                    ) : (
                      <div className="w-6 h-6 rounded-full border border-slate-700 group-hover:border-cyan-400 group-hover:bg-cyan-500/10 flex items-center justify-center shrink-0 transition-colors">
                        <Compass className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400" />
                      </div>
                    )}
                  </button>
                );
              })
            ) : (
              <div className="py-8 text-center text-slate-400">
                <Landmark className="w-8 h-8 text-slate-600 mx-auto mb-2" />
                <p className="text-sm font-semibold text-slate-300">No matching monument found</p>
                <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
                  Try searching for another famous site, or select from the popular monuments above.
                </p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-3 bg-slate-950/80 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span className="text-[11px] font-mono text-cyan-400">
              {results.length} monuments available
            </span>
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold cursor-pointer"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
