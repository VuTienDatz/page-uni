'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Home, ChevronDown, ChevronRight, Search, Menu as MenuIcon, X, MapPin, Radio, Shield } from 'lucide-react';

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
    name: 'TIN TỨC',
    href: '#tin-tuc',
    dropdown: [
      'Tin nhà trường',
      'Tin trong nước',
      'Tin thế giới',
      'Thông báo - Thông tin',
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
    name: 'SINH VIÊN',
    href: '#sinh-vien',
    dropdown: [
      'Hoạt động học viên',
      'Đoàn thanh niên',
      'Hội thi - Hội thao',
      'Gương sáng học viên',
    ],
  },
  { name: 'ĐỐI NGOẠI', href: '#doi-ngoai' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="w-full select-none">
      {/* ===== TOP BANNER ===== */}
      <div className="relative overflow-hidden bg-[#1f5b8c] border-b-2 border-amber-400">
        {/* Radar and telecom background elements */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute -left-10 -top-10 w-72 h-72 rounded-full border border-cyan-200" />
          <div className="absolute -left-4 -top-4 w-96 h-96 rounded-full border border-cyan-200/60" />
          <div className="absolute -left-0 -top-0 w-[500px] h-[500px] rounded-full border border-cyan-200/30" />
          <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-end gap-1.5 h-16 opacity-40">
            <span className="w-1.5 h-6 bg-cyan-200 rounded-full animate-pulse" />
            <span className="w-1.5 h-10 bg-cyan-200 rounded-full animate-pulse delay-75" />
            <span className="w-1.5 h-14 bg-cyan-200 rounded-full animate-pulse delay-150" />
            <span className="w-1.5 h-8 bg-cyan-200 rounded-full animate-pulse delay-200" />
            <span className="w-1.5 h-12 bg-cyan-200 rounded-full animate-pulse delay-300" />
          </div>
        </div>

        <div className="relative px-4 py-3 md:py-4 flex flex-col md:flex-row items-center justify-between gap-3">
          {/* School Name */}
          <Link href="/" className="flex items-center group">
            {/* School Text */}
            <div className="text-left">
              <p className="text-[11px] md:text-xs tracking-[0.2em] font-extrabold uppercase text-red-600 bg-white/90 px-2 py-0.5 rounded inline-block shadow-sm mb-1">
                CỔNG THÔNG TIN ĐIỆN TỬ
              </p>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-wide leading-tight text-military-title">
                TRƯỜNG SĨ QUAN THÔNG TIN
              </h1>
              <p className="text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase text-amber-300 drop-shadow">
                SIGNAL OFFICERS TRAINING COLLEGE
              </p>
            </div>
          </Link>

          {/* Right side: Telecom Graphic / Search */}
          <div className="hidden lg:flex flex-col items-end gap-1">
            <div className="flex items-center gap-1.5 text-xs text-white/90 font-medium">
              <MapPin className="w-3.5 h-3.5 text-amber-300" />
              <span>Nha Trang, Khánh Hòa</span>
            </div>
            <div className="flex items-center gap-1.5 text-right text-[11px] text-cyan-100/90 font-semibold tracking-wider">
              <Radio className="w-3.5 h-3.5 text-cyan-200" />
              <span>Binh chủng Thông tin liên lạc - Bộ Quốc phòng</span>
            </div>
          </div>
        </div>
      </div>

      {/* ===== NAVIGATION BAR (RED) ===== */}
      <nav className="relative z-40 bg-[#c41e24] border-b-2 border-red-800 shadow-md">
        <div className="flex items-stretch justify-between px-2 h-11">
          {/* Left: Home Button + Menu Items */}
          <div className="flex items-stretch flex-1 overflow-visible">
            {/* Home Icon */}
            <Link
              href="/"
              className="flex items-center justify-center w-11 h-full bg-red-900/50 text-amber-300 hover:bg-red-900 hover:text-amber-200 transition-colors flex-shrink-0 border-r border-red-700/60"
              title="Trang chủ"
            >
              <Home className="w-4 h-4" />
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
                className="w-40 md:w-52 pl-3 pr-8 py-1.5 text-xs bg-white text-slate-800 rounded border border-red-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 placeholder:text-slate-400 transition-all"
              />
              <button
                className="absolute right-1 text-slate-500 hover:text-red-700 p-1 transition-colors"
                aria-label="Tìm kiếm"
              >
                <Search className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex items-center justify-center w-11 h-full text-white hover:bg-red-900 transition-colors"
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
          <div className="md:hidden bg-red-900 border-t border-red-700 text-white px-4 py-3 space-y-2">
            {menuItems.map((item) => (
              <div key={item.name} className="border-b border-red-800 pb-2">
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm font-bold uppercase py-1 text-amber-200"
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
                        className="block text-xs text-slate-200 py-0.5 hover:text-white"
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
