"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, Eye, Heart, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import blogPosts from "@/data/blog_posts.json";

export default function BlogPage() {
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative bg-[#111111] py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1920"
            alt="Blog background"
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
            <div className="inline-block bg-[#6ba547]/20 text-[#4a7c2e] px-4 py-2 rounded-full text-sm font-bold mb-4">
              BLOG TÓC THỜI TRANG
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
              Xu Hướng & <span className="text-[#6ba547]">Chia Sẻ</span>
            </h1>
            <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
              Cập nhật xu hướng tóc mới nhất, mẹo chăm sóc và bí quyết từ chuyên
              gia
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href={`/blog/${featuredPost.slug}`}>
              <Card className="group overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative h-96 lg:h-auto">
                    <Image
                      src={featuredPost.featuredImage}
                      alt={featuredPost.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-[#4a7c2e] text-white px-4 py-2 rounded-full text-sm font-bold">
                      BÀI VIẾT NỔI BẬT
                    </div>
                  </div>

                  {/* Content */}
                  <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="inline-block bg-[#6ba547]/10 text-[#4a7c2e] px-3 py-1 rounded-full text-sm font-semibold mb-4 w-fit">
                      {featuredPost.category}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-[#111111] mb-4 group-hover:text-[#4a7c2e] transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-zinc-600 text-lg leading-relaxed mb-6">
                      {featuredPost.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500 mb-6">
                      <div className="flex items-center gap-2">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden">
                          <Image
                            src={featuredPost.authorImage}
                            alt={featuredPost.author}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-semibold text-[#111111]">
                            {featuredPost.author}
                          </div>
                          <div className="text-xs">
                            {featuredPost.authorRole}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {featuredPost.publishedAt}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {featuredPost.readTime}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-[#4a7c2e] font-semibold group-hover:gap-4 transition-all">
                      <span>Đọc tiếp</span>
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </CardContent>
                </div>
              </Card>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Other Posts Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-black text-[#111111] mb-12"
          >
            Bài Viết Khác
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <Card className="group h-full overflow-hidden hover:shadow-xl transition-shadow">
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={post.featuredImage}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 bg-[#4a7c2e]/90 text-white px-3 py-1 rounded-full text-xs font-bold">
                        {post.category}
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-[#111111] mb-3 group-hover:text-[#4a7c2e] transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-zinc-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center justify-between text-sm text-zinc-500 mb-4 pb-4 border-b border-zinc-100">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {post.readTime}
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1">
                            <Eye className="h-4 w-4" />
                            {post.views}
                          </div>
                          <div className="flex items-center gap-1">
                            <Heart className="h-4 w-4" />
                            {post.likes}
                          </div>
                        </div>
                      </div>

                      {/* Author */}
                      <div className="flex items-center gap-3">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden">
                          <Image
                            src={post.authorImage}
                            alt={post.author}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-semibold text-[#111111] text-sm">
                            {post.author}
                          </div>
                          <div className="text-xs text-zinc-500">
                            {post.publishedAt}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
