import Link from 'next/link';
import { Flame, ChevronRight } from 'lucide-react';
import { type NewsItem, formatDate } from '@/data/news';

interface QuickNewsPanelProps {
  items: NewsItem[];
}

export default function QuickNewsPanel({ items }: QuickNewsPanelProps) {
  return (
    <div className="w-full bg-white border border-slate-200 shadow-sm rounded flex flex-col h-full">
      {/* Header bar: "TIN MỚI" */}
      <div className="bg-[#c41e24] px-3 py-2 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <Flame className="w-4 h-4 text-amber-300" />
          <span>TIN MỚI</span>
        </div>
        <Link
          href="#tin-moi"
          className="text-[11px] text-amber-200 hover:text-white font-normal lowercase tracking-normal flex items-center gap-0.5"
        >
          <span>xem tất cả</span>
          <ChevronRight className="w-3 h-3" />
        </Link>
      </div>

      {/* News list */}
      <div className="flex-1 divide-y divide-slate-100 py-1">
        {items.slice(0, 7).map((item) => (
          <Link
            key={item.id}
            href={`/tin-tuc/${item.slug}`}
            className="group block px-3 py-2 hover:bg-red-50/70 transition-colors"
          >
            <div className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-red-600 group-hover:bg-amber-500 rounded-none mt-1.5 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <h4 className="text-[12px] font-semibold text-slate-800 group-hover:text-red-700 line-clamp-2 leading-snug">
                  {item.title}
                </h4>
                <span className="text-[10px] text-slate-400 mt-0.5 block">
                  ({formatDate(item.date)})
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
