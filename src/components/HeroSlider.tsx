'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Award } from 'lucide-react';

interface SlideItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  views: number;
  image?: string;
  gradient?: string;
  accentColor?: string;
}

const slides: SlideItem[] = [
  {
    id: 'hero-1',
    slug: 'dang-uy-nha-truong-ra-nghi-quyet-lanh-dao-nhiem-vu',
    title: 'Đảng ủy Trường Quân sự ra Nghị quyết lãnh đạo thực hiện nhiệm vụ năm học 2024 - 2025',
    category: 'TIN NHÀ TRƯỜNG',
    date: '15/09/2024',
    views: 2450,
    image: '/images/hero_conference.jpg',
  },
  {
    id: 'hero-2',
    slug: 'nang-cao-chat-luong-huan-luyen-thuc-hanh-cong-nghe-moi',
    title: 'Nâng cao chất lượng thực hành, làm chủ trang bị kỹ thuật thông tin viễn thông thế hệ mới',
    category: 'ĐÀO TẠO',
    date: '14/09/2024',
    views: 1890,
    image: '/images/hero_lab.jpg',
  },
  {
    id: 'hero-3',
    slug: 'hoi-nghi-khoa-hoc-cong-nghe-thong-tin-quan-su',
    title: 'Hội nghị sơ kết công tác Đảng, công tác chính trị quý III và phương hướng nhiệm vụ trọng tâm',
    category: 'CÔNG TÁC ĐẢNG',
    date: '12/09/2024',
    views: 1620,
    gradient: 'linear-gradient(135deg, #1e3a5f 0%, #0d5ea6 50%, #991b1b 100%)',
  },
  {
    id: 'hero-4',
    slug: 'le-phat-dong-phong-trao-thi-dua-quyet-thang',
    title: 'Phát động đợt thi đua cao điểm chào mừng 76 năm ngày truyền thống Nhà trường vẻ vang',
    category: 'THI ĐUA',
    date: '10/09/2024',
    views: 2130,
    gradient: 'linear-gradient(135deg, #881337 0%, #b91c1c 50%, #d97706 100%)',
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="w-full flex flex-col gap-2">
      {/* ===== MAIN SLIDE WINDOW ===== */}
      <div className="relative w-full h-[280px] sm:h-[320px] md:h-[360px] overflow-hidden rounded border border-slate-300 shadow-md bg-slate-900 group">
        {slides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {slide.image ? (
              <div className="relative w-full h-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={idx === 0}
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            ) : (
              <div
                className="w-full h-full flex items-center justify-center p-8 relative overflow-hidden"
                style={{ background: slide.gradient }}
              >
                <div className="text-center z-10 max-w-lg">
                  <div className="inline-flex items-center gap-1 px-3 py-1 bg-amber-400 text-red-900 font-extrabold text-xs rounded uppercase mb-2">
                    <Award className="w-3.5 h-3.5" />
                    <span>{slide.category}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-white leading-snug drop-shadow-md">
                    {slide.title}
                  </h3>
                </div>
              </div>
            )}

            {/* Bottom Gradient Dark Strip */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent pt-12 pb-3 px-4 flex flex-col justify-end">
              <Link
                href={`/tin-tuc/${slide.slug}`}
                className="text-white hover:text-amber-300 transition-colors"
              >
                <h2 className="text-sm sm:text-base md:text-lg font-bold leading-snug line-clamp-2 drop-shadow">
                  {slide.title}
                </h2>
              </Link>
            </div>
          </div>
        ))}

        {/* Navigation arrow buttons */}
        <button
          onClick={prev}
          aria-label="Ảnh trước"
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/40 hover:bg-red-700 text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          aria-label="Ảnh tiếp"
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/40 hover:bg-red-700 text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* ===== 4 THUMBNAILS PREVIEW ROW ===== */}
      <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
        {slides.map((slide, idx) => {
          const isActive = idx === current;
          return (
            <button
              key={slide.id}
              onClick={() => setCurrent(idx)}
              className={`relative h-14 sm:h-16 md:h-18 rounded overflow-hidden border-2 transition-all text-left group ${
                isActive
                  ? 'border-red-600 ring-2 ring-amber-400/80 shadow-md scale-[1.02]'
                  : 'border-slate-300 opacity-75 hover:opacity-100 hover:border-slate-400'
              }`}
            >
              {slide.image ? (
                <Image
                  src={slide.image}
                  alt={`Thumbnail ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              ) : (
                <div
                  className="w-full h-full flex items-center justify-center text-white text-[10px] font-bold p-1 text-center"
                  style={{ background: slide.gradient }}
                >
                  <span className="line-clamp-2">{slide.category}</span>
                </div>
              )}
              <div
                className={`absolute inset-0 ${
                  isActive ? 'bg-red-700/20' : 'bg-black/20 group-hover:bg-transparent'
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
