'use client';

import Link from 'next/link';
import { GraduationCap, Award, Shield, Play, Send } from 'lucide-react';

export default function PartnerLogos() {
  const partners = [
    {
      name: 'Báo Sinh Viên Việt Nam',
      href: 'https://svvn.tienphong.vn',
      content: (
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
            <GraduationCap className="w-4 h-4" />
          </div>
          <div className="text-left">
            <div className="text-[13px] font-black text-blue-700 tracking-tight leading-tight">
              SinhViên
            </div>
            <div className="text-[9px] font-bold text-slate-500 tracking-wider uppercase leading-none">
              Việt Nam
            </div>
          </div>
        </div>
      ),
    },
    {
      name: 'Báo Tiền Phong',
      href: 'https://tienphong.vn',
      content: (
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-red-50 border border-red-200 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
            <Send className="w-4 h-4 -rotate-45" />
          </div>
          <div className="text-left">
            <div className="text-[13px] font-black italic text-red-600 tracking-tighter uppercase leading-tight">
              Tiềnphong
            </div>
            <div className="text-[9px] font-medium text-slate-400 leading-none">
              tienphong.vn
            </div>
          </div>
        </div>
      ),
    },
    {
      name: 'Báo Nhân Dân',
      href: 'https://nhandan.vn',
      content: (
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-amber-50 border border-amber-300 flex items-center justify-center text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-colors">
            <Award className="w-4.5 h-4.5" />
          </div>
          <div className="text-left">
            <div className="text-[13px] font-black text-red-700 uppercase tracking-tight leading-tight">
              Nhân Dân
            </div>
            <div className="text-[9px] font-bold text-amber-600 leading-none">
              Cơ quan T.Ư Đảng
            </div>
          </div>
        </div>
      ),
    },
    {
      name: 'Báo Quân Đội Nhân Dân',
      href: 'https://qdnd.vn',
      content: (
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-red-700 text-amber-300 border border-amber-400 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
            <Shield className="w-4.5 h-4.5" />
          </div>
          <div className="text-left">
            <div className="text-[12px] font-black text-red-800 uppercase tracking-tight leading-tight">
              Quân Đội
            </div>
            <div className="text-[10px] font-bold text-red-700 uppercase tracking-tighter leading-none">
              Nhân Dân
            </div>
          </div>
        </div>
      ),
    },
    {
      name: 'Kênh YouTube Trường',
      href: 'https://youtube.com',
      content: (
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-red-50 border border-red-200 flex items-center justify-center group-hover:bg-red-600 transition-colors">
            <div className="w-5 h-3.5 bg-red-600 group-hover:bg-white rounded flex items-center justify-center">
              <Play className="w-2.5 h-2.5 text-white group-hover:text-red-600 fill-current ml-0.5" />
            </div>
          </div>
          <div className="text-left">
            <div className="text-[13px] font-black text-slate-800 tracking-tight leading-tight">
              YouTube
            </div>
            <div className="text-[9px] font-medium text-red-600 leading-none">
              Kênh Video SQTT
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full bg-white border border-slate-200 rounded-md p-2.5 shadow-xs">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
        {partners.map((p, idx) => (
          <Link
            key={idx}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            title={p.name}
            className={`flex items-center justify-center h-14 px-3 bg-slate-50/70 border border-slate-200 rounded-md hover:border-red-500 hover:bg-white hover:shadow-sm transition-all duration-200 group ${
              idx === 4 ? 'col-span-2 sm:col-span-1' : ''
            }`}
          >
            {p.content}
          </Link>
        ))}
      </div>
    </div>
  );
}
