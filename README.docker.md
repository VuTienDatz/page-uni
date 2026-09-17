# Hướng dẫn chạy dự án với Docker

Dự án đã được cấu hình Docker hoàn chỉnh, giúp tránh hoàn toàn các lỗi xung đột môi trường hay thiếu `node_modules` khi chia sẻ code giữa các máy (Windows / macOS / Linux).

---

## 1. Yêu cầu trước khi chạy
- Máy tính đã cài đặt và **đang bật Docker Desktop** (hoặc Docker Engine).

---

## 2. Các lệnh sử dụng với Docker Compose

### 🚀 Chạy môi trường Phát triển (Development Mode)
Container sẽ mount trực tiếp mã nguồn vào trong container và tự động cập nhật khi bạn sửa code (Hot Reload):

```bash
docker compose up dev
# hoặc chỉ cần:
docker compose up
```
Truy cập: `http://localhost:3000`

> **Mẹo**: Nếu bạn thêm thư viện mới vào `package.json`, hãy build lại image bằng lệnh:
> ```bash
> docker compose up dev --build
> ```

---

### 📦 Chạy môi trường Production (Standalone Build)
Build bản production tối ưu dung lượng (multi-stage standalone image) của Next.js:

```bash
docker compose --profile prod up --build prod
```
Truy cập: `http://localhost:3000`

---

### 🛑 Dừng container
Khi không làm việc nữa, dừng và dọn dẹp container:

```bash
docker compose down
```

---

## 3. Chạy trực tiếp bằng Docker CLI (Không dùng docker compose)

### Build và chạy Production Image:
```bash
# Build image
docker build -t page-uni:latest .

# Run container
docker run -p 3000:3000 --name page-uni page-uni:latest
```

### Build và chạy Development Image:
```bash
# Build target development
docker build --target development -t page-uni:dev .

# Run container kèm mount thư mục
docker run -p 3000:3000 -v "%cd%:/app" -v /app/node_modules -v /app/.next --name page-uni-dev page-uni:dev
```
