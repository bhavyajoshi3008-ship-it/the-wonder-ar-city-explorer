import React, { useState, useRef, useEffect } from "react";
import { Globe, Check, Search, Sparkles, ChevronDown, Languages } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { WORLD_LANGUAGES, LanguageOption } from "../data/languages";
import { useLanguage } from "../context/LanguageContext";

export const LanguageSelector: React.FC = () => {
  const { currentLanguage, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredLanguages = WORLD_LANGUAGES.filter((lang) => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return true;
    return (
      lang.name.toLowerCase().includes(query) ||
      lang.nativeName.toLowerCase().includes(query) ||
      lang.code.toLowerCase().includes(query)
    );
  });

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* Selector Trigger Button */}
      <button
        type="button"
        id="global-language-selector-btn"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 text-xs font-medium border border-slate-700/80 transition-all shadow-sm group hover:border-cyan-500/50"
        title="Choose language (supports every language in the world)"
      >
        <span className="text-base leading-none">{currentLanguage.flag}</span>
        <Globe className="w-3.5 h-3.5 text-cyan-400 group-hover:rotate-45 transition-transform duration-300" />
        <span className="font-semibold text-white tracking-wide">
          {currentLanguage.nativeName}
        </span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-cyan-400" : ""
          }`}
        />
      </button>

      {/* Dropdown Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-72 sm:w-80 rounded-2xl bg-slate-950/95 border border-slate-700/90 shadow-2xl backdrop-blur-2xl z-50 overflow-hidden flex flex-col max-h-96"
          >
            {/* Header with Search and Universal Badge */}
            <div className="p-3 border-b border-slate-800/80 bg-slate-900/60">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-1.5 text-xs font-bold text-white">
                  <Languages className="w-4 h-4 text-cyan-400" />
                  <span>World Languages</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                  Global Support
                </span>
              </div>

              {/* Search Bar */}
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  id="search-world-language-input"
                  placeholder="Search any language / खोजें / 搜索..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-8 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  autoFocus
                />
              </div>
            </div>

            {/* Languages Scroll List */}
            <div className="overflow-y-auto p-1.5 space-y-0.5 divide-y divide-slate-800/30">
              {filteredLanguages.length > 0 ? (
                filteredLanguages.map((lang) => {
                  const isSelected = currentLanguage.code === lang.code;
                  return (
                    <button
                      key={lang.code}
                      type="button"
                      id={`lang-opt-${lang.code}`}
                      onClick={() => {
                        setLanguage(lang);
                        setIsOpen(false);
                        setSearchQuery("");
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left transition text-xs ${
                        isSelected
                          ? "bg-cyan-500/20 text-cyan-200 border border-cyan-500/40 font-semibold"
                          : "text-slate-300 hover:bg-slate-900 hover:text-white"
                      }`}
                    >
                      <div className="flex items-center space-x-2.5">
                        <span className="text-lg leading-none">{lang.flag}</span>
                        <div>
                          <div className="text-white font-medium flex items-center gap-1.5">
                            <span>{lang.nativeName}</span>
                            {lang.dir === "rtl" && (
                              <span className="text-[9px] font-mono px-1 py-0.2 rounded bg-slate-800 text-slate-400">
                                RTL
                              </span>
                            )}
                          </div>
                          <div className="text-[10px] text-slate-400">{lang.name}</div>
                        </div>
                      </div>
                      {isSelected && <Check className="w-3.5 h-3.5 text-cyan-400" />}
                    </button>
                  );
                })
              ) : (
                <div className="p-4 text-center text-xs text-slate-400">
                  <span>No language found matching "{searchQuery}".</span>
                  <div className="mt-1 text-[11px] text-cyan-400">
                    Use any language with real-time AI translation!
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Google Translate Element integration */}
            <div className="p-2.5 border-t border-slate-800/80 bg-slate-900/40 text-[10px] font-mono text-slate-400 flex items-center justify-between">
              <span className="flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-cyan-400" />
                Live AI & Neural Translation
              </span>
              <span className="text-slate-500">100+ Dialects</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
