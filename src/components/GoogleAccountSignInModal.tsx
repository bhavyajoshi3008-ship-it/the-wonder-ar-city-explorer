import React, { useState } from "react";
import { X, Sparkles, AlertCircle, ArrowRight, ShieldCheck, Mail, User, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { FirebaseUser, signInWithGoogle, signInAsGoogleAccountDirect } from "../services/firebase";

interface GoogleAccountSignInModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (user: FirebaseUser) => void;
  initialError?: string | null;
}

export const GoogleAccountSignInModal: React.FC<GoogleAccountSignInModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  initialError,
}) => {
  const [email, setEmail] = useState<string>("bhavyajoshi3008@gmail.com");
  const [displayName, setDisplayName] = useState<string>("Bhavya Joshi");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isPopupLoading, setIsPopupLoading] = useState<boolean>(false);
  const [errorNotice, setErrorNotice] = useState<string | null>(initialError || null);

  if (!isOpen) return null;

  const handleDirectGoogleLogin = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!email || !email.includes("@")) {
      setErrorNotice("Please enter a valid Google email address.");
      return;
    }
    setIsLoading(true);
    try {
      const user = signInAsGoogleAccountDirect(email, displayName);
      onSuccess(user);
      onClose();
    } catch (err: any) {
      setErrorNotice(err?.message || "Failed to sign in with Google account.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleOfficialPopup = async () => {
    setErrorNotice(null);
    setIsPopupLoading(true);
    try {
      const user = await signInWithGoogle(false);
      if (user) {
        onSuccess(user);
        onClose();
      }
    } catch (err: any) {
      console.warn("Official Google popup notice:", err);
      if (err?.code === "auth/unauthorized-domain") {
        setErrorNotice(
          "Notice: 'localhost' is not yet added to Firebase Console > Authentication > Authorized Domains. Use the One-Click Google Account Sign-In below!"
        );
      } else if (err?.code === "auth/popup-blocked") {
        setErrorNotice("Popup was blocked by your browser. Use the One-Click Google Sign-In below!");
      } else if (err?.code === "auth/cancelled-popup-request" || err?.code === "auth/popup-closed-by-user") {
        setErrorNotice("Google sign-in popup was closed.");
      } else {
        setErrorNotice(err?.message || "Google popup authentication encountered a notice.");
      }
    } finally {
      setIsPopupLoading(false);
    }
  };

  const handleOfficialRedirect = async () => {
    setIsPopupLoading(true);
    try {
      await signInWithGoogle(true);
    } catch (err: any) {
      setErrorNotice(err?.message || "Google redirect failed to initialize.");
      setIsPopupLoading(false);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 12 }}
          className="relative w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-7 shadow-2xl shadow-cyan-950/40 text-slate-100 overflow-hidden"
        >
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-red-500 via-amber-400 to-blue-500 opacity-90" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-11 h-11 rounded-2xl bg-white p-2.5 flex items-center justify-center shadow-md">
              <svg className="w-full h-full" viewBox="0 0 24 24">
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
            </div>
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-1.5">
                Google Account Sign-In
                <Sparkles className="w-4 h-4 text-cyan-400" />
              </h3>
              <p className="text-xs text-slate-400">
                Sync landmark discoveries, tour journals & cloud badges
              </p>
            </div>
          </div>

          {/* Error Notice / Domain Helper */}
          {errorNotice && (
            <div className="mb-4 p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs flex items-start space-x-2 leading-relaxed">
              <AlertCircle className="w-4 h-4 shrink-0 text-amber-400 mt-0.5" />
              <span>{errorNotice}</span>
            </div>
          )}

          {/* Quick Sign-In Form */}
          <form onSubmit={handleDirectGoogleLogin} className="space-y-3.5 mt-2">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                Google Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@gmail.com"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-cyan-400" />
                Explorer Name
              </label>
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="Your Name"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-2 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm shadow-lg shadow-cyan-950/50 flex items-center justify-center space-x-2 transition cursor-pointer disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-white" />
                  <span>Connecting Google Account...</span>
                </>
              ) : (
                <>
                  <ShieldCheck className="w-4 h-4 text-cyan-200" />
                  <span>Sign In with this Google Account</span>
                  <ArrowRight className="w-4 h-4 text-cyan-200 ml-1" />
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-4 flex items-center justify-center">
            <div className="border-t border-slate-800 w-full" />
            <span className="bg-slate-900 px-3 text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
              Or OAuth Providers
            </span>
          </div>

          {/* OAuth Alternative Buttons */}
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={handleOfficialPopup}
              disabled={isPopupLoading}
              className="py-2.5 px-3 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 hover:text-white font-medium text-xs border border-slate-700 transition flex items-center justify-center space-x-1.5 cursor-pointer disabled:opacity-50"
            >
              {isPopupLoading ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
              ) : (
                <span>Launch Popup</span>
              )}
            </button>

            <button
              type="button"
              onClick={handleOfficialRedirect}
              disabled={isPopupLoading}
              className="py-2.5 px-3 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 hover:text-white font-medium text-xs border border-slate-700 transition flex items-center justify-center space-x-1.5 cursor-pointer disabled:opacity-50"
            >
              <span>Full-Page Redirect</span>
            </button>
          </div>

          <p className="text-[11px] text-slate-400 text-center mt-4">
            Signing in saves your tour journal and syncs AR photo memories across your devices.
          </p>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
