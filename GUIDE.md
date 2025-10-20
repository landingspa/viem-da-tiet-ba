# 🎯 HƯỚNG DẪN SỬ DỤNG VÀ TÙY CHỈNH - HAIRZONE

## 🚀 Khởi Chạy Nhanh

```powershell
# 1. Cài đặt dependencies
npm install

# 2. Chạy development
npm run dev

# 3. Mở trình duyệt
# http://localhost:3000
```

## 📄 CÁC TRANG WEBSITE

| Trang         | URL            | Mô tả                                         |
| ------------- | -------------- | --------------------------------------------- |
| Trang chủ     | `/`            | Hero slider, ưu đãi, giới thiệu, testimonials |
| Dịch vụ       | `/services`    | Danh sách 10 dịch vụ với ảnh, giá, mô tả      |
| Album         | `/gallery`     | 18 ảnh kiểu tóc với filter                    |
| Đặt lịch      | `/booking`     | Form booking với chọn stylist                 |
| Blog          | `/blog`        | 5 bài viết xu hướng tóc                       |
| Chi tiết blog | `/blog/[slug]` | Trang chi tiết bài viết                       |

## 🎨 TÙY CHỈNH MÀU SẮC

### Mặc định

- **Vàng ánh kim:** `#CBA135`
- **Đỏ đô:** `#8B0000`
- **Đen:** `#111111`
- **Trắng:** `#FFFFFF`

### Cách thay đổi

**File:** `src/app/globals.css`

```css
:root {
  --primary: #cba135; /* Màu chính - thay bằng màu khác */
  --secondary: #8b0000; /* Màu phụ */
  --foreground: #111111; /* Màu chữ */
}
```

**Áp dụng trong component:**

```tsx
// Màu primary
className = "bg-[#CBA135]";
className = "text-[#CBA135]";
className = "border-[#CBA135]";

// Màu secondary
className = "bg-[#8B0000]";
```

## 📝 CHỈNH SỬA NỘI DUNG

### 1. Dịch Vụ

**File:** `src/data/services.json`

```json
{
  "id": "1",
  "name": "Tên Dịch Vụ",
  "price": "150.000đ - 300.000đ",
  "duration": "30-45 phút",
  "image": "URL_ẢNH",
  "tag": "Best Seller",
  "description": "Mô tả dịch vụ..."
}
```

### 2. Stylist

**File:** `src/data/stylists.json`

```json
{
  "id": "1",
  "name": "Tên Stylist",
  "role": "Senior Stylist",
  "specialty": "Chuyên môn",
  "experience": "8 năm",
  "image": "URL_ẢNH",
  "rating": 5.0
}
```

### 3. Album Ảnh

**File:** `src/data/gallery.json`

```json
{
  "id": "1",
  "category": "female",
  "occasion": "daily",
  "title": "Tiêu đề",
  "image": "URL_ẢNH",
  "description": "Mô tả..."
}
```

### 4. Đánh Giá Khách Hàng

**File:** `src/data/testimonials.json`

```json
{
  "id": "1",
  "name": "Tên Khách Hàng",
  "rating": 5,
  "service": "Dịch vụ đã dùng",
  "comment": "Bình luận...",
  "avatar": "URL_ẢNH"
}
```

### 5. Blog

**File:** `src/data/blog_posts.json`

```json
{
  "id": "1",
  "slug": "duong-dan-url",
  "title": "Tiêu đề",
  "excerpt": "Đoạn trích...",
  "content": "Nội dung đầy đủ...",
  "featuredImage": "URL_ẢNH",
  "author": "Tên tác giả",
  "publishedAt": "2025-01-15"
}
```

## 🖼️ THAY ẢNH

### Ảnh từ Unsplash (Hiện tại)

```
https://images.unsplash.com/photo-xxxxx?w=800
```

### Ảnh của bạn

1. Đặt ảnh vào thư mục `public/images/`
2. Sử dụng: `/images/ten-anh.jpg`

**Ví dụ:**

