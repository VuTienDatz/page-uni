'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Home, ChevronDown, ChevronRight, Search, Menu as MenuIcon, X, MapPin, Radio } from 'lucide-react';

const menuItems = [
  {
    name: 'GIỚI THIỆU',
    href: '#gioi-thieu',
    dropdown: [
      'Tổng quan nhà trường',
      'Lịch sử truyền thống',
      'Ban Giám hiệu',
      'Cơ cấu tổ chức',
      'Cơ sở vật chất',
    ],
  },
  {
    name: 'TUYỂN SINH',
    href: '#tuyen-sinh',
    dropdown: [
      'Tuyển sinh đại học quân sự',
      'Tuyển sinh sau đại học',
      'Điểm chuẩn các năm',
      'Thông tin xét tuyển',
    ],
  },
  {
    name: 'ĐÀO TẠO',
    href: '#dao-tao',
    dropdown: [
      'Đào tạo đại học quân sự',
      'Đào tạo sau đại học',
      'Chuẩn đầu ra',
      'Kế hoạch giảng dạy',
    ],
  },
  {
    name: 'SINH VIÊN',
    href: '#sinh-vien',
    dropdown: [
      'Hoạt động học viên',
      'Đoàn thanh niên',
      'Hội thi - Hội thao',
      'Gương sáng học viên',
    ],
  },
  {
    name: 'KHOA - PHÒNG',
    href: '#khoa-phong',
    dropdown: [
      'Khoa Kỹ thuật Viễn thông',
      'Khoa Công nghệ Thông tin',
      'Khoa Quân sự chung',
      'Phòng Đào tạo',
      'Phòng Chính trị',
    ],
  },
  {
    name: 'NGHIÊN CỨU',
    href: '#nghien-cuu',
    dropdown: [
      'Nghiên cứu khoa học',
      'Tạp chí KH-ĐT TTLL',
      'Đề tài - Sáng kiến',
      'Hội thảo khoa học',
    ],
  },
  {
    name: 'TIN TỨC',
    href: '#tin-tuc',
    dropdown: [
      'Tin nhà trường',
      'Tin trong nước',
      'Tin thế giới',
      'Thông báo - Sự kiện',
    ],
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="w-full select-none">
      {/* ===== TOP BANNER (CLEAN WHITE WITH OFFICIAL LOGO & TITLE) ===== */}
      <div className="relative overflow-hidden bg-white border-b border-slate-200">
        {/* Subtle decorative background watermarks */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
          <svg className="absolute -right-20 -top-20 w-[420px] h-[420px]" viewBox="0 0 100 100" fill="none" stroke="#0a3254" strokeWidth="0.5">
            <circle cx="50" cy="50" r="48" />
            <circle cx="50" cy="50" r="42" />
            <circle cx="50" cy="50" r="36" />
            <circle cx="50" cy="50" r="28" />
            <circle cx="50" cy="50" r="18" />
            <circle cx="50" cy="50" r="8" />
          </svg>
        </div>

        <div className="relative px-3 sm:px-5 py-2 sm:py-3 flex flex-col md:flex-row items-center justify-between gap-3">
          {/* School Brand: Logo + Name */}
          <Link href="/" className="flex items-center gap-3 sm:gap-4 md:gap-5 group py-1">
            {/* Logo */}
            <div className="relative w-16 h-22 sm:w-20 sm:h-28 md:w-24 md:h-32 flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/logo.png"
                alt="Logo Trường Đại học Thông tin liên lạc"
                fill
                priority
                sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, 96px"
                className="object-contain"
              />
            </div>

            {/* School Text */}
            <div className="text-left flex flex-col justify-center">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-black uppercase tracking-tight text-[#0a3254] leading-tight group-hover:text-[#0b3e68] transition-colors">
                TRƯỜNG ĐẠI HỌC THÔNG TIN LIÊN LẠC
              </h1>
              <p className="text-xs sm:text-sm md:text-base lg:text-[19px] font-extrabold tracking-wider uppercase text-[#f59e0b] leading-none mt-1">
                TELECOMMUNICATIONS UNIVERSITY
              </p>
            </div>
          </Link>

          {/* Right side: Location & Department */}
          <div className="hidden xl:flex flex-col items-end gap-1.5 text-right pl-4">
            <div className="flex items-center gap-1.5 text-xs text-slate-600 font-medium">
              <MapPin className="w-3.5 h-3.5 text-red-600 flex-shrink-0" />
              <span>Số 101 Mai Xuân Thưởng, TP. Nha Trang, Khánh Hòa</span>
            </div>
            <div className="flex items-center gap-1.5 text-[11.5px] text-[#0a3254] font-bold tracking-wide">
              <Radio className="w-3.5 h-3.5 text-blue-700 flex-shrink-0" />
              <span>Binh chủng Thông tin liên lạc - Bộ Quốc phòng</span>
            </div>
          </div>
        </div>
      </div>

      {/* ===== NAVIGATION BAR (NAVY BLUE AS IN OFFICIAL SCREENSHOT) ===== */}
      <nav className="relative z-40 bg-[#122e54] border-b-2 border-amber-400 shadow-md">
        <div className="flex items-stretch justify-between px-2 h-11">
          {/* Left: Home Button + Menu Items */}
          <div className="flex items-stretch flex-1 overflow-visible">
            {/* Home Icon Button */}
            <Link
              href="/"
              className="flex items-center justify-center w-11 h-full bg-[#0d2340]/60 text-amber-300 hover:text-white hover:bg-[#0a1e38] transition-colors border-r border-white/15 flex-shrink-0"
              title="Trang chủ"
            >
              <Home className="w-4 h-4 text-amber-300" />
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-stretch text-white text-[13px] font-bold uppercase tracking-wider h-full">
              {menuItems.map((item) => (
                <li
                  key={item.name}
                  className="nav-menu-item"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="nav-menu-link"
                  >
                    <span>{item.name}</span>
                    {item.dropdown && (
                      <ChevronDown className="w-3.5 h-3.5 nav-chevron" />
                    )}
                    {/* Bottom active/hover indicator line */}
                    <span className="nav-indicator" />
                  </Link>

                  {/* Dropdown menu */}
                  {item.dropdown && (
                    <div
                      className={`nav-dropdown-menu ${
                        activeDropdown === item.name ? 'is-open' : ''
                      }`}
                    >
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem}
                          href={`${item.href}/${encodeURIComponent(subItem)}`}
                          className="nav-dropdown-link"
                        >
                          <span>{subItem}</span>
                          <ChevronRight className="w-3.5 h-3.5 nav-sub-chevron flex-shrink-0" />
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Right side: Search Box */}
          <div className="hidden sm:flex items-center pl-3">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Tìm kiếm..."
                className="w-40 md:w-52 pl-3 pr-8 py-1.5 text-xs bg-white text-slate-800 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 placeholder:text-slate-400 transition-all"
              />
              <button
                className="absolute right-1 text-slate-500 hover:text-blue-700 p-1 transition-colors"
                aria-label="Tìm kiếm"
              >
                <Search className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex items-center justify-center w-11 h-full text-white hover:bg-[#0d2340] transition-colors"
            aria-label="Menu"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-[#0d2340] border-t border-white/10 text-white px-4 py-3 space-y-2">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-bold uppercase py-1 text-amber-300 border-b border-white/10"
            >
              TRANG CHỦ
            </Link>
            {menuItems.map((item) => (
              <div key={item.name} className="border-b border-white/10 pb-2">
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm font-bold uppercase py-1 text-white hover:text-amber-200"
                >
                  {item.name}
                </Link>
                {item.dropdown && (
                  <div className="pl-3 mt-1 space-y-1">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub}
                        href="#"
                        onClick={() => setMobileOpen(false)}
                        className="block text-xs text-slate-300 py-0.5 hover:text-white"
                      >
                        • {sub}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-2">
              <input
                type="text"
                placeholder="Tìm kiếm..."
                className="w-full px-3 py-1.5 text-xs bg-white text-slate-800 rounded"
              />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
