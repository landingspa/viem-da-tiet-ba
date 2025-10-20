"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  Eye,
  Heart,
  ArrowLeft,
  Share2,
  Facebook,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import blogPosts from "@/data/blog_posts.json";

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src={post.featuredImage}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

        {/* Breadcrumb & Back Button */}
        <div className="absolute top-8 left-0 right-0 z-10">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Link href="/blog">
              <Button variant="ghost" className="text-white hover:bg-white/10">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Quay lại Blog
              </Button>
            </Link>
          </div>
        </div>

        {/* Title */}
        <div className="absolute bottom-0 left-0 right-0 pb-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block bg-[#CBA135] text-[#111111] px-4 py-2 rounded-full text-sm font-bold mb-4">
                {post.category}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                {post.title}
              </h1>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 text-white/90">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={post.authorImage}
                      alt={post.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">{post.author}</div>
                    <div className="text-sm text-white/70">
                      {post.authorRole}
                    </div>
                  </div>
                </div>
                <div className="h-6 w-px bg-white/30" />
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {post.publishedAt}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  {post.views}
                </div>
                <div className="flex items-center gap-1">
                  <Heart className="h-4 w-4" />
                  {post.likes}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_300px] gap-12">
            {/* Main Content */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="prose prose-lg max-w-none"
            >
              {/* Excerpt */}
              <p className="text-xl text-zinc-600 leading-relaxed mb-8 font-medium">
                {post.excerpt}
              </p>

              {/* Content */}
              <div
                className="text-zinc-700 leading-relaxed space-y-6"
                dangerouslySetInnerHTML={{
                  __html: post.content.replace(/\n/g, "<br/>"),
                }}
              />

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-zinc-200">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-zinc-100 text-zinc-700 px-4 py-2 rounded-full text-sm font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share Buttons */}
              <div className="mt-8 pt-8 border-t border-zinc-200">
                <div className="flex items-center gap-4">
                  <div className="font-semibold text-[#111111]">Chia sẻ:</div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="gap-2">
                      <Facebook className="h-4 w-4" />
                      Facebook
                    </Button>
                    <Button size="sm" variant="outline" className="gap-2">
                      <Share2 className="h-4 w-4" />
                      Zalo
                    </Button>
                  </div>
                </div>
              </div>
            </motion.article>

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="space-y-8"
            >
              {/* Author Card */}
              <div className="bg-zinc-50 rounded-2xl p-6">
                <div className="text-sm font-bold text-zinc-500 mb-4">
                  TÁC GIẢ
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4">
                    <Image
                      src={post.authorImage}
                      alt={post.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="font-bold text-[#111111] mb-1">
                    {post.author}
                  </div>
                  <div className="text-sm text-zinc-500 mb-4">
                    {post.authorRole}
                  </div>
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="w-full"
                  >
                    <Link href="/booking">
                      Đặt Lịch Với {post.author.split(" ")[0]}
                    </Link>
                  </Button>
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-gradient-to-br from-[#CBA135] to-[#B39030] rounded-2xl p-6 text-white">
                <div className="text-2xl font-black mb-3">
                  Nhận Tư Vấn Miễn Phí
                </div>
                <p className="text-white/90 mb-6">
                  Đặt lịch ngay hôm nay để được stylist tư vấn kiểu tóc phù hợp
                </p>
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-white text-[#111111] hover:bg-zinc-100 font-bold"
                >
                  <Link href="/booking">Đặt Lịch Ngay</Link>
                </Button>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-zinc-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-[#111111] mb-12">
              Bài Viết Liên Quan
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                  <div className="group">
                    <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                      <Image
                        src={relatedPost.featuredImage}
                        alt={relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-[#111111] mb-2 group-hover:text-[#CBA135] transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-zinc-600 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
