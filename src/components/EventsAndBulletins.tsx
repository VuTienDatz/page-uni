'use client';

import Link from 'next/link';
import Image from 'next/image';
import { CalendarDays, FileText, Tv, ChevronRight } from 'lucide-react';

export default function EventsAndBulletins() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white p-3.5 border border-slate-200 rounded shadow-xs">
      {/* Column 1: Sự kiện và bình luận */}
      <div className="flex flex-col">
        <div className="flex items-center justify-between border-b-2 border-red-700 pb-1.5 mb-2">
          <div className="flex items-center gap-1.5">
            <CalendarDays className="w-4 h-4 text-red-700" />
            <h3 className="text-xs sm:text-[13px] font-black uppercase tracking-wide text-red-700">
              SỰ KIỆN VÀ BÌNH LUẬN
            </h3>
          </div>
          <Link
            href="#su-kien-binh-luan"
            className="text-[11px] text-slate-500 hover:text-red-700 font-medium flex items-center gap-0.5 transition-colors"
          >
            <span>Xem tất cả</span>
            <ChevronRight className="w-3 h-3" />
          </Link>
        </div>

        {/* Featured Photo Item */}
        <Link
          href="/tin-tuc/vuot-kho-giup-nhan-dan-khac-phuc-hau-qua-thien-tai"
          className="group block mb-2"
        >
          <div className="relative w-full h-32 rounded overflow-hidden border border-slate-200 bg-slate-900">
            <Image
              src="/images/volunteers_green.jpg"
              alt="Cứu trợ thiên tai"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <span className="absolute bottom-2 left-2 px-1.5 py-0.5 bg-red-700 text-white text-[9px] font-bold rounded shadow-xs">
              Tiêu điểm
            </span>
          </div>
          <h4 className="text-[12.5px] font-bold text-slate-800 group-hover:text-red-700 leading-snug line-clamp-2 mt-1.5 transition-colors">
            Cán bộ, học viên Nhà trường xung kích giúp nhân dân khắc phục hậu quả thiên tai, bão lũ
          </h4>
        </Link>

        {/* 3 Bullet Links */}
        <div className="space-y-1.5 border-t border-slate-100 pt-2 flex-1">
          {[
            'Lực lượng vũ trang xung kích trên mặt trận cứu hộ cứu nạn',
            'Tăng cường sự lãnh đạo của Đảng đối với công tác dân vận',
            'Hiệu quả thiết thực từ mô hình kết nghĩa quân - dân nơi đóng quân',
          ].map((title, i) => (
            <Link
              key={i}
              href="#"
              className="flex items-start gap-2 text-[12px] text-slate-700 hover:text-red-700 transition-colors py-0.5 group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-1.5 flex-shrink-0 group-hover:bg-amber-500" />
              <span className="line-clamp-1">{title}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Column 2: Thông tin chuyên đề */}
      <div className="flex flex-col">
        <div className="flex items-center justify-between border-b-2 border-blue-700 pb-1.5 mb-2">
          <div className="flex items-center gap-1.5">
            <FileText className="w-4 h-4 text-blue-800" />
            <h3 className="text-xs sm:text-[13px] font-black uppercase tracking-wide text-blue-800">
              THÔNG TIN CHUYÊN ĐỀ
            </h3>
          </div>
          <Link
            href="#thong-tin-chuyen-de"
            className="text-[11px] text-slate-500 hover:text-blue-700 font-medium flex items-center gap-0.5 transition-colors"
          >
            <span>Xem tất cả</span>
            <ChevronRight className="w-3 h-3" />
          </Link>
        </div>

        {/* Featured Photo Item */}
        <Link
          href="/tin-tuc/doan-ket-quan-dan-coi-nguon-suc-manh"
          className="group block mb-2"
        >
          <div className="relative w-full h-32 rounded overflow-hidden border border-slate-200 bg-slate-900">
            <Image
              src="/images/focus_3.jpg"
              alt="Thông tin chuyên đề"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <span className="absolute bottom-2 left-2 px-1.5 py-0.5 bg-blue-700 text-white text-[9px] font-bold rounded shadow-xs">
              Chuyên đề
            </span>
          </div>
          <h4 className="text-[12.5px] font-bold text-slate-800 group-hover:text-blue-700 leading-snug line-clamp-2 mt-1.5 transition-colors">
            Đoàn kết quân dân - Cội nguồn sức mạnh vô địch bảo vệ vững chắc Tổ quốc Việt Nam XHCN
          </h4>
        </Link>

        {/* 3 Bullet Links */}
        <div className="space-y-1.5 border-t border-slate-100 pt-2 flex-1">
          {[
            'Xây dựng thế trận lòng dân vững chắc trong kỷ nguyên số',
            'Phát huy truyền thống anh hùng của Binh chủng Thông tin liên lạc',
            'Đấu tranh phản bác các quan điểm sai trái trên không gian mạng',
          ].map((title, i) => (
            <Link
              key={i}
              href="#"
              className="flex items-start gap-2 text-[12px] text-slate-700 hover:text-blue-700 transition-colors py-0.5 group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 flex-shrink-0 group-hover:bg-amber-500" />
              <span className="line-clamp-1">{title}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Column 3: Bản tin ngày */}
      <div className="flex flex-col">
        <div className="flex items-center justify-between border-b-2 border-amber-600 pb-1.5 mb-2">
          <div className="flex items-center gap-1.5">
            <Tv className="w-4 h-4 text-amber-700" />
            <h3 className="text-xs sm:text-[13px] font-black uppercase tracking-wide text-amber-700">
              BẢN TIN NGÀY
            </h3>
          </div>
          <Link
            href="#ban-tin-ngay"
            className="text-[11px] text-slate-500 hover:text-amber-700 font-medium flex items-center gap-0.5 transition-colors"
          >
            <span>Xem tất cả</span>
            <ChevronRight className="w-3 h-3" />
          </Link>
        </div>

        {/* Featured Broadcast Photo Item */}
        <Link
          href="/tin-tuc/ban-tin-truyen-hinh-sqtt-ngay-15-09-2024"
          className="group block mb-2"
        >
          <div className="relative w-full h-32 rounded overflow-hidden border border-slate-200 bg-slate-900">
            <Image
              src="/images/broadcast_news.jpg"
              alt="Bản tin truyền hình"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <span className="absolute bottom-2 left-2 px-1.5 py-0.5 bg-amber-600 text-white text-[9px] font-bold rounded shadow-xs">
              Thời sự SQTT
            </span>
          </div>
          <h4 className="text-[12.5px] font-bold text-slate-800 group-hover:text-amber-700 leading-snug line-clamp-2 mt-1.5 transition-colors">
            Bản tin truyền hình Trường Sĩ quan Thông tin phát sóng ngày 15 tháng 9 năm 2024
          </h4>
        </Link>

        {/* 3 Bullet Links */}
        <div className="space-y-1.5 border-t border-slate-100 pt-2 flex-1">
          {[
            'Bản tin truyền hình ngày 14 tháng 9 năm 2024',
            'Bản tin truyền hình ngày 13 tháng 9 năm 2024',
            'Bản tin truyền hình ngày 12 tháng 9 năm 2024',
          ].map((title, i) => (
            <Link
              key={i}
              href="#"
              className="flex items-start gap-2 text-[12px] text-slate-700 hover:text-amber-700 transition-colors py-0.5 group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 flex-shrink-0 group-hover:bg-red-600" />
              <span className="line-clamp-1">{title}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
