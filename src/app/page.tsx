import HeroSlider from '@/components/HeroSlider';
import Sidebar from '@/components/Sidebar';
import QuickNewsPanel from '@/components/QuickNewsPanel';
import CommemorationBanner from '@/components/CommemorationBanner';
import FocusHighlights from '@/components/FocusHighlights';
import ExerciseBanner from '@/components/ExerciseBanner';
import News3Columns from '@/components/News3Columns';
import ResearchAndTeaching from '@/components/ResearchAndTeaching';
import CategoryBanners from '@/components/CategoryBanners';
import PublicationsSection from '@/components/PublicationsSection';
import DigitalLibraryRow from '@/components/DigitalLibraryRow';
import EventsAndBulletins from '@/components/EventsAndBulletins';
import DigitalPlatformBanners from '@/components/DigitalPlatformBanners';
import PhotoVideoSection from '@/components/PhotoVideoSection';
import PartnerLogos from '@/components/PartnerLogos';
import NewsTicker from '@/components/NewsTicker';
import {
  getNewsByCategory,
  getLatestNews,
} from '@/data/news';

export default function HomePage() {
  const latestNews = getLatestNews(8);
  const nhaTruongNews = getNewsByCategory('tin-nha-truong');
  const trongNuocNews = getNewsByCategory('tin-trong-nuoc');
  const theGioiNews = getNewsByCategory('tin-the-gioi');

  return (
    <>
      {/* 1. News Marquee Ticker */}
      <NewsTicker />

      <div className="p-3 md:p-4 space-y-4">
        {/* 2. Hero Section (Left 10 Shortcuts, Center Slider + 4 Thumbs, Right Tin Mới) */}
        <section id="hero" className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch">
          {/* Left Portal Directory (approx 22%) */}
          <div className="hidden lg:block lg:col-span-3">
            <Sidebar />
          </div>

          {/* Center Main Slider + 4 Thumbnails (approx 52%) */}
          <div className="lg:col-span-6">
            <HeroSlider />
          </div>

          {/* Right Quick News Panel (approx 26%) */}
          <div className="lg:col-span-3">
            <QuickNewsPanel items={latestNews} />
          </div>
        </section>

        {/* 3. Commemoration Banner: 75 năm truyền thống (Sky-blue & Pink Lotus) */}
        <section id="ky-niem">
          <CommemorationBanner />
        </section>

        {/* 4. Focus Highlights: TIÊU ĐIỂM (4 Horizontal Cards) */}
        <section id="tieu-diem">
          <FocusHighlights />
        </section>

        {/* 5. Exercise Banner: DIỄN TẬP ZT30 - Đ1 (Red & Gold) */}
        <section id="dien-tap">
          <ExerciseBanner />
        </section>

        {/* 6. 3-Column News: Tin Nhà Trường, Tin Trong Nước, Tin Thế Giới */}
        <section id="tin-tuc">
          <News3Columns
            nhaTruongNews={nhaTruongNews}
            trongNuocNews={trongNuocNews}
            theGioiNews={theGioiNews}
          />
        </section>

        {/* 7. 2-Column: Nghiên Cứu Trao Đổi & Chuyên Trang Giảng Dạy */}
        <section id="nghien-cuu-giang-day">
          <ResearchAndTeaching />
        </section>

        {/* 8. Triple Political Propaganda Banners (GD Chính trị, Diễn biến hòa bình, Bác Hồ) */}
        <section id="tuyen-truyen">
          <CategoryBanners />
        </section>

        {/* 9. Publications Section: Tạp chí KH-ĐT, Tờ tin TTLL, Tư liệu quân sự */}
        <section id="an-pham">
          <PublicationsSection />
        </section>

        {/* 10. Digital Library Banners Row: Thư viện số BQP, Nhà trường, Tạp chí Tiếng Việt */}
        <section id="thu-vien-so">
          <DigitalLibraryRow />
        </section>

        {/* 11. 3 Columns: Sự kiện & Bình luận, Thông tin chuyên đề, Bản tin ngày */}
        <section id="su-kien-ban-tin">
          <EventsAndBulletins />
        </section>

        {/* 12. 2 Digital Platform Banners: Nền tảng Bình dân học vụ số */}
        <section id="binh-dan-hoc-vu-so">
          <DigitalPlatformBanners />
        </section>

        {/* 13. Media Section: Video Tin Tức & Ảnh Hoạt Động (Each with 5 Thumbs) */}
        <section id="da-phuong-tien">
          <PhotoVideoSection />
        </section>

        {/* 14. Partner Press Logos */}
        <section id="bao-chi">
          <PartnerLogos />
        </section>
      </div>
    </>
  );
}
