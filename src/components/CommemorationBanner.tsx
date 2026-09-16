'use client';

export default function CommemorationBanner() {
  return (
    <div className="relative w-full overflow-hidden rounded-md border border-sky-400/60 shadow-xs bg-[#0284c7] py-4 px-4 md:px-8 flex items-center justify-center text-center">
      {/* Centered Golden / White Text */}
      <div className="relative z-10 max-w-3xl">
        <h2 className="text-sm sm:text-base md:text-xl lg:text-2xl font-black uppercase tracking-wider text-amber-200 drop-shadow-sm">
          KỶ NIỆM 75 NĂM NGÀY TRUYỀN THỐNG
        </h2>
        <h3 className="text-base sm:text-lg md:text-2xl lg:text-3xl font-black uppercase tracking-wide text-white drop-shadow-sm mt-0.5">
          TRƯỜNG SĨ QUAN THÔNG TIN
        </h3>
        <p className="text-[11px] sm:text-xs font-semibold text-sky-100 tracking-wider uppercase mt-1">
          (11/11/1951 - 11/11/2026) • ĐƠN VỊ ANH HÙNG LỰC LƯỢNG VŨ TRANG NHÂN DÂN
        </p>
      </div>
    </div>
  );
}
