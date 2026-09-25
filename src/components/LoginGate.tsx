import React, { useState } from "react";
import {
  Compass,
  Sparkles,
  ShieldCheck,
  Globe,
  Loader2,
  AlertCircle,
  Camera,
  MapPin,
  Volume2,
  CheckCircle2,
  ArrowRight,
  UserCheck,
} from "lucide-react";
import { motion } from "motion/react";
import { signInWithGoogle, signInAsGuest, FirebaseUser } from "../services/firebase";
import { useLanguage } from "../context/LanguageContext";
import { useAccessibility } from "../context/AccessibilityContext";
import { LanguageSelector } from "./LanguageSelector";
import { SeniorModeControl } from "./SeniorModeControl";
import { GoogleAccountSignInModal } from "./GoogleAccountSignInModal";

interface LoginGateProps {
  onLoginSuccess: (user: FirebaseUser) => void;
}

export const LoginGate: React.FC<LoginGateProps> = ({ onLoginSuccess }) => {
  const { t } = useLanguage();
  const { isSeniorMode } = useAccessibility();
  const [isSigningIn, setIsSigningIn] = useState<boolean>(false);
  const [isGuestLoading, setIsGuestLoading] = useState<boolean>(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [isGoogleModalOpen, setIsGoogleModalOpen] = useState<boolean>(false);

  const handleGoogleSignIn = async () => {
    setAuthError(null);
    setIsSigningIn(true);
    try {
      const user = await signInWithGoogle();
      if (user) {
        onLoginSuccess(user);
        return;
      }
    } catch (err: any) {
      console.warn("Google sign-in gate notice:", err);
      setIsGoogleModalOpen(true);
      if (err?.code === "auth/unauthorized-domain") {
        setAuthError(
          "Notice: 'localhost' is not listed in Firebase Authorized Domains. Sign in directly with your Google Account below!"
        );
      } else if (err?.code === "auth/popup-blocked") {
        setAuthError("Popup was blocked by your browser. Sign in directly with your Google Account below!");
      } else if (err?.code === "auth/cancelled-popup-request" || err?.code === "auth/popup-closed-by-user") {
        // User closed popup
      } else {
        setAuthError(err?.message || "Sign in directly with your Google Account below!");
      }
    } finally {
      setIsSigningIn(false);
    }
  };

  const handleGuestSignIn = async () => {
    setAuthError(null);
    setIsGuestLoading(true);
    try {
      const user = await signInAsGuest();
      if (user) {
        onLoginSuccess(user);
      }
    } catch (err: any) {
      console.warn("Guest sign-in notice:", err);
      setAuthError(err?.message || "Guest sign-in unavailable. Please try Google Sign In.");
    } finally {
      setIsGuestLoading(false);
    }
  };

  const featureCards = [
    {
      icon: Camera,
      title: t("feature_ai_vision", "AI Landmark Vision"),
      desc: t("feature_ai_vision_desc", "Detects cathedrals, temples, mosques, monuments & architecture in seconds."),
      accent: "text-cyan-400 border-cyan-500/30 bg-cyan-950/30",
    },
    {
      icon: Volume2,
      title: t("feature_audio_tour", "AR Audio Guides"),
      desc: t("feature_audio_tour_desc", "Immersive multilingual spatial audio commentary for every landmark."),
      accent: "text-purple-400 border-purple-500/30 bg-purple-950/30",
    },
    {
      icon: MapPin,
      title: t("feature_maps_grounding", "Live Maps & Grounding"),
      desc: t("feature_maps_grounding_desc", "Google Search grounded architectural history with Street View directions."),
      accent: "text-emerald-400 border-emerald-500/30 bg-emerald-950/30",
    },
  ];

  return (
    <div
      id="login-gate-screen"
      className="min-h-screen w-full bg-slate-950 text-slate-100 flex flex-col justify-between relative overflow-x-hidden selection:bg-cyan-500/30"
    >
      {/* Background Ambience (No distracting stamps on mobile) */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-50">
        <div className="absolute -top-32 -left-20 w-[450px] h-[450px] bg-gradient-to-br from-cyan-500/20 via-blue-600/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-32 w-[480px] h-[480px] bg-gradient-to-bl from-indigo-500/20 via-purple-600/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-28 left-1/4 w-[500px] h-[500px] bg-cyan-600/15 rounded-full blur-3xl" />
      </div>

      {/* Top Bar with Brand & Global Language Selector */}
      <header className="relative z-20 w-full px-4 sm:px-8 py-4 sm:py-5 flex items-center justify-between border-b border-slate-800/60 bg-slate-950/70 backdrop-blur-md">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-600 to-indigo-600 p-[1px] shadow-lg shadow-cyan-500/25">
            <div className="w-full h-full rounded-[11px] bg-slate-950 flex items-center justify-center">
              <Compass className="w-5 h-5 text-cyan-400" />
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-base sm:text-lg font-bold tracking-tight text-white">
                CityLens AR
              </span>
              <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5 text-cyan-400" />
                AR Optic
              </span>
            </div>
            <span className="text-xs text-slate-400 hidden sm:inline">
              Augmented Reality City Landmark Discovery
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <SeniorModeControl />
          <LanguageSelector />
        </div>
      </header>

      {/* Main Authentication Hero Container */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-8 sm:py-12 max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className={`w-full max-w-lg rounded-3xl p-6 sm:p-9 shadow-2xl shadow-black/60 flex flex-col items-center text-center relative overflow-hidden backdrop-blur-xl border transition-all ${
            isSeniorMode
              ? "bg-slate-950 border-amber-500/60 ring-2 ring-amber-500/20"
              : "bg-slate-900/95 border-slate-800"
          }`}
        >
          {/* Subtle Top Glowing Line */}
          <div
            className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${
              isSeniorMode
                ? "from-transparent via-amber-400 to-transparent opacity-95"
                : "from-transparent via-cyan-400 to-transparent opacity-80"
            }`}
          />

          {isSeniorMode && (
            <div className="mb-4 px-3.5 py-1.5 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-semibold flex items-center space-x-2 shadow-sm">
              <span>👓 Senior Citizen Mode: Large Text & High Contrast</span>
            </div>
          )}

          {/* Compass Hologram Badge */}
          <div className="relative mb-5">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-cyan-950 via-slate-900 to-blue-950 border border-cyan-500/40 flex items-center justify-center shadow-xl shadow-cyan-950/60 ring-4 ring-cyan-500/10">
              <Compass className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-400 animate-pulse" />
            </div>
            <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center shadow-md font-bold text-xs">
              ★
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {t("welcome_to_citylens", "Welcome to CityLens AR")}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2.5 max-w-sm leading-relaxed">
            {t(
              "login_gate_subtitle",
              "Sign in to unlock interactive AR landmark recognition, live historical grounding, and localized audio tours."
            )}
          </p>

          {/* Error Message Toast / Alert */}
          {authError && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full mt-4 p-3 rounded-xl bg-rose-950/80 border border-rose-700/60 text-rose-200 text-xs text-left flex items-start space-x-2"
            >
              <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
              <div className="flex-1">
                <span className="font-semibold text-rose-100">Authentication Note: </span>
                <span>{authError}</span>
              </div>
            </motion.div>
          )}

          {/* Primary Action Buttons */}
          <div className="w-full space-y-3 mt-7">
            {/* Google Sign In Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              id="login-gate-google-btn"
              onClick={handleGoogleSignIn}
              disabled={isSigningIn || isGuestLoading}
              className="w-full flex items-center justify-center space-x-3 py-3.5 px-5 rounded-2xl bg-white hover:bg-slate-100 text-slate-950 font-bold text-sm shadow-xl shadow-cyan-950/20 transition-all duration-150 cursor-pointer disabled:opacity-50"
            >
              {isSigningIn ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-cyan-600" />
                  <span>{t("connecting_account", "Connecting Google Account...")}</span>
                </>
              ) : (
                <>
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                    <path
                      fill="#EA4335"
                      d="M12 5c1.6 0 3 .6 4.1 1.7l3.1-3.1C17.3 1.8 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.2 9 5 12 5z"
                    />
                    <path
                      fill="#4285F4"
                      d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.8z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.6 14.8c-.2-.7-.4-1.5-.4-2.3s.2-1.6.4-2.3L1.9 7.3C.7 9.7 0 12.3 0 15.1s.7 5.4 1.9 7.8l3.7-2.9z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23.5c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2.1-6.4-5L1.9 16.7C3.7 20.4 7.5 23.5 12 23.5z"
                    />
                  </svg>
                  <span>{t("sign_in_google", "Sign in with Google")}</span>
                </>
              )}
            </motion.button>

            {/* Quick Google Account Sign-In Option */}
            <button
              type="button"
              id="login-gate-direct-google-btn"
              onClick={() => setIsGoogleModalOpen(true)}
              className="text-xs text-cyan-400 hover:text-cyan-300 underline font-medium transition cursor-pointer -mt-1"
            >
              Sign in with Google Account directly (Instant)
            </button>

            {/* Guest Explorer Direct Access */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              id="login-gate-guest-btn"
              onClick={handleGuestSignIn}
              disabled={isSigningIn || isGuestLoading}
              className="w-full flex items-center justify-center space-x-2 py-3 px-5 rounded-2xl bg-slate-800/90 hover:bg-slate-700/90 text-slate-200 hover:text-white font-semibold text-xs sm:text-sm border border-slate-700 transition-all duration-150 cursor-pointer disabled:opacity-50 shadow-sm"
            >
              {isGuestLoading ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-cyan-400" />
                  <span>{t("entering_guest", "Entering as Explorer...")}</span>
                </>
              ) : (
                <>
                  <UserCheck className="w-4 h-4 text-cyan-400" />
                  <span>{t("continue_guest", "Enter as Guest Explorer")}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 ml-1" />
                </>
              )}
            </motion.button>
          </div>

          {/* Feature Highlights on Mobile & Desktop */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-2.5 mt-7 text-left">
            {featureCards.map((feat, idx) => {
              const IconComp = feat.icon;
              return (
                <div
                  key={idx}
                  className={`p-2.5 rounded-xl border ${feat.accent} flex flex-col justify-between`}
                >
                  <div className="flex items-center space-x-2 mb-1">
                    <IconComp className="w-3.5 h-3.5 shrink-0" />
                    <span className="text-[11px] font-bold text-white tracking-tight">
                      {feat.title}
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-300 leading-tight">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Security & Cloud Badge */}
          <div className="mt-6 flex items-center justify-center space-x-2 text-[11px] text-slate-400 font-mono">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>{t("secured_by_firebase", "Secured with Firebase Authentication")}</span>
          </div>
        </motion.div>
      </main>

      {/* Google Account Sign-In Modal */}
      <GoogleAccountSignInModal
        isOpen={isGoogleModalOpen}
        onClose={() => setIsGoogleModalOpen(false)}
        onSuccess={(authedUser) => {
          setIsGoogleModalOpen(false);
          onLoginSuccess(authedUser);
        }}
        initialError={authError}
      />

      {/* Clean Footer */}
      <footer className="relative z-20 py-4 px-4 text-center text-xs text-slate-500 font-mono border-t border-slate-900">
        CityLens AR • Multimodal Architectural Vision • All Rights Reserved
      </footer>
    </div>
  );
};
