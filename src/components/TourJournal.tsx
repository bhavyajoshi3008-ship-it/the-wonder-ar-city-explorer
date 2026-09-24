import React from "react";
import {
  History,
  Trash2,
  MapPin,
  Sparkles,
  ChevronRight,
  X,
  Cloud,
  CheckCircle2,
  LogIn,
  Loader2,
  HardDrive,
  RefreshCw,
  Tag,
  Volume2,
  WifiOff,
} from "lucide-react";
import { motion } from "motion/react";
import { ScannedLandmarkEntry } from "../types";
import { FirebaseUser, signInWithGoogle } from "../services/firebase";
import { TRAVEL_STICKERS } from "../data/travelStickers";
import { useLanguage } from "../context/LanguageContext";

interface TourJournalProps {
  isOpen: boolean;
  onClose: () => void;
  entries: ScannedLandmarkEntry[];
  onSelectEntry: (entry: ScannedLandmarkEntry) => void;
  onClearJournal: () => void;
  onDeleteEntry?: (id: string) => void;
  user?: FirebaseUser | null;
  syncingEntryIds?: string[];
  isGlobalSyncing?: boolean;
  isOnline?: boolean;
}

export const TourJournal: React.FC<TourJournalProps> = ({
  isOpen,
  onClose,
  entries,
  onSelectEntry,
  onClearJournal,
  onDeleteEntry,
  user,
  syncingEntryIds = [],
  isGlobalSyncing = false,
  isOnline = true,
}) => {
  const { t, currentLanguage } = useLanguage();
  if (!isOpen) return null;

  const syncingCount = entries.filter(
    (e) => syncingEntryIds.includes(e.id) || e.syncStatus === "syncing"
  ).length;
  const isAnySyncing = isGlobalSyncing || syncingCount > 0;

  return (
    <div
      id="tour-journal-modal"
      className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        transition={{ type: "spring", damping: 26, stiffness: 320 }}
        className="w-full sm:max-w-2xl h-[88vh] sm:h-auto sm:max-h-[85vh] bg-slate-900 border-t sm:border border-slate-800 rounded-t-3xl sm:rounded-2xl flex flex-col shadow-2xl overflow-hidden pb-4 sm:pb-0"
      >
        {/* Mobile drag handle indicator */}
        <div className="w-10 h-1 rounded-full bg-slate-700 mx-auto mt-2.5 sm:hidden" />
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center">
              <History className="w-4 h-4 text-cyan-400" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="text-base font-bold text-white tracking-tight">
                  {t("tour_journal_title", "City Landmark Tour Journal")}
                </h3>
                {user && (
                  isAnySyncing ? (
                    <span
                      id="header-syncing-indicator"
                      className="inline-flex items-center space-x-1.5 px-2 py-0.5 rounded-full bg-cyan-950/90 border border-cyan-500/50 text-cyan-300 text-[10px] font-mono animate-pulse shadow-sm shadow-cyan-950/50"
                    >
                      <Loader2 className="w-2.5 h-2.5 animate-spin text-cyan-400 shrink-0" />
                      <span>
                        {t("syncing_with_cloud", "Syncing with Cloud...")}
                      </span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-300 text-[10px] font-mono">
                      <Cloud className="w-2.5 h-2.5" />
                      <span>Cloud Firestore</span>
                    </span>
                  )
                )}
              </div>
              <p className="text-xs text-slate-400">
                {entries.length} {t("scanned_landmarks_sub", "scanned landmarks")} • {user ? t("persisted_cloud", "persisted in your Firestore account") : t("stored_locally", "stored locally in your browser")}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {entries.length > 0 && (
              <button
                type="button"
                id="clear-journal-btn"
                onClick={onClearJournal}
                className="p-2 text-xs text-slate-400 hover:text-rose-400 rounded-lg hover:bg-slate-800 transition"
                title={t("clear_all_scans", "Clear all saved scans")}
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
            <button
              type="button"
              id="close-journal-btn"
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Offline Mode Active Banner */}
        {!isOnline && (
          <div className="bg-gradient-to-r from-amber-950/60 via-orange-950/40 to-slate-950 px-4 py-2 border-b border-amber-500/30 flex items-center justify-between text-xs text-amber-200">
            <div className="flex items-center space-x-2">
              <WifiOff className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{t("offline_active_desc", "Offline Mode Active • Saved landmark journals & narration audio are stored locally for immediate access.")}</span>
            </div>
            <span className="hidden sm:inline-flex text-[10px] font-mono px-2 py-0.5 rounded bg-amber-900/60 border border-amber-500/40 text-amber-300 shrink-0">
              {t("offline_storage", "Offline Storage")}
            </span>
          </div>
        )}

        {/* Sync Status Banner if user is not signed in with Google and is online */}
        {(!user || !user.email) && isOnline && (
          <div className="bg-gradient-to-r from-cyan-950/40 via-blue-950/30 to-slate-950 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between text-xs">
            <div className="flex items-center space-x-2 text-slate-300">
              <Cloud className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>{t("connect_google_desc", "Connect Google to back up your journal to Cloud Firestore.")}</span>
            </div>
            <button
              type="button"
              id="journal-connect-google-btn"
              onClick={() => signInWithGoogle()}
              className="px-2.5 py-1 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 font-medium transition text-xs shrink-0 flex items-center space-x-1 cursor-pointer"
            >
              <LogIn className="w-3 h-3" />
              <span>{t("connect", "Connect")}</span>
            </button>
          </div>
        )}

        {/* List of Scanned Landmarks */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {entries.length === 0 ? (
            <div className="py-16 text-center text-slate-500">
              <Sparkles className="w-8 h-8 mx-auto text-slate-600 mb-2" />
              <p className="text-sm font-medium text-slate-400">{t("no_scans_yet", "No scanned landmarks yet")}</p>
              <p className="text-xs text-slate-500 mt-1">
                {t("start_travel_diary", "Take or upload a photo to start your AR travel diary.")}
              </p>
            </div>
          ) : (
            entries.map((entry) => {
              const isItemSyncing =
                syncingEntryIds.includes(entry.id) || entry.syncStatus === "syncing";

              return (
                <div
                  key={entry.id}
                  id={`journal-entry-${entry.id}`}
                  className={`flex items-center space-x-3.5 p-3 rounded-xl transition group relative overflow-hidden ${
                    isItemSyncing
                      ? "bg-cyan-950/25 border border-cyan-500/50 shadow-md shadow-cyan-950/40 ring-1 ring-cyan-500/20"
                      : "bg-slate-950/70 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-950"
                  }`}
                >
                  {/* Subtle top edge shimmer progress bar when actively syncing */}
                  {isItemSyncing && (
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />
                  )}

                  <div
                    onClick={() => {
                      onSelectEntry(entry);
                      onClose();
                    }}
                    className="relative w-16 h-16 rounded-lg overflow-hidden bg-slate-900 shrink-0 border border-slate-800 cursor-pointer"
                  >
                    <img
                      src={entry.imageDataUrl}
                      alt={entry.recognition.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    {isItemSyncing && (
                      <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[1px] flex items-center justify-center">
                        <Loader2 className="w-5 h-5 text-cyan-400 animate-spin drop-shadow" />
                      </div>
                    )}
                  </div>

                  <div
                    onClick={() => {
                      onSelectEntry(entry);
                      onClose();
                    }}
                    className="flex-1 min-w-0 text-left cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 min-w-0 pr-2">
                        <h4 className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors truncate">
                          {entry.recognition.name}
                        </h4>

                        {/* Subtle 'Syncing...' or cloud status indicator */}
                        {isItemSyncing ? (
                          <span
                            id={`sync-status-${entry.id}`}
                            className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-[10px] font-mono tracking-tight animate-pulse shrink-0"
                            title="Synchronizing record with Cloud Firestore"
                          >
                            <Loader2 className="w-2.5 h-2.5 text-cyan-400 animate-spin shrink-0" />
                            <span>{t("syncing", "Syncing...")}</span>
                          </span>
                        ) : user ? (
                          <span
                            className="inline-flex items-center space-x-1 px-1.5 py-0.5 rounded-full bg-emerald-950/50 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono shrink-0"
                            title="Saved to Cloud Firestore"
                          >
                            <Cloud className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
                            <span className="hidden sm:inline">{t("synced", "Synced")}</span>
                          </span>
                        ) : (
                          <span
                            className="inline-flex items-center space-x-1 px-1.5 py-0.5 rounded-full bg-slate-800/60 border border-slate-700/40 text-slate-400 text-[10px] font-mono shrink-0"
                            title="Stored locally in browser"
                          >
                            <HardDrive className="w-2.5 h-2.5 text-slate-400 shrink-0" />
                            <span className="hidden sm:inline">{t("local", "Local")}</span>
                          </span>
                        )}
                      </div>

                      <span className="text-[10px] font-mono text-slate-500 shrink-0">
                        {new Date(entry.scannedAt).toLocaleDateString(undefined, {
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>

                    <div className="flex items-center space-x-1.5 text-xs text-slate-400 mt-0.5">
                      <MapPin className="w-3 h-3 text-cyan-400 shrink-0" />
                      <span className="truncate">
                        {entry.recognition.city}, {entry.recognition.country}
                      </span>
                      <span className="text-slate-600">•</span>
                      <span className="text-[11px] font-mono text-cyan-400/80">
                        {entry.recognition.periodEra}
                      </span>
                    </div>

                    <p className="text-[11px] text-slate-400 line-clamp-1 mt-1">
                      {entry.recognition.summary}
                    </p>

                    {/* Stamped Travel Sticker & Offline Audio Badges */}
                    <div className="mt-2 flex flex-wrap items-center gap-1.5">
                      {(() => {
                        // Deterministically assign a stylish travel sticker based on entry id
                        const hash = entry.id.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
                        const sticker = TRAVEL_STICKERS[hash % TRAVEL_STICKERS.length];
                        return (
                          <span
                            className={`inline-flex items-center space-x-1 px-2 py-0.5 rounded-full text-[9px] font-mono font-semibold border bg-gradient-to-r ${sticker.bgGradient} ${sticker.borderColor} ${sticker.textColor}`}
                          >
                            <span>{sticker.emoji}</span>
                            <span>{sticker.label}</span>
                            <span className="text-slate-400">• {sticker.generation}</span>
                          </span>
                        );
                      })()}

                      {/* Offline Audio Available Badge */}
                      {entry.narration?.audioBase64 ? (
                        <span
                          className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-[9px] font-mono"
                          title="Audio narration asset persisted locally in IndexedDB"
                        >
                          <Volume2 className="w-2.5 h-2.5 text-cyan-400 shrink-0" />
                          <span>{t("audio_cached", "Audio Cached")}</span>
                        </span>
                      ) : (
                        <span
                          className="inline-flex items-center space-x-1 px-1.5 py-0.5 rounded-full bg-slate-800/60 border border-slate-700/30 text-slate-400 text-[9px] font-mono"
                          title="History & AR markers available offline"
                        >
                          <HardDrive className="w-2.5 h-2.5 text-slate-400 shrink-0" />
                          <span>{t("offline_ready", "Offline Ready")}</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Individual Delete Action */}
                  {onDeleteEntry && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onDeleteEntry(entry.id);
                      }}
                      className="p-1.5 text-slate-500 hover:text-rose-400 hover:bg-slate-900 rounded-lg transition"
                      title="Delete this scan"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}

                  <div
                    onClick={() => {
                      onSelectEntry(entry);
                      onClose();
                    }}
                    className="cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 shrink-0" />
                  </div>
                </div>
              );
            })
          )}
        </div>
      </motion.div>
    </div>
  );
};
