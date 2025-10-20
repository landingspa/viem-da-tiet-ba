# 💇 HairZone - Salon Tóc Thời Trang

Website mẫu chuyên nghiệp cho salon tóc, barber shop, và hair stylist. Thiết kế hiện đại, sang trọng với đầy đủ tính năng marketing và đặt lịch online.

## ✨ Tính Năng Nổi Bật

### 🏠 Trang Chủ (Home)

- **Hero Slider** - Carousel ảnh kiểu tóc nổi bật với animation mượt mà
- **Banner Ưu Đãi** - Promotion combo "Cắt + Gội + Uốn giảm 30%"
- **Giới Thiệu Salon** - Thông tin về salon, đội ngũ, kinh nghiệm
- **Đánh Giá Khách Hàng** - Testimonials với ảnh và đánh giá 5 sao
- **Popup Khuyến Mãi** - Tự động hiện khi truy cập lần đầu

### ✂️ Trang Dịch Vụ (Services)

- Danh sách 10+ dịch vụ: Cắt, Nhuộm, Uốn, Duỗi, Phục hồi
- Hiển thị: Ảnh, mô tả, giá, thời gian, tính năng
- Tag đặc biệt: "Best Seller", "Hot Trend"
- Badge giảm giá cho combo ưu đãi

### 📸 Album Kiểu Tóc (Gallery)

- Bộ sưu tập 18+ ảnh kiểu tóc chất lượng cao
- Filter theo giới tính và dịp
- Masonry grid responsive
- Lightbox xem ảnh full size

### 📅 Đặt Lịch (Booking)

- Form đặt lịch thân thiện, dễ sử dụng
- Chọn stylist với ảnh và thông tin chi tiết
- Chọn dịch vụ, ngày giờ
- Thông báo đặt lịch thành công
- Tích hợp Zalo/Messenger (mô phỏng)

### 📰 Blog

- Bài viết xu hướng tóc 2025
- Layout magazine hiện đại
- Trang chi tiết bài viết với SEO-friendly
- Nút chia sẻ Facebook, Zalo

## 🚀 Công Nghệ

- **Framework:** Next.js 15.5+ (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS 4
- **UI Components:** ShadCN UI
- **Animation:** Framer Motion
- **Icons:** Lucide React

## 📦 Cài Đặt & Chạy

### 1. Cài đặt dependencies

```bash
npm install
```

### 2. Chạy development server

```bash
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000)

### 3. Build production

```bash
npm run build
npm start
```

## 📁 Cấu Trúc Dự Án

```
hair-zone/
├── src/
│   ├── app/              # Pages (Next.js App Router)
│   ├── components/       # React components
│   │   ├── ui/          # ShadCN UI components
│   │   ├── layout/      # Navigation, Footer
│   │   └── home/        # Home sections
│   ├── data/            # JSON data files
│   │   ├── services.json
│   │   ├── stylists.json
│   │   ├── gallery.json
│   │   ├── testimonials.json
│   │   └── blog_posts.json
│   └── lib/             # Utilities
└── public/              # Static assets
```

## 🎨 Customization

### Màu sắc

Chỉnh sửa `src/app/globals.css`:

```css
:root {
  --primary: #cba135; /* Vàng ánh kim */
  --secondary: #8b0000; /* Đỏ đô */
  --foreground: #111111; /* Đen */
}
```

### Dữ liệu

Chỉnh sửa các file JSON trong `src/data/`

## 📱 Responsive Design

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🌟 Features

✅ Fully responsive  
✅ Smooth animations  
✅ SEO optimized  
✅ Type-safe TypeScript  
✅ Modern UI/UX  
✅ Production ready

## 📞 Demo Contact

- **Địa chỉ:** 123 Nguyễn Huệ, Quận 1, TP.HCM
- **Hotline:** 0901 234 567
- **Email:** contact@hairzone.vn

---

**Developed with ❤️ by HairZone Team**
