"use client";

import { motion } from "framer-motion";
import { Award, Users, Clock, Star } from "lucide-react";
import Image from "next/image";

const stats = [
  { icon: Award, label: "Năm Kinh Nghiệm", value: "10+" },
  { icon: Users, label: "Khách Hàng", value: "15K+" },
  { icon: Star, label: "Đánh Giá 5 Sao", value: "98%" },
  { icon: Clock, label: "Giờ Mở Cửa", value: "9-21" },
];

const features = [
  {
    title: "Đội Ngũ Chuyên Gia",
    description: "Chuyên viên chăm sóc da đầu được đào tạo bài bản",
  },
  {
    title: "Công Nghệ Hiện Đại",
    description: "Thiết bị điều trị tiên tiến nhập khẩu từ Hàn Quốc, Nhật Bản",
  },
  {
    title: "Sản Phẩm Thiên Nhiên",
    description: "Sử dụng thảo dược và serum sinh học an toàn",
  },
  {
    title: "Tư Vấn Chuyên Sâu",
    description: "Phân tích da đầu camera, điều trị cá nhân hóa",
  },
];

export default function AboutSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-[#6ba547]/10 text-[#4a7c2e] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold mb-3 sm:mb-4">
              VỀ CHÚNG TÔI
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111111] mb-4 sm:mb-6">
              MOORE Spa Đà Nẵng - Chăm Sóc Da Đầu{" "}
              <span className="text-[#4a7c2e]">Chuyên Sâu</span>
            </h2>
            <p className="text-zinc-600 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              Với hơn 3 năm kinh nghiệm trong lĩnh vực chăm sóc da đầu, MOORE
              Spa Đà Nẵng tự hào là trung tâm hàng đầu tại Đà Nẵng. Chúng tôi
              chuyên điều trị các vấn đề về da đầu như gàu, nấm, ngứa và kích
              thích mọc tóc tự nhiên.
            </p>
            <p className="text-zinc-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
              Đội ngũ chuyên gia của chúng tôi kết hợp y học hiện đại với liệu
              pháp thảo dược tự nhiên, mang đến giải pháp toàn diện và bền vững
              cho sức khỏe da đầu của bạn.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex gap-2 sm:gap-3"
                >
                  <div className="flex-shrink-0 w-1.5 sm:w-2 h-1.5 sm:h-2 mt-1.5 sm:mt-2 bg-[#4a7c2e] rounded-full" />
                  <div>
                    <h3 className="font-bold text-sm sm:text-base text-[#111111] mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-[#6ba547]/10 rounded-full mb-2">
                    <stat.icon className="h-5 w-5 sm:h-6 sm:w-6 text-[#4a7c2e]" />
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-[#111111] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-zinc-600">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-3 sm:space-y-4">
                <div className="relative h-48 sm:h-56 md:h-64 rounded-xl sm:rounded-2xl overflow-hidden">
                  <Image
                    src="/hero.jpg"
                    alt="Scalp treatment"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="relative h-36 sm:h-40 md:h-48 rounded-xl sm:rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600"
                    alt="Scalp care therapy"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-3 sm:space-y-4 pt-6 sm:pt-8">
                <div className="relative h-36 sm:h-40 md:h-48 rounded-xl sm:rounded-2xl overflow-hidden">
                  <Image
                    src="/hero2.jpg"
                    alt="Professional scalp analysis"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="relative h-48 sm:h-56 md:h-64 rounded-xl sm:rounded-2xl overflow-hidden">
                  <Image
                    src="/hero3.jpg"
                    alt="Spa experience"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-[#4a7c2e] text-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-2xl"
            >
              <div className="text-2xl sm:text-3xl font-black mb-1">10+</div>
              <div className="text-xs sm:text-sm font-semibold">
                Năm Kinh Nghiệm
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
