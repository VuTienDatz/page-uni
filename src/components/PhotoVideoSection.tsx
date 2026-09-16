'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Video, Camera, Play, Clock, ChevronRight } from 'lucide-react';

interface VideoItem {
  title: string;
  duration: string;
  date: string;
  image: string;
}

interface PhotoItem {
  title: string;
  date: string;
  image: string;
}

export default function PhotoVideoSection() {
  const [selectedVideo, setSelectedVideo] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState(0);

  const videoList: VideoItem[] = [
    {
      title: 'Phim tài liệu: Quân đội nhân dân Việt Nam - Truyền thống Binh chủng Thông tin liên lạc',
      duration: '18:45',
      date: '15/09/2024',
      image: '/images/video_hochiminh.jpg',
    },
    {
      title: 'Huấn luyện thực hành tác chiến cơ động và bảo đảm thông tin cấp chiến dịch',
      duration: '14:20',
      date: '14/09/2024',
      image: '/images/military_training.jpg',
    },
    {
      title: 'Trạm vi ba và radar quân sự hiện đại sẵn sàng chiến đấu trên điểm cao',
      duration: '11:15',
      date: '13/09/2024',
      image: '/images/telecom_radar.jpg',
    },
    {
      title: 'Diễn tập thực binh bảo đảm thông tin liên lạc bảo vệ chủ quyền biển đảo',
      duration: '22:05',
      date: '11/09/2024',
      image: '/images/naval_ship.jpg',
    },
    {
      title: 'Bản tin chuyên đề: An toàn thông tin và chuyển đổi số trong giáo dục sĩ quan',
      duration: '09:30',
      date: '10/09/2024',
      image: '/images/cyber_security.jpg',
    },
  ];

  const photoList: PhotoItem[] = [
    {
      title: 'Hội nghị trao thưởng các tập thể, cá nhân có thành tích xuất sắc',
      date: '15/09/2024',
      image: '/images/award_stage.jpg',
    },
    {
      title: 'Lễ duyệt đội ngũ chào mừng năm học mới 2024 - 2025 trang nghiêm',
      date: '14/09/2024',
      image: '/images/ceremony_event.jpg',
    },
    {
      title: 'Hội thảo khoa học công nghệ thông tin liên lạc quân sự tương lai',
      date: '13/09/2024',
      image: '/images/vietnam_conference_hall.jpg',
    },
    {
      title: 'Hội thao thể dục thể thao và chiến sĩ khỏe toàn quân cấp trường',
      date: '12/09/2024',
      image: '/images/sports_tournament.jpg',
    },
    {
      title: 'Đoàn Thanh niên Trường Sĩ quan Thông tin ra quân ngày Chủ nhật xanh',
      date: '10/09/2024',
      image: '/images/volunteers_green.jpg',
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 bg-white p-3.5 border border-slate-200 rounded shadow-xs">
      {/* ===== LEFT: VIDEO TIN TỨC ===== */}
      <div className="flex flex-col h-full">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b-2 border-red-700 pb-1.5 mb-2.5">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-red-700 text-white flex items-center justify-center shadow-xs">
              <Video className="w-3.5 h-3.5" />
            </div>
            <h3 className="text-xs sm:text-[13px] font-black uppercase tracking-wide text-red-700">
              VIDEO TIN TỨC
            </h3>
          </div>
          <Link
            href="#video"
            className="text-[11px] text-slate-500 hover:text-red-700 font-medium flex items-center gap-0.5 transition-colors"
          >
            <span>Xem tất cả</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Featured Main Video Player */}
        <div className="relative w-full h-56 sm:h-64 rounded-md overflow-hidden border border-slate-300 shadow-sm group cursor-pointer bg-slate-950">
          <Image
            src={videoList[selectedVideo].image}
            alt={videoList[selectedVideo].title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
          />
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

          {/* Central Play Button with pulse */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative flex items-center justify-center">
              <div className="absolute w-16 h-16 rounded-full bg-red-600/30 animate-ping" />
              <div className="w-14 h-14 rounded-full bg-red-600 text-white border-2 border-white shadow-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-red-700 transition-all duration-300">
                <Play className="w-6 h-6 ml-0.5 fill-current" />
              </div>
            </div>
          </div>

          {/* Bottom Info Bar */}
          <div className="absolute inset-x-0 bottom-0 p-3.5 pt-8">
            <div className="flex items-center gap-2 text-[10px] text-amber-300 font-semibold mb-1">
              <span className="flex items-center gap-1 bg-red-700/80 text-white px-1.5 py-0.5 rounded">
                <Clock className="w-3 h-3" />
                {videoList[selectedVideo].duration}
              </span>
              <span>{videoList[selectedVideo].date}</span>
            </div>
            <h4 className="text-xs sm:text-sm font-bold text-white leading-snug line-clamp-2 drop-shadow-md">
              {videoList[selectedVideo].title}
            </h4>
          </div>
        </div>

        {/* 5 Video Thumbnails Row */}
        <div className="grid grid-cols-5 gap-2 mt-2.5">
          {videoList.map((v, i) => (
            <button
              key={i}
              onClick={() => setSelectedVideo(i)}
              className={`relative h-14 rounded-md overflow-hidden border transition-all text-left group cursor-pointer ${
                i === selectedVideo
                  ? 'border-red-600 ring-2 ring-red-500 ring-offset-1 shadow-md scale-102'
                  : 'border-slate-300 opacity-75 hover:opacity-100 hover:border-slate-400'
              }`}
            >
              <Image
                src={v.image}
                alt={v.title}
                fill
                sizes="120px"
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/35 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-sm">
                  <Play className="w-3 h-3 ml-0.5 fill-current" />
                </div>
              </div>
              <div className="absolute bottom-0 inset-x-0 bg-black/80 text-[9px] font-medium text-white text-center py-0.5 font-mono">
                {v.duration}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ===== RIGHT: ẢNH HOẠT ĐỘNG ===== */}
      <div className="flex flex-col h-full">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b-2 border-blue-700 pb-1.5 mb-2.5">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-blue-700 text-white flex items-center justify-center shadow-xs">
              <Camera className="w-3.5 h-3.5" />
            </div>
            <h3 className="text-xs sm:text-[13px] font-black uppercase tracking-wide text-blue-800">
              ẢNH HOẠT ĐỘNG
            </h3>
          </div>
          <Link
            href="#anh-hoat-dong"
            className="text-[11px] text-slate-500 hover:text-blue-700 font-medium flex items-center gap-0.5 transition-colors"
          >
            <span>Xem tất cả</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Featured Main Photo Screen */}
        <div className="relative w-full h-56 sm:h-64 rounded-md overflow-hidden border border-slate-300 shadow-sm group cursor-pointer bg-slate-950">
          <Image
            src={photoList[selectedPhoto].image}
            alt={photoList[selectedPhoto].title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
          />
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

          {/* Photo badge */}
          <div className="absolute top-3 left-3 bg-blue-700/90 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1 shadow">
            <Camera className="w-3 h-3" />
            <span>ALBUM ẢNH</span>
          </div>

          {/* Bottom Info Bar */}
          <div className="absolute inset-x-0 bottom-0 p-3.5 pt-8">
            <span className="text-[10px] font-semibold text-cyan-200 block mb-1">
              Cập nhật: {photoList[selectedPhoto].date}
            </span>
            <h4 className="text-xs sm:text-sm font-bold text-white leading-snug line-clamp-2 drop-shadow-md">
              {photoList[selectedPhoto].title}
            </h4>
          </div>
        </div>

        {/* 5 Photo Thumbnails Row */}
        <div className="grid grid-cols-5 gap-2 mt-2.5">
          {photoList.map((p, i) => (
            <button
              key={i}
              onClick={() => setSelectedPhoto(i)}
              className={`relative h-14 rounded-md overflow-hidden border transition-all text-left group cursor-pointer ${
                i === selectedPhoto
                  ? 'border-blue-600 ring-2 ring-blue-500 ring-offset-1 shadow-md scale-102'
                  : 'border-slate-300 opacity-75 hover:opacity-100 hover:border-slate-400'
              }`}
            >
              <Image
                src={p.image}
                alt={p.title}
                fill
                sizes="120px"
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
