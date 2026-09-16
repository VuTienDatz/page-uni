'use client';

import Link from 'next/link';
import { Award, GraduationCap } from 'lucide-react';

export default function DigitalPlatformBanners() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {/* Left Banner: Quốc huy Việt Nam */}
      <Link
        href="#binh-dan-hoc-vu-so-1"
        className="group relative h-16 sm:h-20 rounded border border-amber-500 overflow-hidden shadow-xs hover:shadow-md transition-all flex items-center bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-300 px-4 py-2"
      >
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-700 via-transparent to-transparent pointer-events-none" />

        {/* National Emblem (Quốc huy) */}
        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-red-600 border-2 border-amber-400 shadow-xs flex-shrink-0 flex items-center justify-center text-amber-300 group-hover:scale-105 transition-transform">
          <Award className="w-6 h-6 text-amber-300" />
        </div>

        {/* Banner Text */}
        <div className="flex-1 pl-3 text-left">
          <h3 className="text-sm sm:text-base font-black uppercase tracking-wider text-red-800 group-hover:text-red-950 transition-colors drop-shadow-xs">
            NỀN TẢNG BÌNH DÂN HỌC VỤ SỐ
          </h3>
          <p className="text-[10px] sm:text-[11px] font-semibold text-amber-900 tracking-wide">
            Bộ Thông tin & Truyền thông • Học tập số suốt đời
          </p>
        </div>
      </Link>

      {/* Right Banner: Crest & Digital Platform */}
      <Link
        href="#binh-dan-hoc-vu-so-2"
        className="group relative h-16 sm:h-20 rounded border border-amber-500 overflow-hidden shadow-xs hover:shadow-md transition-all flex items-center bg-gradient-to-r from-yellow-300 via-amber-200 to-amber-300 px-4 py-2"
      >
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-700 via-transparent to-transparent pointer-events-none" />

        {/* Digital Skill Crest */}
        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-red-700 border-2 border-amber-400 shadow-xs flex-shrink-0 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
          <GraduationCap className="w-6 h-6 text-amber-300" />
        </div>

        {/* Banner Text */}
        <div className="flex-1 pl-3 text-left">
          <h3 className="text-sm sm:text-base font-black uppercase tracking-wider text-red-800 group-hover:text-red-950 transition-colors drop-shadow-xs">
            NỀN TẢNG BÌNH DÂN HỌC VỤ SỐ
          </h3>
          <p className="text-[10px] sm:text-[11px] font-semibold text-amber-900 tracking-wide">
            Phổ cập kỹ năng số cộng đồng • Bộ Quốc phòng
          </p>
        </div>
      </Link>
    </div>
  );
}
