import React, { useState, useRef, useEffect } from "react";
import { Globe, Check, Search, Sparkles, ChevronDown, Languages, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { WORLD_LANGUAGES, LanguageOption } from "../data/languages";
import { useLanguage } from "../context/LanguageContext";

export const LanguageSelector: React.FC = () => {
  const { currentLanguage, setLanguage, t, isTranslatingUI } = useLanguage();
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
        className="flex items-center space-x-1 sm:space-x-1.5 px-2 py-1.5 sm:px-3 sm:py-1.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 text-xs font-medium border border-slate-700/80 transition-all shadow-sm group hover:border-cyan-500/50 shrink-0"
        title="Choose language (supports every language in the world)"
        aria-label="Change Language"
      >
        <span className="text-sm sm:text-base leading-none">{currentLanguage.flag}</span>
        {isTranslatingUI ? (
          <Loader2 className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
        ) : (
          <span className="hidden sm:inline-flex">
            <Globe className="w-3.5 h-3.5 text-cyan-400 group-hover:rotate-45 transition-transform duration-300" />
          </span>
        )}
        <span className="font-semibold text-white tracking-wide hidden sm:inline">
          {currentLanguage.nativeName}
        </span>
        <span className="sm:hidden font-bold text-white text-[11px] font-mono uppercase">
          {currentLanguage.code}
        </span>
        <ChevronDown
          className={`w-3 h-3 text-slate-400 transition-transform duration-200 shrink-0 ${
            isOpen ? "rotate-180 text-cyan-400" : ""
          }`}
        />
      </button>

      {/* Dropdown Modal / Mobile Bottom Sheet */}
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
              className="fixed inset-x-0 bottom-0 z-50 rounded-t-3xl sm:rounded-2xl bg-slate-950 border-t sm:border border-slate-700/80 shadow-2xl sm:absolute sm:inset-x-auto sm:right-0 sm:bottom-auto sm:mt-2 sm:w-80 backdrop-blur-2xl overflow-hidden flex flex-col max-h-[80vh] sm:max-h-96 pb-6 sm:pb-0"
            >
              {/* Mobile Drawer Grab Bar */}
              <div className="w-10 h-1 rounded-full bg-slate-700 mx-auto mt-3 mb-1 sm:hidden" />

              {/* Header with Search and Universal Badge */}
              <div className="p-3 border-b border-slate-800/80 bg-slate-900/60">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-1.5 text-xs font-bold text-white">
                  <Languages className="w-4 h-4 text-cyan-400" />
                  <span>{t("world_languages", "World Languages")}</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                  {t("global_support", "Global Support")}
                </span>
              </div>

              {/* Search Bar */}
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  id="search-world-language-input"
                  placeholder={t("search_language_placeholder", "Search any language / खोजें / 搜索...")}
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
                {t("live_ai_translation", "Live AI & Neural Translation")}
              </span>
              <span className="text-slate-500">{t("dialects_supported", "100+ Dialects")}</span>
            </div>
          </motion.div>
        </>
        )}
      </AnimatePresence>
    </div>
  );
};
