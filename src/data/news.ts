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
  // 1. Hero slides
  {
    id: 'hero-1',
    slug: 'dang-uy-nha-truong-ra-nghi-quyet-lanh-dao-nhiem-vu',
    title: 'Đảng ủy Trường Quân sự ra Nghị quyết lãnh đạo thực hiện nhiệm vụ năm học 2024 - 2025',
    excerpt: 'Hội nghị Đảng ủy Nhà trường đã thảo luận dân chủ, thống nhất ban hành Nghị quyết lãnh đạo toàn diện công tác giáo dục đào tạo, sẵn sàng chiến đấu và nghiên cứu khoa học trong năm học mới.',
    content: `<p>Sáng ngày 15/9/2024, Đảng ủy Trường Sĩ quan Thông tin đã tổ chức Hội nghị ra Nghị quyết lãnh đạo thực hiện nhiệm vụ năm học 2024 - 2025. Đồng chí Bí thư Đảng ủy, Chính ủy Nhà trường chủ trì hội nghị.</p>
    <p>Hội nghị đã đánh giá toàn diện kết quả lãnh đạo thực hiện nhiệm vụ năm học vừa qua; chỉ rõ những ưu điểm, khuyết điểm, nguyên nhân và bài học kinh nghiệm; đồng thời xác định phương hướng, mục tiêu, chỉ tiêu và các nhóm giải pháp chủ yếu nhằm nâng cao chất lượng giáo dục - đào tạo, nghiên cứu khoa học, xây dựng chính quy, rèn luyện kỷ luật của Nhà trường trong năm học mới.</p>
    <p>Nghị quyết nhấn mạnh: Năm học 2024 - 2025 là năm bản lề thực hiện Nghị quyết Đại hội Đảng bộ Nhà trường lần thứ XVII, toàn trường cần tập trung đổi mới quy trình, chương trình đào tạo theo hướng chuẩn hóa, hiện đại hóa; gắn đào tạo tại trường với thực tiễn chiến đấu của các đơn vị thông tin toàn quân.</p>
    <p>Kết luận hội nghị, đồng chí Bí thư Đảng ủy yêu cầu cấp ủy, chỉ huy các cấp nhanh chóng quán triệt, cụ thể hóa Nghị quyết thành chương trình, kế hoạch hành động cụ thể, tạo chuyển biến vững chắc ngay từ những ngày đầu năm học mới.</p>`,
    image: '/images/hero_conference.jpg',
    category: 'Tin Nhà Trường',
    categorySlug: 'tin-nha-truong',
    date: '2024-09-15',
    author: 'Phòng Chính trị',
    views: 2450,
    featured: true,
  },
  {
    id: 'hero-2',
    slug: 'nang-cao-chat-luong-huan-luyen-thuc-hanh-cong-nghe-moi',
    title: 'Nâng cao chất lượng thực hành, làm chủ trang bị kỹ thuật thông tin viễn thông thế hệ mới',
    excerpt: 'Nhà trường đẩy mạnh ứng dụng công nghệ mô phỏng và phòng thí nghiệm chuyên sâu, giúp học viên làm chủ các khí tài thông tin viễn thông hiện đại ngay trên ghế nhà trường.',
    content: `<p>Nhằm đáp ứng yêu cầu hiện đại hóa lực lượng Thông tin liên lạc quân sự, Trường Sĩ quan Thông tin đã triển khai đồng bộ các giải pháp nâng cao chất lượng huấn luyện thực hành cho học viên các chuyên ngành viễn thông, tác chiến điện tử và công nghệ thông tin.</p>
    <p>Nhà trường đã đầu tư nâng cấp hệ thống phòng thí nghiệm chuyên sâu, trang bị các thiết bị truyền dẫn quang thế hệ mới, trạm vệ tinh cơ động và phần mềm mô phỏng mạng viễn thông quân sự 3D. Nhờ đó, học viên có điều kiện cọ xát thực tế, xử lý các tình huống phức tạp trong điều kiện tác chiến điện tử giả định.</p>
    <p>Qua kiểm tra đánh giá, 100% học viên năm cuối hoàn thành tốt các bài tập thực hành khí tài thông tin mới, sẵn sàng tiếp cận và khai thác hiệu quả trang bị tại các quân binh chủng sau khi tốt nghiệp ra trường.</p>`,
    image: '/images/hero_lab.jpg',
    category: 'Đào Tạo',
    categorySlug: 'dao-tao',
    date: '2024-09-14',
    author: 'Phòng Đào tạo',
    views: 1890,
    featured: true,
  },
  {
    id: 'hero-3',
    slug: 'hoi-nghi-khoa-hoc-cong-nghe-thong-tin-quan-su',
    title: 'Hội nghị sơ kết công tác Đảng, công tác chính trị quý III và phương hướng nhiệm vụ trọng tâm',
    excerpt: 'Hội nghị tập trung đánh giá kết quả hoạt động công tác Đảng, công tác chính trị trong quý III năm 2024, đề ra phương hướng giải pháp thực hiện thắng lợi các chỉ tiêu quý IV.',
    content: `<p>Chiều ngày 12/9/2024, Ban Thường vụ Đảng ủy Trường Sĩ quan Thông tin tổ chức Hội nghị sơ kết công tác Đảng, công tác chính trị (CTĐ, CTCT) quý III năm 2024.</p>
    <p>Trong quý III, hoạt động CTĐ, CTCT của Nhà trường đã bám sát nhiệm vụ chính trị, triển khai toàn diện, có trọng tâm, trọng điểm, hoàn thành tốt các chỉ tiêu đề ra. Tình hình tư tưởng cán bộ, giảng viên, học viên, nhân viên, chiến sĩ ổn định, nội bộ đoàn kết, thống nhất, sẵn sàng nhận và hoàn thành tốt mọi nhiệm vụ.</p>
    <p>Phát biểu chỉ đạo hội nghị, thủ trưởng Ban Giám hiệu yêu cầu các cơ quan, đơn vị tiếp tục đẩy mạnh công tác tuyên truyền, giáo dục chính trị tư tưởng, xây dựng bản lĩnh kiên định vững vàng, đẩy mạnh phong trào thi đua Quyết thắng hướng tới kỷ niệm ngày truyền thống Nhà trường.</p>`,
    image: '/images/nhatrang_bay.jpg',
    category: 'Công Tác Đảng',
    categorySlug: 'chuyen-trang-dang',
    date: '2024-09-12',
    author: 'Ban Tuyên huấn',
    views: 1620,
    featured: true,
  },
  {
    id: 'hero-4',
    slug: 'le-phat-dong-phong-trao-thi-dua-quyet-thang',
    title: 'Phát động đợt thi đua cao điểm chào mừng 76 năm ngày truyền thống Nhà trường vẻ vang',
    excerpt: 'Hội đồng Thi đua - Khen thưởng Nhà trường tổ chức Lễ phát động đợt thi đua cao điểm với chủ đề "Tự hào truyền thống - Vững bước tương lai - Lập công xuất sắc".',
    content: `<p>Sáng ngày 10/9/2024, tại Quảng trường Nhà trường, Hội đồng Thi đua - Khen thưởng Trường Sĩ quan Thông tin đã tổ chức Lễ phát động đợt thi đua cao điểm chào mừng 76 năm ngày truyền thống (11/11/1951 - 11/11/2027) và chào mừng năm học mới.</p>
    <p>Đợt thi đua tập trung vào các nội dung trọng tâm: 100% cán bộ, giảng viên, học viên có nhận thức sâu sắc về truyền thống anh hùng của Nhà trường; thi đua dạy tốt, học tốt, rèn nghiêm; tích cực nghiên cứu khoa học, ứng dụng công nghệ thông tin vào quản lý và huấn luyện; bảo đảm an toàn tuyệt đối về mọi mặt.</p>
    <p>Đại diện các khối cơ quan, khoa giáo viên và tiểu đoàn quản lý học viên đã ký kết giao ước thi đua, thể hiện quyết tâm cao nhất hoàn thành thắng lợi các mục tiêu đề ra.</p>`,
    image: '/images/hanoi_opera.jpg',
    category: 'Thi Đua',
    categorySlug: 'hoi-thi',
    date: '2024-09-10',
    author: 'Hội đồng TĐ-KT',
    views: 2130,
    featured: true,
  },

  // 2. Focus cards (Tiêu điểm)
  {
    id: 'focus-1',
    slug: 'doan-chuyen-gia-quoc-te-tham-va-trao-doi-kinh-nghiem',
    title: 'Đoàn chuyên gia quốc tế thăm và trao đổi kinh nghiệm đào tạo tác chiến điện tử',
    excerpt: 'Chuyến thăm và làm việc của đoàn chuyên gia quốc tế mở ra nhiều cơ hội hợp tác học thuật, chuyển giao công nghệ và trao đổi học viên chuyên ngành tác chiến điện tử.',
    content: `<p>Ngày 15/9/2024, Trường Sĩ quan Thông tin đã đón tiếp và làm việc với đoàn chuyên gia quân sự quốc tế đến thăm và trao đổi kinh nghiệm đào tạo chuyên ngành Tác chiến điện tử và Thông tin liên lạc quân sự.</p>
    <p>Tại buổi làm việc, hai bên đã chia sẻ kinh nghiệm xây dựng khung chương trình đào tạo, phương pháp tổ chức diễn tập mô phỏng trên không gian mạng và các giải pháp phòng chống tấn công mạng trong điều kiện chiến tranh công nghệ cao.</p>
    <p>Trưởng đoàn chuyên gia quốc tế bày tỏ sự ấn tượng trước cơ sở vật chất, hệ thống phòng thí nghiệm hiện đại và năng lực ngoại ngữ, chuyên môn vững vàng của đội ngũ giảng viên, học viên Nhà trường.</p>`,
    image: '/images/lang_bac.jpg',
    category: 'Đối Ngoại',
    categorySlug: 'doi-ngoai',
    date: '2024-09-15',
    author: 'Phòng Khoa học Quân sự',
    views: 3120,
  },
  {
    id: 'focus-2',
    slug: 'thu-truong-bo-quoc-phong-tham-lam-viec',
    title: 'Thủ trưởng Bộ Quốc phòng thăm, làm việc và chúc mừng ngày truyền thống Nhà trường',
    excerpt: 'Đồng chí Thứ trưởng Bộ Quốc phòng đánh giá cao thành tích đào tạo nguồn nhân lực chất lượng cao và giao nhiệm vụ trọng tâm cho Nhà trường trong giai đoạn mới.',
    content: `<p>Sáng ngày 14/9/2024, đồng chí Thứ trưởng Bộ Quốc phòng cùng đoàn công tác đã đến thăm, kiểm tra và chúc mừng cán bộ, giảng viên, học viên Trường Sĩ quan Thông tin.</p>
    <p>Báo cáo với đoàn công tác, Ban Giám hiệu Nhà trường cho biết trong những năm qua, Trường luôn bám sát phương châm "Chất lượng đào tạo của nhà trường là khả năng sẵn sàng chiến đấu của đơn vị", không ngừng đổi mới phương pháp giảng dạy, tích cực chuyển đổi số và nâng cao chuẩn đầu ra.</p>
    <p>Phát biểu chỉ đạo, đồng chí Thứ trưởng biểu dương những kết quả nổi bật mà Nhà trường đã đạt được, đồng thời yêu cầu tập trung xây dựng Trường Sĩ quan Thông tin trở thành trường đại học định hướng ứng dụng trọng điểm của Quân đội, đi đầu trong nghiên cứu và làm chủ trang bị công nghệ cao.</p>`,
    image: '',
    category: 'Sự Kiện',
    categorySlug: 'tin-nha-truong',
    date: '2024-09-14',
    author: 'Văn phòng Nhà trường',
    views: 4580,
  },
  {
    id: 'focus-3',
    slug: 'dai-hoi-dai-bieu-dang-bo-lan-thu-xvii',
    title: 'Đại hội đại biểu Đảng bộ Trường Sĩ quan Thông tin lần thứ XVII thành công tốt đẹp',
    excerpt: 'Đại hội đã phát huy dân chủ, trí tuệ tập thể, xác định các khâu đột phá chiến lược nhằm đưa Nhà trường phát triển vững chắc trong thời kỳ mới.',
    content: `<p>Đại hội đại biểu Đảng bộ Trường Sĩ quan Thông tin lần thứ XVII (nhiệm kỳ 2025 - 2030) đã diễn ra trọng thể với sự tham gia của 250 đại biểu đại diện cho hơn 2.000 đảng viên trong toàn Đảng bộ.</p>
    <p>Đại hội đã tập trung thảo luận, đóng góp nhiều ý kiến sâu sắc vào dự thảo Báo cáo chính trị của Đảng ủy Nhà trường và dự thảo các văn kiện trình Đại hội đại biểu toàn quốc của Đảng; bầu Ban Chấp hành Đảng bộ Nhà trường nhiệm kỳ mới gồm những đồng chí tiêu biểu về phẩm chất chính trị, đạo đức và năng lực lãnh đạo.</p>
    <p>Đại hội đã biểu quyết thông qua Nghị quyết với các mục tiêu đột phá: Nâng cao chất lượng đội ngũ giảng viên; đổi mới mô hình đào tạo theo chuẩn quốc tế; làm chủ trang bị kỹ thuật thông tin thế hệ mới.</p>`,
    image: '/images/focus_3.jpg',
    category: 'Công Tác Đảng',
    categorySlug: 'chuyen-trang-dang',
    date: '2024-09-13',
    author: 'Ban Tuyên huấn',
    views: 5210,
  },
  {
    id: 'focus-4',
    slug: 'doan-can-bo-kiem-tra-nghien-cuu-khoa-hoc',
    title: 'Đoàn cán bộ Học viện Kỹ thuật Quân sự kiểm tra công tác nghiên cứu khoa học',
    excerpt: 'Chương trình phối hợp nghiên cứu khoa học công nghệ quốc phòng giữa hai trung tâm đào tạo kỹ thuật quân sự hàng đầu mở ra nhiều hướng đề tài ứng dụng thực tiễn.',
    content: `<p>Ngày 12/9/2024, đoàn cán bộ, chuyên gia Học viện Kỹ thuật Quân sự đã có buổi làm việc và kiểm tra tiến độ các đề tài nghiên cứu khoa học liên kết tại Trường Sĩ quan Thông tin.</p>
    <p>Hai bên đã nghe báo cáo tiến độ 5 đề tài cấp Bộ Quốc phòng về hệ thống vô tuyến thông minh, thiết bị giải mã tín hiệu radar và giải pháp bảo mật dữ liệu quân sự trên nền tảng đám mây an toàn.</p>
    <p>Đoàn công tác đánh giá cao tính khả thi, tính sáng tạo và giá trị ứng dụng thực tiễn của các đề tài, đồng thời thống nhất kế hoạch thử nghiệm thực địa trong đợt diễn tập chiến dịch sắp tới.</p>`,
    image: '/images/vietnam_conference_hall.jpg',
    category: 'Hợp Tác',
    categorySlug: 'nghien-cuu',
    date: '2024-09-12',
    author: 'Phòng KHQS',
    views: 2940,
  },

  // 3. Research & Teaching articles
  {
    id: 'res-1',
    slug: 'nang-cao-nang-luc-nghien-cuu-khoa-hoc',
    title: 'Nâng cao năng lực nghiên cứu khoa học và phát triển các giải pháp bảo đảm thông tin liên lạc thế hệ mới',
    excerpt: 'Bài viết chuyên sâu của Đại tá PGS. TS. Nguyễn Văn Minh về định hướng nghiên cứu công nghệ thông tin liên lạc quân sự trong kỷ nguyên tác chiến đa miền.',
    content: `<p>Trong chiến tranh hiện đại, bảo đảm thông tin liên lạc thông suốt, vững chắc trong mọi tình huống là nhân tố then chốt quyết định thắng lợi của các chiến dịch tác chiến liên quân, tác chiến đa miền.</p>
    <p>Tại Trường Sĩ quan Thông tin, công tác nghiên cứu khoa học luôn được xác định là nhiệm vụ trọng tâm hàng đầu song hành cùng giảng dạy. Trong những năm qua, đội ngũ cán bộ, giảng viên Nhà trường đã chủ trì và hoàn thành xuất sắc hàng chục đề tài cấp Nhà nước, cấp Bộ Quốc phòng và Binh chủng.</p>
    <p>Các hướng nghiên cứu mũi nhọn hiện nay bao gồm: Mạng thông tin tác chiến vô tuyến nhận thức (Cognitive Radio Network), hệ thống quang vệ tinh chống nhiễu, thuật toán mã hóa lượng tử và trí tuệ nhân tạo nhận dạng tín hiệu mục tiêu.</p>
    <p>Nhà trường tiếp tục mở rộng hợp tác với các viện nghiên cứu, doanh nghiệp công nghệ hàng đầu như Viettel, VNPT để đưa các sản phẩm nghiên cứu nhanh chóng vào phục vụ huấn luyện và sẵn sàng chiến đấu.</p>`,
    image: '/images/scientific_lab.jpg',
    category: 'Nghiên Cứu',
    categorySlug: 'nghien-cuu',
    date: '2024-09-15',
    author: 'Đại tá, PGS. TS. Nguyễn Văn Minh',
    views: 4890,
  },
  {
    id: 'res-2',
    slug: 'khoa-vien-thong-doi-moi-phuong-phap-day-hoc',
    title: 'Khoa Viễn thông: Đổi mới phương pháp dạy - học theo chuẩn đầu ra sĩ quan thông tin hiện đại',
    excerpt: 'Áp dụng mô hình lớp học đảo ngược, bài giảng số hóa tương tác và huấn luyện tình huống thực tế giúp nâng cao rõ rệt năng lực thực hành của học viên.',
    content: `<p>Trước yêu cầu ngày càng cao của nhiệm vụ bảo đảm thông tin liên lạc trong Quân đội nhân dân Việt Nam, Khoa Viễn thông - Trường Sĩ quan Thông tin đã chủ động triển khai phong trào đổi mới toàn diện phương pháp dạy và học.</p>
    <p>Khoa đã tiên phong ứng dụng công nghệ mô phỏng 3D vào giảng dạy các môn khí tài viễn thông quân sự; xây dựng hệ thống bài giảng điện tử tương tác và kho học liệu số phong phú trên cổng E-learning của Trường.</p>
    <p>Thay vì thuyết trình truyền thống một chiều, các giờ học hiện nay dành hơn 60% thời lượng cho học viên thực hành đấu nối khí tài, cấu hình mạng, xử lý sự cố đứt tuyến và khắc phục chế áp điện tử giả định.</p>
    <p>Kết quả thi tốt nghiệp các khóa gần đây cho thấy tỷ lệ học viên đạt khá, giỏi thực hành chuyên ngành đạt trên 85%, được các đơn vị tiếp nhận đánh giá rất cao về khả năng bắt nhịp công việc ngay sau khi ra trường.</p>`,
    image: '/images/vietnam_classroom.jpg',
    category: 'Đào Tạo',
    categorySlug: 'dao-tao',
    date: '2024-09-14',
    author: 'Thượng tá, ThS. Trần Văn Hùng',
    views: 3760,
  },

  // 4. Events & Bulletins
  {
    id: 'event-1',
    slug: 'vuot-kho-giup-nhan-dan-khac-phuc-hau-qua-thien-tai',
    title: 'Cán bộ, học viên Nhà trường xung kích giúp nhân dân khắc phục hậu quả thiên tai, bão lũ',
    excerpt: 'Hơn 300 cán bộ, chiến sĩ Trường Sĩ quan Thông tin không quản hiểm nguy, kịp thời cơ động đến các vùng ngập lụt hỗ trợ đồng bào gia cố đê điều, dọn dẹp nhà cửa và ổn định đời sống.',
    content: `<p>Thực hiện mệnh lệnh của Bộ Tư lệnh Quân khu và chỉ thị của Ban Giám hiệu Nhà trường, ngay sau khi cơn bão đổ bộ gây ngập lụt nghiêm trọng trên địa bàn tỉnh Khánh Hòa và các vùng lân cận, Trường Sĩ quan Thông tin đã huy động hơn 300 cán bộ, học viên cùng hàng chục phương tiện cơ động nhanh chóng có mặt tại các điểm xung yếu.</p>
    <p>Cán bộ, học viên Nhà trường đã phối hợp cùng cấp ủy, chính quyền địa phương di dời hàng trăm hộ dân đến nơi an toàn; gia cố đê bao ngăn lũ; vận chuyển lương thực, nước sạch cứu trợ; và dọn dẹp bùn đất, khử trùng trường học, trạm y tế để các em học sinh sớm trở lại trường.</p>
    <p>Hình ảnh người chiến sĩ Thông tin tận tụy, không quản khó khăn vì nhân dân đã để lại ấn tượng sâu đậm, tô thắm thêm phẩm chất cao đẹp "Bộ đội Cụ Hồ" trong lòng nhân dân địa phương.</p>`,
    image: '/images/volunteers_green.jpg',
    category: 'Sự Kiện & Bình Luận',
    categorySlug: 'tin-nha-truong',
    date: '2024-09-15',
    author: 'Ban Tuyên huấn',
    views: 5670,
  },
  {
    id: 'event-2',
    slug: 'doan-ket-quan-dan-coi-nguon-suc-manh',
    title: 'Đoàn kết quân dân - Cội nguồn sức mạnh vô địch bảo vệ vững chắc Tổ quốc Việt Nam XHCN',
    excerpt: 'Chuyên đề nghiên cứu chính trị sâu sắc về mối quan hệ máu thịt quân - dân và bài học củng cố thế trận lòng dân trong thời kỳ mới.',
    content: `<p>Lịch sử dựng nước và giữ nước hàng nghìn năm của dân tộc Việt Nam đã chứng minh: Đoàn kết quân dân là cội nguồn sức mạnh, là bài học vô giá đưa cách mạng Việt Nam đi từ thắng lợi này đến thắng lợi khác.</p>
    <p>Đối với Trường Sĩ quan Thông tin đóng quân trên địa bàn thành phố biển Nha Trang, công tác dân vận và xây dựng địa bàn an toàn luôn được Đảng ủy, Ban Giám hiệu đặc biệt quan tâm lãnh đạo, chỉ đạo.</p>
    <p>Hằng năm, Nhà trường tổ chức nhiều đợt hành quân dã ngoại kết hợp làm công tác dân vận, khám chữa bệnh cấp thuốc miễn phí cho đồng bào khó khăn, nhận đỡ đầu học sinh nghèo vượt khó và tích cực tham gia các phong trào "Xóa đói giảm nghèo", "Chung sức xây dựng nông thôn mới".</p>
    <p>Mối quan hệ gắn bó máu thịt giữa Nhà trường và nhân dân địa phương là nền tảng vững chắc để xây dựng đơn vị an toàn tuyệt đối, hoàn thành xuất sắc mọi nhiệm vụ được Đảng và Nhà nước giao phó.</p>`,
    image: '/images/focus_3.jpg',
    category: 'Thông Tin Chuyên Đề',
    categorySlug: 'chuyen-trang-dang',
    date: '2024-09-14',
    author: 'Phòng Chính trị',
    views: 4120,
  },
  {
    id: 'event-3',
    slug: 'ban-tin-truyen-hinh-sqtt-ngay-15-09-2024',
    title: 'Bản tin truyền hình Trường Sĩ quan Thông tin phát sóng ngày 15 tháng 9 năm 2024',
    excerpt: 'Điểm lại các sự kiện nổi bật trong tuần: Diễn tập bảo đảm thông tin; Khai giảng năm học mới; Giao lưu thể thao và hoạt động vì cộng đồng.',
    content: `<p>Bản tin truyền hình Trường Sĩ quan Thông tin số phát sóng ngày 15/9/2024 kính gửi tới cán bộ, giảng viên, học viên và bạn đọc các tin tức thời sự chính:</p>
    <p>1. Lễ khai giảng năm học 2024 - 2025 trọng thể và khí thế thi đua sôi nổi tại Hội trường trung tâm Nhà trường.</p>
    <p>2. Phóng sự: Nâng cao trình độ làm chủ khí tài thông tin số thế hệ mới của học viên Khóa 59.</p>
    <p>3. Ghi nhanh hoạt động của tuổi trẻ Nhà trường trong chiến dịch Chủ nhật xanh tình nguyện giúp đỡ nhân dân khắc phục sau mưa bão.</p>
    <p>4. Chuyên mục Quốc phòng toàn dân: Truyền thống vẻ vang 76 năm ngày thành lập Binh chủng Thông tin liên lạc anh hùng.</p>`,
    image: '/images/broadcast_news.jpg',
    category: 'Bản Tin Ngày',
    categorySlug: 'tin-nha-truong',
    date: '2024-09-15',
    author: 'Ban Truyền hình Quân sự',
    views: 6890,
  },

  // 5. Classic Portal articles
  {
    id: 'old-1',
    slug: 'ky-niem-76-nam-ngay-truyen-thong',
    title: 'Kỷ niệm 76 năm ngày truyền thống Trường Sĩ quan Thông tin',
    excerpt: 'Lễ kỷ niệm 76 năm ngày truyền thống Trường Sĩ quan Thông tin (20/10/1949 - 20/10/2025) được tổ chức trọng thể tại Hội trường lớn của Nhà trường.',
    content: `<p>Sáng ngày 20/10/2025, tại Hội trường lớn, Trường Sĩ quan Thông tin đã long trọng tổ chức Lễ kỷ niệm 76 năm Ngày truyền thống (20/10/1949 - 20/10/2025).</p>
    <p>Tham dự buổi lễ có đồng chí Hiệu trưởng Nhà trường; các đồng chí trong Ban Giám hiệu; lãnh đạo, chỉ huy các cơ quan, khoa, phòng, tiểu đoàn cùng toàn thể cán bộ, giảng viên, học viên.</p>
    <p>Trong suốt 76 năm qua, các thế hệ cán bộ, giảng viên, học viên của Nhà trường đã phát huy truyền thống "Trung thành - Mưu trí - Kỷ luật - Sáng tạo", hoàn thành xuất sắc mọi nhiệm vụ được giao, góp phần xứng đáng vào sự nghiệp xây dựng và bảo vệ Tổ quốc.</p>`,
    image: '/images/hero_conference.jpg',
    category: 'Tin Nhà Trường',
    categorySlug: 'tin-nha-truong',
    date: '2025-10-20',
    author: 'Ban Biên tập',
    views: 15420,
    featured: true,
  },
  {
    id: 'old-2',
    slug: 'dien-tap-zt30-d1-thanh-cong',
    title: 'Diễn tập chỉ huy - cơ quan ZT30-Đ1 thành công tốt đẹp',
    excerpt: 'Trường Sĩ quan Thông tin hoàn thành xuất sắc cuộc diễn tập chỉ huy - cơ quan ZT30-Đ1 với sự tham gia của toàn thể cán bộ, giảng viên.',
    content: `<p>Trường Sĩ quan Thông tin đã tổ chức thành công cuộc diễn tập chỉ huy - cơ quan ZT30-Đ1 theo kế hoạch của Bộ Tổng Tham mưu.</p>
    <p>Cuộc diễn tập nhằm nâng cao năng lực chỉ huy, điều hành của đội ngũ cán bộ các cấp; rèn luyện khả năng hiệp đồng, phối hợp giữa các cơ quan, đơn vị trong thực hiện nhiệm vụ bảo đảm thông tin liên lạc.</p>
    <p>Kết thúc diễn tập, Ban chỉ đạo đánh giá cao tinh thần trách nhiệm và kết quả huấn luyện của toàn trường.</p>`,
    image: '/images/military_training.jpg',
    category: 'Tin Nhà Trường',
    categorySlug: 'tin-nha-truong',
    date: '2025-09-22',
    author: 'Ban Biên tập',
    views: 12350,
    featured: true,
  },
  {
    id: 'old-3',
    slug: 'hoi-nghi-quan-su-quoc-phong',
    title: 'Hội nghị Quân sự - Quốc phòng năm 2025 triển khai nhiệm vụ mới',
    excerpt: 'Hội nghị tổng kết công tác quân sự - quốc phòng năm 2025 và triển khai phương hướng nhiệm vụ năm 2026.',
    content: `<p>Trường Sĩ quan Thông tin đã tổ chức Hội nghị tổng kết công tác quân sự - quốc phòng năm 2025, triển khai phương hướng, nhiệm vụ năm 2026.</p>
    <p>Hội nghị đã đánh giá toàn diện kết quả thực hiện nhiệm vụ quân sự - quốc phòng và xác định rõ phương hướng, nhiệm vụ trọng tâm.</p>`,
    image: '/images/vietnam_summit.jpg',
    category: 'Tin Nhà Trường',
    categorySlug: 'tin-nha-truong',
    date: '2025-10-15',
    author: 'Phòng Chính trị',
    views: 8920,
  },
  {
    id: 'old-4',
    slug: 'le-khai-giang-nam-hoc-2025-2026',
    title: 'Lễ khai giảng năm học 2025-2026 - Khóa đào tạo Sĩ quan Thông tin',
    excerpt: 'Nhà trường tổ chức trọng thể Lễ khai giảng năm học mới, đón nhận học viên mới nhập học với khí thế thi đua sôi nổi.',
    content: `<p>Trường Sĩ quan Thông tin đã tổ chức trọng thể Lễ khai giảng năm học mới trong bầu không khí phấn khởi, thi đua lập công dâng Bác.</p>`,
    image: '/images/vietnam_students.jpg',
    category: 'Tin Nhà Trường',
    categorySlug: 'tin-nha-truong',
    date: '2025-09-05',
    author: 'Ban Biên tập',
    views: 6540,
  },
  {
    id: 'old-5',
    slug: 'hoi-thi-giang-vien-gioi-2025',
    title: 'Hội thi giảng viên giỏi cấp Trường năm 2025 diễn ra sôi nổi',
    excerpt: 'Hội thi giảng viên giỏi cấp Trường năm 2025 thu hút hàng chục giảng viên tham gia từ các khoa chuyên ngành.',
    content: `<p>Hội thi giảng viên giỏi cấp Trường năm 2025 đã diễn ra sôi nổi, thể hiện trình độ chuyên môn cao và phương pháp sư phạm hiện đại của đội ngũ giảng viên.</p>`,
    image: '/images/vietnam_classroom.jpg',
    category: 'Tin Nhà Trường',
    categorySlug: 'tin-nha-truong',
    date: '2025-08-16',
    author: 'Phòng Đào tạo',
    views: 4320,
  },
  {
    id: 'old-6',
    slug: 'huan-luyen-the-luc-hoc-vien-2025',
    title: 'Chương trình huấn luyện thể lực đặc biệt cho học viên năm cuối',
    excerpt: 'Nhà trường triển khai chương trình huấn luyện thể lực tăng cường cho học viên năm cuối trước khi ra trường.',
    content: `<p>Nhà trường đã triển khai chương trình huấn luyện thể lực đặc biệt cho học viên năm cuối, bảo đảm các tiêu chuẩn chiến sĩ khỏe toàn quân.</p>`,
    image: '/images/sports_tournament.jpg',
    category: 'Tin Nhà Trường',
    categorySlug: 'tin-nha-truong',
    date: '2025-07-20',
    author: 'Phòng Quân huấn',
    views: 3890,
  },
  {
    id: 'old-7',
    slug: 'bo-quoc-phong-trien-khai-chuyen-doi-so',
    title: 'Bộ Quốc phòng triển khai lộ trình chuyển đổi số toàn quân giai đoạn 2025-2030',
    excerpt: 'Bộ Quốc phòng ban hành kế hoạch chuyển đổi số toàn diện, xây dựng quân đội thông minh, hiện đại.',
    content: `<p>Bộ Quốc phòng đã ban hành Kế hoạch chuyển đổi số trong lĩnh vực quân sự quốc phòng giai đoạn 2025-2030, lấy thông tin viễn thông làm nền tảng nòng cốt.</p>`,
    image: '/images/news_domestic.jpg',
    category: 'Tin Trong Nước',
    categorySlug: 'tin-trong-nuoc',
    date: '2025-10-01',
    author: 'TTXVN',
    views: 9870,
  },
  {
    id: 'old-8',
    slug: 'dai-hoi-dang-bo-quan-doi-2025',
    title: 'Đại hội Đảng bộ Quân đội lần thứ XII - Định hướng phát triển mới',
    excerpt: 'Đại hội Đảng bộ Quân đội lần thứ XII xác định mục tiêu xây dựng quân đội chính quy, tinh nhuệ, hiện đại.',
    content: `<p>Đại hội Đảng bộ Quân đội lần thứ XII đã thành công tốt đẹp, đề ra các định hướng chiến lược xây dựng Quân đội trong giai đoạn mới.</p>`,
    image: '/images/focus_3.jpg',
    category: 'Tin Trong Nước',
    categorySlug: 'tin-trong-nuoc',
    date: '2025-09-28',
    author: 'TTXVN',
    views: 7650,
  },
  {
    id: 'old-9',
    slug: 'viet-nam-tang-cuong-hop-tac-quoc-phong',
    title: 'Việt Nam tăng cường hợp tác quốc phòng song phương với các nước ASEAN',
    excerpt: 'Bộ Quốc phòng Việt Nam ký kết nhiều thỏa thuận hợp tác quốc phòng quan trọng với các nước trong khu vực.',
    content: `<p>Việt Nam tiếp tục đẩy mạnh các chương trình hợp tác quốc phòng song phương và đa phương, củng cố hòa bình và ổn định khu vực.</p>`,
    image: '/images/telecom_radar.jpg',
    category: 'Tin Trong Nước',
    categorySlug: 'tin-trong-nuoc',
    date: '2025-09-15',
    author: 'VOV',
    views: 5430,
  },
  {
    id: 'old-10',
    slug: 'xu-huong-chien-tranh-thong-tin-hien-dai',
    title: 'Xu hướng chiến tranh thông tin và tác chiến không gian mạng trên thế giới',
    excerpt: 'Phân tích các xu hướng mới trong chiến tranh hiện đại: tác chiến điện tử, bảo mật dữ liệu và phòng thủ mạng.',
    content: `<p>Chiến tranh thông tin và tác chiến không gian mạng đang trở thành phương thức tác chiến chủ đạo trong các cuộc xung đột hiện đại trên thế giới.</p>`,
    image: '/images/cyber_security.jpg',
    category: 'Tin Thế Giới',
    categorySlug: 'tin-the-gioi',
    date: '2025-10-10',
    author: 'Viện Chiến lược',
    views: 11200,
  },
  {
    id: 'old-11',
    slug: 'ung-dung-cong-nghe-5g-quan-su',
    title: 'Ứng dụng công nghệ 5G trong lĩnh vực quân sự - Thách thức và cơ hội',
    excerpt: 'Nghiên cứu về việc triển khai mạng 5G riêng biệt cho các hệ thống chỉ huy, điều hành quân sự.',
    content: `<p>Công nghệ mạng 5G với độ trễ siêu thấp và băng thông rộng mở ra triển vọng to lớn trong kết nối các hệ thống chỉ huy, điều hành chiến đấu.</p>`,
    image: '/images/news_world.jpg',
    category: 'Tin Thế Giới',
    categorySlug: 'tin-the-gioi',
    date: '2025-09-25',
    author: 'Tạp chí QP',
    views: 8800,
  },
  {
    id: 'old-12',
    slug: 'tri-tue-nhan-tao-trong-quoc-phong',
    title: 'Trí tuệ nhân tạo trong quốc phòng - Cuộc cách mạng công nghệ quân sự',
    excerpt: 'Khám phá các ứng dụng của AI trong xử lý dữ liệu tình báo, điều khiển phương tiện không người lái và hỗ trợ ra quyết định.',
    content: `<p>Trí tuệ nhân tạo (AI) đang tạo ra cuộc cách mạng sâu sắc trong tác chiến quân sự hiện đại, từ xử lý thông tin radar đến ra quyết định chỉ huy tự động.</p>`,
    image: '/images/naval_ship.jpg',
    category: 'Tin Thế Giới',
    categorySlug: 'tin-the-gioi',
    date: '2025-09-18',
    author: 'Viện KHQS',
    views: 6500,
  },
  // Publications (Tạp chí, Tờ tin, Tư liệu)
  {
    id: 'pub-1',
    slug: 'tap-chi-kh-dt-ttll-so-48',
    title: 'Tạp chí Khoa học - Đào tạo Thông tin liên lạc số 48 (Quý III/2024)',
    excerpt: 'Công bố các công trình nghiên cứu khoa học mới nhất về hệ thống thông tin quân sự, công nghệ bảo mật truyền tin và các giải pháp đào tạo tác chiến điện tử hiện đại.',
    content: `<p>Tạp chí Khoa học - Đào tạo Thông tin liên lạc số 48 (Quý III/2024) phát hành với nhiều bài báo khoa học chất lượng cao của các nhà khoa học, chuyên gia đầu ngành trong và ngoài Quân đội.</p>
    <p>Nội dung số này tập trung vào các vấn đề: Nghiên cứu ứng dụng trí tuệ nhân tạo trong nhận dạng tín hiệu vô tuyến điện; Thiết kế mạng cảm biến không dây phục vụ chỉ huy tác chiến dã chiến; Đổi mới phương pháp dạy học thực hành trên các tổ hợp khí tài thế hệ mới.</p>
    <p>Tạp chí là tài liệu tham khảo nghiên cứu và học tập quý giá dành cho cán bộ, giảng viên, nghiên cứu viên và học viên trong toàn lực lượng.</p>`,
    image: '/images/scientific_lab.jpg',
    category: 'Tạp chí KH - ĐT TTLL',
    categorySlug: 'tap-chi',
    date: '2024-09-15',
    author: 'Ban Biên tập Tạp chí',
    views: 1420,
  },
  {
    id: 'pub-2',
    slug: 'tap-chi-kh-dt-ttll-so-47',
    title: 'Tạp chí Khoa học - Đào tạo Thông tin liên lạc số 47 (Quý II/2024)',
    excerpt: 'Tạp chí tập trung các chuyên đề nghiên cứu về bảo đảm kỹ thuật thông tin, chuyển đổi số quân sự và chuẩn đầu ra sĩ quan thông tin cấp phân đội.',
    content: `<p>Tạp chí Khoa học - Đào tạo Thông tin liên lạc số 47 phản ánh sinh động hoạt động nghiên cứu khoa học và phát triển công nghệ phục vụ trực tiếp nhiệm vụ huấn luyện, sẵn sàng chiến đấu của Binh chủng.</p>
    <p>Các công trình tiêu biểu gồm: Giải pháp nâng cao độ tin cậy của tuyến truyền dẫn cáp quang quân sự; Thuật toán phân bổ tần số thông minh trong điều kiện bị chế áp điện tử mạnh; Xây dựng mô hình trường đại học thông minh tại Trường Sĩ quan Thông tin.</p>`,
    image: '/images/vietnam_classroom.jpg',
    category: 'Tạp chí KH - ĐT TTLL',
    categorySlug: 'tap-chi',
    date: '2024-06-15',
    author: 'Ban Biên tập Tạp chí',
    views: 1280,
  },
  {
    id: 'pub-3',
    slug: 'tap-chi-kh-dt-ttll-so-46',
    title: 'Tạp chí Khoa học - Đào tạo Thông tin liên lạc số 46 (Quý I/2024)',
    excerpt: 'Số đặc biệt chào mừng năm mới và định hướng công tác nghiên cứu khoa học công nghệ quân sự năm 2024.',
    content: `<p>Số 46 mở đầu năm 2024 với các bài viết đánh giá thực trạng và đề xuất giải pháp phát triển khoa học công nghệ thông tin liên lạc giai đoạn 2024 - 2030.</p>
    <p>Nhiều sáng kiến cải tiến kỹ thuật đạt giải cao của cán bộ, giảng viên Nhà trường được giới thiệu chi tiết trong số này.</p>`,
    image: '/images/vietnam_students.jpg',
    category: 'Tạp chí KH - ĐT TTLL',
    categorySlug: 'tap-chi',
    date: '2024-03-15',
    author: 'Ban Biên tập Tạp chí',
    views: 1150,
  },
  {
    id: 'pub-4',
    slug: 'to-tin-ttll-so-thang-9-2024',
    title: 'Tờ tin Thông tin liên lạc Quân sự số tháng 9 năm 2024',
    excerpt: 'Thông tin phong trào thi đua dạy tốt học tốt, gương người tốt việc tốt và hoạt động công tác Đảng, công tác chính trị trong toàn trường.',
    content: `<p>Tờ tin Thông tin liên lạc Quân sự số 108/2024 phản ánh không khí thi đua sôi nổi của cán bộ, học viên lập thành tích chào mừng năm học mới và 76 năm ngày truyền thống Nhà trường.</p>
    <p>Điểm tin nổi bật: Các sáng kiến giảng dạy trực quan của Khoa Kỹ thuật Viễn thông; Mô hình "Chi đoàn 4 tốt" tại Tiểu đoàn 14; Phóng sự ảnh về các hoạt động rèn luyện thể lực của học viên khóa mới.</p>`,
    image: '',
    category: 'Tờ tin TTLL Quân sự',
    categorySlug: 'to-tin',
    date: '2024-09-01',
    author: 'Phòng Chính trị',
    views: 980,
  },
  {
    id: 'pub-5',
    slug: 'to-tin-ttll-so-thang-8-2024',
    title: 'Tờ tin Thông tin liên lạc Quân sự số tháng 8 năm 2024',
    excerpt: 'Tập trung công tác chuẩn bị cơ sở vật chất, giáo trình tài liệu và tiếp nhận học viên khóa mới nhập trường.',
    content: `<p>Tờ tin số 107/2024 cập nhật công tác chuẩn bị năm học mới 2024 - 2025; biểu dương các tập thể có thành tích xuất sắc trong đợt trực hè sẵn sàng chiến đấu.</p>`,
    image: '',
    category: 'Tờ tin TTLL Quân sự',
    categorySlug: 'to-tin',
    date: '2024-08-01',
    author: 'Phòng Chính trị',
    views: 890,
  },
  {
    id: 'pub-6',
    slug: 'to-tin-ttll-so-thang-7-2024',
    title: 'Tờ tin Thông tin liên lạc Quân sự số tháng 7 năm 2024',
    excerpt: 'Tổng kết công tác tuyển sinh quân sự năm 2024 và hoạt động đền ơn đáp nghĩa nhân ngày 27/7.',
    content: `<p>Tờ tin số 106/2024 ghi nhận các hoạt động tri ân, thăm hỏi gia đình chính sách, Bà mẹ Việt Nam Anh hùng của tuổi trẻ Trường Sĩ quan Thông tin.</p>`,
    image: '',
    category: 'Tờ tin TTLL Quân sự',
    categorySlug: 'to-tin',
    date: '2024-07-01',
    author: 'Phòng Chính trị',
    views: 920,
  },
  {
    id: 'pub-7',
    slug: 'tai-lieu-khai-thac-khi-tai-thong-tin-quang',
    title: 'Tài liệu hướng dẫn khai thác khí tài thông tin quang dã chiến',
    excerpt: 'Tài liệu chuyên môn kỹ thuật hướng dẫn quy trình lắp đặt, kiểm thử và xử lý sự cố các tổ hợp thông tin quang trong điều kiện dã chiến.',
    content: `<p>Tài liệu cung cấp hướng dẫn chi tiết về cấu tạo, nguyên lý hoạt động, sơ đồ kết nối và quy trình bảo dưỡng kỹ thuật các thiết bị ghép kênh quang số và thiết bị đầu cuối thông tin dã chiến.</p>
    <p>Tài liệu được biên soạn công phu bởi đội ngũ giảng viên giàu kinh nghiệm thực tế, có giá trị ứng dụng cao trong huấn luyện và diễn tập.</p>`,
    image: '',
    category: 'Tư liệu Khoa học Quân sự',
    categorySlug: 'tu-lieu',
    date: '2024-08-20',
    author: 'Khoa Kỹ thuật Viễn thông',
    views: 1680,
  },
  {
    id: 'pub-8',
    slug: 'quy-chuan-ky-thuat-mang-truyen-so-lieu',
    title: 'Quy chuẩn kỹ thuật mạng truyền số liệu quân sự dùng riêng',
    excerpt: 'Hệ thống các quy định, tiêu chuẩn kỹ thuật bắt buộc áp dụng trong thiết kế, vận hành và quản lý mạng truyền số liệu quân sự.',
    content: `<p>Quy chuẩn xác định các yêu cầu kỹ thuật về giao thức mạng, băng thông, độ trễ, an toàn bảo mật thông tin và khả năng tương thích liên mạng giữa các quân binh chủng.</p>`,
    image: '',
    category: 'Tư liệu Khoa học Quân sự',
    categorySlug: 'tu-lieu',
    date: '2024-07-15',
    author: 'Cục Công nghệ Thông tin - BQP',
    views: 1540,
  },
  {
    id: 'pub-9',
    slug: 'cam-nang-chi-huy-tham-muu-thong-tin',
    title: 'Cẩm nang chỉ huy tham mưu thông tin trong chiến đấu hiệp đồng',
    excerpt: 'Cẩm nang dành cho cán bộ chỉ huy thông tin các cấp trong tổ chức lập kế hoạch, điều hành và bảo đảm thông tin liên lạc tác chiến hiệp đồng quân binh chủng.',
    content: `<p>Cẩm nang đúc kết kinh nghiệm thực tiễn qua các cuộc diễn tập hiệp đồng quy mô lớn; hướng dẫn phương pháp tính toán nhu cầu khí tài, bố trí trạm nút thông tin và xử lý các tình huống thông tin bị gián đoạn.</p>`,
    image: '',
    category: 'Tư liệu Khoa học Quân sự',
    categorySlug: 'tu-lieu',
    date: '2024-06-10',
    author: 'Phòng Đào tạo - Ban Tác chiến',
    views: 1890,
  },
];

