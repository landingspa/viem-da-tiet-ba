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
    title: "Đội Ngũ Chuyên Nghiệp",
    description: "Stylist được đào tạo bài bản với chứng chỉ quốc tế",
  },
  {
    title: "Không Gian Sang Trọng",
    description: "Thiết kế hiện đại, thoáng mát và riêng tư",
  },
  {
    title: "Sản Phẩm Cao Cấp",
    description: "Sử dụng thuốc nhuộm, uốn nhập khẩu từ Nhật, Hàn",
  },
  {
    title: "Tư Vấn Tận Tâm",
    description: "Tư vấn kiểu tóc phù hợp với khuôn mặt và phong cách",
  },
];

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-[#CBA135]/10 text-[#CBA135] px-4 py-2 rounded-full text-sm font-bold mb-4">
              VỀ CHÚNG TÔI
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#111111] mb-6">
              HairZone - Nơi Tạo Nên{" "}
              <span className="text-[#CBA135]">Phong Cách</span>
            </h2>
            <p className="text-zinc-600 text-lg leading-relaxed mb-6">
              Với hơn 10 năm kinh nghiệm trong ngành tóc thời trang, HairZone tự
              hào là salon hàng đầu tại TP.HCM. Chúng tôi không chỉ cắt tóc, mà
              còn tạo ra những tác phẩm nghệ thuật trên từng sợi tóc.
            </p>
            <p className="text-zinc-600 text-lg leading-relaxed mb-8">
              Đội ngũ stylist của chúng tôi liên tục cập nhật xu hướng mới nhất
              từ các tuần lễ thời trang quốc tế, mang đến cho bạn những kiểu tóc
              hiện đại và phù hợp nhất.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex gap-3"
                >
                  <div className="flex-shrink-0 w-2 h-2 mt-2 bg-[#CBA135] rounded-full" />
                  <div>
                    <h3 className="font-bold text-[#111111] mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-zinc-600">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-[#CBA135]/10 rounded-full mb-2">
                    <stat.icon className="h-6 w-6 text-[#CBA135]" />
                  </div>
                  <div className="text-2xl font-black text-[#111111] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-zinc-600">{stat.label}</div>
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
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-64 rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1560869713-7d0a29430803?w=600"
                    alt="Salon interior"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600"
                    alt="Hair styling"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-48 rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600"
                    alt="Barber service"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600"
                    alt="Salon experience"
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
              className="absolute -bottom-6 -left-6 bg-[#CBA135] text-[#111111] p-6 rounded-2xl shadow-2xl"
            >
              <div className="text-3xl font-black mb-1">10+</div>
              <div className="text-sm font-semibold">Năm Kinh Nghiệm</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
