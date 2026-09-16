export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  categorySlug: string;
  date: string;
  author: string;
  views: number;
  featured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon?: string;
}

export const categories: Category[] = [
  { id: '1', name: 'Tin Nhà Trường', slug: 'tin-nha-truong' },
  { id: '2', name: 'Tin Trong Nước', slug: 'tin-trong-nuoc' },
  { id: '3', name: 'Tin Thế Giới', slug: 'tin-the-gioi' },
  { id: '4', name: 'Đào Tạo', slug: 'dao-tao' },
  { id: '5', name: 'Nghiên Cứu', slug: 'nghien-cuu' },
  { id: '6', name: 'Hội Thi', slug: 'hoi-thi' },
  { id: '7', name: 'Chuyên Trang Đảng', slug: 'chuyen-trang-dang' },
  { id: '8', name: 'Khoa Phòng', slug: 'khoa-phong' },
];

export const sidebarLinks = [
  { name: 'Giới thiệu chung', href: '#' },
  { name: 'Tin tức - Sự kiện', href: '#' },
  { name: 'Đào tạo', href: '#' },
  { name: 'Nghiên cứu khoa học', href: '#' },
  { name: 'Chuyên trang Đảng', href: '#' },
  { name: 'Truyền thống', href: '#' },
  { name: 'Thư viện số', href: '#' },
  { name: 'Hợp tác quốc tế', href: '#' },
];

