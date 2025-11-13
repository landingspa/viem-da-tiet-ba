"use client";

import Link from "next/link";
import {
  Facebook,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import { motion } from "framer-motion";

const footerLinks = {
  services: [
    { name: "Điều Trị Gàu", href: "/services#dandruff" },
    { name: "Trị Nấm Da Đầu", href: "/services#fungus" },
    { name: "Trị Ngứa Da Đầu", href: "/services#itchy" },
    { name: "Kích Thích Mọc Tóc", href: "/services#growth" },
  ],
  info: [
    { name: "Về Chúng Tôi", href: "/about" },
    { name: "Chuyên Gia", href: "/stylists" },
    { name: "Album Ảnh", href: "/gallery" },
    { name: "Blog", href: "/blog" },
  ],
  support: [
    { name: "Liên Hệ", href: "/contact" },
    { name: "Đặt Lịch", href: "/booking" },
    { name: "Chính Sách", href: "/policy" },
    { name: "FAQ", href: "/faq" },
  ],
};

const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com/scalpcarespa",
    icon: Facebook,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/scalpcarespa",
    icon: Instagram,
  },
  {
    name: "Youtube",
    href: "https://youtube.com/@scalpcarespa",
    icon: Youtube,
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white border-t border-[#6ba547]/20">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:py-10 md:py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:grid-cols-4">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-xl sm:text-2xl font-black"
              >
                <span className="text-[#6ba547]">MOORE</span>
                <span className="text-white"> SPA</span>
              </motion.div>
            </Link>
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Spa chăm sóc da đầu chuyên sâu với đội ngũ chuyên gia giàu kinh
              nghiệm. Điều trị gàu, nấm, ngứa và kích thích mọc tóc tự nhiên.
            </p>

            {/* Social Links */}
            <div className="mt-4 sm:mt-6 flex gap-3 sm:gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-zinc-800 p-2 hover:bg-[#4a7c2e] transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-xs sm:text-sm font-bold text-[#6ba547] uppercase tracking-wider">
              Dịch Vụ
            </h3>
            <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-[#6ba547] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info Links */}
          <div>
            <h3 className="text-sm font-bold text-[#6ba547] uppercase tracking-wider">
              Thông Tin
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.info.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-[#6ba547] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold text-[#6ba547] uppercase tracking-wider">
              Liên Hệ
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#6ba547] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-zinc-400">
                  06 Bàu Học 1, Thanh Khê, Đà Nẵng
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#6ba547]" />
                <a
                  href="tel:+84862803268"
                  className="text-sm text-zinc-400 hover:text-[#6ba547] transition-colors"
                >
                  0862.803.268
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#6ba547]" />
                <a
                  href="mailto:contact@moorespa.vn"
                  className="text-sm text-zinc-400 hover:text-[#6ba547] transition-colors"
                >
                  contact@moorespa.vn
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-[#6ba547] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-zinc-400">
                  <div>T2-T7: 9:00 - 21:00</div>
                  <div>CN: 9:00 - 19:00</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 rounded-xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.0698814772877!2d108.20097767588536!3d16.05964098462378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219c6a6e7c0b9%3A0x1c4e9d3d2b3a4f5e!2zNiBCw6B1IEjhu41jIDEsIEhvw6AgSGFpLCBUaGFuaCBLaMOqLCDEkMOgIE7hurVuZw!5e0!3m2!1svi!2s!4v1699999999999!5m2!1svi!2s"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-zinc-800 pt-8">
          <p className="text-center text-sm text-zinc-500">
            © 2025 MOORE Spa Đà Nẵng. All rights reserved. Designed with{" "}
            <span className="text-[#6ba547]">♥</span> in Vietnam
          </p>
        </div>
      </div>
    </footer>
  );
}
