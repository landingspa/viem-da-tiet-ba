"use client";

import { useState, useEffect } from "react";
import { Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8 z-50"
        >
          {isExpanded ? (
            <motion.div
              initial={{ width: 60, height: 60 }}
              animate={{ width: "auto", height: "auto" }}
              className="bg-[#4a7c2e] rounded-2xl sm:rounded-full shadow-2xl p-3 sm:p-4"
            >
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
                <div className="flex flex-col gap-2">
                  <Button
                    asChild
                    size="lg"
                    className="bg-[#111111] hover:bg-[#222222] text-white font-bold whitespace-nowrap text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
                  >
                    <Link href="/booking">Đặt Lịch Ngay</Link>
                  </Button>
                  <a
                    href="tel:+84862803268"
                    className="flex items-center justify-center gap-2 bg-white text-[#111111] px-3 sm:px-4 py-2 rounded-md font-semibold hover:bg-zinc-100 transition-colors text-sm sm:text-base"
                  >
                    <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span>0862.803.268</span>
                  </a>
                </div>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors self-end sm:self-auto"
                  aria-label="Close"
                >
                  <X className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsExpanded(true)}
              className="w-14 h-14 sm:w-16 sm:h-16 bg-[#4a7c2e] hover:bg-[#6ba547] rounded-full shadow-2xl flex items-center justify-center group transition-colors"
              aria-label="Mở menu đặt lịch"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              >
                <Phone className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
              </motion.div>
            </motion.button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
