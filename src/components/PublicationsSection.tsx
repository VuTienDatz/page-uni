'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BookOpen, Newspaper, BookmarkCheck, ChevronRight, Calendar } from 'lucide-react';

interface PublicationItem {
  id: string;
  title: string;
  issue: string;
  date: string;
  slug: string;
  type: 'journal' | 'newsletter' | 'document';
  image?: string;
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

function PublicationCoverBox({
  type,
  image,
  title,
  tag,
}: {
  type: 'journal' | 'newsletter' | 'document';
  image?: string;
  title: string;
  tag?: string;
}) {
  const [imgError, setImgError] = useState(false);
  const hasImage = Boolean(image && !imgError);

  if (hasImage && image) {
    return (
      <div className="w-14 h-18 sm:w-16 sm:h-20 rounded-md overflow-hidden border border-slate-200 relative flex-shrink-0 group-hover:scale-105 transition-transform bg-slate-100 shadow-2xs">
        <Image
          src={image}
          alt={title}
          fill
          sizes="80px"
          className="object-cover"
          onError={() => setImgError(true)}
        />
      </div>
    );
  }

  // Journal (Tạp chí) Fallback: BookOpen icon in soothing blue box
  if (type === 'journal') {
    return (
      <div className="w-14 h-18 sm:w-16 sm:h-20 rounded-md bg-blue-50/80 border border-blue-200 flex flex-col items-center justify-center text-blue-700 flex-shrink-0 relative overflow-hidden group-hover:bg-blue-100/70 group-hover:border-blue-300 transition-all shadow-2xs p-1">
        <div className="w-8 h-8 rounded-full bg-white border border-blue-100 shadow-2xs flex items-center justify-center text-blue-700 mb-1 group-hover:scale-110 transition-transform">
          <BookOpen className="w-4 h-4" />
        </div>
        <span className="text-[7.5px] font-bold uppercase tracking-wider text-blue-800 bg-white/90 border border-blue-100/80 px-1.5 py-0.5 rounded shadow-2xs">
          {tag || 'TẠP CHÍ'}
        </span>
      </div>
    );
  }

  // Newsletter (Tờ tin) Fallback: Newspaper icon in soothing red box
  if (type === 'newsletter') {
    return (
      <div className="w-14 h-18 sm:w-16 sm:h-20 rounded-md bg-red-50/80 border border-red-200 flex flex-col items-center justify-center text-red-700 flex-shrink-0 relative overflow-hidden group-hover:bg-red-100/70 group-hover:border-red-300 transition-all shadow-2xs p-1">
        <div className="w-8 h-8 rounded-full bg-white border border-red-100 shadow-2xs flex items-center justify-center text-red-700 mb-1 group-hover:scale-110 transition-transform">
          <Newspaper className="w-4 h-4" />
        </div>
        <span className="text-[7.5px] font-bold uppercase tracking-wider text-red-800 bg-white/90 border border-red-100/80 px-1.5 py-0.5 rounded shadow-2xs">
          {tag || 'TỜ TIN'}
        </span>
      </div>
    );
  }

  // Document (Tư liệu) Fallback: BookmarkCheck icon in soothing emerald box
  return (
    <div className="w-14 h-18 sm:w-16 sm:h-20 rounded-md bg-emerald-50/80 border border-emerald-200 flex flex-col items-center justify-center text-emerald-800 flex-shrink-0 relative overflow-hidden group-hover:bg-emerald-100/70 group-hover:border-emerald-300 transition-all shadow-2xs p-1">
      <div className="w-8 h-8 rounded-full bg-white border border-emerald-100 shadow-2xs flex items-center justify-center text-emerald-700 mb-1 group-hover:scale-110 transition-transform">
        <BookmarkCheck className="w-4 h-4" />
      </div>
      <span className="text-[7.5px] font-bold uppercase tracking-wider text-emerald-900 bg-white/90 border border-emerald-100/80 px-1.5 py-0.5 rounded shadow-2xs">
        {tag || 'TƯ LIỆU'}
      </span>
    </div>
  );
}

export default function PublicationsSection() {
  return (
    <div className="bg-white p-3.5 md:p-4 border border-slate-200 rounded-lg shadow-xs">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 items-stretch">
        {/* Col 1: Tạp chí Khoa học - Đào tạo TTLL */}
        <div className="flex flex-col bg-white border border-slate-200/80 rounded-lg p-3 shadow-2xs hover:shadow-xs transition-shadow">
          <div className="flex items-center justify-between border-b-2 border-blue-700 pb-2 mb-2">
            <div className="flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-blue-900" />
              <h3 className="text-xs sm:text-[13px] font-black uppercase tracking-tight text-blue-900 leading-tight">
                TẠP CHÍ KH - ĐT TTLL
              </h3>
            </div>
            <Link
              href="#tap-chi"
              className="text-[11px] text-slate-500 hover:text-blue-700 font-medium flex items-center gap-0.5 transition-colors"
            >
              <span>Xem tất cả</span>
              <ChevronRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="divide-y divide-slate-100 flex-1 flex flex-col justify-between">
            {journals.map((item) => (
              <Link
                key={item.id}
                href={`/tin-tuc/${item.slug}`}
                className="group flex items-center gap-3 py-2 px-1 rounded hover:bg-blue-50/50 transition-colors"
              >
                <PublicationCoverBox
                  type="journal"
                  image={item.image}
                  title={item.title}
                  tag={item.issue.split(' ')[1] ? `Số ${item.issue.split(' ')[1]}` : 'TẠP CHÍ'}
                />

                <div className="flex-1 min-w-0">
                  <h4 className="text-[12.5px] font-bold text-slate-800 group-hover:text-blue-700 leading-snug line-clamp-2 transition-colors">
                    {item.title}
                  </h4>
                  <div className="flex items-center gap-2 text-[10.5px] text-slate-400 mt-1.5">
                    <span className="px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 font-semibold border border-blue-100">
                      {item.issue}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-slate-500">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      {item.date}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Col 2: Tờ tin Thông tin liên lạc quân sự */}
        <div className="flex flex-col bg-white border border-slate-200/80 rounded-lg p-3 shadow-2xs hover:shadow-xs transition-shadow">
          <div className="flex items-center justify-between border-b-2 border-red-700 pb-2 mb-2">
            <div className="flex items-center gap-1.5">
              <Newspaper className="w-4 h-4 text-red-700" />
              <h3 className="text-xs sm:text-[13px] font-black uppercase tracking-tight text-red-800 leading-tight">
                TỜ TIN TTLL QUÂN SỰ
              </h3>
            </div>
            <Link
              href="#to-tin"
              className="text-[11px] text-slate-500 hover:text-red-700 font-medium flex items-center gap-0.5 transition-colors"
            >
              <span>Xem tất cả</span>
              <ChevronRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="divide-y divide-slate-100 flex-1 flex flex-col justify-between">
            {newsletters.map((item) => (
              <Link
                key={item.id}
                href={`/tin-tuc/${item.slug}`}
                className="group flex items-center gap-3 py-2 px-1 rounded hover:bg-red-50/50 transition-colors"
              >
                <PublicationCoverBox
                  type="newsletter"
                  image={item.image}
                  title={item.title}
                  tag={item.date || 'TỜ TIN'}
                />

                <div className="flex-1 min-w-0">
                  <h4 className="text-[12.5px] font-bold text-slate-800 group-hover:text-red-700 leading-snug line-clamp-2 transition-colors">
                    {item.title}
                  </h4>
                  <div className="flex items-center gap-2 text-[10.5px] text-slate-400 mt-1.5">
                    <span className="px-1.5 py-0.5 rounded bg-red-50 text-red-700 font-semibold border border-red-100">
                      {item.issue}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-slate-500">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      {item.date}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Col 3: Tư liệu khoa học quân sự */}
        <div className="flex flex-col bg-white border border-slate-200/80 rounded-lg p-3 shadow-2xs hover:shadow-xs transition-shadow">
          <div className="flex items-center justify-between border-b-2 border-emerald-700 pb-2 mb-2">
            <div className="flex items-center gap-1.5">
              <BookmarkCheck className="w-4 h-4 text-emerald-800" />
              <h3 className="text-xs sm:text-[13px] font-black uppercase tracking-tight text-emerald-800 leading-tight">
                TƯ LIỆU KHOA HỌC QUÂN SỰ
              </h3>
            </div>
            <Link
              href="#tu-lieu"
              className="text-[11px] text-slate-500 hover:text-emerald-700 font-medium flex items-center gap-0.5 transition-colors"
            >
              <span>Xem tất cả</span>
              <ChevronRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="divide-y divide-slate-100 flex-1 flex flex-col justify-between">
            {documents.map((item) => (
              <Link
                key={item.id}
                href={`/tin-tuc/${item.slug}`}
                className="group flex items-center gap-3 py-2 px-1 rounded hover:bg-emerald-50/50 transition-colors"
              >
                <PublicationCoverBox
                  type="document"
                  image={item.image}
                  title={item.title}
                  tag="TƯ LIỆU"
                />

                <div className="flex-1 min-w-0">
                  <h4 className="text-[12.5px] font-bold text-slate-800 group-hover:text-emerald-700 leading-snug line-clamp-2 transition-colors">
                    {item.title}
                  </h4>
                  <div className="flex items-center gap-2 text-[10.5px] text-slate-400 mt-1.5">
                    <span className="px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 font-semibold border border-emerald-100">
                      {item.issue}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-slate-500">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      {item.date}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
