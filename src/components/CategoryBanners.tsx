'use client';

import Link from 'next/link';
import { BookOpenCheck, ShieldAlert, Award } from 'lucide-react';

export default function CategoryBanners() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {/* Banner 1: Đổi mới công tác giáo dục chính trị */}
      <Link
        href="#giao-duc-chinh-tri"
        className="group relative h-28 sm:h-32 rounded border border-amber-300 overflow-hidden shadow-xs hover:shadow-md transition-all flex items-center bg-gradient-to-r from-amber-50 via-orange-50 to-amber-100 p-3"
      >
        {/* Left Graphic */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 flex items-center justify-center bg-amber-200/50 rounded-full border border-amber-300 shadow-xs group-hover:scale-105 transition-transform">
          <BookOpenCheck className="w-9 h-9 sm:w-11 sm:h-11 text-amber-800" />
        </div>

        {/* Right Text */}
        <div className="flex-1 pl-3">
          <p className="text-[10px] font-extrabold uppercase tracking-widest text-amber-700 mb-0.5">
            CHUYÊN TRANG
          </p>
          <h3 className="text-xs sm:text-[13px] font-black uppercase tracking-tight text-red-800 leading-snug group-hover:text-red-950">
            ĐỔI MỚI CÔNG TÁC GIÁO DỤC CHÍNH TRỊ
          </h3>
          <p className="text-[10px] text-slate-600 mt-1 line-clamp-1">
            Nâng cao bản lĩnh chính trị, phẩm chất Bộ đội Cụ Hồ
          </p>
        </div>
      </Link>

      {/* Banner 2: Phòng chống diễn biến hòa bình */}
      <Link
        href="#dien-bien-hoa-binh"
        className="group relative h-28 sm:h-32 rounded border border-red-400 overflow-hidden shadow-xs hover:shadow-md transition-all flex items-center bg-gradient-to-r from-red-800 via-red-700 to-rose-900 p-3 text-white"
      >
        {/* Left Graphic */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 flex items-center justify-center bg-red-900/60 rounded-full border border-amber-400 shadow-xs group-hover:scale-105 transition-transform">
          <ShieldAlert className="w-9 h-9 sm:w-11 sm:h-11 text-amber-300" />
        </div>

        {/* Right Text */}
        <div className="flex-1 pl-3">
          <p className="text-[10px] font-extrabold uppercase tracking-widest text-amber-300 mb-0.5">
            BẢO VỆ TƯ TƯỞNG
          </p>
          <h3 className="text-xs sm:text-[13px] font-black uppercase tracking-tight text-amber-200 leading-snug group-hover:text-white">
            PHÒNG CHỐNG DIỄN BIẾN HÒA BÌNH
          </h3>
          <p className="text-[10px] text-red-100 mt-1 line-clamp-1">
            Giữ vững trận địa tư tưởng của Đảng trong Quân đội
          </p>
        </div>
      </Link>

      {/* Banner 3: Học tập tư tưởng Hồ Chí Minh */}
      <Link
        href="#tu-tuong-ho-chi-minh"
        className="group relative h-28 sm:h-32 rounded border border-cyan-300 overflow-hidden shadow-xs hover:shadow-md transition-all flex items-center bg-gradient-to-r from-cyan-50 via-sky-50 to-blue-100 p-3"
      >
        {/* Left Graphic */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 flex items-center justify-center bg-blue-100 rounded-full border border-blue-300 shadow-xs group-hover:scale-105 transition-transform">
          <Award className="w-9 h-9 sm:w-11 sm:h-11 text-blue-800" />
        </div>

        {/* Right Text */}
        <div className="flex-1 pl-3">
          <p className="text-[10px] font-extrabold uppercase tracking-widest text-blue-700 mb-0.5">
            HỌC TẬP VÀ LÀM THEO
          </p>
          <h3 className="text-xs sm:text-[13px] font-black uppercase tracking-tight text-blue-900 leading-snug group-hover:text-blue-700">
            TƯ TƯỞNG, ĐẠO ĐỨC, PHONG CÁCH HỒ CHÍ MINH
          </h3>
          <p className="text-[10px] text-slate-600 mt-1 line-clamp-1">
            Tuyệt đối trung thành, cần kiệm liêm chính chí công vô tư
          </p>
        </div>
      </Link>
    </div>
  );
}
