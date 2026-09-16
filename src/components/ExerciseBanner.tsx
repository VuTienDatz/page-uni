'use client';

export default function ExerciseBanner() {
  return (
    <div className="relative w-full overflow-hidden rounded-md border border-amber-500/70 shadow-xs bg-[#b91c1c] py-4 px-4 md:px-8 text-center flex flex-col items-center justify-center">
      {/* Decorative Stars */}
      <div className="relative z-10 flex items-center justify-center gap-3 mb-1">
        <span className="text-amber-300 text-xs md:text-sm">★ ★ ★</span>
        <span className="text-amber-200 text-[10px] md:text-xs font-bold uppercase tracking-[0.25em]">
          QUÂN KHU 5 • BINH CHỦNG THÔNG TIN LIÊN LẠC
        </span>
        <span className="text-amber-300 text-xs md:text-sm">★ ★ ★</span>
      </div>

      {/* Main Bold Title */}
      <h2 className="relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-wider text-amber-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
        DIỄN TẬP ZT30 - Đ1
      </h2>

      {/* Slogan subtitle */}
      <div className="relative z-10 flex items-center justify-center gap-2 mt-1">
        <div className="h-0.5 w-8 md:w-16 bg-amber-400/60" />
        <p className="text-[11px] sm:text-xs md:text-sm font-bold uppercase text-white tracking-widest drop-shadow-xs">
          SẴN SÀNG CHIẾN ĐẤU - KỶ LUẬT NGHIÊM MINH - THÔNG TIN THÔNG SUỐT
        </p>
        <div className="h-0.5 w-8 md:w-16 bg-amber-400/60" />
      </div>
    </div>
  );
}
