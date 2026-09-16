import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  subsets: ["vietnamese", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Trường Đại học Thông tin liên lạc - Telecommunications University",
  description:
    "Cổng thông tin điện tử Trường Đại học Thông tin liên lạc (Trường Sĩ quan Thông tin) - Đào tạo sĩ quan, kỹ sư thông tin liên lạc và tác chiến không gian mạng cho Quân đội Nhân dân Việt Nam",
  keywords: [
    "Trường Đại học Thông tin liên lạc",
    "Telecommunications University",
    "Trường Sĩ Quan Thông Tin",
    "Signal Officers Training College",
    "quân đội",
    "đào tạo sĩ quan",
    "thông tin liên lạc",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="vi" className={`${beVietnamPro.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#f1f5f9] text-slate-800">
        <div className="portal-container min-h-screen w-full lg:max-w-[1240px] mx-auto flex flex-col bg-white">
          <Header />
          <main className="flex-1 bg-white">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
