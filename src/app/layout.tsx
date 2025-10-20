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
  title: "HairZone - Salon Tóc Thời Trang | Cắt Uốn Nhuộm Chuyên Nghiệp",
  description:
    "HairZone - Salon tóc thời trang hàng đầu với đội ngũ stylist chuyên nghiệp. Dịch vụ cắt tóc, nhuộm, uốn, duỗi, phục hồi tóc. Đặt lịch ngay!",
  keywords:
    "salon tóc, cắt tóc, nhuộm tóc, uốn tóc, hair salon, hair zone, stylist",
  openGraph: {
    title: "HairZone - Salon Tóc Thời Trang",
    description: "Salon tóc chuyên nghiệp với phong cách hiện đại, sang trọng",
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
