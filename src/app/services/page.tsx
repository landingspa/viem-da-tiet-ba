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
      <section className="relative bg-[#111111] py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1560869713-7d0a29430803?w=1920"
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
            <div className="inline-block bg-[#CBA135]/20 text-[#CBA135] px-4 py-2 rounded-full text-sm font-bold mb-4">
              DỊCH VỤ CHUYÊN NGHIỆP
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
              Dịch Vụ <span className="text-[#CBA135]">Tóc Thời Trang</span>
            </h1>
            <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
              Từ cắt tóc cơ bản đến nhuộm, uốn, duỗi chuyên nghiệp. Chúng tôi
              mang đến trải nghiệm hoàn hảo cho mái tóc của bạn.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-[#CBA135]">
                  {/* Service Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Tag Badge */}
                    {service.tag && (
                      <div
                        className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${
                          service.tag === "Best Seller"
                            ? "bg-[#CBA135] text-[#111111]"
                            : "bg-[#8B0000] text-white"
                        }`}
                      >
                        {service.tag}
                      </div>
                    )}
                    {/* Discount Badge */}
                    {service.discount && (
                      <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <Tag className="h-3 w-3" />-{service.discount}
                      </div>
                    )}
                  </div>

                  <CardContent className="p-6">
                    {/* Service Name */}
                    <h3 className="text-2xl font-bold text-[#111111] mb-2 group-hover:text-[#CBA135] transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-sm text-zinc-500 mb-3">
                      {service.nameEn}
                    </p>

                    {/* Description */}
                    <p className="text-zinc-600 mb-4 leading-relaxed line-clamp-3">
                      {service.description}
                    </p>

                    {/* Price & Duration */}
                    <div className="flex items-center justify-between mb-4 pb-4 border-b border-zinc-100">
                      <div>
                        <div className="text-sm text-zinc-500">Giá</div>
                        {service.originalPrice && (
                          <div className="text-xs text-zinc-400 line-through">
                            {service.originalPrice}
                          </div>
                        )}
                        <div className="text-lg font-bold text-[#CBA135]">
                          {service.price}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-zinc-500 flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>Thời gian</span>
                        </div>
                        <div className="text-sm font-semibold text-[#111111]">
                          {service.duration}
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    {service.features && service.features.length > 0 && (
                      <div className="mb-4">
                        <ul className="space-y-1">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-center gap-2 text-sm text-zinc-600"
                            >
                              <Sparkles className="h-3 w-3 text-[#CBA135] flex-shrink-0" />
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
      <section className="py-20 bg-gradient-to-r from-[#111111] to-[#1a1a1a]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Chưa Biết Chọn Dịch Vụ Nào?
            </h2>
            <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
              Đặt lịch tư vấn miễn phí với stylist chuyên nghiệp của chúng tôi
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-base px-10">
                <Link href="/booking">Đặt Lịch Tư Vấn</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-base px-10"
              >
                <Link href="tel:+84901234567">Gọi Ngay: 0901 234 567</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
