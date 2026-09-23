import React from "react";
import { useLanguage } from "../context/LanguageContext";

interface ARScanOverlayProps {
  variant?: "active" | "ambient" | "dense" | "analyzing";
  label?: string;
  showLabel?: boolean;
  showReticle?: boolean;
  className?: string;
}

export const ARScanOverlay: React.FC<ARScanOverlayProps> = ({
  variant = "active",
  label,
  showLabel = true,
  showReticle = false,
  className = "",
}) => {
  const { t } = useLanguage();
  const displayLabel = label || t("ar_optic_scan", "AR // OPTIC SCAN");
  const isActive = variant === "active" || variant === "analyzing" || variant === "dense";

  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-10 ${className}`}
    >
      {/* Dynamic Subsurface Micro-Grid (Subtle 3D Spatial Grid) */}
      <div className="absolute inset-0 opacity-20 mix-blend-screen bg-[radial-gradient(#22d3ee22_1px,transparent_1px)] [background-size:16px_16px] sm:[background-size:24px_24px] pointer-events-none" />

      {/* Moving Laser Beam Rig (GPU hardware-accelerated with transform: translateZ(0)) */}
      <div
        className={`absolute inset-x-0 will-change-[top,opacity] -translate-y-1/2 ${
          isActive ? "animate-ar-laser-beam" : "animate-ar-ambient-beam"
        }`}
      >
        {/* Trailing Upper Volumetric Cyan Gradient Curtain */}
        <div
          className={`w-full ${
            isActive
              ? "h-14 sm:h-24 lg:h-32 bg-gradient-to-t from-cyan-400/25 via-cyan-500/8 via-blue-500/4 to-transparent"
              : "h-8 sm:h-16 lg:h-20 bg-gradient-to-t from-cyan-400/12 via-cyan-500/4 to-transparent"
          }`}
        />

        {/* Razor-Sharp Core Optical Laser Line with Lens Flare */}
        <div
          className={`relative w-full ${
            isActive
              ? "h-[2px] sm:h-[2.5px] bg-gradient-to-r from-transparent via-cyan-400 via-white via-cyan-300 to-transparent shadow-[0_0_14px_#22d3ee,0_0_30px_rgba(6,182,212,0.8)]"
              : "h-[1.5px] sm:h-[2px] bg-gradient-to-r from-transparent via-cyan-400/70 via-white/90 via-cyan-400/70 to-transparent shadow-[0_0_10px_rgba(34,211,238,0.5)]"
          }`}
        >
          {/* Intense Center Optical Anamorphic Lens Flare */}
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none animate-optic-flare ${
              isActive
                ? "w-32 sm:w-64 lg:w-96 h-[4px] sm:h-[5px] bg-gradient-to-r from-cyan-400 via-white to-cyan-400 shadow-[0_0_24px_#38bdf8,0_0_45px_#06b6d4,0_0_80px_rgba(34,211,238,0.5)] blur-[0.5px]"
                : "w-24 sm:w-44 lg:w-64 h-[3px] bg-gradient-to-r from-cyan-400/80 via-white to-cyan-400/80 shadow-[0_0_16px_#38bdf8] blur-[0.5px]"
            }`}
          />

          {/* Precision Laser Scanning Teeth / Millimeter Ticks along the Beam */}
          <div className="absolute inset-x-0 -top-1 sm:-top-1.5 flex justify-between px-4 sm:px-12 opacity-50 pointer-events-none">
            {Array.from({ length: 11 }).map((_, i) => (
              <span
                key={i}
                className={`w-[1px] ${i % 2 === 0 ? "h-2 sm:h-3 bg-cyan-300" : "h-1 sm:h-1.5 bg-cyan-400/60"}`}
              />
            ))}
          </div>

          {/* Left Guide Pin & Responsive Telemetry HUD */}
          <div className="absolute -top-2 left-2 sm:left-4 lg:left-6 flex items-center space-x-1.5 pointer-events-none">
            <span className="relative flex h-2 sm:h-2.5 w-2 sm:w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-300 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 sm:h-2.5 w-2 sm:w-2.5 bg-cyan-300 shadow-[0_0_10px_#22d3ee]" />
            </span>
            {showLabel && (
              <span className="inline-flex items-center space-x-1.5 text-[8.5px] sm:text-[9.5px] lg:text-[10px] font-mono font-semibold tracking-wider sm:tracking-widest text-cyan-200 uppercase px-1.5 py-0.5 sm:px-2 sm:py-0.5 rounded-full bg-slate-950/90 border border-cyan-500/40 backdrop-blur-md shadow-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span className="truncate max-w-[120px] sm:max-w-[200px]">{displayLabel}</span>
              </span>
            )}
          </div>

          {/* Right Guide Pin & Device-Adaptive Coordinates HUD */}
          <div className="absolute -top-2 right-2 sm:right-4 lg:right-6 flex items-center space-x-1.5 sm:space-x-2 pointer-events-none">
            {showLabel && (
              <span className="hidden sm:inline-flex items-center space-x-1.5 text-[8.5px] sm:text-[9.5px] lg:text-[10px] font-mono text-cyan-300 uppercase px-2 py-0.5 rounded-full bg-slate-950/90 border border-cyan-500/30 backdrop-blur-md">
                <span className="text-slate-400">{t("fps_label", "FPS")}</span>
                <span className="font-bold text-cyan-300">60</span>
                <span className="text-slate-500 hidden md:inline">|</span>
                <span className="hidden md:inline text-cyan-400">{t("depth_value_label", "DEPTH 1.8M")}</span>
              </span>
            )}
            <span className="relative flex h-2 sm:h-2.5 w-2 sm:w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-300 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 sm:h-2.5 w-2 sm:w-2.5 bg-cyan-300 shadow-[0_0_10px_#22d3ee]" />
            </span>
          </div>
        </div>

        {/* Leading Lower Volumetric Cyan Gradient Curtain */}
        <div
          className={`w-full ${
            isActive
              ? "h-14 sm:h-24 lg:h-32 bg-gradient-to-b from-cyan-400/25 via-cyan-500/8 via-blue-500/4 to-transparent"
              : "h-8 sm:h-16 lg:h-20 bg-gradient-to-b from-cyan-400/12 via-cyan-500/4 to-transparent"
          }`}
        />
      </div>

      {/* Optical Rangefinder Reticle Framing (Optional high-tech HUD corners) */}
      {showReticle && (
        <div className="absolute inset-2 sm:inset-4 lg:inset-6 pointer-events-none flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="flex flex-col space-y-1">
              <div className="w-4 h-4 sm:w-6 sm:h-6 border-t-2 border-l-2 border-cyan-400/80" />
              <span className="hidden lg:inline-block text-[8px] font-mono text-cyan-400/60 pl-0.5">00°N</span>
            </div>
            <div className="flex flex-col items-end space-y-1">
              <div className="w-4 h-4 sm:w-6 sm:h-6 border-t-2 border-r-2 border-cyan-400/80" />
              <span className="hidden lg:inline-block text-[8px] font-mono text-cyan-400/60 pr-0.5">360°</span>
            </div>
          </div>

          <div className="flex justify-between items-end">
            <div className="flex flex-col space-y-1">
              <span className="hidden lg:inline-block text-[8px] font-mono text-cyan-400/60 pl-0.5">RAW-OPTIC</span>
              <div className="w-4 h-4 sm:w-6 sm:h-6 border-b-2 border-l-2 border-cyan-400/80" />
            </div>
            <div className="flex flex-col items-end space-y-1">
              <span className="hidden lg:inline-block text-[8px] font-mono text-cyan-400/60 pr-0.5">AI-GRID</span>
              <div className="w-4 h-4 sm:w-6 sm:h-6 border-b-2 border-r-2 border-cyan-400/80" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

