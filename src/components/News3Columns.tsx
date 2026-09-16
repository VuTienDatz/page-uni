'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Building2, Flag, Globe, ChevronRight, Clock, Newspaper } from 'lucide-react';
import { type NewsItem, formatDate } from '@/data/news';

interface News3ColumnsProps {
  nhaTruongNews: NewsItem[];
  trongNuocNews: NewsItem[];
  theGioiNews: NewsItem[];
}

function NewsRowItem({ item, defaultImg }: { item: NewsItem; idx?: number; defaultImg?: string }) {
  const [imgError, setImgError] = useState(false);
  const imageSource = item.image || defaultImg;
  const hasImage = Boolean(imageSource && !imgError);

  return (
    <Link
      href={`/tin-tuc/${item.slug}`}
      className="group flex gap-2.5 py-2.5 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors rounded px-1"
    >
      {/* Thumbnail box with photo or news icon */}
      <div className="w-24 h-16 sm:w-28 sm:h-18 rounded overflow-hidden flex-shrink-0 relative bg-slate-100 border border-slate-200 flex items-center justify-center">
        {hasImage && imageSource ? (
          <>
            <Image
              src={imageSource}
              alt={item.title}
              fill
              sizes="120px"
              className="object-cover group-hover:scale-110 transition-transform duration-300"
              onError={() => setImgError(true)}
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
            <span className="absolute bottom-1 right-1 px-1 bg-black/70 text-[8px] text-amber-300 rounded font-mono">
              {item.views > 1000 ? `${(item.views / 1000).toFixed(1)}k` : item.views}
            </span>
          </>
        ) : (
          <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-red-700 shadow-2xs group-hover:scale-110 transition-transform">
            <Newspaper className="w-4 h-4" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 flex flex-col justify-between">
        <h4 className="text-[12px] font-bold text-slate-800 group-hover:text-red-700 leading-snug line-clamp-2 transition-colors">
          {item.title}
        </h4>
        <div className="flex items-center gap-1 text-[10px] text-slate-400 mt-1">
          <Clock className="w-3 h-3 text-slate-400" />
          <span>{formatDate(item.date)}</span>
        </div>
      </div>
    </Link>
  );
}

export default function News3Columns({
  nhaTruongNews,
  trongNuocNews,
  theGioiNews,
}: News3ColumnsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white p-3.5 border border-slate-200 rounded shadow-xs">
      {/* Column 1: Tin Nhà Trường */}
      <div className="flex flex-col">
        <div className="flex items-center justify-between border-b-2 border-red-700 pb-1.5 mb-2">
          <div className="flex items-center gap-1.5">
            <Building2 className="w-4 h-4 text-red-700" />
            <h3 className="text-xs sm:text-[13px] font-black uppercase tracking-wide text-red-700">
              TIN NHÀ TRƯỜNG
            </h3>
          </div>
          <Link
            href="#tin-nha-truong"
            className="text-[11px] text-slate-500 hover:text-red-700 font-medium flex items-center gap-0.5 transition-colors"
          >
            <span>Xem tất cả</span>
            <ChevronRight className="w-3 h-3" />
          </Link>
        </div>
        <div className="divide-y divide-slate-100 flex-1">
          {nhaTruongNews.slice(0, 3).map((item, idx) => (
            <NewsRowItem
              key={item.id}
              item={item}
              idx={idx}
              defaultImg={['/images/hero_conference.jpg', '/images/hero_lab.jpg', '/images/vietnam_students.jpg'][idx]}
            />
          ))}
        </div>
      </div>

      {/* Column 2: Tin Trong Nước */}
      <div className="flex flex-col">
        <div className="flex items-center justify-between border-b-2 border-blue-700 pb-1.5 mb-2">
          <div className="flex items-center gap-1.5">
            <Flag className="w-4 h-4 text-blue-700" />
            <h3 className="text-xs sm:text-[13px] font-black uppercase tracking-wide text-blue-800">
              TIN TRONG NƯỚC
            </h3>
          </div>
          <Link
            href="#tin-trong-nuoc"
            className="text-[11px] text-slate-500 hover:text-blue-700 font-medium flex items-center gap-0.5 transition-colors"
          >
            <span>Xem tất cả</span>
            <ChevronRight className="w-3 h-3" />
          </Link>
        </div>
        <div className="divide-y divide-slate-100 flex-1">
          {trongNuocNews.slice(0, 3).map((item, idx) => (
            <NewsRowItem
              key={item.id}
              item={item}
              idx={idx}
              defaultImg={['/images/news_domestic.jpg', '/images/lang_bac.jpg', '/images/hanoi_opera.jpg'][idx]}
            />
          ))}
        </div>
      </div>

      {/* Column 3: Tin Thế Giới */}
      <div className="flex flex-col">
        <div className="flex items-center justify-between border-b-2 border-amber-600 pb-1.5 mb-2">
          <div className="flex items-center gap-1.5">
            <Globe className="w-4 h-4 text-amber-600" />
            <h3 className="text-xs sm:text-[13px] font-black uppercase tracking-wide text-amber-700">
              TIN THẾ GIỚI
            </h3>
          </div>
          <Link
            href="#tin-the-gioi"
            className="text-[11px] text-slate-500 hover:text-amber-700 font-medium flex items-center gap-0.5 transition-colors"
          >
            <span>Xem tất cả</span>
            <ChevronRight className="w-3 h-3" />
          </Link>
        </div>
        <div className="divide-y divide-slate-100 flex-1">
          {theGioiNews.slice(0, 3).map((item, idx) => (
            <NewsRowItem
              key={item.id}
              item={item}
              idx={idx}
              defaultImg={['/images/news_world.jpg', '/images/focus_1.jpg', '/images/vietnam_summit.jpg'][idx]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
