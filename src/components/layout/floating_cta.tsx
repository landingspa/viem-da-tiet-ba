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
          className="fixed bottom-8 right-8 z-50"
        >
          {isExpanded ? (
            <motion.div
              initial={{ width: 60, height: 60 }}
              animate={{ width: "auto", height: "auto" }}
              className="bg-[#CBA135] rounded-full shadow-2xl p-4"
            >
              <div className="flex items-center gap-3">
                <div className="flex flex-col gap-2">
                  <Button
                    asChild
                    size="lg"
                    className="bg-[#111111] hover:bg-[#222222] text-white font-bold whitespace-nowrap"
                  >
                    <Link href="/booking">Đặt Lịch Ngay</Link>
                  </Button>
                  <a
                    href="tel:+84901234567"
                    className="flex items-center justify-center gap-2 bg-white text-[#111111] px-4 py-2 rounded-md font-semibold hover:bg-zinc-100 transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    <span>0901 234 567</span>
                  </a>
                </div>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                  aria-label="Close"
                >
                  <X className="h-5 w-5 text-white" />
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsExpanded(true)}
              className="w-16 h-16 bg-[#CBA135] hover:bg-[#B39030] rounded-full shadow-2xl flex items-center justify-center group transition-colors"
              aria-label="Mở menu đặt lịch"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              >
                <Phone className="h-7 w-7 text-[#111111]" />
              </motion.div>
            </motion.button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
