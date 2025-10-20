"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Trang Chủ", href: "/" },
  { name: "Dịch Vụ", href: "/services" },
  { name: "Album", href: "/gallery" },
  { name: "Đặt Lịch", href: "/booking" },
  { name: "Blog", href: "/blog" },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#111111]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-black tracking-tight"
            >
              <span className="text-[#CBA135]">HAIR</span>
              <span className="text-white">ZONE</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="text-sm font-semibold text-white hover:text-[#CBA135] transition-colors"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex lg:items-center lg:gap-4">
            <a
              href="tel:+84901234567"
              className="flex items-center gap-2 text-sm text-white hover:text-[#CBA135] transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>0901 234 567</span>
            </a>
            <Button asChild size="lg">
              <Link href="/booking">Đặt Lịch Ngay</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden rounded-md p-2 text-white hover:bg-white/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#111111] border-t border-[#CBA135]/20"
          >
            <div className="space-y-1 px-4 pb-6 pt-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-[#CBA135]/10 hover:text-[#CBA135]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <a
                  href="tel:+84901234567"
                  className="flex items-center gap-2 px-3 py-2 text-sm text-white"
                >
                  <Phone className="h-4 w-4" />
                  <span>0901 234 567</span>
                </a>
                <Button asChild size="lg" className="w-full">
                  <Link href="/booking">Đặt Lịch Ngay</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
