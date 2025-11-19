"use client";

import { motion } from "framer-motion";
import { Clock, Tag, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import services from "@/data/services.json";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative bg-[#111111] py-12 sm:py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920"
            alt="Services background"
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
              DỊCH VỤ CHĂM SÓC DA ĐẦU
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6">
              Dịch Vụ <span className="text-[#6ba547]">Chăm Sóc Da Đầu</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto px-4">
              Từ điều trị gàu, nấm đến kích thích mọc tóc tự nhiên (Hair
              treatment & Scalp treatment). Chúng tôi mang đến giải pháp toàn
              diện cho sức khỏe da đầu của bạn.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="h-full"
              >
                <Card className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-[#4a7c2e] h-full flex flex-col">
                  {/* Service Image */}
                  <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden flex-shrink-0">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Tag Badge */}
                    {service.tag && (
                      <div
                        className={`absolute top-3 sm:top-4 right-3 sm:right-4 px-2.5 sm:px-3 py-1 rounded-full text-xs font-bold ${
                          service.tag === "Best Seller"
                            ? "bg-[#4a7c2e] text-white"
                            : service.tag === "Hot Trend"
                            ? "bg-[#6ba547] text-white"
                            : "bg-[#2d5016] text-white"
                        }`}
                      >
                        {service.tag}
                      </div>
                    )}
                  </div>

                  <CardContent className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow">
                    {/* Service Name */}
                    <h3 className="text-xl sm:text-2xl font-bold text-[#111111] mb-1 sm:mb-2 group-hover:text-[#4a7c2e] transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-500 mb-2 sm:mb-3">
                      {service.nameEn}
                    </p>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-zinc-600 mb-3 sm:mb-4 leading-relaxed line-clamp-3 flex-grow">
                      {service.description}
                    </p>

                    {/* Price & Duration */}
                    <div className="flex items-center justify-between mb-3 sm:mb-4 pb-3 sm:pb-4 border-b border-zinc-100">
                      <div>
                        <div className="text-xs sm:text-sm text-zinc-500">
                          Giá
                        </div>
                        <div className="text-base sm:text-lg font-bold text-[#4a7c2e]">
                          {service.price}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs sm:text-sm text-zinc-500 flex items-center gap-1">
                          <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span>Thời gian</span>
                        </div>
                        <div className="text-xs sm:text-sm font-semibold text-[#111111]">
                          {service.duration}
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    {service.features && service.features.length > 0 && (
                      <div className="mb-3 sm:mb-4">
                        <ul className="space-y-1">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-center gap-2 text-xs sm:text-sm text-zinc-600"
                            >
                              <Sparkles className="h-3 w-3 text-[#4a7c2e] flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* CTA Button */}
                    <Button asChild className="w-full" size="lg">
                      <Link href={`/booking?service=${service.id}`}>
                        Đặt Lịch Ngay
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-[#111111] to-[#1a1a1a]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 sm:mb-6">
              Chưa Biết Chọn Dịch Vụ Nào?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-zinc-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Đặt lịch tư vấn miễn phí với chuyên gia da đầu của chúng tôi
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch px-4">
              <Button
                asChild
                size="lg"
                className="text-sm sm:text-base px-8 sm:px-10 w-full sm:w-auto"
              >
                <Link href="/booking">Đặt Lịch Tư Vấn</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-sm sm:text-base px-8 sm:px-10 w-full sm:w-auto"
              >
                <Link href="tel:+84862803268">Gọi Ngay: 0862.803.268</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
