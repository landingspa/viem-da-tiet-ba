"use client";

import { motion } from "framer-motion";
import { Sparkles, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PromotionBanner() {
  return (
    <section className="relative bg-gradient-to-r from-[#8B0000] via-[#A00000] to-[#8B0000] py-16 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-20 -left-20 w-64 h-64 bg-[#CBA135]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#CBA135]/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center gap-2 bg-[#CBA135] text-[#111111] px-6 py-2 rounded-full font-bold text-sm mb-6"
          >
            <Sparkles className="h-4 w-4" />
            <span>ƯU ĐÃI ĐẶC BIỆT</span>
            <Sparkles className="h-4 w-4" />
          </motion.div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-4">
            COMBO CẮT + GỘI + UỐN
          </h2>

          {/* Discount Badge */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Tag className="h-6 w-6 sm:h-8 sm:w-8 text-[#CBA135]" />
              <div className="text-left">
                <div className="text-[#CBA135] text-xs sm:text-sm font-semibold">
                  GIẢM NGAY
                </div>
                <div className="text-white text-2xl sm:text-3xl font-black">
                  30%
                </div>
              </div>
            </div>
            <div className="h-px w-16 sm:h-16 sm:w-px bg-white/30" />
            <div className="text-center sm:text-left">
              <div className="text-zinc-300 text-sm line-through">
                1.700.000đ
              </div>
              <div className="text-[#CBA135] text-2xl sm:text-3xl font-black">
                1.200.000đ
              </div>
            </div>
          </div>

          <p className="text-white/90 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Đặt lịch ngay hôm nay để nhận ưu đãi độc quyền cho combo cắt, gội và
            uốn tóc. Tiết kiệm{" "}
            <span className="font-bold text-[#CBA135]">500.000đ</span> cho lần
            làm tóc đầu tiên!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch px-4">
            <Button
              asChild
              size="lg"
              className="bg-[#CBA135] hover:bg-[#B39030] text-[#111111] font-black text-sm sm:text-base px-8 sm:px-10 py-5 sm:py-6 shadow-xl w-full sm:w-auto"
            >
              <Link href="/booking">Nhận Ưu Đãi Ngay</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#8B0000] font-bold text-sm sm:text-base px-8 sm:px-10 py-5 sm:py-6 w-full sm:w-auto"
            >
              <Link href="/services">Xem Chi Tiết</Link>
            </Button>
          </div>

          {/* Terms */}
          <p className="text-white/60 text-xs sm:text-sm mt-4 sm:mt-6 px-4">
            *Áp dụng cho khách hàng mới. Có thể kết thúc bất cứ lúc nào.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
