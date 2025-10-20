"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import gallery from "@/data/gallery.json";

const categories = [
  { id: "all", name: "Tất Cả" },
  { id: "female", name: "Nữ" },
  { id: "male", name: "Nam" },
];

const occasions = [
  { id: "all", name: "Tất Cả" },
  { id: "daily", name: "Hằng Ngày" },
  { id: "office", name: "Công Sở" },
  { id: "party", name: "Tiệc Tùng" },
  { id: "wedding", name: "Cưới Hỏi" },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedOccasion, setSelectedOccasion] = useState("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredGallery = gallery.filter((item) => {
    const categoryMatch =
      selectedCategory === "all" || item.category === selectedCategory;
    const occasionMatch =
      selectedOccasion === "all" || item.occasion === selectedOccasion;
    return categoryMatch && occasionMatch;
  });

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative bg-[#111111] py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1920"
            alt="Gallery background"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-[#CBA135]/20 text-[#CBA135] px-4 py-2 rounded-full text-sm font-bold mb-4">
              ALBUM KIỂU TÓC
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
              Bộ Sưu Tập <span className="text-[#CBA135]">Kiểu Tóc</span>
            </h1>
            <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
              Khám phá hàng trăm kiểu tóc thời trang được thực hiện bởi đội ngũ
              stylist chuyên nghiệp
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-20 z-40 bg-white border-b border-zinc-200 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          {/* Category Filter */}
          <div className="mb-4">
            <div className="text-sm font-semibold text-zinc-500 mb-2">
              GIỚI TÍNH
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all ${
                    selectedCategory === category.id
                      ? "bg-[#CBA135] text-[#111111] shadow-lg"
                      : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Occasion Filter */}
          <div>
            <div className="text-sm font-semibold text-zinc-500 mb-2">DỊP</div>
            <div className="flex flex-wrap gap-2">
              {occasions.map((occasion) => (
                <button
                  key={occasion.id}
                  onClick={() => setSelectedOccasion(occasion.id)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all ${
                    selectedOccasion === occasion.id
                      ? "bg-[#CBA135] text-[#111111] shadow-lg"
                      : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                  }`}
                >
                  {occasion.name}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-zinc-500">
            Hiển thị{" "}
            <span className="font-bold text-[#CBA135]">
              {filteredGallery.length}
            </span>{" "}
            kết quả
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4"
          >
            <AnimatePresence>
              {filteredGallery.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: index * 0.02 }}
                  className="break-inside-avoid group relative overflow-hidden rounded-xl cursor-pointer"
                  onClick={() => setSelectedImage(item.image)}
                >
                  <div className="relative aspect-[3/4]">
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-white font-bold text-lg mb-1">
                          {item.title}
                        </h3>
                        <p className="text-white/80 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredGallery.length === 0 && (
            <div className="text-center py-20">
              <p className="text-zinc-500 text-lg">
                Không tìm thấy kiểu tóc phù hợp. Vui lòng thử lọc khác.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 cursor-pointer"
            />

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90vw] h-[90vh] max-w-5xl"
            >
              <div className="relative w-full h-full">
                <Image
                  src={selectedImage}
                  alt="Full size"
                  fill
                  className="object-contain"
                  quality={95}
                />
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 rounded-full bg-white/10 backdrop-blur-sm p-3 text-white hover:bg-white/20 transition-colors"
                aria-label="Close"
              >
                <X className="h-6 w-6" />
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
