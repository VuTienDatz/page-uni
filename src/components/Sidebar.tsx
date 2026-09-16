'use client';

import Link from 'next/link';
import {
  GraduationCap,
  Calendar,
  FileText,
  Bell,
  Users,
  BookOpen,
  Laptop,
  Mail,
  PhoneCall,
  Compass,
  ListFilter,
} from 'lucide-react';

interface QuickLink {
  name: string;
  href: string;
  iconBg: string;
  icon: React.ReactNode;
}

const quickLinks: QuickLink[] = [
  {
    name: 'Tuyển sinh quân sự',
    href: '#tuyen-sinh',
    iconBg: 'bg-red-600',
    icon: <GraduationCap className="w-3.5 h-3.5" />,
  },
  {
    name: 'Lịch công tác tuần',
    href: '#lich-cong-tac',
    iconBg: 'bg-blue-600',
    icon: <Calendar className="w-3.5 h-3.5" />,
  },
  {
    name: 'Văn bản - Biểu mẫu',
    href: '#van-ban',
    iconBg: 'bg-emerald-600',
    icon: <FileText className="w-3.5 h-3.5" />,
  },
  {
    name: 'Thông báo chung',
    href: '#thong-bao',
    iconBg: 'bg-amber-600',
    icon: <Bell className="w-3.5 h-3.5" />,
  },
  {
    name: 'Cựu học viên',
    href: '#cuu-hoc-vien',
    iconBg: 'bg-purple-600',
    icon: <Users className="w-3.5 h-3.5" />,
  },
  {
    name: 'Thư viện số',
    href: '#thu-vien-so',
    iconBg: 'bg-cyan-600',
    icon: <BookOpen className="w-3.5 h-3.5" />,
  },
  {
    name: 'E-learning',
    href: '#e-learning',
    iconBg: 'bg-indigo-600',
    icon: <Laptop className="w-3.5 h-3.5" />,
  },
  {
    name: 'Hộp thư điện tử',
    href: '#hop-thu',
    iconBg: 'bg-sky-600',
    icon: <Mail className="w-3.5 h-3.5" />,
  },
  {
    name: 'Đường dây nóng',
    href: '#duong-day-nong',
    iconBg: 'bg-rose-600',
    icon: <PhoneCall className="w-3.5 h-3.5" />,
  },
  {
    name: 'Hướng dẫn sử dụng',
    href: '#huong-dan',
    iconBg: 'bg-teal-600',
    icon: <Compass className="w-3.5 h-3.5" />,
  },
];

export default function Sidebar() {
  return (
    <div className="w-full bg-white border border-slate-200 shadow-sm rounded">
      {/* Header bar */}
      <div className="bg-[#b91c1c] px-3 py-2 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2">
        <ListFilter className="w-3.5 h-3.5 text-amber-300" />
        <span>DANH MỤC TIỆN ÍCH</span>
      </div>

      {/* Links list */}
      <div className="divide-y divide-slate-100">
        {quickLinks.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center gap-2.5 px-3 py-2 text-[12.5px] text-slate-700 hover:bg-red-50 hover:text-red-700 transition-colors group font-medium"
          >
            <span
              className={`w-5 h-5 rounded flex items-center justify-center text-white ${item.iconBg} shadow-xs group-hover:scale-110 transition-transform flex-shrink-0`}
            >
              {item.icon}
            </span>
            <span className="truncate">{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
