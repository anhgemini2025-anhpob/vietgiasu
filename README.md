# VietTuorz – Hệ Sinh Thái Gia Sư AI Lớp 1–12

> **VIETTUORZ – MỖI NGÀY TIẾN BỘ, MỖI BƯỚC TỰ TIN**  
> *Mỗi học sinh có một hành trình riêng. VietTuorz giúp việc học trở nên gần gũi, có định hướng và phù hợp hơn với từng em.*

Website landing page chính thức và cổng điều hướng đến 12 ứng dụng gia sư AI độc lập cho học sinh từ Lớp 1 đến Lớp 12 trên toàn quốc.

---

## 🌟 Tính Năng Nổi Bật

1. **Điều Hướng 12 Lớp Học Trực Quan**:
   - Tiểu học (Lớp 1 – 5): Màu cam vàng nhận diện `#F5A623`.
   - THCS (Lớp 6 – 9): Màu xanh ngọc nhận diện `#10B981`.
   - THPT (Lớp 10 – 12): Màu tím hiện đại nhận diện `#8B5CF6`.
2. **Bộ Chọn Lớp Tương Tác (Active Grade Switcher)**:
   - Trên từng trang cấp học, người dùng bấm chọn một lớp: chỉ nội dung chi tiết của lớp đó được hiển thị mượt mà.
   - Nút **"Vào học ngay"** mở chính xác URL độc lập của lớp đó (`target="_blank" rel="noopener noreferrer"`).
3. **Biểu Tượng Ứng Dụng Đỉnh Cao (PWA & Home Screen)**:
   - Đầy đủ biểu tượng độ phân giải cao cho màn hình điện thoại iPhone (`apple-touch-icon.png` 180x180), Android (`icon-192.png`, `icon-512.png`), Webmanifest và Favicon SVG sắc nét.
4. **Không Thu Thập Dữ Liệu Cá Nhân**:
   - Trải nghiệm học tập an toàn, trực tiếp, không yêu cầu đăng ký hay đăng nhập.
5. **Căn Cứ Pháp Lý & Trách Nhiệm Giáo Dục**:
   - Định hướng bám sát Chương trình GDPT 2018 của Bộ GD&ĐT.
   - Khung video giới thiệu với trạng thái dự phòng thanh lịch khi video đang chờ cập nhật.

---

## 🔗 Danh Sách 12 Ứng Dụng Gia Sư AI

| Khối Lớp | Cấp Học | Đường Dẫn Ứng Dụng |
| :--- | :--- | :--- |
| **Lớp 1** | Tiểu học | https://vietgiasu1.vercel.app |
| **Lớp 2** | Tiểu học | https://vietgiasu2.vercel.app |
| **Lớp 3** | Tiểu học | https://vietgiasu3.vercel.app |
| **Lớp 4** | Tiểu học | https://vietgiasu4.vercel.app |
| **Lớp 5** | Tiểu học | https://vietgiasu5.vercel.app |
| **Lớp 6** | THCS | https://vietgiasu6.vercel.app |
| **Lớp 7** | THCS | https://vietgiasu7.vercel.app |
| **Lớp 8** | THCS | https://vietgiasu8.vercel.app |
| **Lớp 9** | THCS | https://vietgiasu9.vercel.app |
| **Lớp 10** | THPT | https://vietgiasu10.vercel.app |
| **Lớp 11** | THPT | https://vietgiasu11.vercel.app |
| **Lớp 12** | THPT | https://vietgiasu12.vercel.app |

---

## 📁 Cấu Trúc Mã Nguồn

