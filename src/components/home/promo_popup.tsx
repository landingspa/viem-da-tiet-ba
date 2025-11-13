"use client";

import { useState, useEffect } from "react";
import { X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PromoPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has seen the popup in this session
    const hasSeenPopup = sessionStorage.getItem("scalpcare_promo_seen");

    if (!hasSeenPopup) {
      // Show popup after 2 seconds
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("scalpcare_promo_seen", "true");
  };

  const handleClaim = () => {
    sessionStorage.setItem("scalpcare_promo_seen", "true");
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md"
          >
            <div className="relative bg-gradient-to-br from-[#111111] via-[#1a1a1a] to-[#111111] rounded-3xl p-8 shadow-2xl border-2 border-[#4a7c2e]">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 rounded-full bg-white/10 p-2 hover:bg-white/20 transition-colors"
                aria-label="Close"
              >
                <X className="h-5 w-5 text-white" />
              </button>

              {/* Animated Background */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -top-20 -right-20 w-40 h-40 bg-[#6ba547]/20 rounded-full blur-3xl"
                />
              </div>

              {/* Content */}
              <div className="relative z-10 text-center">
                {/* Badge */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="inline-flex items-center gap-2 bg-[#6ba547] text-white px-4 py-2 rounded-full font-bold text-sm mb-6"
                >
                  <Sparkles className="h-4 w-4" />
                  <span>ƯU ĐÃI ĐẶC BIỆT</span>
                  <Sparkles className="h-4 w-4" />
                </motion.div>

                <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                  Chào Mừng Đến <br />
                  <span className="text-[#6ba547]">MOORE Spa Đà Nẵng</span>
                </h2>

                {/* Discount Circle */}
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="inline-flex items-center justify-center w-32 h-32 bg-[#4a7c2e] rounded-full mb-6 relative"
                >
                  <div className="text-center">
                    <div className="text-4xl font-black text-white">30%</div>
                    <div className="text-xs font-bold text-white">GIẢM GIÁ</div>
                  </div>
                  {/* Pulse Effect */}
                  <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-[#4a7c2e] rounded-full"
                  />
                </motion.div>

                <p className="text-white/90 text-lg mb-2">
                  Cho lần điều trị đầu tiên
                </p>
                <p className="text-[#6ba547] font-bold text-xl mb-6">
                  Combo Trị Gàu + Kích Mọc Tóc
                </p>

                <div className="space-y-3">
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-[#6ba547] hover:bg-[#4a7c2e] text-white font-black text-base"
                    onClick={handleClaim}
                  >
                    <Link href="/booking">Nhận Ưu Đãi Ngay</Link>
                  </Button>
                  <button
                    onClick={handleClose}
                    className="w-full text-white/60 hover:text-white text-sm transition-colors"
                  >
                    Để sau
                  </button>
                </div>

                <p className="text-white/40 text-xs mt-4">
                  *Áp dụng cho khách hàng mới
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
