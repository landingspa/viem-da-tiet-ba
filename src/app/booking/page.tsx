"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import services from "@/data/services.json";
import stylists from "@/data/stylists.json";

export default function BookingPage() {
  const [selectedService, setSelectedService] = useState("");
  const [selectedStylist, setSelectedStylist] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    notes: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate booking
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        date: "",
        time: "",
        notes: "",
      });
      setSelectedService("");
      setSelectedStylist("");
    }, 5000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const selectedServiceData = services.find((s) => s.id === selectedService);
  const selectedStylistData = stylists.find((s) => s.id === selectedStylist);

  return (
    <div className="min-h-screen bg-zinc-50 pt-20">
      {/* Hero Section */}
      <section className="relative bg-[#111111] py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1560869713-7d0a29430803?w=1920"
            alt="Booking background"
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
              ĐẶT LỊCH NHANH
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
              Đặt Lịch <span className="text-[#CBA135]">Làm Tóc</span>
            </h1>
            <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
              Chọn dịch vụ và stylist yêu thích, đặt lịch chỉ trong vài phút
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Service Selection */}
                    <div>
                      <label className="block text-sm font-bold text-[#111111] mb-3">
                        Chọn Dịch Vụ <span className="text-red-500">*</span>
                      </label>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {services.slice(0, 6).map((service) => (
                          <button
                            key={service.id}
                            type="button"
                            onClick={() => setSelectedService(service.id)}
                            className={`text-left p-4 rounded-lg border-2 transition-all ${
                              selectedService === service.id
                                ? "border-[#CBA135] bg-[#CBA135]/5"
                                : "border-zinc-200 hover:border-[#CBA135]/50"
                            }`}
                          >
                            <div className="font-semibold text-[#111111] mb-1">
                              {service.name}
                            </div>
                            <div className="text-sm text-zinc-500">
                              {service.price}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Stylist Selection */}
                    <div>
                      <label className="block text-sm font-bold text-[#111111] mb-3">
                        Chọn Stylist <span className="text-red-500">*</span>
                      </label>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {stylists.map((stylist) => (
                          <button
                            key={stylist.id}
                            type="button"
                            onClick={() => setSelectedStylist(stylist.id)}
                            className={`flex items-center gap-3 p-3 rounded-lg border-2 transition-all ${
                              selectedStylist === stylist.id
                                ? "border-[#CBA135] bg-[#CBA135]/5"
                                : "border-zinc-200 hover:border-[#CBA135]/50"
                            }`}
                          >
                            <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                              <Image
                                src={stylist.image}
                                alt={stylist.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="text-left">
                              <div className="font-semibold text-[#111111]">
                                {stylist.name}
                              </div>
                              <div className="text-xs text-zinc-500">
                                {stylist.role}
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Personal Info */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold text-[#111111] mb-2">
                          Họ Tên <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                          <Input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Nguyễn Văn A"
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-[#111111] mb-2">
                          Số Điện Thoại <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                          <Input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="0901 234 567"
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-[#111111] mb-2">
                        Email
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="email@example.com"
                          className="pl-10"
                        />
                      </div>
                    </div>

                    {/* Date & Time */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold text-[#111111] mb-2">
                          Ngày <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                          <Input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-[#111111] mb-2">
                          Giờ <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                          <Input
                            type="time"
                            name="time"
                            value={formData.time}
                            onChange={handleInputChange}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Notes */}
                    <div>
                      <label className="block text-sm font-bold text-[#111111] mb-2">
                        Ghi Chú
                      </label>
                      <Textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleInputChange}
                        placeholder="Yêu cầu đặc biệt của bạn..."
                        rows={4}
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full text-base"
                      disabled={!selectedService || !selectedStylist}
                    >
                      Xác Nhận Đặt Lịch
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Booking Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-32">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#111111] mb-4">
                    Thông Tin Đặt Lịch
                  </h3>

                  {/* Selected Service */}
                  {selectedServiceData && (
                    <div className="mb-4 pb-4 border-b border-zinc-100">
                      <div className="text-sm text-zinc-500 mb-1">Dịch Vụ</div>
                      <div className="font-semibold text-[#111111]">
                        {selectedServiceData.name}
                      </div>
                      <div className="text-sm text-[#CBA135] font-bold mt-1">
                        {selectedServiceData.price}
                      </div>
                      <div className="text-xs text-zinc-500 mt-1 flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {selectedServiceData.duration}
                      </div>
                    </div>
                  )}

                  {/* Selected Stylist */}
                  {selectedStylistData && (
                    <div className="mb-4 pb-4 border-b border-zinc-100">
                      <div className="text-sm text-zinc-500 mb-2">Stylist</div>
                      <div className="flex items-center gap-3">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden">
                          <Image
                            src={selectedStylistData.image}
                            alt={selectedStylistData.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-semibold text-[#111111]">
                            {selectedStylistData.name}
                          </div>
                          <div className="text-xs text-zinc-500">
                            {selectedStylistData.role}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contact Info */}
                  <div className="bg-[#CBA135]/10 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="h-4 w-4 text-[#CBA135]" />
                      <div className="font-semibold text-[#111111]">
                        Cần Hỗ Trợ?
                      </div>
                    </div>
                    <div className="text-sm text-zinc-600 space-y-1">
                      <div>Hotline: 0901 234 567</div>
                      <div>Email: contact@hairzone.vn</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      {showSuccess && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.8, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6"
            >
              <CheckCircle className="h-12 w-12 text-green-600" />
            </motion.div>
            <h3 className="text-2xl font-black text-[#111111] mb-4">
              Đặt Lịch Thành Công!
            </h3>
            <p className="text-zinc-600 mb-6">
              Chúng tôi đã nhận được yêu cầu đặt lịch của bạn. Nhân viên sẽ liên
              hệ xác nhận qua số điện thoại trong ít phút.
            </p>
            <div className="bg-[#CBA135]/10 rounded-lg p-4 mb-6">
              <div className="text-sm text-zinc-600 mb-2">
                Bạn cũng có thể xác nhận qua:
              </div>
              <div className="flex gap-2 justify-center">
                <div className="bg-white px-4 py-2 rounded-lg font-semibold text-[#111111]">
                  Zalo
                </div>
                <div className="bg-white px-4 py-2 rounded-lg font-semibold text-[#111111]">
                  Messenger
                </div>
              </div>
            </div>
            <Button
              onClick={() => setShowSuccess(false)}
              size="lg"
              className="w-full"
            >
              Đóng
            </Button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
