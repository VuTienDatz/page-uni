'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Newspaper } from 'lucide-react';

interface ArticleFeaturedImageProps {
  image?: string;
  title: string;
}

export default function ArticleFeaturedImage({ image, title }: ArticleFeaturedImageProps) {
  const [imgError, setImgError] = useState(false);
  const hasImage = Boolean(image && !imgError);

  if (!hasImage || !image) {
    return (
      <div className="h-44 sm:h-52 mx-4 md:mx-6 rounded-md mb-4 border border-slate-200 bg-slate-100 flex flex-col items-center justify-center text-slate-400">
        <div className="w-16 h-16 rounded-full bg-white border border-slate-200 shadow-xs flex items-center justify-center text-red-700 mb-2">
          <Newspaper className="w-8 h-8" />
        </div>
        <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
          BẢN TIN CHUYÊN ĐỀ • TRƯỜNG SĨ QUAN THÔNG TIN
        </span>
      </div>
    );
  }

  return (
    <div className="relative h-60 sm:h-72 md:h-96 mx-4 md:mx-6 rounded-md overflow-hidden mb-4 border border-slate-200 bg-slate-900">
      <Image
        src={image}
        alt={title}
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 65vw"
        className="object-cover"
        onError={() => setImgError(true)}
      />
    </div>
  );
}
