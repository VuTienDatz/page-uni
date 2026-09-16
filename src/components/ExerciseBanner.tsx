'use client';

export default function ExerciseBanner() {
  return (
    <div className="relative w-full overflow-hidden rounded border border-amber-500 shadow-lg bg-gradient-to-r from-red-700 via-red-600 to-red-800 py-4 px-4 md:px-8 text-center flex flex-col items-center justify-center">
      {/* Background Military Graphics */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        {/* Sunburst rays */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-300/40 via-transparent to-transparent" />

        {/* Silhouettes of Military Equipment */}
        {/* Left: Tank / Armored carrier */}
        <div className="absolute left-4 bottom-1 w-24 h-12 opacity-40">
          <svg viewBox="0 0 100 50" fill="currentColor" className="text-amber-200">
            {/* Cannon barrel */}
            <rect x="50" y="10" width="40" height="3" />
            {/* Turret */}
            <path d="M25 16 Q45 8 55 16 L52 26 L22 26 Z" />
            {/* Hull */}
            <path d="M10 26 L75 26 L70 36 L15 36 Z" />
            {/* Tracks */}
            <rect x="12" y="34" width="60" height="8" rx="4" />
            <circle cx="22" cy="38" r="3" fill="#dc2626" />
            <circle cx="34" cy="38" r="3" fill="#dc2626" />
            <circle cx="46" cy="38" r="3" fill="#dc2626" />
            <circle cx="58" cy="38" r="3" fill="#dc2626" />
          </svg>
        </div>

        {/* Right: Helicopter / Jet silhouette */}
        <div className="absolute right-6 top-2 w-20 h-12 opacity-40">
          <svg viewBox="0 0 100 50" fill="currentColor" className="text-amber-200">
            {/* Rotor blade */}
            <line x1="10" y1="10" x2="80" y2="10" stroke="currentColor" strokeWidth="2" />
            {/* Cabin */}
            <ellipse cx="45" cy="22" rx="20" ry="10" />
            {/* Tail boom */}
            <polygon points="45,22 85,18 85,24" />
            <line x1="85" y1="14" x2="85" y2="28" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
      </div>

      {/* Decorative Stars */}
      <div className="relative z-10 flex items-center justify-center gap-3 mb-1">
        <span className="text-amber-300 text-xs md:text-sm">★ ★ ★</span>
        <span className="text-amber-300/80 text-[10px] md:text-xs font-bold uppercase tracking-[0.25em]">
          QUÂN KHU 5 • BINH CHỦNG THÔNG TIN LIÊN LẠC
        </span>
        <span className="text-amber-300 text-xs md:text-sm">★ ★ ★</span>
      </div>

      {/* Main Bold Title */}
      <h2 className="relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-wider text-amber-300 drop-shadow-[0_4px_8px_rgba(0,0,0,0.7)] text-stroke">
        DIỄN TẬP ZT30 - Đ1
      </h2>

      {/* Slogan subtitle */}
      <div className="relative z-10 flex items-center justify-center gap-2 mt-1">
        <div className="h-0.5 w-8 md:w-16 bg-amber-400/60" />
        <p className="text-[11px] sm:text-xs md:text-sm font-bold text-white tracking-widest uppercase drop-shadow-sm">
          CHỦ ĐỘNG • KỊP THỜI • CHÍNH XÁC • BÍ MẬT • AN TOÀN
        </p>
        <div className="h-0.5 w-8 md:w-16 bg-amber-400/60" />
      </div>
    </div>
  );
}
