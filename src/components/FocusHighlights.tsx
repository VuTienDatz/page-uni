'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, ChevronRight, Calendar } from 'lucide-react';

interface FocusCard {
  id: string;
  title: string;
  slug: string;
  category: string;
  date: string;
  image: string;
}

const focusCards: FocusCard[] = [
  {
    id: 'focus-1',
    title: 'Đoàn chuyên gia quốc tế thăm và trao đổi kinh nghiệm đào tạo tác chiến điện tử',
    slug: 'doan-chuyen-gia-quoc-te-tham-va-trao-doi-kinh-nghiem',
    category: 'ĐỐI NGOẠI',
    date: '15/09/2024',
    image: '/images/focus_1.jpg',
  },
  {
    id: 'focus-2',
    title: 'Thủ trưởng Bộ Quốc phòng thăm, làm việc và chúc mừng ngày truyền thống Nhà trường',
    slug: 'thu-truong-bo-quoc-phong-tham-lam-viec',
    category: 'SỰ KIỆN',
    date: '14/09/2024',
    image: '/images/vietnam_summit.jpg',
  },
  {
    id: 'focus-3',
    title: 'Đại hội đại biểu Đảng bộ Trường Sĩ quan Thông tin lần thứ XVII thành công tốt đẹp',
    slug: 'dai-hoi-dai-bieu-dang-bo-lan-thu-xvii',
    category: 'CÔNG TÁC ĐẢNG',
    date: '13/09/2024',
    image: '/images/focus_3.jpg',
  },
  {
    id: 'focus-4',
    title: 'Đoàn cán bộ Học viện Kỹ thuật Quân sự kiểm tra công tác nghiên cứu khoa học',
    slug: 'doan-can-bo-kiem-tra-nghien-cuu-khoa-hoc',
    category: 'HỢP TÁC',
    date: '12/09/2024',
    image: '/images/vietnam_conference_hall.jpg',
  },
];

export default function FocusHighlights() {
  return (
    <div className="w-full bg-white border border-slate-200 rounded p-3 shadow-xs">
      {/* Section Header */}
      <div className="flex items-center justify-between border-b-2 border-red-700 pb-2 mb-3">
        <div className="flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-red-700" />
          <h2 className="text-sm md:text-base font-extrabold uppercase tracking-wide text-red-700">
            TIÊU ĐIỂM
          </h2>
        </div>
        <Link
          href="#tieu-diem"
          className="text-xs text-slate-500 hover:text-red-700 font-medium flex items-center gap-0.5 transition-colors"
        >
          <span>Xem tất cả</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {focusCards.map((card) => (
          <Link
            key={card.id}
            href={`/tin-tuc/${card.slug}`}
            className="group flex flex-col bg-slate-50 hover:bg-white border border-slate-200 hover:border-red-400 rounded overflow-hidden shadow-xs hover:shadow-md transition-all duration-200"
          >
            {/* Real Image */}
            <div className="relative w-full h-32 overflow-hidden border-b border-slate-200 bg-slate-900">
              <Image
                src={card.image}
                alt={card.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-108 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              <span className="absolute top-2 left-2 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-red-700 text-white rounded-xs shadow-xs">
                {card.category}
              </span>
            </div>

            {/* Title & Metadata */}
            <div className="p-2.5 flex-1 flex flex-col justify-between">
              <h3 className="text-xs font-semibold text-slate-800 group-hover:text-red-700 leading-snug line-clamp-3 mb-2 transition-colors">
                {card.title}
              </h3>
              <div className="flex items-center gap-1 text-[10px] text-slate-400">
                <Calendar className="w-3 h-3 text-slate-400" />
                <span>{card.date}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