export const newsItems: NewsItem[] = [
  // Featured / Slider news
  {
    id: '1',
    slug: 'ky-niem-76-nam-ngay-truyen-thong',
    title: 'Kỷ niệm 76 năm ngày truyền thống Trường Sĩ quan Thông tin',
    excerpt: 'Lễ kỷ niệm 76 năm ngày truyền thống Trường Sĩ quan Thông tin (20/10/1949 - 20/10/2025) được tổ chức trọng thể tại Hội trường lớn của Nhà trường.',
    content: `<p>Sáng ngày 20/10/2025, tại Hội trường lớn, Trường Sĩ quan Thông tin đã long trọng tổ chức Lễ kỷ niệm 76 năm Ngày truyền thống (20/10/1949 - 20/10/2025).</p>
    <p>Tham dự buổi lễ có đồng chí Thiếu tướng Nguyễn Văn A - Hiệu trưởng Nhà trường; các đồng chí trong Ban Giám hiệu; các đồng chí lãnh đạo, chỉ huy các cơ quan, khoa, phòng, tiểu đoàn; cùng toàn thể cán bộ, giảng viên, học viên của Nhà trường.</p>
    <p>Phát biểu tại buổi lễ, Thiếu tướng Nguyễn Văn A đã ôn lại truyền thống vẻ vang 76 năm xây dựng và phát triển của Nhà trường. Từ những ngày đầu thành lập với muôn vàn khó khăn, Trường đã không ngừng lớn mạnh, trở thành cái nôi đào tạo cán bộ thông tin liên lạc cho toàn quân.</p>
    <p>Trong suốt 76 năm qua, các thế hệ cán bộ, giảng viên, học viên của Nhà trường đã phát huy truyền thống "Trung thành - Mưu trí - Kỷ luật - Sáng tạo", hoàn thành xuất sắc mọi nhiệm vụ được giao, góp phần xứng đáng vào sự nghiệp xây dựng và bảo vệ Tổ quốc.</p>
    <p>Nhà trường đã được Đảng, Nhà nước tặng thưởng nhiều phần thưởng cao quý: Huân chương Quân công hạng Nhất, Huân chương Bảo vệ Tổ quốc hạng Nhất, danh hiệu Anh hùng Lực lượng vũ trang nhân dân.</p>`,
    image: '/images/hero-1.jpg',
    category: 'Tin Nhà Trường',
    categorySlug: 'tin-nha-truong',
    date: '2025-10-20',
    author: 'Ban Biên tập',
    views: 15420,
    featured: true,
  },
  {
    id: '2',
    slug: 'dien-tap-zt30-d1-thanh-cong',
    title: 'Diễn tập chỉ huy - cơ quan ZT30-Đ1 thành công tốt đẹp',
    excerpt: 'Trường Sĩ quan Thông tin hoàn thành xuất sắc cuộc diễn tập chỉ huy - cơ quan ZT30-Đ1 với sự tham gia của toàn thể cán bộ, giảng viên.',
    content: `<p>Từ ngày 15-20/9/2025, Trường Sĩ quan Thông tin đã tổ chức thành công cuộc diễn tập chỉ huy - cơ quan ZT30-Đ1 theo kế hoạch của Bộ Tổng Tham mưu.</p>
    <p>Cuộc diễn tập nhằm nâng cao năng lực chỉ huy, điều hành của đội ngũ cán bộ các cấp; rèn luyện khả năng hiệp đồng, phối hợp giữa các cơ quan, đơn vị trong thực hiện nhiệm vụ bảo đảm thông tin liên lạc.</p>
    <p>Trong suốt quá trình diễn tập, các lực lượng đã triển khai đồng bộ các phương tiện thông tin hiện đại, áp dụng nhiều phương thức liên lạc mới, đảm bảo thông suốt hệ thống chỉ huy từ Sở chỉ huy đến các đơn vị.</p>
    <p>Kết thúc diễn tập, Ban chỉ đạo đã đánh giá cao sự chuẩn bị chu đáo và tinh thần trách nhiệm của toàn thể cán bộ, giảng viên, học viên Nhà trường.</p>`,
    image: '/images/hero-2.jpg',
    category: 'Tin Nhà Trường',
    categorySlug: 'tin-nha-truong',
    date: '2025-09-22',
    author: 'Ban Biên tập',
    views: 12350,
    featured: true,
  },
  {
    id: '3',
    slug: 'hoi-nghi-quan-su-quoc-phong',
    title: 'Hội nghị Quân sự - Quốc phòng năm 2025 triển khai nhiệm vụ mới',
    excerpt: 'Hội nghị tổng kết công tác quân sự - quốc phòng năm 2025 và triển khai phương hướng nhiệm vụ năm 2026.',
    content: `<p>Ngày 15/10/2025, Trường Sĩ quan Thông tin đã tổ chức Hội nghị tổng kết công tác quân sự - quốc phòng năm 2025, triển khai phương hướng, nhiệm vụ năm 2026.</p>
    <p>Hội nghị đã đánh giá toàn diện kết quả thực hiện nhiệm vụ quân sự - quốc phòng trong năm 2025, đồng thời xác định rõ phương hướng, nhiệm vụ trọng tâm trong năm 2026.</p>`,
    image: '/images/hero-3.jpg',
    category: 'Tin Nhà Trường',
    categorySlug: 'tin-nha-truong',
    date: '2025-10-15',
    author: 'Phòng Chính trị',
    views: 8920,
    featured: true,
  },
  // Tin Nhà Trường
  {
    id: '4',
    slug: 'le-khai-giang-nam-hoc-2025-2026',
    title: 'Lễ khai giảng năm học 2025-2026 - Khóa đào tạo Sĩ quan Thông tin',
    excerpt: 'Nhà trường tổ chức trọng thể Lễ khai giảng năm học 2025-2026, đón nhận hơn 500 học viên mới.',
    content: `<p>Sáng ngày 05/9/2025, Trường Sĩ quan Thông tin đã tổ chức trọng thể Lễ khai giảng năm học 2025-2026.</p>`,
    image: '/images/news-1.jpg',
    category: 'Tin Nhà Trường',
    categorySlug: 'tin-nha-truong',
    date: '2025-09-05',
    author: 'Ban Biên tập',
    views: 6540,
  },
  {
    id: '5',
    slug: 'hoi-thi-giang-vien-gioi-2025',
    title: 'Hội thi giảng viên giỏi cấp Trường năm 2025 diễn ra sôi nổi',
    excerpt: 'Hội thi giảng viên giỏi cấp Trường năm 2025 thu hút 45 giảng viên tham gia từ 12 khoa chuyên ngành.',
    content: `<p>Từ ngày 10-15/8/2025, Trường Sĩ quan Thông tin đã tổ chức thành công Hội thi giảng viên giỏi cấp Trường năm 2025.</p>`,
    image: '/images/news-2.jpg',
    category: 'Tin Nhà Trường',
    categorySlug: 'tin-nha-truong',
    date: '2025-08-16',
    author: 'Phòng Đào tạo',
    views: 4320,
  },
  {
    id: '6',
    slug: 'huan-luyen-the-luc-hoc-vien-2025',
    title: 'Chương trình huấn luyện thể lực đặc biệt cho học viên năm cuối',
    excerpt: 'Nhà trường triển khai chương trình huấn luyện thể lực tăng cường cho học viên năm cuối trước khi ra trường.',
    content: `<p>Thực hiện kế hoạch đào tạo, từ tháng 7/2025, Nhà trường đã triển khai chương trình huấn luyện thể lực đặc biệt cho học viên năm cuối.</p>`,
    image: '/images/news-3.jpg',
    category: 'Tin Nhà Trường',
    categorySlug: 'tin-nha-truong',
    date: '2025-07-20',
    author: 'Phòng Quân huấn',
    views: 3890,
  },
  // Tin Trong Nước
  {
    id: '7',
    slug: 'bo-quoc-phong-trien-khai-chuyen-doi-so',
    title: 'Bộ Quốc phòng triển khai lộ trình chuyển đổi số toàn quân giai đoạn 2025-2030',
    excerpt: 'Bộ Quốc phòng ban hành kế hoạch chuyển đổi số toàn diện, xây dựng quân đội thông minh, hiện đại.',
    content: `<p>Ngày 01/10/2025, Bộ Quốc phòng đã ban hành Kế hoạch chuyển đổi số trong lĩnh vực quốc phòng giai đoạn 2025-2030.</p>`,
    image: '/images/news-4.jpg',
    category: 'Tin Trong Nước',
    categorySlug: 'tin-trong-nuoc',
    date: '2025-10-01',
    author: 'TTXVN',
    views: 9870,
  },
  {
    id: '8',
    slug: 'dai-hoi-dang-bo-quan-doi-2025',
    title: 'Đại hội Đảng bộ Quân đội lần thứ XII - Định hướng phát triển mới',
    excerpt: 'Đại hội Đảng bộ Quân đội lần thứ XII xác định mục tiêu xây dựng quân đội chính quy, tinh nhuệ, hiện đại.',
    content: `<p>Đại hội Đảng bộ Quân đội lần thứ XII đã diễn ra trọng thể tại Hà Nội, xác định phương hướng phát triển cho giai đoạn mới.</p>`,
    image: '/images/news-5.jpg',
    category: 'Tin Trong Nước',
    categorySlug: 'tin-trong-nuoc',
    date: '2025-09-28',
    author: 'TTXVN',
    views: 7650,
  },
  {
    id: '9',
    slug: 'viet-nam-tang-cuong-hop-tac-quoc-phong',
    title: 'Việt Nam tăng cường hợp tác quốc phòng song phương với các nước ASEAN',
    excerpt: 'Bộ Quốc phòng Việt Nam ký kết nhiều thỏa thuận hợp tác quốc phòng quan trọng với các nước trong khu vực.',
    content: `<p>Trong khuôn khổ Hội nghị Bộ trưởng Quốc phòng ASEAN, Việt Nam đã ký kết nhiều thỏa thuận hợp tác quốc phòng song phương.</p>`,
    image: '/images/news-6.jpg',
    category: 'Tin Trong Nước',
    categorySlug: 'tin-trong-nuoc',
    date: '2025-09-15',
    author: 'VOV',
    views: 5430,
  },
  // Tin Thế Giới
  {
    id: '10',
    slug: 'xu-huong-chien-tranh-thong-tin-hien-dai',
    title: 'Xu hướng chiến tranh thông tin và tác chiến mạng trên thế giới năm 2025',
    excerpt: 'Phân tích xu hướng phát triển chiến tranh thông tin và an ninh mạng trong bối cảnh quốc tế hiện nay.',
    content: `<p>Trong bối cảnh cuộc cách mạng công nghệ 4.0, chiến tranh thông tin và tác chiến mạng đang trở thành xu hướng chủ đạo trong các cuộc xung đột hiện đại.</p>`,
    image: '/images/news-7.jpg',
    category: 'Tin Thế Giới',
    categorySlug: 'tin-the-gioi',
    date: '2025-10-10',
    author: 'Ban Biên tập',
    views: 11200,
  },
  {
    id: '11',
    slug: 'cong-nghe-5g-trong-quan-su',
    title: 'Ứng dụng công nghệ 5G trong lĩnh vực quân sự - Thách thức và cơ hội',
    excerpt: 'Các cường quốc quân sự đang đẩy mạnh nghiên cứu ứng dụng 5G vào hệ thống thông tin liên lạc quân sự.',
    content: `<p>Công nghệ 5G đang mở ra kỷ nguyên mới trong lĩnh vực thông tin liên lạc quân sự, với khả năng truyền tải dữ liệu tốc độ cao và độ trễ thấp.</p>`,
    image: '/images/news-8.jpg',
    category: 'Tin Thế Giới',
    categorySlug: 'tin-the-gioi',
    date: '2025-09-25',
    author: 'Ban Biên tập',
    views: 8760,
  },
  {
    id: '12',
    slug: 'ai-trong-quoc-phong',
    title: 'Trí tuệ nhân tạo trong quốc phòng - Cuộc cách mạng đang diễn ra',
    excerpt: 'AI đang thay đổi hoàn toàn cách thức tác chiến và quản lý hệ thống thông tin quân sự trên toàn thế giới.',
    content: `<p>Trí tuệ nhân tạo (AI) đang được các quốc gia trên thế giới đầu tư nghiên cứu và ứng dụng mạnh mẽ trong lĩnh vực quốc phòng.</p>`,
    image: '/images/news-9.jpg',
    category: 'Tin Thế Giới',
    categorySlug: 'tin-the-gioi',
    date: '2025-09-18',
    author: 'Ban Biên tập',
    views: 6540,
  },
  // Đào tạo
  {
    id: '13',
    slug: 'chuong-trinh-dao-tao-moi-2025',
    title: 'Đổi mới chương trình đào tạo sĩ quan thông tin đáp ứng yêu cầu mới',
    excerpt: 'Nhà trường triển khai đổi mới toàn diện chương trình đào tạo, cập nhật công nghệ thông tin hiện đại.',
    content: `<p>Trường Sĩ quan Thông tin đã hoàn thành việc xây dựng chương trình đào tạo mới cho giai đoạn 2025-2030, đáp ứng yêu cầu xây dựng quân đội hiện đại.</p>`,
    image: '/images/news-10.jpg',
    category: 'Đào Tạo',
    categorySlug: 'dao-tao',
    date: '2025-08-30',
    author: 'Phòng Đào tạo',
    views: 5670,
  },
  {
    id: '14',
    slug: 'hoi-thi-olympic-tin-hoc-2025',
    title: 'Hội thi Olympic Tin học quân sự năm 2025 - Sân chơi trí tuệ cho học viên',
    excerpt: 'Hội thi Olympic Tin học quân sự thu hút hàng trăm học viên tham gia, thể hiện tài năng công nghệ.',
    content: `<p>Hội thi Olympic Tin học quân sự năm 2025 đã được tổ chức tại Trường Sĩ quan Thông tin với sự tham gia của 200 học viên đến từ các khoa.</p>`,
    image: '/images/news-11.jpg',
    category: 'Hội Thi',
    categorySlug: 'hoi-thi',
    date: '2025-08-20',
    author: 'Phòng Đào tạo',
    views: 4350,
  },
  // Nghiên cứu
  {
    id: '15',
    slug: 'nghien-cuu-he-thong-thong-tin-the-he-moi',
    title: 'Nghiên cứu phát triển hệ thống thông tin liên lạc thế hệ mới cho Quân đội',
    excerpt: 'Đề tài nghiên cứu khoa học cấp Bộ Quốc phòng về hệ thống thông tin liên lạc thế hệ mới đạt kết quả xuất sắc.',
    content: `<p>Đề tài nghiên cứu khoa học "Phát triển hệ thống thông tin liên lạc thế hệ mới cho Quân đội nhân dân Việt Nam" đã được Hội đồng khoa học Bộ Quốc phòng đánh giá xuất sắc.</p>`,
    image: '/images/news-12.jpg',
    category: 'Nghiên Cứu',
    categorySlug: 'nghien-cuu',
    date: '2025-09-10',
    author: 'Khoa CNTT',
    views: 7890,
  },
  {
    id: '16',
    slug: 'hoc-tap-tu-tuong-ho-chi-minh',
    title: 'Đẩy mạnh học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh',
    excerpt: 'Nhà trường triển khai đợt sinh hoạt chính trị sâu rộng về tư tưởng Hồ Chí Minh trong toàn đơn vị.',
    content: `<p>Thực hiện Chỉ thị 05-CT/TW của Bộ Chính trị, Trường Sĩ quan Thông tin đã triển khai đợt sinh hoạt chính trị sâu rộng về học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh.</p>`,
    image: '/images/news-13.jpg',
    category: 'Chuyên Trang Đảng',
    categorySlug: 'chuyen-trang-dang',
    date: '2025-09-02',
    author: 'Phòng Chính trị',
    views: 6780,
  },
  // Tin vắn
  {
    id: '17',
    slug: 'tuyen-sinh-quan-su-2026',
    title: 'Thông báo tuyển sinh quân sự năm 2026',
    excerpt: 'Nhà trường thông báo chỉ tiêu và kế hoạch tuyển sinh đào tạo sĩ quan thông tin năm 2026.',
    content: `<p>Trường Sĩ quan Thông tin thông báo tuyển sinh năm 2026 với chỉ tiêu 300 học viên.</p>`,
    image: '/images/news-14.jpg',
    category: 'Tin Nhà Trường',
    categorySlug: 'tin-nha-truong',
    date: '2025-10-18',
    author: 'Phòng Đào tạo',
    views: 18900,
  },
  {
    id: '18',
    slug: 'giao-luu-van-hoa-van-nghe',
    title: 'Đêm giao lưu văn hóa văn nghệ chào mừng ngày truyền thống',
    excerpt: 'Đêm văn nghệ đặc sắc với sự tham gia của cán bộ, giảng viên và học viên toàn trường.',
    content: `<p>Nhân dịp kỷ niệm ngày truyền thống, Nhà trường đã tổ chức Đêm giao lưu văn hóa văn nghệ đặc sắc.</p>`,
    image: '/images/news-15.jpg',
    category: 'Tin Nhà Trường',
    categorySlug: 'tin-nha-truong',
    date: '2025-10-19',
    author: 'Đoàn Thanh niên',
    views: 3450,
  },
];

export const quickNews = [
  'Thông báo lịch nghỉ Tết Nguyên đán 2026 cho cán bộ, học viên',
  'Kết quả thi đua khen thưởng quý III/2025',
  'Hội nghị rút kinh nghiệm công tác giáo dục đào tạo',
  'Triển khai kế hoạch huấn luyện mùa đông 2025',
  'Lễ trao bằng tốt nghiệp cho học viên Khóa 58',
];

export function getNewsByCategory(categorySlug: string): NewsItem[] {
  return newsItems.filter(item => item.categorySlug === categorySlug);
}

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find(item => item.slug === slug);
}

export function getFeaturedNews(): NewsItem[] {
  return newsItems.filter(item => item.featured);
}

export function getLatestNews(count: number = 5): NewsItem[] {
  return [...newsItems]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}

export function getRelatedNews(currentSlug: string, category: string, count: number = 4): NewsItem[] {
  return newsItems
    .filter(item => item.slug !== currentSlug && item.categorySlug === category)
    .slice(0, count);
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}

export function formatViews(views: number): string {
  if (views >= 1000) {
    return `${(views / 1000).toFixed(1)}K`;
  }
  return views.toString();
}