```text
├── public/
│   ├── apple-touch-icon.png    # Icon chất lượng cao cho iPhone Home Screen (180x180)
│   ├── favicon.svg             # Vector Favicon thương hiệu VietTuorz
│   ├── favicon-32x32.png       # Standard Favicon
│   ├── icon-192.png            # Icon Android PWA 192px
│   ├── icon-512.png            # Icon Android PWA 512px
│   └── site.webmanifest        # Cấu hình PWA & Add to Home Screen
├── src/
│   ├── config/
│   │   └── siteConfig.ts       # Cấu hình tập trung (Placeholders: video, email, hotline, văn bản)
│   ├── data/
│   │   └── gradesData.ts       # Dữ liệu 12 khối lớp & 3 cấp học
│   ├── types/
│   │   └── index.ts            # Khai báo TypeScript types
│   ├── components/
│   │   ├── common/             # Logo, Badge, VideoSection
│   │   ├── layout/             # Header (sticky, hamburger), Footer (Navy #172554)
│   │   ├── home/               # HeroSection, LevelSelector, CoreValues, HowItWorks, TrustBanner, BottomCta
│   │   └── grade/              # GradeLevelView, GradeCard
│   ├── pages/
│   │   ├── HomePage.tsx        # Trang chủ (/)
│   │   ├── PrimaryPage.tsx     # Cấp Tiểu học (/tieu-hoc)
│   │   ├── SecondaryPage.tsx   # Cấp THCS (/thcs)
│   │   ├── HighSchoolPage.tsx  # Cấp THPT (/thpt)
│   │   └── ContactPage.tsx     # Trang Liên hệ (/lien-he)
│   ├── App.tsx                 # Routing và ScrollToTop
│   ├── index.css               # Tailwind CSS directives
│   └── main.tsx                # React Root
├── scripts/
│   └── generate-icons.js       # Script tạo icon điện thoại bằng Sharp
├── vercel.json                 # Cấu hình SPA routing trên Vercel
├── tailwind.config.js          # Hệ thống màu sắc thương hiệu
└── vite.config.ts              # Cấu hình Vite build
```

---

## 🛠️ Hướng Dẫn Cài Đặt & Chạy Môi Trường Cục Bộ

1. **Cài đặt thư viện phụ thuộc**:
   ```bash
   npm install
   ```

2. **Khởi chạy máy chủ phát triển (Development Server)**:
   ```bash
   npm run dev
   ```
   Mở trình duyệt tại: `http://localhost:5173`

3. **Kiểm tra biên dịch & đóng gói (Production Build)**:
   ```bash
   npm run build
   ```

---

## 🚀 Hướng Dẫn Deploy Lên Vercel

Dự án đã được cấu hình sẵn file `vercel.json` phục vụ SPA routing:

```bash
# Triển khai trực tiếp bằng Vercel CLI:
npx vercel --prod
```

Domain chính thức yêu cầu: **`https://vietgiasu.vercel.app`**

---

## 📌 Quản Lý Các Placeholder (Tập Trung)

Toàn bộ thông tin thay thế được tập trung tại file **`src/config/siteConfig.ts`** và **`src/data/gradesData.ts`**:
- `[LINK_YOUTUBE]`: Điền link YouTube tại `SITE_CONFIG.youtubeUrl`. (Khi để trống, web tự động hiển thị mockup xem trước với thông báo an toàn).
- `[SỐ/KÝ HIỆU VĂN BẢN]`: Điền tại `SITE_CONFIG.legalNotice.documentNumber`.
- `[NGÀY BAN HÀNH]`: Điền tại `SITE_CONFIG.legalNotice.issueDate`.
- `[TÊN VĂN BẢN]`: Điền tại `SITE_CONFIG.legalNotice.documentName`.
- `[EMAIL]`: Cấu hình tại `SITE_CONFIG.contact.email`.
- `[SỐ_ĐT]`: Cấu hình tại `SITE_CONFIG.contact.phone`.
- `[LINK_ZALO]`: Cấu hình tại `SITE_CONFIG.contact.zaloUrl`.
- `[TÍNH NĂNG RIÊNG LỚP 1–12]`: Cập nhật tại mảng `GRADES_DATA` trong `src/data/gradesData.ts`.

---

© 2026 VietTuorz. Thiết kế bởi Duy Anh Lab. All rights reserved.
