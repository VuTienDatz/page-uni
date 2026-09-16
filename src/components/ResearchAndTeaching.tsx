'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FlaskConical, GraduationCap, ChevronRight, User, Calendar } from 'lucide-react';

export default function ResearchAndTeaching() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-3.5 border border-slate-200 rounded shadow-xs">
      {/* Left Column: Nghiên cứu trao đổi */}
      <div className="flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between border-b-2 border-blue-700 pb-1.5 mb-2">
          <div className="flex items-center gap-1.5">
            <FlaskConical className="w-4 h-4 text-blue-700" />
            <h3 className="text-xs sm:text-[13px] font-black uppercase tracking-wide text-blue-800">
              NGHIÊN CỨU TRAO ĐỔI
            </h3>
          </div>
          <Link
            href="#nghien-cuu"
            className="text-[11px] text-slate-500 hover:text-blue-700 font-medium flex items-center gap-0.5 transition-colors"
          >
            <span>Xem tất cả</span>
            <ChevronRight className="w-3 h-3" />
          </Link>
        </div>

        {/* Featured Research Banner Card */}
        <Link
          href="/tin-tuc/nang-cao-nang-luc-nghien-cuu-khoa-hoc"
          className="group block flex-1 flex flex-col border border-slate-200 rounded overflow-hidden hover:border-blue-500 hover:shadow-md transition-all bg-white"
        >
          {/* Real Photo Banner */}
          <div className="relative w-full h-48 sm:h-52 bg-slate-900 overflow-hidden">
            <Image
              src="/images/scientific_lab.jpg"
              alt="Nghiên cứu trao đổi"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent" />
            <div className="absolute top-3 left-3 bg-blue-600/90 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-0.5 rounded shadow">
              CHUYÊN MỤC KHOA HỌC
            </div>
            <div className="absolute bottom-3 left-3 right-3 text-white">
              <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider block mb-1">
                ỨNG DỤNG CÔNG NGHỆ MỚI
              </span>
              <h4 className="text-sm font-bold leading-snug line-clamp-2 drop-shadow">
                Nghiên cứu, thiết kế hệ thống bảo đảm thông tin tác chiến điện tử thông minh
              </h4>
            </div>
          </div>

          {/* Title & Excerpt */}
          <div className="p-3 flex-1 flex flex-col justify-between">
            <h4 className="text-[13px] font-bold text-slate-800 group-hover:text-blue-700 leading-snug transition-colors">
              Nâng cao năng lực nghiên cứu khoa học và phát triển các giải pháp bảo đảm thông tin liên lạc thế hệ mới
            </h4>
            <div className="flex items-center justify-between text-[11px] text-slate-400 mt-2.5 pt-2 border-t border-slate-100">
              <span className="flex items-center gap-1">
                <User className="w-3 h-3 text-slate-400" />
                <span>Đại tá, PGS. TS. Nguyễn Văn Minh</span>
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3 text-slate-400" />
                <span>15/09/2024</span>
              </span>
            </div>
          </div>
        </Link>
      </div>

      {/* Right Column: Chuyên trang Giảng dạy / Phòng học */}
      <div className="flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between border-b-2 border-red-700 pb-1.5 mb-2">
          <div className="flex items-center gap-1.5">
            <GraduationCap className="w-4 h-4 text-red-700" />
            <h3 className="text-xs sm:text-[13px] font-black uppercase tracking-wide text-red-700">
              CHUYÊN TRANG GIẢNG DẠY
            </h3>
          </div>
          <Link
            href="#giang-day"
            className="text-[11px] text-slate-500 hover:text-red-700 font-medium flex items-center gap-0.5 transition-colors"
          >
            <span>Xem tất cả</span>
            <ChevronRight className="w-3 h-3" />
          </Link>
        </div>

        {/* Teaching Scene Card */}
        <Link
          href="/tin-tuc/khoa-vien-thong-doi-moi-phuong-phap-day-hoc"
          className="group block flex-1 flex flex-col border border-slate-200 rounded overflow-hidden hover:border-red-500 hover:shadow-md transition-all bg-white"
        >
          {/* Real Classroom Photo */}
          <div className="relative w-full h-48 sm:h-52 bg-slate-900 overflow-hidden">
            <Image
              src="/images/vietnam_classroom.jpg"
              alt="Chuyên trang giảng dạy"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent" />
            <div className="absolute top-3 left-3 bg-red-700/90 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-0.5 rounded shadow">
              PHƯƠNG PHÁP GIẢNG DẠY
            </div>
            <div className="absolute bottom-3 left-3 right-3 text-white">
              <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider block mb-1">
                KHOA VIỄN THÔNG QUÂN SỰ
              </span>
              <h4 className="text-sm font-bold leading-snug line-clamp-2 drop-shadow">
                Tích hợp mô phỏng thực hành số 3D vào chương trình đào tạo kỹ sư quân sự
              </h4>
            </div>
          </div>

          {/* Title & Excerpt */}
          <div className="p-3 flex-1 flex flex-col justify-between">
            <h4 className="text-[13px] font-bold text-slate-800 group-hover:text-red-700 leading-snug transition-colors">
              Khoa Viễn thông: Đổi mới phương pháp dạy - học theo chuẩn đầu ra sĩ quan thông tin hiện đại
            </h4>
            <div className="flex items-center justify-between text-[11px] text-slate-400 mt-2.5 pt-2 border-t border-slate-100">
              <span className="flex items-center gap-1">
                <User className="w-3 h-3 text-slate-400" />
                <span>Thượng tá, ThS. Trần Văn Hùng</span>
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3 text-slate-400" />
                <span>14/09/2024</span>
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
