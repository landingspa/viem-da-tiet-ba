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
      <section className="relative bg-[#111111] py-12 sm:py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1519415943484-9fa1873496d4?w=1920"
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
            <div className="inline-block bg-[#6ba547]/20 text-[#6ba547] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold mb-3 sm:mb-4">
              ALBUM KẾT QUẢ
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6">
              Kết Quả <span className="text-[#6ba547]">Điều Trị</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto px-4">
              Khám phá hàng trăm ca điều trị thành công được thực hiện bởi đội
              ngũ chuyên gia chăm sóc da đầu
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-20 z-40 bg-white border-b border-zinc-200 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          {/* Combined Filters in One Row */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            {/* Left: Category + Occasion Filters */}
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide flex-1">
              {/* Category Pills */}
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex-shrink-0 px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                    selectedCategory === category.id
                      ? "bg-[#4a7c2e] text-white shadow-lg"
                      : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                  }`}
                >
                  {category.name}
                </button>
              ))}

              {/* Divider */}
              <div className="flex-shrink-0 w-px h-6 bg-zinc-300" />

              {/* Occasion Pills */}
              {occasions.map((occasion) => (
                <button
                  key={occasion.id}
                  onClick={() => setSelectedOccasion(occasion.id)}
                  className={`flex-shrink-0 px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                    selectedOccasion === occasion.id
                      ? "bg-[#4a7c2e] text-white shadow-lg"
                      : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                  }`}
                >
                  {occasion.name}
                </button>
              ))}
            </div>

            {/* Right: Results Count */}
            <div className="flex-shrink-0 text-xs sm:text-sm text-zinc-500 whitespace-nowrap">
              <span className="font-bold text-[#4a7c2e]">
                {filteredGallery.length}
              </span>{" "}
              kết quả
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-6 sm:py-8 md:py-10">
        <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4"
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
                  className="group relative overflow-hidden rounded-lg sm:rounded-xl cursor-pointer"
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
                      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                        <h3 className="text-white font-bold text-sm sm:text-base md:text-lg mb-1">
                          {item.title}
                        </h3>
                        <p className="text-white/80 text-xs sm:text-sm line-clamp-2">
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
                Không tìm thấy kết quả phù hợp. Vui lòng thử lọc khác.
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
