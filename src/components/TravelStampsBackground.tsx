import React from "react";

export const TravelStampsBackground: React.FC = () => {
  return (
    <div
      id="travel-stamps-background"
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden z-0 select-none opacity-20 sm:opacity-30 lg:opacity-35"
    >
      {/* 1. Vintage Airmail / Par Avion Stamp - Top Left */}
      <div className="absolute top-16 sm:top-24 left-2 sm:left-10 rotate-[-12deg] animate-float transition-transform duration-700">
        <div className="border-2 border-dashed border-red-400/40 bg-red-950/20 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded text-[9px] sm:text-xs font-black font-mono tracking-widest text-red-400/70 uppercase flex items-center gap-1.5 shadow-sm backdrop-blur-[1px]">
          <span>✈️</span>
          <span>PAR AVION • BY AIR MAIL</span>
        </div>
      </div>

      {/* 2. Classic Round Circular Passport Stamp - Tokyo Haneda Entry (Top Right) */}
      <div className="absolute top-16 sm:top-20 right-2 sm:right-16 rotate-[14deg] animate-float transition-transform duration-700" style={{ animationDelay: "1.5s" }}>
        <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-2 border-dashed border-cyan-400/40 bg-cyan-950/20 p-1 flex flex-col items-center justify-center text-center text-cyan-300/70 font-mono shadow-sm backdrop-blur-[1px]">
          <div className="w-full h-full rounded-full border border-cyan-400/30 flex flex-col items-center justify-center p-1 sm:p-2">
            <span className="text-[8px] sm:text-[9px] font-black tracking-widest uppercase">IMMIGRATION</span>
            <span className="text-sm sm:text-base leading-none my-0.5">🗾</span>
            <span className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-cyan-200/80">TOKYO HND</span>
            <span className="text-[7px] sm:text-[8px] tracking-tight text-cyan-400/60">PASSPORT ENTRY</span>
            <span className="text-[7px] sm:text-[8px] font-bold text-cyan-300/70 mt-0.5">★ 2026.09.18 ★</span>
          </div>
        </div>
      </div>

      {/* 3. Hexagonal / Octagonal Madrid Border Control Stamp (Mid-Left) */}
      <div className="absolute top-[36%] -left-2 sm:left-8 rotate-[-8deg] animate-float" style={{ animationDelay: "2.5s" }}>
        <div className="border-2 border-amber-400/40 bg-amber-950/20 px-3 py-2 sm:px-4 sm:py-2.5 rounded-2xl text-amber-300/70 font-mono text-center flex flex-col items-center backdrop-blur-[1px]">
          <div className="flex items-center gap-1 text-[8px] sm:text-[9px] font-bold tracking-wider uppercase text-amber-300/80">
            <span>🇪🇸</span>
            <span>MADRID BARAJAS</span>
            <span>🇪🇸</span>
          </div>
          <div className="border-y border-amber-400/30 my-0.5 sm:my-1 py-0.5 w-full text-[9px] sm:text-[10px] font-black text-amber-200/80">
            POLICIA DE FRONTERAS
          </div>
          <span className="text-[7px] sm:text-[8px] tracking-widest text-amber-300/60">ENTRY PERMIT GRANTED</span>
        </div>
      </div>

      {/* 4. Retro Double-Ring Circular Visa Stamp - Paris Charles de Gaulle (Mid-Right) */}
      <div className="absolute top-[40%] right-1 sm:right-10 rotate-[-15deg] animate-float" style={{ animationDelay: "3.5s" }}>
        <div className="w-24 h-24 sm:w-36 sm:h-36 rounded-full border-2 border-purple-400/35 bg-purple-950/20 p-1 sm:p-1.5 flex flex-col items-center justify-center text-center text-purple-300/70 font-mono backdrop-blur-[1px]">
          <div className="w-full h-full rounded-full border border-purple-400/30 flex flex-col items-center justify-center">
            <span className="text-[7px] sm:text-[9px] font-black tracking-widest uppercase text-purple-300/80">
              RÉPUBLIQUE FRANÇAISE
            </span>
            <span className="text-base sm:text-lg leading-none my-0.5">🗼</span>
            <span className="text-[9px] sm:text-[12px] font-extrabold tracking-widest uppercase text-purple-100/80">
              PARIS • CDG
            </span>
            <span className="text-[7px] sm:text-[8px] text-purple-300/60">SEJOUR TOURISTIQUE</span>
            <span className="text-[7px] sm:text-[8px] font-bold text-purple-300/70">ADMITTED</span>
          </div>
        </div>
      </div>

      {/* 5. Modern Gen-Z / Millennial Wanderlust Holographic Badge - Lower-Mid Left */}
      <div className="absolute top-[64%] left-2 sm:left-14 rotate-[10deg] animate-float" style={{ animationDelay: "4s" }}>
        <div className="border border-dashed border-pink-400/40 bg-pink-950/20 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-pink-300/70 font-mono text-center backdrop-blur-[1px]">
          <div className="flex items-center justify-center gap-1 text-[9px] sm:text-[10px] font-black tracking-widest text-pink-300/80">
            <span>✨</span>
            <span>MAIN CHARACTER TRAVELS</span>
          </div>
          <p className="text-[7px] sm:text-[8px] text-pink-300/60 tracking-tight mt-0.5 font-medium">
            OUT OF OFFICE • LIVING UNFILTERED
          </p>
        </div>
      </div>

      {/* 6. Classic Oval London Heathrow UK Border Stamp (Lower-Mid Right) */}
      <div className="absolute top-[68%] right-2 sm:right-20 rotate-[6deg] animate-float" style={{ animationDelay: "2s" }}>
        <div className="border-2 border-emerald-400/40 bg-emerald-950/20 px-5 py-2.5 rounded-[2rem] text-emerald-300/70 font-mono text-center flex flex-col items-center backdrop-blur-[1px]">
          <div className="flex items-center gap-1.5 text-[9px] font-extrabold tracking-widest uppercase text-emerald-300/80">
            <span>🇬🇧</span>
            <span>UK BORDER CONTROL</span>
            <span>🇬🇧</span>
          </div>
          <span className="text-base leading-none my-0.5">🎡</span>
          <span className="text-[11px] font-black tracking-wider uppercase text-emerald-100/80">
            LONDON HEATHROW
          </span>
          <span className="text-[8px] tracking-widest text-emerald-300/60 mt-0.5">LEAVE TO ENTER • 6 MONTHS</span>
        </div>
      </div>

      {/* 7. Vintage Luggage Tag / Barcode Stamp - Bottom Left */}
      <div className="absolute bottom-6 left-6 sm:left-24 rotate-[-5deg]">
        <div className="border border-sky-400/40 bg-sky-950/20 px-4 py-2 rounded-lg text-sky-300/70 font-mono text-left backdrop-blur-[1px]">
          <div className="flex items-center justify-between gap-4 text-[9px] font-bold text-sky-300/80">
            <span>BAGGAGE CLAIM</span>
            <span>JFK ➔ MAD</span>
          </div>
          <div className="text-[12px] font-black tracking-widest text-sky-100/80 my-0.5">
            CL-892410-X
          </div>
          <div className="flex items-center gap-1 text-[8px] text-sky-400/60">
            <span>PRIORITY WORLDWIDE TRANSIT</span>
          </div>
        </div>
      </div>

      {/* 8. Star-burst Golden Era Explorer Seal - Bottom Right */}
      <div className="absolute bottom-6 right-8 sm:right-28 rotate-[-12deg]">
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-amber-400/35 bg-amber-950/20 flex flex-col items-center justify-center text-center p-2 text-amber-300/70 font-mono backdrop-blur-[1px]">
          <span className="text-base">🧭</span>
          <span className="text-[8px] font-black tracking-widest text-amber-200/80 uppercase">
            GLOBETROTTER
          </span>
          <span className="text-[7px] text-amber-300/60">CERTIFIED EXPLORER</span>
        </div>
      </div>

      {/* Subtle faint postmark wavy cancelation lines throughout */}
      <svg
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-5xl h-48 opacity-10 text-cyan-400 pointer-events-none"
        viewBox="0 0 800 120"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M0,30 Q50,10 100,30 T200,30 T300,30 T400,30 T500,30 T600,30 T700,30 T800,30" />
        <path d="M0,60 Q50,40 100,60 T200,60 T300,60 T400,60 T500,60 T600,60 T700,60 T800,60" />
        <path d="M0,90 Q50,70 100,90 T200,90 T300,90 T400,90 T500,90 T600,90 T700,90 T800,90" />
      </svg>
    </div>
  );
};
