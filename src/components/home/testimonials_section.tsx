"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";
import testimonials from "@/data/testimonials.json";

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-zinc-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-[#CBA135]/10 text-[#CBA135] px-4 py-2 rounded-full text-sm font-bold mb-4">
            ĐÁNH GIÁ KHÁCH HÀNG
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#111111] mb-4">
            Khách Hàng Nói Gì Về{" "}
            <span className="text-[#CBA135]">Chúng Tôi</span>
          </h2>
          <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
            Hơn 15,000 khách hàng đã tin tưởng và hài lòng với dịch vụ của
            HairZone
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-[#CBA135]/10">
                <Quote className="h-16 w-16" fill="currentColor" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-[#CBA135] fill-[#CBA135]"
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="text-zinc-700 leading-relaxed mb-6 relative z-10">
                "{testimonial.comment}"
              </p>

              {/* Service */}
              <div className="inline-block bg-[#CBA135]/10 text-[#CBA135] px-3 py-1 rounded-full text-xs font-semibold mb-4">
                {testimonial.service}
              </div>

              {/* Customer Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-zinc-100">
                {testimonial.avatar && (
                  <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div>
                  <div className="font-bold text-[#111111]">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-zinc-500">
                    {testimonial.date}
                  </div>
                </div>
              </div>

              {/* Result Image */}
              {testimonial.image && (
                <div className="mt-4 relative h-48 rounded-xl overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={`Result for ${testimonial.name}`}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Overall Rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-[#CBA135] to-[#B39030] rounded-2xl p-8 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-8 w-8 text-white fill-white" />
            ))}
          </div>
          <div className="text-5xl font-black text-white mb-2">4.9/5.0</div>
          <div className="text-white/90 text-lg">
            Từ hơn <span className="font-bold">1,200+</span> đánh giá của khách
            hàng
          </div>
        </motion.div>
      </div>
    </section>
  );
}
