import Link from 'next/link';
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
    title: article ? `${article.title} - Trường Sĩ Quan Thông Tin` : 'Bài viết không tồn tại',
    description: article?.excerpt || '',
  };
}

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getNewsBySlug(slug);

  if (!article) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 text-center">
        <Newspaper className="w-16 h-16 mx-auto text-slate-400 mb-4" />
        <h1 className="text-2xl font-bold text-slate-800 mb-2">Bài viết không tồn tại</h1>
        <p className="text-slate-500 mb-6">Bài viết bạn tìm kiếm không tồn tại hoặc đã bị xóa.</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-red-700 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-red-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Về trang chủ</span>
        </Link>
      </div>
    );
  }

  const relatedNews = getRelatedNews(slug, article.categorySlug, 4);
  const latestNews = getLatestNews(5).filter((n) => n.slug !== slug);

  return (
    <div className="p-3 md:p-4">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-xs text-slate-500 mb-4 flex-wrap bg-slate-50 border border-slate-200 px-3 py-2 rounded">
        <Link href="/" className="hover:text-red-700 transition-colors flex items-center gap-1">
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
          <div className="bg-white rounded border border-slate-200 shadow-xs overflow-hidden">
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

            {/* Featured image */}
            <div className="relative h-60 sm:h-72 md:h-96 mx-4 md:mx-6 rounded overflow-hidden mb-4 border border-slate-200">
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg, #1e3a8a 0%, #b91c1c 50%, #d97706 100%)',
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Newspaper className="w-20 h-20 text-white/30" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Article content */}
            <div className="px-4 md:px-6 pb-6">
              {/* Excerpt */}
              <p className="text-sm sm:text-base font-semibold text-slate-800 mb-5 leading-relaxed border-l-4 border-red-700 pl-3.5 bg-red-50/60 py-2.5 rounded-r">
                {article.excerpt}
              </p>

              {/* Body */}
              <div
                className="prose prose-sm sm:prose-base max-w-none text-slate-700 leading-relaxed space-y-3.5
                  [&>p]:mb-3 [&>p]:leading-7
                  [&>h2]:text-lg [&>h2]:font-bold [&>h2]:text-slate-900 [&>h2]:mt-6 [&>h2]:mb-3
                  [&>h3]:text-base [&>h3]:font-semibold [&>h3]:text-slate-900 [&>h3]:mt-4 [&>h3]:mb-2
                  [&>ul]:list-disc [&>ul]:pl-5 [&>ul>li]:mb-1.5
                  [&>blockquote]:border-l-4 [&>blockquote]:border-amber-400 [&>blockquote]:pl-3 [&>blockquote]:italic [&>blockquote]:text-slate-600"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* Share buttons */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-600 flex items-center gap-1">
                    <Share2 className="w-3.5 h-3.5" />
                    Chia sẻ:
                  </span>
                  {[
                    { name: 'Facebook', color: '#1877F2', label: 'FB' },
                    { name: 'Zalo', color: '#0068FF', label: 'Zalo' },
                    { name: 'Twitter', color: '#1DA1F2', label: 'X' },
                  ].map((btn) => (
                    <button
                      key={btn.name}
                      className="px-2.5 py-1 rounded text-white text-xs font-bold hover:opacity-90 transition-all shadow-2xs"
                      style={{ backgroundColor: btn.color }}
                      title={btn.name}
                    >
                      {btn.label}
                    </button>
                  ))}
                  <button
                    className="p-1.5 rounded bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
                    title="Sao chép liên kết"
                  >
                    <Link2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Tags */}
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-slate-500">Tags:</span>
                  {['Tin tức', article.category, 'Trường SQTT'].map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-slate-100 text-[11px] font-medium text-slate-600 hover:bg-red-50 hover:text-red-700 transition-colors cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Related news */}
          {relatedNews.length > 0 && (
            <div className="mt-6">
              <div className="flex items-center justify-between border-b-2 border-red-700 pb-1.5 mb-3">
                <div className="flex items-center gap-1.5">
                  <Newspaper className="w-4 h-4 text-red-700" />
                  <h3 className="text-xs sm:text-[13px] font-black uppercase tracking-wide text-red-700">
                    TIN LIÊN QUAN
                  </h3>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {relatedNews.map((item, i) => (
                  <NewsCard key={item.id} item={item} variant="featured" index={i} />
                ))}
              </div>
            </div>
          )}
        </article>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-4">
          {/* Latest news */}
          <div className="bg-white rounded border border-slate-200 shadow-xs overflow-hidden">
            <div className="bg-blue-800 px-3 py-2 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-amber-300" />
              <span>TIN MỚI NHẤT</span>
            </div>
            <div className="divide-y divide-slate-100">
              {latestNews.slice(0, 5).map((item, i) => (
                <Link
                  key={item.id}
                  href={`/tin-tuc/${item.slug}`}
                  className="group flex items-start gap-2.5 p-3 hover:bg-red-50/60 transition-colors"
                >
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-700 text-white text-[11px] font-bold flex items-center justify-center mt-0.5">
                    {i + 1}
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
          <div className="bg-gradient-to-r from-red-700 to-red-600 rounded p-4 text-white text-center shadow-xs">
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
          <div className="bg-white rounded border border-slate-200 shadow-xs overflow-hidden">
            <div className="bg-blue-800 px-3 py-2 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
              <Link2 className="w-3.5 h-3.5 text-cyan-300" />
              <span>TRUY CẬP NHANH</span>
            </div>
            <div className="p-2 space-y-1">
              {[
                { name: 'Thư viện số', icon: <BookOpen className="w-4 h-4 text-blue-600" /> },
                { name: 'Lịch công tác', icon: <Calendar className="w-4 h-4 text-emerald-600" /> },
                { name: 'Văn bản mới', icon: <FileText className="w-4 h-4 text-amber-600" /> },
                { name: 'Hệ thống E-Learning', icon: <Laptop className="w-4 h-4 text-indigo-600" /> },
              ].map((link) => (
                <a
                  key={link.name}
                  href="#"
                  className="flex items-center gap-2.5 px-2.5 py-2 rounded hover:bg-slate-50 transition-colors text-xs text-slate-700 hover:text-red-700 font-medium"
                >
                  {link.icon}
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
