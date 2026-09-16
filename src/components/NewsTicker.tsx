'use client';

import { Bell, Flame } from 'lucide-react';
import { quickNews } from '@/data/news';

export default function NewsTicker() {
  return (
    <div className="bg-red-700 overflow-hidden py-1.5 border-b border-red-800">
      <div className="mx-auto max-w-7xl px-4 flex items-center gap-3">
        <span className="flex-shrink-0 bg-white text-red-700 px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider flex items-center gap-1 shadow-xs">
          <Bell className="w-3.5 h-3.5 text-red-600 animate-bounce" />
          <span>Tin mới</span>
        </span>
        <div className="overflow-hidden flex-1">
          <div className="animate-ticker whitespace-nowrap">
            {quickNews.map((news, i) => (
              <span key={i} className="text-white text-xs sm:text-sm mx-6 inline-flex items-center gap-2">
                <span>{news}</span>
                <Flame className="w-3.5 h-3.5 text-amber-300 flex-shrink-0" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
