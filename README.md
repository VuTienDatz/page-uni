# Page Uni - Cổng thông tin đào tạo & hoạt động

Dự án website trường đại học được xây dựng bằng **Next.js 16 (App Router)**, **React 19** và **Tailwind CSS v4**.

---

## 🚀 Hướng dẫn khởi động dự án

Dự án hỗ trợ 2 cách chạy: **Sử dụng Docker** (Khuyên dùng khi làm việc nhóm) hoặc **Chạy trực tiếp với Node.js**.

---

### Cách 1: Khuyên dùng - Chạy bằng Docker (Không lo lệch môi trường)

Với Docker, người mới clone dự án về **không cần cài đặt Node.js**, không sợ lỗi thiếu `node_modules` hay xung đột phiên bản giữa Windows / macOS / Linux.

#### 1. Yêu cầu
- Đã cài đặt và đang mở **Docker Desktop** (hoặc Docker Engine).

#### 2. Khởi động (Chế độ Dev có Hot-Reload)
Tại thư mục dự án, chỉ cần chạy một lệnh duy nhất:
```bash
docker compose up
```

- Mở trình duyệt truy cập: [http://localhost:3000](http://localhost:3000)
- Mọi thay đổi code trên máy bạn sẽ tự động reload ngay lập tức trên trình duyệt.

#### 3. Dừng chạy
```bash
docker compose down
```

*(Xem thêm các lệnh nâng cao như build production trong file [README.docker.md](./README.docker.md))*

---

### Cách 2: Chạy trực tiếp bằng Node.js (Local)

Nếu bạn không muốn dùng Docker:

#### 1. Yêu cầu
- Node.js version **>= 20.9.0** (Khuyến nghị **Node 22**).

#### 2. Cài đặt thư viện
```bash
npm install
```

#### 3. Chạy môi trường dev
```bash
npm run dev
```

Truy cập: [http://localhost:3000](http://localhost:3000)

#### 4. Build kiểm tra sản phẩm
```bash
npm run build
npm run start
```
