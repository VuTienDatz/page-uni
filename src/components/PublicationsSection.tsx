'use client';

import Link from 'next/link';
import { BookOpen, FileSpreadsheet, BookmarkCheck, ChevronRight, Award } from 'lucide-react';

interface PublicationItem {
  id: string;
  title: string;
  issue: string;
  date: string;
  slug: string;
  type: 'journal' | 'newsletter' | 'document';
}

const journals: PublicationItem[] = [
  {
    id: 'j-1',
    title: 'Tạp chí Khoa học - Đào tạo Thông tin liên lạc số 48 (Quý III/2024)',
    issue: 'Số 48 - 2024',
    date: 'Tháng 09/2024',
    slug: 'tap-chi-kh-dt-ttll-so-48',
    type: 'journal',
  },
  {
    id: 'j-2',
    title: 'Tạp chí Khoa học - Đào tạo Thông tin liên lạc số 47 (Quý II/2024)',
    issue: 'Số 47 - 2024',
    date: 'Tháng 06/2024',
    slug: 'tap-chi-kh-dt-ttll-so-47',
    type: 'journal',
  },
  {
    id: 'j-3',
    title: 'Tạp chí Khoa học - Đào tạo Thông tin liên lạc số 46 (Quý I/2024)',
    issue: 'Số 46 - 2024',
    date: 'Tháng 03/2024',
    slug: 'tap-chi-kh-dt-ttll-so-46',
    type: 'journal',
  },
];

const newsletters: PublicationItem[] = [
  {
    id: 'n-1',
    title: 'Tờ tin Thông tin liên lạc Quân sự số tháng 9 năm 2024',
    issue: 'Số 108/2024',
    date: '09/2024',
    slug: 'to-tin-ttll-so-thang-9-2024',
    type: 'newsletter',
  },
  {
    id: 'n-2',
    title: 'Tờ tin Thông tin liên lạc Quân sự số tháng 8 năm 2024',
    issue: 'Số 107/2024',
    date: '08/2024',
    slug: 'to-tin-ttll-so-thang-8-2024',
    type: 'newsletter',
  },
  {
    id: 'n-3',
    title: 'Tờ tin Thông tin liên lạc Quân sự số tháng 7 năm 2024',
    issue: 'Số 106/2024',
    date: '07/2024',
    slug: 'to-tin-ttll-so-thang-7-2024',
    type: 'newsletter',
  },
];

const documents: PublicationItem[] = [
  {
    id: 'd-1',
    title: 'Tài liệu hướng dẫn khai thác khí tài thông tin quang dã chiến',
    issue: 'Tài liệu mật nội bộ',
    date: 'Năm 2024',
    slug: 'tai-lieu-khai-thac-khi-tai-thong-tin-quang',
    type: 'document',
  },
  {
    id: 'd-2',
    title: 'Quy chuẩn kỹ thuật mạng truyền số liệu quân sự dùng riêng',
    issue: 'Quy chuẩn QĐND',
    date: 'Năm 2024',
    slug: 'quy-chuan-ky-thuat-mang-truyen-so-lieu',
    type: 'document',
  },
  {
    id: 'd-3',
    title: 'Cẩm nang chỉ huy tham mưu thông tin trong chiến đấu hiệp đồng',
    issue: 'Tài liệu huấn luyện',
    date: 'Năm 2024',
    slug: 'cam-nang-chi-huy-tham-muu-thong-tin',
    type: 'document',
  },
];

