import React, { useState } from "react";
import {
  Menu,
  X,
  Home,
  Compass,
  History,
  Glasses,
  Languages,
  Volume2,
  Sun,
  Type,
  ChevronRight,
  ChevronDown,
  Sparkles,
  Camera,
  Check,
  Play,
  Square,
  LogOut,
  LogIn,
  User as UserIcon,
  Layers,
  HelpCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { User as FirebaseUser } from "firebase/auth";
import { useAccessibility, TextSize } from "../context/AccessibilityContext";
import { useLanguage } from "../context/LanguageContext";
import { WORLD_LANGUAGES, LanguageOption } from "../data/languages";
import { auth, logOutUser, signInWithGoogle } from "../services/firebase";

interface YouTubeNavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  viewMode: "capture" | "ar_tour";
  onResetToCapture: () => void;
  onOpenJournal: () => void;
  journalCount: number;
  syncingCount: number;
  user: FirebaseUser | null;
  onOpenSeniorSettings?: () => void;
  onOpenLanguageSelector?: () => void;
}

export const YouTubeNavigationDrawer: React.FC<YouTubeNavigationDrawerProps> = ({
  isOpen,
  onClose,
  viewMode,
  onResetToCapture,
  onOpenJournal,
  journalCount,
  syncingCount,
  user,
  onOpenSeniorSettings,
  onOpenLanguageSelector,
}) => {
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

  const { currentLanguage, setLanguage, t } = useLanguage();
  const [showAllLanguages, setShowAllLanguages] = useState<boolean>(false);
  const [showSeniorDetail, setShowSeniorDetail] = useState<boolean>(false);

  // Popular languages for quick switch list (styled like YouTube subscription list)
  const popularLanguages = [
    { code: "en", name: "English (Global)", flag: "🇺🇸", nativeName: "English" },
    { code: "hi", name: "Hindi (हिंदी)", flag: "🇮🇳", nativeName: "हिन्दी" },
    { code: "gu", name: "Gujarati (ગુજરાતી)", flag: "🇮🇳", nativeName: "ગુજરાતી" },
    { code: "es", name: "Spanish (Español)", flag: "🇪🇸", nativeName: "Español" },
    { code: "fr", name: "French (Français)", flag: "🇫🇷", nativeName: "Français" },
    { code: "ja", name: "Japanese (日本語)", flag: "🇯🇵", nativeName: "日本語" },
    { code: "de", name: "German (Deutsch)", flag: "🇩🇪", nativeName: "Deutsch" },
  ];

  const displayedLanguages = showAllLanguages
    ? WORLD_LANGUAGES.slice(0, 16)
    : popularLanguages;

  const handleTestVoice = () => {
    if (isSpeaking) {
      stopSpeaking();
    } else {
      const sample =
        currentLanguage.code === "en"
          ? "Welcome to CityLens AR. The narration is set to a calm, comfortable pace for easy listening."
          : t(
              "senior_voice_sample",
              "Welcome to CityLens AR. The narration is set to a calm, comfortable pace for easy listening."
            );
      speakText(sample, currentLanguage.code);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOutUser();
      onClose();
    } catch (err) {
      console.warn("Sign-out notice:", err);
    }
  };

  const handleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (err) {
      console.warn("Sign-in notice:", err);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="youtube-drawer-container" className="fixed inset-0 z-50 flex">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm cursor-pointer"
          />

          {/* YouTube-Style Left Slide-out Drawer */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
            className="relative w-72 sm:w-80 h-full bg-[#0f0f0f] text-slate-100 flex flex-col z-10 border-r border-slate-800 shadow-2xl overflow-hidden select-none"
          >
            {/* Top YouTube Header with Hamburger & Brand Logo */}
            <div className="h-14 px-4 flex items-center justify-between border-b border-slate-800/80 shrink-0 bg-[#0f0f0f]">
              <div className="flex items-center space-x-3">
                <button
                  type="button"
                  id="drawer-close-hamburger-btn"
                  onClick={onClose}
                  className="w-10 h-10 -ml-1 rounded-full hover:bg-white/10 text-slate-200 hover:text-white flex items-center justify-center transition cursor-pointer"
                  title="Close Menu"
                  aria-label="Close Navigation Menu"
                >
                  <Menu className="w-5 h-5 text-slate-200" />
                </button>

                {/* Brand Logo styled like YouTube brand in screenshot */}
                <div
                  onClick={() => {
                    onResetToCapture();
                    onClose();
                  }}
                  className="flex items-center space-x-1.5 cursor-pointer group"
                >
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-400 via-blue-600 to-indigo-600 p-[1px] shadow-sm shrink-0">
                    <div className="w-full h-full rounded-[7px] bg-slate-950 flex items-center justify-center">
                      <Compass className="w-3.5 h-3.5 text-cyan-400" />
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="font-bold text-base tracking-tight text-white group-hover:text-cyan-300 transition">
                      CityLens
                    </span>
                    <span className="text-[10px] font-mono text-cyan-400 font-bold ml-1 px-1 py-0.2 rounded bg-cyan-950 border border-cyan-500/40">
                      AR
                    </span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="w-8 h-8 rounded-full hover:bg-white/10 text-slate-400 hover:text-white flex items-center justify-center transition sm:hidden"
                aria-label="Close Drawer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable Navigation Body */}
            <div className="flex-1 overflow-y-auto px-3 py-3 space-y-4 scrollbar-thin scrollbar-thumb-slate-800">
              {/* PRIMARY SECTION (Home, AR Tours, Journal) */}
              <div className="space-y-1">
                {/* Home */}
                <button
                  type="button"
                  id="drawer-nav-home"
                  onClick={() => {
                    onResetToCapture();
                    onClose();
                  }}
                  className={`w-full flex items-center space-x-4 px-3 py-2.5 rounded-xl text-sm font-medium transition cursor-pointer ${
                    viewMode === "capture"
                      ? "bg-white/15 text-white font-semibold"
                      : "text-slate-200 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <Home className={`w-5 h-5 ${viewMode === "capture" ? "text-cyan-400" : "text-slate-300"}`} />
                  <span>{t("nav_home", "Home")}</span>
                </button>

                {/* AR Tour / Live Camera */}
                <button
                  type="button"
                  id="drawer-nav-ar-tour"
                  onClick={() => {
                    if (viewMode !== "ar_tour") {
                      onResetToCapture();
                    }
                    onClose();
                  }}
                  className={`w-full flex items-center space-x-4 px-3 py-2.5 rounded-xl text-sm font-medium transition cursor-pointer ${
                    viewMode === "ar_tour"
                      ? "bg-white/15 text-white font-semibold"
                      : "text-slate-200 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <Compass className={`w-5 h-5 ${viewMode === "ar_tour" ? "text-cyan-400" : "text-slate-300"}`} />
                  <div className="flex items-center justify-between flex-1">
                    <span>{t("nav_ar_tour", "AR Tour & Camera")}</span>
                    {viewMode === "ar_tour" && (
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    )}
                  </div>
                </button>

                {/* Tour Journal / History */}
                <button
                  type="button"
                  id="drawer-nav-journal"
                  onClick={() => {
                    onOpenJournal();
                    onClose();
                  }}
                  className="w-full flex items-center space-x-4 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-white/10 hover:text-white transition cursor-pointer"
                >
                  <History className="w-5 h-5 text-slate-300" />
                  <div className="flex items-center justify-between flex-1">
                    <span>{t("tour_journal", "Tour Journal")}</span>
                    {journalCount > 0 && (
                      <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-mono font-bold border border-cyan-500/30">
                        {journalCount}
                      </span>
                    )}
                  </div>
                </button>
              </div>

              {/* DIVIDER */}
              <div className="h-[1px] bg-slate-800/90 my-2 mx-1" />

              {/* SENIOR CITIZEN ACCESSIBILITY SECTION (Styled like YouTube Subscriptions in screenshot) */}
              <div className="space-y-2">
                <div
                  onClick={() => setShowSeniorDetail(!showSeniorDetail)}
                  className="flex items-center justify-between px-3 py-1 cursor-pointer group"
                >
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-bold text-white group-hover:text-amber-300 transition flex items-center gap-1.5">
                      <Glasses className="w-4 h-4 text-amber-400" />
                      <span>{t("senior_mode", "Senior Citizen Mode")}</span>
                    </span>
                    <span
                      className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-md border ${
                        isSeniorMode
                          ? "bg-amber-500/20 text-amber-300 border-amber-500/40"
                          : "bg-slate-800 text-slate-400 border-slate-700"
                      }`}
                    >
                      {isSeniorMode ? "ACTIVE" : "OFF"}
                    </span>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 text-slate-400 group-hover:text-white transition-transform ${
                      showSeniorDetail ? "rotate-90 text-amber-400" : ""
                    }`}
                  />
                </div>

                {/* PRIMARY 1-TAP BIG TOGGLE BUTTON FOR SENIORS (High visibility & touch target) */}
                <button
                  type="button"
                  id="drawer-senior-mode-master-toggle"
                  onClick={() => toggleSeniorMode()}
                  className={`w-full p-3 rounded-2xl border transition-all flex items-center justify-between cursor-pointer shadow-md ${
                    isSeniorMode
                      ? "bg-gradient-to-r from-amber-950/60 to-slate-900 border-amber-500/60 ring-2 ring-amber-500/30 text-amber-200"
                      : "bg-slate-900/90 hover:bg-slate-800/90 border-slate-700/80 text-slate-200"
                  }`}
                >
                  <div className="flex items-center space-x-3 text-left">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${
                        isSeniorMode
                          ? "bg-amber-500 text-slate-950 border-amber-300 font-black shadow-lg shadow-amber-500/30"
                          : "bg-slate-800 text-slate-400 border-slate-700"
                      }`}
                    >
                      <Glasses className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm font-bold leading-tight">
                        {isSeniorMode ? "Senior Mode Enabled" : "Enable Senior Mode"}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {isSeniorMode ? "Large text, calm voice, high contrast" : "Tap for easier reading & listening"}
                      </div>
                    </div>
                  </div>

                  {/* Switch toggle */}
                  <div
                    className={`relative inline-flex h-6 w-11 shrink-0 rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${
                      isSeniorMode ? "bg-amber-400" : "bg-slate-700"
                    }`}
                  >
                    <span
                      className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                        isSeniorMode ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </div>
                </button>

                {/* Expanded Senior Settings & Presets */}
                {showSeniorDetail && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pl-2 pr-1 space-y-2.5 pt-1"
                  >
                    {/* Text Size Pill Select */}
                    <div className="bg-slate-950/80 p-2.5 rounded-xl border border-slate-800 space-y-2">
                      <div className="flex items-center justify-between text-xs font-semibold text-slate-300">
                        <span className="flex items-center gap-1.5">
                          <Type className="w-3.5 h-3.5 text-cyan-400" />
                          <span>Text Size</span>
                        </span>
                        <span className="text-[10px] text-amber-400 font-mono">
                          {textSize === "normal" ? "Standard" : textSize === "large" ? "Large" : "Extra Large"}
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-1.5">
                        {(["normal", "large", "xlarge"] as const).map((sz) => (
                          <button
                            key={sz}
                            type="button"
                            onClick={() => setTextSize(sz)}
                            className={`py-1.5 px-2 rounded-lg text-xs font-bold text-center border transition cursor-pointer ${
                              textSize === sz
                                ? "bg-cyan-500/20 text-cyan-300 border-cyan-400 ring-1 ring-cyan-400/40"
                                : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white"
                            }`}
                          >
                            {sz === "normal" ? "100%" : sz === "large" ? "112%" : "125%"}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* High Contrast Toggle */}
                    <button
                      type="button"
                      onClick={() => setHighContrast(!highContrast)}
                      className={`w-full px-3 py-2 rounded-xl text-xs font-medium border flex items-center justify-between transition cursor-pointer ${
                        highContrast
                          ? "bg-amber-500/15 border-amber-500/40 text-amber-300"
                          : "bg-slate-950/60 border-slate-800 text-slate-300 hover:text-white"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <Sun className="w-4 h-4 text-amber-400" />
                        <span>High Contrast Highlights</span>
                      </span>
                      <span className="w-2 h-2 rounded-full bg-amber-400" style={{ opacity: highContrast ? 1 : 0.2 }} />
                    </button>

                    {/* Test Audio Pace */}
                    <button
                      type="button"
                      onClick={handleTestVoice}
                      className="w-full px-3 py-2 rounded-xl text-xs font-medium bg-slate-950/60 border border-slate-800 text-slate-300 hover:text-white flex items-center justify-between transition cursor-pointer"
                    >
                      <span className="flex items-center gap-2">
                        {isSpeaking ? (
                          <Square className="w-3.5 h-3.5 text-rose-400" />
                        ) : (
                          <Play className="w-3.5 h-3.5 text-cyan-400" />
                        )}
                        <span>{isSpeaking ? "Stop Voice Sample" : "Test Calm Voice"}</span>
                      </span>
                      <span className="text-[10px] font-mono text-cyan-400">{speechRate}x pace</span>
                    </button>
                  </motion.div>
                )}
              </div>

              {/* DIVIDER */}
              <div className="h-[1px] bg-slate-800/90 my-2 mx-1" />

              {/* LANGUAGES SECTION (Styled like YouTube Subscriptions Channels in screenshot) */}
              <div className="space-y-1">
                <div
                  onClick={() => {
                    if (onOpenLanguageSelector) {
                      onOpenLanguageSelector();
                      onClose();
                    }
                  }}
                  className="flex items-center justify-between px-3 py-1 cursor-pointer group"
                >
                  <span className="text-sm font-bold text-white group-hover:text-cyan-300 transition flex items-center gap-1.5">
                    <Languages className="w-4 h-4 text-cyan-400" />
                    <span>{t("languages", "Languages")}</span>
                  </span>
                  <div className="flex items-center space-x-1 text-slate-400 group-hover:text-white text-xs">
                    <span className="text-[11px] font-mono text-cyan-400">{currentLanguage.name}</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>

                {/* List of languages matching the circular avatar + label format in reference image */}
                <div className="space-y-0.5 pt-1">
                  {displayedLanguages.map((lang) => {
                    const isCurrent = currentLanguage.code === lang.code;
                    return (
                      <button
                        key={lang.code}
                        type="button"
                        onClick={() => {
                          const fullMatch = WORLD_LANGUAGES.find((l) => l.code === lang.code);
                          if (fullMatch) {
                            setLanguage(fullMatch);
                          }
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition cursor-pointer ${
                          isCurrent
                            ? "bg-white/15 text-white font-semibold"
                            : "text-slate-300 hover:bg-white/10 hover:text-white"
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          {/* Circular flag badge like avatar in YouTube drawer */}
                          <div className="w-6 h-6 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs shrink-0 overflow-hidden shadow-sm">
                            {lang.flag}
                          </div>
                          <span className="truncate">{lang.name}</span>
                        </div>

                        {/* Blue active dot like YouTube unread/active channel indicator in screenshot! */}
                        {isCurrent && (
                          <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-sm shrink-0" />
                        )}
                      </button>
                    );
                  })}

                  {/* "Show more" button with ChevronDown matching bottom of screenshot */}
                  <button
                    type="button"
                    onClick={() => {
                      if (onOpenLanguageSelector) {
                        onOpenLanguageSelector();
                        onClose();
                      } else {
                        setShowAllLanguages(!showAllLanguages);
                      }
                    }}
                    className="w-full flex items-center space-x-3 px-3 py-2 rounded-xl text-xs font-medium text-slate-400 hover:bg-white/10 hover:text-white transition cursor-pointer"
                  >
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>{showAllLanguages ? "Show less" : "Show more languages (20+)"}</span>
                  </button>
                </div>
              </div>

              {/* DIVIDER */}
              <div className="h-[1px] bg-slate-800/90 my-2 mx-1" />

              {/* ACCOUNT & CLOUD SYNC SECTION */}
              <div className="space-y-2">
                <div className="px-3 py-1 text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Account & Storage
                </div>

                {user ? (
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2.5">
                    <div className="flex items-center space-x-3">
                      {user.photoURL ? (
                        <img
                          src={user.photoURL}
                          alt={user.displayName || "User"}
                          className="w-9 h-9 rounded-full border border-cyan-500/40 object-cover shrink-0"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <div className="w-9 h-9 rounded-full bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-300 font-bold text-xs shrink-0">
                          {user.displayName?.[0] || user.email?.[0] || "U"}
                        </div>
                      )}
                      <div className="min-w-0 flex-1">
                        <div className="text-xs font-bold text-white truncate">
                          {user.displayName || "Travel Explorer"}
                        </div>
                        <div className="text-[11px] text-slate-400 truncate">
                          {user.email}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-mono pt-1 border-t border-slate-800/80 text-slate-400">
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span>Cloud Synced</span>
                      </span>
                      <button
                        type="button"
                        onClick={handleSignOut}
                        className="text-rose-400 hover:text-rose-300 flex items-center gap-1 cursor-pointer"
                      >
                        <LogOut className="w-3 h-3" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Sign in with Google to sync your visited landmarks and journals across devices.
                    </p>
                    <button
                      type="button"
                      id="drawer-google-sign-in-btn"
                      onClick={handleSignIn}
                      className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xs font-semibold flex items-center justify-center space-x-2 transition shadow-md shadow-cyan-900/30 cursor-pointer"
                    >
                      <LogIn className="w-3.5 h-3.5" />
                      <span>Sign in with Google</span>
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Footer Info */}
            <div className="p-3 border-t border-slate-800/80 bg-[#0f0f0f] text-[10px] font-mono text-slate-500 flex items-center justify-between shrink-0">
              <span>CityLens AR v3.4</span>
              <span className="text-cyan-500/70">Powered by Gemini</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
