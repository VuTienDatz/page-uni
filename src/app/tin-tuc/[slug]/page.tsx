import Link from 'next/link';
import Image from 'next/image';
import {
  Home,
  ChevronRight,
  Calendar,
  User,
  Eye,
  Link2,
  Newspaper,
  Flame,
  GraduationCap,
  BookOpen,
  FileText,
  Laptop,
  ArrowLeft,
  Share2,
} from 'lucide-react';
import { newsItems, getNewsBySlug, getRelatedNews, formatDate, formatViews, getLatestNews } from '@/data/news';
import NewsCard from '@/components/NewsCard';
import ArticleFeaturedImage from '@/components/ArticleFeaturedImage';

// Generate static params for all news articles
export function generateStaticParams() {
  return newsItems.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getNewsBySlug(slug);
  return {
    title: article ? `${article.title} - Trường Sĩ Quan Thông Tin` : 'Bài viết - Trường Sĩ Quan Thông Tin',
    description: article?.excerpt || '',
  };
}

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getNewsBySlug(slug);

  const relatedNews = getRelatedNews(slug, article.categorySlug, 4);
  const latestNews = getLatestNews(5).filter((n) => n.slug !== slug);

  return (
    <div className="p-3 md:p-4">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-xs text-slate-500 mb-4 flex-wrap bg-slate-50 border border-slate-200 px-3 py-2 rounded-md">
        <Link href="/" className="hover:text-red-700 transition-colors flex items-center gap-1 font-medium">
          <Home className="w-3.5 h-3.5 text-red-700" />
          <span>Trang chủ</span>
        </Link>
        <ChevronRight className="w-3 h-3 text-slate-400" />
        <Link href="#" className="hover:text-red-700 transition-colors font-medium">
          {article.category}
        </Link>
        <ChevronRight className="w-3 h-3 text-slate-400" />
        <span className="text-slate-700 font-semibold line-clamp-1">{article.title}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Main content */}
        <article className="lg:col-span-8">
          <div className="bg-white rounded-md border border-slate-200 shadow-xs overflow-hidden">
            {/* Article header */}
            <div className="p-4 md:p-6 pb-2">
              <span className="inline-block px-2.5 py-0.5 rounded bg-red-100 text-red-700 text-[11px] font-bold uppercase tracking-wider mb-2">
                {article.category}
              </span>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 leading-tight mb-3">
                {article.title}
              </h1>
              {/* Meta info */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pb-3 border-b border-slate-100">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  {formatDate(article.date)}
                </span>
                <span className="flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-slate-500" />
                  {article.author}
                </span>
                <span className="flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5 text-slate-500" />
                  {formatViews(article.views)} lượt xem
                </span>
              </div>
            </div>

            {/* Featured image or News Icon if no image */}
            <ArticleFeaturedImage image={article.image} title={article.title} />

            {/* Article content */}
            <div className="p-4 md:p-6 pt-2">
              {/* Lead paragraph / excerpt */}
              <div className="text-sm md:text-base font-bold text-slate-800 mb-5 p-3.5 bg-slate-50 border-l-4 border-red-700 rounded-r leading-relaxed">
                {article.excerpt}
              </div>

              {/* Rich HTML body */}
              <div
                className="prose prose-slate max-w-none text-sm md:text-[15px] leading-relaxed text-slate-700 space-y-4"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* Author signature & tags */}
              <div className="mt-8 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <div className="text-slate-500">
                  <span className="font-semibold text-slate-700">Tác giả: </span>
                  <span className="font-bold text-red-700">{article.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-400">Chia sẻ:</span>
                  <button
                    aria-label="Chia sẻ bài viết"
                    className="p-1.5 rounded-full bg-slate-100 hover:bg-red-50 hover:text-red-700 text-slate-600 transition-colors"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Back to Home Button */}
            <div className="p-4 md:p-6 pt-0 flex justify-between items-center border-t border-slate-100">
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-red-700 hover:text-red-800 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Quay lại trang chủ</span>
              </Link>
              <span className="text-[11px] text-slate-400">
                Nguồn: Cổng TTĐT Trường Sĩ quan Thông tin
              </span>
            </div>
          </div>

          {/* Related News Grid */}
          <div className="mt-6">
            <div className="flex items-center justify-between border-b-2 border-red-700 pb-2 mb-4">
              <div className="flex items-center gap-2">
                <Newspaper className="w-5 h-5 text-red-700" />
                <h3 className="font-black text-sm md:text-base uppercase text-red-700 tracking-wider">
                  TIN CÙNG CHUYÊN MỤC
                </h3>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedNews.map((item, idx) => (
                <NewsCard key={item.id} item={item} variant="default" index={idx} />
              ))}
            </div>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-5">
          {/* Latest news */}
          <div className="bg-white rounded-md border border-slate-200 shadow-xs overflow-hidden">
            <div className="bg-[#b91c1c] px-3 py-2 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-amber-300" />
                <span>TIN MỚI NHẤT</span>
              </div>
            </div>
            <div className="divide-y divide-slate-100">
              {latestNews.map((item, idx) => (
                <Link
                  key={item.id}
                  href={`/tin-tuc/${item.slug}`}
                  className="flex items-start gap-2.5 p-3 hover:bg-red-50/50 transition-colors group"
                >
                  <span className="flex-shrink-0 w-5 h-5 rounded bg-red-100 text-red-700 text-[10px] font-bold flex items-center justify-center mt-0.5">
                    {idx + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-semibold text-slate-800 line-clamp-2 group-hover:text-red-700 transition-colors leading-snug">
                      {item.title}
                    </h4>
                    <span className="text-[10px] text-slate-400 mt-0.5 block">
                      {formatDate(item.date)}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Banner */}
          <div className="bg-[#b91c1c] rounded-md p-4 text-white text-center shadow-xs">
            <GraduationCap className="w-8 h-8 mx-auto mb-1.5 text-amber-300" />
            <h3 className="font-extrabold text-sm uppercase mb-1 tracking-wider">
              TUYỂN SINH 2026
            </h3>
            <p className="text-[11px] text-red-100 mb-3">
              Đăng ký ngay để trở thành sĩ quan thông tin cho Quân đội
            </p>
            <Link
              href="#"
              className="inline-flex items-center gap-1 bg-white text-red-700 px-4 py-1.5 rounded text-xs font-bold hover:bg-amber-300 transition-colors shadow-2xs"
            >
              <span>Tìm hiểu thêm</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Quick links */}
          <div className="bg-white rounded-md border border-slate-200 shadow-xs overflow-hidden">
            <div className="bg-[#1e40af] px-3 py-2 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
              <Link2 className="w-3.5 h-3.5 text-cyan-300" />
              <span>LIÊN KẾT NHANH</span>
            </div>
            <div className="p-2 space-y-1">
              {[
                { title: 'Cổng thông tin Bộ Quốc phòng', href: '#bqp', icon: BookOpen },
                { title: 'Báo Quân đội nhân dân', href: '#qdnd', icon: FileText },
                { title: 'Binh chủng Thông tin liên lạc', href: '#bctt', icon: Laptop },
                { title: 'Cổng thông tin tuyển sinh quân sự', href: '#tsqs', icon: GraduationCap },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="flex items-center justify-between p-2 rounded hover:bg-slate-50 transition-colors text-xs text-slate-700 hover:text-red-700 group"
                  >
                    <span className="flex items-center gap-2">
                      <Icon className="w-3.5 h-3.5 text-slate-400 group-hover:text-red-600" />
                      <span>{item.title}</span>
                    </span>
                    <ChevronRight className="w-3 h-3 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                );
              })}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
