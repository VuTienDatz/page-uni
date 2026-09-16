'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Newspaper, Calendar, Eye } from 'lucide-react';
import { type NewsItem, formatDate, formatViews } from '@/data/news';

interface NewsCardProps {
  item: NewsItem;
  variant?: 'default' | 'horizontal' | 'compact' | 'featured';
  index?: number;
}

const fallbackImages = [
  '/images/vietnam_students.jpg',
  '/images/vietnam_classroom.jpg',
  '/images/news_domestic.jpg',
  '/images/military_training.jpg',
  '/images/telecom_radar.jpg',
  '/images/award_stage.jpg',
];

export default function NewsCard({ item, variant = 'default', index = 0 }: NewsCardProps) {
  const imgSrc = item.image && item.image.startsWith('/images/') && !item.image.includes('hero-')
    ? item.image
    : fallbackImages[index % fallbackImages.length];

  if (variant === 'horizontal') {
    return (
      <Link
        href={`/tin-tuc/${item.slug}`}
        className="news-card group flex gap-3.5 p-3 rounded-md bg-white hover:bg-slate-50/80 border border-slate-200 hover:border-red-400 hover:shadow-md transition-all"
      >
        <div className="w-28 h-20 rounded overflow-hidden flex-shrink-0 relative bg-slate-900 border border-slate-200">
          <Image
            src={imgSrc}
            alt={item.title}
            fill
            sizes="120px"
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
        </div>
        <div className="flex-1 min-w-0 flex flex-col justify-between">
          <h4 className="text-[13px] font-bold text-slate-800 line-clamp-2 group-hover:text-red-700 transition-colors leading-snug">
            {item.title}
          </h4>
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3 text-slate-400" />
              {formatDate(item.date)}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Eye className="w-3 h-3 text-slate-400" />
              {formatViews(item.views)}
            </span>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === 'compact') {
    return (
      <Link
        href={`/tin-tuc/${item.slug}`}
        className="group flex items-start gap-3 py-2.5 border-b border-slate-100 last:border-0 hover:bg-slate-50/50 px-1 rounded transition-colors"
      >
        <span className="flex-shrink-0 w-6 h-6 rounded bg-red-50 text-red-700 text-xs font-bold flex items-center justify-center border border-red-200">
          {(index + 1).toString().padStart(2, '0')}
        </span>
        <div className="flex-1 min-w-0">
          <h4 className="text-xs font-semibold text-slate-700 line-clamp-2 group-hover:text-red-700 transition-colors leading-snug">
            {item.title}
          </h4>
          <span className="text-[10px] text-slate-400 mt-0.5 flex items-center gap-1">
            <Calendar className="w-3 h-3 text-slate-400" />
            {formatDate(item.date)}
          </span>
        </div>
      </Link>
    );
  }

  if (variant === 'featured') {
    return (
      <Link
        href={`/tin-tuc/${item.slug}`}
        className="news-card group block rounded-lg overflow-hidden bg-white border border-slate-200 hover:border-red-400 hover:shadow-md transition-all"
      >
        <div className="relative h-52 overflow-hidden bg-slate-900">
          <Image
            src={imgSrc}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover group-hover:scale-108 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-red-700 text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
            {item.category}
          </span>
        </div>
        <div className="p-4">
          <h3 className="text-base font-bold text-slate-800 line-clamp-2 group-hover:text-red-700 transition-colors leading-snug mb-2">
            {item.title}
          </h3>
          <p className="text-xs text-slate-500 line-clamp-2 mb-3">{item.excerpt}</p>
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              {formatDate(item.date)}
            </span>
            <span className="flex items-center gap-1">
              <Eye className="w-3.5 h-3.5 text-slate-400" />
              {formatViews(item.views)}
            </span>
          </div>
        </div>
      </Link>
    );
  }

  // Default card
  return (
    <Link
      href={`/tin-tuc/${item.slug}`}
      className="news-card group block rounded-lg overflow-hidden bg-white border border-slate-200 hover:border-red-400 hover:shadow-md transition-all"
    >
      <div className="relative h-44 overflow-hidden bg-slate-900">
        <Image
          src={imgSrc}
          alt={item.title}
          fill
          sizes="(max-width: 640px) 100vw, 33vw"
          className="object-cover group-hover:scale-108 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-red-700 text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
          {item.category}
        </span>
      </div>
      <div className="p-3.5">
        <h3 className="text-xs font-bold text-slate-800 line-clamp-2 group-hover:text-red-700 transition-colors leading-snug mb-1.5">
          {item.title}
        </h3>
        <p className="text-[11px] text-slate-500 line-clamp-2 mb-2">{item.excerpt}</p>
        <div className="flex items-center gap-2 text-[10px] text-slate-400">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3 text-slate-400" />
            {formatDate(item.date)}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Eye className="w-3 h-3 text-slate-400" />
            {formatViews(item.views)}
          </span>
        </div>
      </div>
    </Link>
  );
}
