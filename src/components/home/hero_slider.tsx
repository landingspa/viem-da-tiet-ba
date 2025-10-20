"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const slides = [
  {
    id: 1,
    title: "Uốn Sóng Hàn Quốc",
    subtitle: "Phong cách nữ tính, cuốn hút",
    description: "Tạo sóng tóc tự nhiên theo xu hướng K-beauty",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1920&q=80",
    cta: "Đặt Lịch Ngay",
  },
  {
    id: 2,
    title: "Tóc Layer Tự Nhiên",
    subtitle: "Năng động & cá tính",
    description: "Nhiều tầng tạo độ phồng hoàn hảo",
    image:
      "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=1920&q=80",
    cta: "Khám Phá Ngay",
  },
  {
    id: 3,
    title: "Tóc Nam Cá Tính",
    subtitle: "Fade & Textured Crop",
    description: "Phong cách hiện đại cho phái mạnh",
    image:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1920&q=80",
    cta: "Xem Dịch Vụ",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              fill
              className="object-cover"
              priority
              quality={90}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 flex h-full items-center">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <h2 className="text-[#CBA135] text-sm sm:text-base md:text-lg font-semibold mb-2 sm:mb-4 tracking-wide">
                    {slides[currentSlide].subtitle}
                  </h2>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-4 sm:mb-6 leading-tight">
                    {slides[currentSlide].title}
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-zinc-300 mb-6 sm:mb-8 leading-relaxed">
                    {slides[currentSlide].description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <Button
                      asChild
                      size="lg"
                      className="text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto"
                    >
                      <Link href="/booking">{slides[currentSlide].cta}</Link>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto"
                    >
                      <Link href="/services">Xem Dịch Vụ</Link>
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows - Hidden on mobile */}
      <button
        onClick={goToPrevious}
        className="hidden sm:block absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/10 backdrop-blur-sm p-2 sm:p-3 text-white hover:bg-[#CBA135] transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>
      <button
        onClick={goToNext}
        className="hidden sm:block absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/10 backdrop-blur-sm p-2 sm:p-3 text-white hover:bg-[#CBA135] transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1.5 sm:h-2 rounded-full transition-all ${
              index === currentSlide
                ? "bg-[#CBA135] w-8 sm:w-12"
                : "bg-white/50 w-1.5 sm:w-2 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