export const quickNews = [
  'Đảng ủy Trường Quân sự ra Nghị quyết lãnh đạo thực hiện nhiệm vụ năm học 2024 - 2025',
  'Nâng cao chất lượng thực hành, làm chủ trang bị kỹ thuật thông tin viễn thông thế hệ mới',
  'Hội nghị sơ kết công tác Đảng, công tác chính trị quý III và phương hướng nhiệm vụ trọng tâm',
  'Phát động đợt thi đua cao điểm chào mừng 76 năm ngày truyền thống Nhà trường vẻ vang',
  'Cán bộ, học viên Nhà trường xung kích giúp nhân dân khắc phục hậu quả thiên tai, bão lũ',
];

export function getNewsByCategory(categorySlug: string): NewsItem[] {
  return newsItems.filter(item => item.categorySlug === categorySlug);
}

// Generates fallback article if a slug is clicked that is not in the explicit list
export function getNewsBySlug(slug: string): NewsItem {
  const found = newsItems.find(item => item.slug === slug);
  if (found) return found;

  // Generate a complete, formatted article from slug
  const cleanTitle = slug
    .split('-')
    .filter(Boolean)
    .map((w, i) => i === 0 ? w.charAt(0).toUpperCase() + w.slice(1) : w)
    .join(' ');

  return {
    id: `dynamic-${slug}`,
    slug,
    title: cleanTitle.length > 5 ? cleanTitle : 'Thông tin hoạt động Trường Sĩ quan Thông tin',
    excerpt: 'Thông tin chi tiết về các hoạt động giáo dục đào tạo, nghiên cứu khoa học và sẵn sàng chiến đấu của Trường Sĩ quan Thông tin.',
    content: `<p>Trường Sĩ quan Thông tin - Đơn vị Anh hùng Lực lượng vũ trang nhân dân, trung tâm đào tạo sĩ quan chỉ huy tham mưu thông tin, tác chiến điện tử và công nghệ thông tin hàng đầu của Quân đội nhân dân Việt Nam.</p>
    <p>Thực hiện nhiệm vụ năm học mới và phương hướng công tác quân sự - quốc phòng, Nhà trường tiếp tục đổi mới toàn diện quy trình giảng dạy, đẩy mạnh chuyển đổi số và nâng cao năng lực thực hành của đội ngũ cán bộ, giảng viên, học viên.</p>
    <p>Toàn trường phát huy cao độ truyền thống vẻ vang, đoàn kết, kỷ luật, sáng tạo, hoàn thành xuất sắc mọi nhiệm vụ được giao, xứng đáng với niềm tin yêu của Đảng, Nhà nước và Quân đội.</p>`,
    image: '/images/hero_conference.jpg',
    category: 'Tin Nhà Trường',
    categorySlug: 'tin-nha-truong',
    date: '2024-09-15',
    author: 'Cổng TTĐT Trường Sĩ quan Thông tin',
    views: 1850,
  };
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
  const filtered = newsItems.filter(item => item.slug !== currentSlug && item.categorySlug === category);
  if (filtered.length >= count) return filtered.slice(0, count);
  return newsItems.filter(item => item.slug !== currentSlug).slice(0, count);
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