export default function PublicationsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white p-3 border border-slate-200 rounded shadow-xs">
      {/* Col 1: Tạp chí Khoa học - Đào tạo TTLL */}
      <div className="flex flex-col">
        <div className="flex items-center justify-between border-b-2 border-blue-700 pb-1.5 mb-2">
          <div className="flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 text-blue-900" />
            <h3 className="text-xs sm:text-[12px] font-black uppercase tracking-tight text-blue-900 leading-tight">
              TẠP CHÍ KH - ĐT TTLL
            </h3>
          </div>
          <Link href="#tap-chi" className="text-[11px] text-slate-500 hover:text-blue-700 font-medium flex items-center gap-0.5">
            <span>Xem tất cả</span>
            <ChevronRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="divide-y divide-slate-100 flex-1">
          {journals.map((item) => (
            <Link
              key={item.id}
              href={`/tin-tuc/${item.slug}`}
              className="group flex items-center gap-3 py-2 hover:bg-blue-50/60 rounded px-1 transition-colors"
            >
              {/* Blue Magazine Cover Thumbnail */}
              <div className="w-12 h-16 rounded-xs bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 border border-blue-400/50 shadow-xs flex-shrink-0 flex flex-col items-center justify-between p-1 text-center group-hover:scale-105 transition-transform">
                <span className="text-[7px] font-extrabold text-amber-300 uppercase leading-none">
                  TẠP CHÍ
                </span>
                <span className="text-[9px] font-black text-white leading-tight">
                  KH-ĐT
                </span>
                <span className="text-[6px] text-blue-200 bg-blue-900/80 px-1 rounded-xs">
                  {item.issue.split(' ')[1] || '2024'}
                </span>
              </div>

              {/* Title & Info */}
              <div className="flex-1 min-w-0">
                <h4 className="text-[12px] font-semibold text-slate-800 group-hover:text-blue-700 leading-snug line-clamp-2">
                  {item.title}
                </h4>
                <div className="flex items-center gap-2 text-[10px] text-slate-400 mt-1">
                  <span className="text-blue-700 font-medium">{item.issue}</span>
                  <span>•</span>
                  <span>{item.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Col 2: Tờ tin Thông tin liên lạc quân sự */}
      <div className="flex flex-col">
        <div className="flex items-center justify-between border-b-2 border-red-700 pb-1.5 mb-2">
          <div className="flex items-center gap-1.5">
            <FileSpreadsheet className="w-4 h-4 text-red-700" />
            <h3 className="text-xs sm:text-[12px] font-black uppercase tracking-tight text-red-800 leading-tight">
              TỜ TIN TTLL QUÂN SỰ
            </h3>
          </div>
          <Link href="#to-tin" className="text-[11px] text-slate-500 hover:text-red-700 font-medium flex items-center gap-0.5">
            <span>Xem tất cả</span>
            <ChevronRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="divide-y divide-slate-100 flex-1">
          {newsletters.map((item) => (
            <Link
              key={item.id}
              href={`/tin-tuc/${item.slug}`}
              className="group flex items-center gap-3 py-2 hover:bg-red-50/60 rounded px-1 transition-colors"
            >
              {/* Newsletter Cover Thumbnail */}
              <div className="w-12 h-16 rounded-xs bg-gradient-to-br from-red-700 via-red-800 to-rose-950 border border-red-400/50 shadow-xs flex-shrink-0 flex flex-col items-center justify-between p-1 text-center group-hover:scale-105 transition-transform">
                <span className="text-[7px] font-extrabold text-amber-300 uppercase leading-none">
                  TỜ TIN
                </span>
                <span className="text-[9px] font-black text-white leading-tight">
                  TTLL
                </span>
                <span className="text-[6px] text-red-200 bg-red-950/80 px-1 rounded-xs">
                  {item.date}
                </span>
              </div>

              {/* Title & Info */}
              <div className="flex-1 min-w-0">
                <h4 className="text-[12px] font-semibold text-slate-800 group-hover:text-red-700 leading-snug line-clamp-2">
                  {item.title}
                </h4>
                <div className="flex items-center gap-2 text-[10px] text-slate-400 mt-1">
                  <span className="text-red-700 font-medium">{item.issue}</span>
                  <span>•</span>
                  <span>{item.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Col 3: Tư liệu khoa học quân sự */}
      <div className="flex flex-col">
        <div className="flex items-center justify-between border-b-2 border-emerald-700 pb-1.5 mb-2">
          <div className="flex items-center gap-1.5">
            <BookmarkCheck className="w-4 h-4 text-emerald-800" />
            <h3 className="text-xs sm:text-[12px] font-black uppercase tracking-tight text-emerald-800 leading-tight">
              TƯ LIỆU KHOA HỌC QUÂN SỰ
            </h3>
          </div>
          <Link href="#tu-lieu" className="text-[11px] text-slate-500 hover:text-emerald-700 font-medium flex items-center gap-0.5">
            <span>Xem tất cả</span>
            <ChevronRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="divide-y divide-slate-100 flex-1">
          {documents.map((item) => (
            <Link
              key={item.id}
              href={`/tin-tuc/${item.slug}`}
              className="group flex items-center gap-3 py-2 hover:bg-emerald-50/60 rounded px-1 transition-colors"
            >
              {/* Military Circular Seal Thumbnail */}
              <div className="w-12 h-14 rounded-full bg-gradient-to-tr from-emerald-800 via-green-700 to-amber-600 border-2 border-amber-300 shadow-xs flex-shrink-0 flex flex-col items-center justify-center p-1 text-center group-hover:scale-105 transition-transform">
                <Award className="w-3.5 h-3.5 text-amber-300" />
                <span className="text-[6px] font-black text-white uppercase tracking-tighter">
                  TƯ LIỆU
                </span>
              </div>

              {/* Title & Info */}
              <div className="flex-1 min-w-0">
                <h4 className="text-[12px] font-semibold text-slate-800 group-hover:text-emerald-700 leading-snug line-clamp-2">
                  {item.title}
                </h4>
                <div className="flex items-center gap-2 text-[10px] text-slate-400 mt-1">
                  <span className="text-emerald-700 font-medium">{item.issue}</span>
                  <span>•</span>
                  <span>{item.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
