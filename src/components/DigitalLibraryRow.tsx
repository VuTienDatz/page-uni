'use client';

import Link from 'next/link';
import { Library, BookOpenCheck, BookText } from 'lucide-react';

export default function DigitalLibraryRow() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {/* Banner 1: Thư viện số dùng chung Bộ Quốc phòng */}
      <Link
        href="#thu-vien-bqp"
        className="group relative h-20 sm:h-24 rounded-md border border-sky-400 overflow-hidden shadow-xs hover:shadow-sm transition-all flex items-center bg-[#0284c7] p-2.5 text-white"
      >
        <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center bg-white/20 rounded-full border border-white/40 group-hover:scale-105 transition-transform">
          <Library className="w-7 h-7 text-white" />
        </div>
        <div className="flex-1 pl-2.5">
          <h3 className="text-xs sm:text-[13px] font-black uppercase tracking-tight leading-snug drop-shadow-sm group-hover:text-amber-200 transition-colors">
            Thư viện số dùng chung trong Bộ Quốc phòng
          </h3>
          <p className="text-[10px] text-sky-100 mt-0.5 font-medium">
            Hệ thống dữ liệu học liệu toàn quân
          </p>
        </div>
      </Link>

      {/* Banner 2: Thư viện số Trường Sĩ quan Thông tin */}
      <Link
        href="#thu-vien-sqtt"
        className="group relative h-20 sm:h-24 rounded-md border border-blue-500 overflow-hidden shadow-xs hover:shadow-sm transition-all flex items-center bg-[#1e40af] p-2.5 text-white"
      >
        <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center bg-white/20 rounded-full border border-white/40 group-hover:scale-105 transition-transform">
          <BookOpenCheck className="w-7 h-7 text-amber-300" />
        </div>
        <div className="flex-1 pl-2.5">
          <h3 className="text-xs sm:text-[13px] font-black uppercase tracking-tight leading-snug drop-shadow-sm group-hover:text-amber-200 transition-colors">
            Thư viện số Trường Sĩ quan Thông tin
          </h3>
          <p className="text-[10px] text-blue-100 mt-0.5 font-medium">
            Giáo trình điện tử, luận văn, tài liệu nghiên cứu
          </p>
        </div>
      </Link>

      {/* Banner 3: Tạp chí Tiếng Việt */}
      <Link
        href="#tap-chi-tieng-viet"
        className="group relative h-20 sm:h-24 rounded-md border border-rose-400 overflow-hidden shadow-xs hover:shadow-sm transition-all flex items-center bg-[#be185d] p-2.5 text-white"
      >
        <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center bg-white/20 rounded-full border border-white/40 group-hover:scale-105 transition-transform">
          <BookText className="w-7 h-7 text-white" />
        </div>
        <div className="flex-1 pl-2.5">
          <h3 className="text-xs sm:text-[13px] font-black uppercase tracking-tight leading-snug drop-shadow-sm group-hover:text-amber-200 transition-colors">
            Tạp chí Tiếng Việt
          </h3>
          <p className="text-[10px] text-rose-100 mt-0.5 font-medium">
            Học tập ngôn ngữ & văn hóa quân sự
          </p>
        </div>
      </Link>
    </div>
  );
}
