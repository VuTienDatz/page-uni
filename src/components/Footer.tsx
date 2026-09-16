'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail, Globe, ChevronRight, Shield, Award, Users, BarChart3 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-slate-200 mt-6 rounded-t-md overflow-hidden shadow-xs">
      {/* Top Info Section (Clean White) */}
      <div className="px-5 py-6 md:py-8 border-b border-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          {/* Col 1: School Identity & Address (6 cols) */}
          <div className="md:col-span-6 flex gap-4 items-start">
            {/* School Crest Badge */}
            <div className="w-16 h-20 rounded-lg bg-gradient-to-b from-red-600 via-red-700 to-red-900 border-2 border-amber-400 shadow-md flex flex-col items-center justify-center text-amber-300 flex-shrink-0 p-1">
              <Shield className="w-7 h-7 text-amber-300" />
              <span className="text-[8px] font-black text-white tracking-wider uppercase mt-1">
                SQTT
              </span>
              <span className="text-[7px] font-bold text-amber-300 leading-none">
                ★ ★ ★
              </span>
            </div>

            {/* School Details */}
            <div className="space-y-2 text-slate-700 text-xs">
              <div>
                <h3 className="text-sm md:text-base font-black uppercase text-red-700 tracking-wide">
                  TRƯỜNG SĨ QUAN THÔNG TIN
                </h3>
                <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                  SIGNAL OFFICERS TRAINING COLLEGE
                </p>
              </div>

              <div className="space-y-1.5 pt-1 text-slate-600">
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Số 101 Mai Xuân Thưởng, Vĩnh Hòa, TP. Nha Trang, Tỉnh Khánh Hòa</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-red-600 flex-shrink-0" />
                  <span>0258.3831805 • Fax: 0258.3831806</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span className="text-blue-700 font-medium">tsqtt@gmail.com</span>
                </p>
                <p className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span className="text-blue-700 font-medium">tsqtt.edu.vn</span>
                </p>
              </div>

              <p className="text-[10px] text-slate-400 italic pt-1 border-t border-slate-100">
                Giấy phép số 124/GP-BC do Cục Báo chí - Bộ Thông tin & Truyền thông cấp ngày 15/10/2020
              </p>
            </div>
          </div>

          {/* Col 2: Tin tức links (3 cols) */}
          <div className="md:col-span-3">
            <div className="flex items-center gap-1.5 border-b-2 border-red-700 pb-1.5 mb-3">
              <Award className="w-4 h-4 text-red-700" />
              <h4 className="text-xs font-black uppercase text-red-700 tracking-wider">
                TIN TỨC - SỰ KIỆN
              </h4>
            </div>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <Link href="#tin-nha-truong" className="hover:text-red-700 flex items-center gap-1.5 transition-colors group">
                  <ChevronRight className="w-3.5 h-3.5 text-red-600 group-hover:translate-x-0.5 transition-transform" />
                  <span>Tin tức Nhà trường</span>
                </Link>
              </li>
              <li>
                <Link href="#tin-trong-nuoc" className="hover:text-red-700 flex items-center gap-1.5 transition-colors group">
                  <ChevronRight className="w-3.5 h-3.5 text-red-600 group-hover:translate-x-0.5 transition-transform" />
                  <span>Tin tức Trong nước</span>
                </Link>
              </li>
              <li>
                <Link href="#tin-the-gioi" className="hover:text-red-700 flex items-center gap-1.5 transition-colors group">
                  <ChevronRight className="w-3.5 h-3.5 text-red-600 group-hover:translate-x-0.5 transition-transform" />
                  <span>Tin tức Thế giới</span>
                </Link>
              </li>
              <li>
                <Link href="#van-ban" className="hover:text-red-700 flex items-center gap-1.5 transition-colors group">
                  <ChevronRight className="w-3.5 h-3.5 text-red-600 group-hover:translate-x-0.5 transition-transform" />
                  <span>Văn bản - Biểu mẫu</span>
                </Link>
              </li>
              <li>
                <Link href="#thong-bao" className="hover:text-red-700 flex items-center gap-1.5 transition-colors group">
                  <ChevronRight className="w-3.5 h-3.5 text-red-600 group-hover:translate-x-0.5 transition-transform" />
                  <span>Thông báo chung</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Quản lý links (3 cols) */}
          <div className="md:col-span-3">
            <div className="flex items-center gap-1.5 border-b-2 border-blue-700 pb-1.5 mb-3">
              <Users className="w-4 h-4 text-blue-700" />
              <h4 className="text-xs font-black uppercase text-blue-800 tracking-wider">
                HỆ THỐNG QUẢN LÝ
              </h4>
            </div>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <Link href="#hop-thu" className="hover:text-blue-700 flex items-center gap-1.5 transition-colors group">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-600 group-hover:translate-x-0.5 transition-transform" />
                  <span>Hộp thư điện tử quân sự</span>
                </Link>
              </li>
              <li>
                <Link href="#he-thong-dieu-hanh" className="hover:text-blue-700 flex items-center gap-1.5 transition-colors group">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-600 group-hover:translate-x-0.5 transition-transform" />
                  <span>Hệ thống quản lý điều hành (QLĐH)</span>
                </Link>
              </li>
              <li>
                <Link href="#e-learning" className="hover:text-blue-700 flex items-center gap-1.5 transition-colors group">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-600 group-hover:translate-x-0.5 transition-transform" />
                  <span>Cổng đào tạo E-learning</span>
                </Link>
              </li>
              <li>
                <Link href="#thu-vien-so" className="hover:text-blue-700 flex items-center gap-1.5 transition-colors group">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-600 group-hover:translate-x-0.5 transition-transform" />
                  <span>Thư viện số Nhà trường</span>
                </Link>
              </li>
              <li>
                <Link href="#lich-tuan" className="hover:text-blue-700 flex items-center gap-1.5 transition-colors group">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-600 group-hover:translate-x-0.5 transition-transform" />
                  <span>Lịch công tác tuần</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Visitor Counter Bar (Soft Slate) */}
      <div className="bg-slate-100 border-b border-slate-200 px-5 py-2">
        <div className="flex flex-wrap items-center justify-between text-[11px] text-slate-600 gap-3">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 font-medium">
              <BarChart3 className="w-3.5 h-3.5 text-red-600" />
              <span>Thống kê truy cập:</span>
            </span>
            <span className="text-slate-500">
              Đang trực tuyến: <strong className="text-red-700 font-bold">128</strong>
            </span>
            <span>•</span>
            <span className="text-slate-500">
              Hôm nay: <strong className="text-slate-800 font-bold">4.520</strong>
            </span>
            <span>•</span>
            <span className="text-slate-500">
              Tổng lượt truy cập: <strong className="text-slate-900 font-bold">2.845.190</strong>
            </span>
          </div>
          <div className="text-[10px] text-slate-500">
            <span>Khuyến nghị trình duyệt Chrome, Edge, Firefox độ phân giải 1366x768 trở lên</span>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar (Deep Red) */}
      <div className="bg-[#b91c1c] text-white py-3 px-5 text-center">
        <p className="text-xs font-bold text-amber-200">
          © BẢN QUYỀN THUỘC VỀ TRƯỜNG SĨ QUAN THÔNG TIN - BINH CHỦNG THÔNG TIN LIÊN LẠC
        </p>
        <p className="text-[11px] text-white/80 mt-0.5">
          Ghi rõ nguồn &ldquo;Cổng thông tin điện tử Trường Sĩ quan Thông tin&rdquo; khi phát hành lại thông tin từ website này.
        </p>
      </div>
    </footer>
  );
}