```json
"image": "/images/service-cat-toc.jpg"
```

## 📞 THAY ĐỔI THÔNG TIN LIÊN HỆ

### Navigation (Header)

**File:** `src/components/layout/navigation.tsx`

```tsx
// Tìm và thay đổi
<a href="tel:+84901234567">0901 234 567 {/* Số điện thoại */}</a>
```

### Footer

**File:** `src/components/layout/footer.tsx`

```tsx
// Địa chỉ
<span>123 Nguyễn Huệ, Quận 1, TP.HCM</span>

// Số điện thoại
<a href="tel:+84901234567">0901 234 567</a>

// Email
<a href="mailto:contact@hairzone.vn">
  contact@hairzone.vn
</a>

// Google Map
<iframe src="GOOGLE_MAP_EMBED_URL" />
```

### Social Media Links

```tsx
const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com/TEN_PAGE_CUA_BAN",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/USERNAME",
  },
];
```

## ⚙️ CHỈNH SỬA METADATA (SEO)

**File:** `src/app/layout.tsx`

```tsx
export const metadata: Metadata = {
  title: "TÊN SALON - Slogan",
  description: "Mô tả ngắn về salon...",
  keywords: "salon tóc, cắt tóc, nhuộm tóc...",
};
```

## 🎬 TẮT/BẬT POPUP ƯU ĐÃI

**File:** `src/app/page.tsx`

```tsx
// Bật popup (mặc định)
<PromoPopup />

// Tắt popup - xóa hoặc comment dòng trên
// <PromoPopup />
```

## 🔧 CHỈNH THỜI GIAN SLIDER

**File:** `src/components/home/hero_slider.tsx`

```tsx
// Tìm dòng này và thay đổi số 5000 (= 5 giây)
const interval = setInterval(() => {
  setCurrentSlide((prev) => (prev + 1) % slides.length);
}, 5000); // <-- Thay đổi ở đây (đơn vị: milliseconds)
```

## 📱 TEST RESPONSIVE

### Chrome DevTools

1. Mở trang web
2. Nhấn `F12`
3. Click icon điện thoại (Toggle device toolbar)
4. Chọn device: iPhone, iPad, v.v.

### Các breakpoint

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

## 🚀 DEPLOY LÊN VERCEL

```bash
# 1. Cài Vercel CLI
npm i -g vercel

# 2. Login
vercel login

# 3. Deploy
vercel

# 4. Deploy production
vercel --prod
```

## 📦 BUILD CHO PRODUCTION

```powershell
# Build
npm run build

# Preview build
npm start

# Check size
npm run build -- --analyze
```

## 🐛 XỬ LÝ LỖI THƯỜNG GẶP

### Lỗi: "Cannot find module"

```powershell
rm -rf node_modules
rm package-lock.json
npm install
```

### Lỗi: Port 3000 đã được sử dụng

```powershell
# Windows
netstat -ano | findstr :3000
taskkill /PID [PID_NUMBER] /F

# Hoặc chạy port khác
npm run dev -- -p 3001
```

### Ảnh không hiển thị

- Kiểm tra URL ảnh
- Kiểm tra quyền truy cập
- Sử dụng ảnh từ `public/images/`

## 📚 TÀI NGUYÊN HỌC TẬP

- [Next.js Docs](https://nextjs.org/docs)
- [TailwindCSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

## 💡 TIPS & TRICKS

### 1. Tối ưu ảnh

- Sử dụng WebP format
- Compress trước khi upload
- Sử dụng Next.js Image component

### 2. SEO

- Thêm alt text cho mọi ảnh
- Viết meta description hấp dẫn
- Sử dụng heading tags đúng cách (H1, H2, H3)

### 3. Performance

- Lazy load images
- Code splitting
- Minimize JavaScript

## 🆘 HỖ TRỢ

Nếu gặp vấn đề:

1. Kiểm tra console trong browser (F12)
2. Xem log trong terminal
3. Google error message
4. Kiểm tra Next.js documentation

---

**Chúc bạn thành công! 🎉**
