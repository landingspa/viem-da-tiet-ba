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
    { name: "Cắt Tóc Nam", href: "/services#men" },
    { name: "Cắt Tóc Nữ", href: "/services#women" },
    { name: "Nhuộm Tóc", href: "/services#coloring" },
    { name: "Uốn & Duỗi", href: "/services#styling" },
  ],
  info: [
    { name: "Về Chúng Tôi", href: "/about" },
    { name: "Stylist", href: "/stylists" },
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
    href: "https://facebook.com/hairzone",
    icon: Facebook,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/hairzone",
    icon: Instagram,
  },
  {
    name: "Youtube",
    href: "https://youtube.com/@hairzone",
    icon: Youtube,
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white border-t border-[#CBA135]/20">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-2xl font-black"
              >
                <span className="text-[#CBA135]">HAIR</span>
                <span className="text-white">ZONE</span>
              </motion.div>
            </Link>
            <p className="mt-4 text-sm text-zinc-400 leading-relaxed">
              Salon tóc thời trang hàng đầu với đội ngũ stylist chuyên nghiệp.
              Mang đến phong cách hiện đại, sang trọng cho khách hàng.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-zinc-800 p-2 hover:bg-[#CBA135] transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-sm font-bold text-[#CBA135] uppercase tracking-wider">
              Dịch Vụ
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-[#CBA135] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info Links */}
          <div>
            <h3 className="text-sm font-bold text-[#CBA135] uppercase tracking-wider">
              Thông Tin
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.info.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-[#CBA135] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold text-[#CBA135] uppercase tracking-wider">
              Liên Hệ
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#CBA135] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-zinc-400">
                  123 Nguyễn Huệ, Quận 1, TP.HCM
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#CBA135]" />
                <a
                  href="tel:+84901234567"
                  className="text-sm text-zinc-400 hover:text-[#CBA135] transition-colors"
                >
                  0901 234 567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#CBA135]" />
                <a
                  href="mailto:contact@hairzone.vn"
                  className="text-sm text-zinc-400 hover:text-[#CBA135] transition-colors"
                >
                  contact@hairzone.vn
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-[#CBA135] flex-shrink-0 mt-0.5" />
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4967614083203!2d106.70295147570753!3d10.77625425894442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4b3330bcc9%3A0x264f2d85d2f1df14!2zTmd1eeG7hW4gSHXhu4csIFF1YW4gMSwgSG8gQ2hpIE1pbmggQ2l0eSwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1736000000000!5m2!1sen!2s"
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
            © 2025 HairZone Salon. All rights reserved. Designed with{" "}
            <span className="text-[#CBA135]">♥</span> in Vietnam
          </p>
        </div>
      </div>
    </footer>
  );
}
