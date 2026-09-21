import React, { useState } from "react";
import {
  LogIn,
  LogOut,
  Cloud,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ShieldCheck,
  User as UserIcon,
} from "lucide-react";
import { FirebaseUser, signInWithGoogle, logOutUser } from "../services/firebase";

interface AuthBarProps {
  user: FirebaseUser | null;
  isLoading: boolean;
  onUserChange?: (user: FirebaseUser | null) => void;
  syncCount?: number;
  isSyncing?: boolean;
}

export const AuthBar: React.FC<AuthBarProps> = ({
  user,
  isLoading,
  syncCount = 0,
  isSyncing = false,
}) => {
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);

  const handleSignIn = async () => {
    setAuthError(null);
    setIsSigningIn(true);
    try {
      await signInWithGoogle();
    } catch (err: any) {
      console.warn("Sign-in handling:", err);
      if (err?.code === "auth/popup-blocked") {
        setAuthError("Popup was blocked by your browser. Please allow popups for this site.");
      } else if (err?.code === "auth/cancelled-popup-request" || err?.code === "auth/popup-closed-by-user") {
        // User intentionally closed popup, no need for scary error
      } else {
        setAuthError(err?.message || "Could not sign in with Google.");
      }
    } finally {
      setIsSigningIn(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOutUser();
    } catch (err: any) {
      console.error("Sign-out error:", err);
    }
  };

  return (
    <div id="auth-cloud-bar" className="flex items-center space-x-1 sm:space-x-2 shrink-0">
      {user ? (
        <div className="flex items-center space-x-1.5 sm:space-x-2 bg-slate-900/90 border border-slate-700/80 rounded-xl px-1.5 py-1 sm:px-2.5 sm:py-1.5 shadow-sm">
          {/* User Avatar */}
          {user.photoURL ? (
            <img
              src={user.photoURL}
              alt={user.displayName || "Traveler"}
              className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-cyan-500/40 object-cover shrink-0"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-300 text-[10px] sm:text-xs font-semibold shrink-0">
              {(user.displayName || user.email || "U")[0].toUpperCase()}
            </div>
          )}

          {/* User Name */}
          <div className="hidden md:flex flex-col text-left">
            <span className="text-xs font-medium text-slate-200 max-w-[100px] truncate leading-tight">
              {user.displayName || user.email?.split("@")[0] || "Explorer"}
            </span>
            {isSyncing && (
              <span className="text-[10px] font-mono text-cyan-400 flex items-center space-x-1 leading-tight animate-pulse">
                <Loader2 className="w-2.5 h-2.5 animate-spin inline-block text-cyan-400" />
                <span>Syncing...</span>
              </span>
            )}
          </div>

          {/* Sign Out Button */}
          <button
            type="button"
            id="signout-button"
            onClick={handleSignOut}
            className="p-1 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-slate-800 transition text-xs cursor-pointer shrink-0"
            title="Sign out of Firebase"
            aria-label="Sign out"
          >
            <LogOut className="w-3.5 h-3.5" />
          </button>
        </div>
      ) : (
        <div className="flex items-center">
          <button
            type="button"
            id="google-signin-button"
            onClick={handleSignIn}
            disabled={isSigningIn || isLoading}
            className="flex items-center space-x-1 sm:space-x-2 px-2 py-1.5 sm:px-3 sm:py-1.5 rounded-xl bg-gradient-to-r from-cyan-600/90 to-blue-600/90 hover:from-cyan-500 hover:to-blue-500 text-white font-medium text-xs shadow-md shadow-cyan-950/40 border border-cyan-400/30 transition active:scale-95 disabled:opacity-50 shrink-0 cursor-pointer"
            title="Sign in with Google to sync tours across devices"
            aria-label="Sign in with Google"
          >
            {isSigningIn ? (
              <>
                <Loader2 className="w-3.5 h-3.5 animate-spin shrink-0" />
                <span className="hidden sm:inline">Signing in...</span>
              </>
            ) : (
              <>
                <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24">
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
                <span className="hidden sm:inline">Sign in with Google</span>
                <span className="sm:hidden text-[11px] font-semibold">Sign In</span>
              </>
            )}
          </button>
        </div>
      )}

      {/* Auth Error Notification */}
      {authError && (
        <div
          id="auth-error-toast"
          className="fixed bottom-4 right-4 z-50 max-w-sm bg-rose-950 border border-rose-700/80 text-rose-200 text-xs p-3 rounded-xl shadow-xl flex items-start space-x-2 animate-in fade-in"
        >
          <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="font-semibold text-white">Google Sign-in Notice</p>
            <p className="mt-0.5 text-slate-300">{authError}</p>
          </div>
          <button
            type="button"
            onClick={() => setAuthError(null)}
            className="text-rose-400 hover:text-white"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
};
