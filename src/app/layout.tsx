import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import FloatingCTA from "@/components/layout/floating_cta";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title:
    "Viêm Da Tiết Bã - Chăm Sóc Da Đầu Chuyên Sâu | Điều Trị Gàu, Nấm, Kích Mọc Tóc",
  description:
    "Viêm Da Tiết Bã - Trung tâm chăm sóc da đầu hàng đầu với đội ngũ bác sĩ và chuyên gia. Dịch vụ điều trị gàu, nấm, ngứa da đầu, kích thích mọc tóc Natural Volume. Đặt lịch ngay!",
  keywords:
    "spa da đầu, chăm sóc da đầu, điều trị gàu, nấm da đầu, ngứa da đầu, kích thích mọc tóc, natural volume, scalp care, spa",
  openGraph: {
    title: "Viêm Da Tiết Bã - Chăm Sóc Da Đầu Chuyên Sâu",
    description:
      "Spa da đầu chuyên nghiệp với công nghệ hiện đại và liệu pháp thảo dược tự nhiên",
    type: "website",
    locale: "vi_VN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className={`${poppins.variable} antialiased`}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
