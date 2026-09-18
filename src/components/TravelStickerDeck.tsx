import React, { useState } from "react";
import { Sparkles, Heart, Check, Plane, Tag, Compass } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import confetti from "canvas-confetti";
import { TRAVEL_STICKERS, TravelSticker } from "../data/travelStickers";

interface TravelStickerDeckProps {
  onSelectSticker?: (sticker: TravelSticker) => void;
  selectedStickerId?: string | null;
  compact?: boolean;
}

export const TravelStickerDeck: React.FC<TravelStickerDeckProps> = ({
  onSelectSticker,
  selectedStickerId,
  compact = false,
}) => {
  const [activeGen, setActiveGen] = useState<string>("All");
  const [pinnedStickers, setPinnedStickers] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem("citylens_pinned_stickers");
      return saved ? JSON.parse(saved) : ["stamp-passport", "wanderlust-classic"];
    } catch {
      return ["stamp-passport", "wanderlust-classic"];
    }
  });

  const generations = ["All", "Gen Z", "Millennial", "Gen X", "Boomer / Golden"];

  const filteredStickers = activeGen === "All"
    ? TRAVEL_STICKERS
    : TRAVEL_STICKERS.filter((s) => s.generation === activeGen || s.generation === "All");

  const togglePin = (sticker: TravelSticker, e: React.MouseEvent) => {
    e.stopPropagation();
    setPinnedStickers((prev) => {
      const next = prev.includes(sticker.id)
        ? prev.filter((id) => id !== sticker.id)
        : [...prev, sticker.id];
      try {
        localStorage.setItem("citylens_pinned_stickers", JSON.stringify(next));
      } catch {}
      return next;
    });

    if (!pinnedStickers.includes(sticker.id)) {
      confetti({
        particleCount: 20,
        spread: 45,
        origin: { y: 0.8 },
        colors: ["#38bdf8", "#ec4899", "#f59e0b", "#10b981"],
      });
    }

    if (onSelectSticker) {
      onSelectSticker(sticker);
    }
  };

  return (
    <div className="w-full rounded-2xl bg-slate-900/80 border border-slate-800 p-4 sm:p-5 backdrop-blur-md shadow-xl">
      {/* Deck Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-800/80">
        <div className="flex items-center space-x-2.5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-pink-500/20 via-amber-500/20 to-cyan-500/20 border border-pink-400/40 flex items-center justify-center shadow-sm">
            <Tag className="w-4 h-4 text-pink-300" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="text-sm font-bold text-white tracking-wide flex items-center gap-1.5">
                Passport & Suitcase Stickers
              </h3>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-pink-500/15 text-pink-300 border border-pink-500/30">
                Every Generation
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Collect and stamp your travel vibe — from vintage postal seals to retro digital nomad vibes.
            </p>
          </div>
        </div>

        {/* Generation Filter Pills */}
        <div className="flex items-center gap-1 bg-slate-950/80 p-1 rounded-xl border border-slate-800">
          {generations.map((gen) => (
            <button
              key={gen}
              type="button"
              id={`filter-sticker-gen-${gen.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
              onClick={() => setActiveGen(gen)}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                activeGen === gen
                  ? "bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-cyan-500/30 text-white font-semibold shadow-sm border border-pink-500/40"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {gen}
            </button>
          ))}
        </div>
      </div>

      {/* Stickers Grid with Realistic Sticker Aesthetics */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {filteredStickers.map((sticker) => {
          const isPinned = pinnedStickers.includes(sticker.id);
          const isSelected = selectedStickerId === sticker.id;

          return (
            <motion.div
              key={sticker.id}
              id={`travel-sticker-${sticker.id}`}
              onClick={(e) => togglePin(sticker, e)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className={`group relative cursor-pointer select-none rounded-xl p-3 border transition-all duration-200 flex flex-col justify-between overflow-hidden bg-gradient-to-b ${sticker.bgGradient} ${
                isPinned || isSelected
                  ? `${sticker.borderColor} ring-2 ring-cyan-400/50 shadow-lg shadow-cyan-950/50`
                  : "border-slate-800/80 hover:border-slate-700 hover:shadow-md"
              } ${sticker.rotation}`}
            >
              {/* Sticker Peel highlight effect on corner */}
              <div className="absolute top-0 right-0 w-4 h-4 bg-gradient-to-bl from-white/20 to-transparent pointer-events-none rounded-bl" />

              {/* Pin indicator badge */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-xl filter drop-shadow-sm group-hover:scale-110 transition-transform">
                  {sticker.emoji}
                </span>
                <span
                  className={`text-[9px] px-1.5 py-0.5 rounded-full font-mono font-semibold transition-colors ${
                    isPinned
                      ? "bg-cyan-400 text-slate-950 font-bold"
                      : "bg-slate-950/60 text-slate-400 group-hover:text-slate-200"
                  }`}
                >
                  {isPinned ? "COLLECTED" : sticker.generation}
                </span>
              </div>

              {/* Label & Tagline */}
              <div>
                <h4 className={`text-[11px] font-black tracking-wider uppercase leading-tight ${sticker.textColor}`}>
                  {sticker.label}
                </h4>
                <p className="text-[10px] text-slate-300/80 mt-1 line-clamp-2 leading-relaxed">
                  {sticker.tagline}
                </p>
              </div>

              {/* Action Prompt */}
              <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between text-[9px] font-mono text-slate-400">
                <span>{sticker.category}</span>
                <span className="flex items-center gap-1 group-hover:text-cyan-300 transition-colors">
                  {isPinned ? (
                    <>
                      <Check className="w-2.5 h-2.5 text-cyan-400" />
                      <span>On Board</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-2.5 h-2.5" />
                      <span>Stamp</span>
                    </>
                  )}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Footer Passport Quote */}
      <div className="mt-4 pt-3 border-t border-slate-800/60 flex flex-wrap items-center justify-between text-xs text-slate-400 font-mono">
        <div className="flex items-center space-x-2">
          <Plane className="w-3.5 h-3.5 text-cyan-400" />
          <span>Tap any sticker to stamp onto your global passport board</span>
        </div>
        <span className="text-cyan-400/90 font-semibold">
          {pinnedStickers.length} {pinnedStickers.length === 1 ? "sticker" : "stickers"} collected
        </span>
      </div>
    </div>
  );
};
