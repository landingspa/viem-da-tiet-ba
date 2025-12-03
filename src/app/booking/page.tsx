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

export default function BookingPage() {
  const [selectedService, setSelectedService] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    notes: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      // Get selected service data
      const selectedServiceData = services.find(
        (s) => s.id === selectedService
      );

      // Format booking message
      const bookingMessage = `
📅 THÔNG TIN ĐẶT LỊCH:
━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 Khách hàng: ${formData.name}
📞 Điện thoại: ${formData.phone}
📧 Email: ${formData.email || "Không cung cấp"}

🎯 Dịch vụ: ${selectedServiceData?.name || "Chưa chọn"}
💰 Giá: ${selectedServiceData?.price || ""}
⏱️ Thời gian thực hiện: ${selectedServiceData?.duration || ""}

📅 Ngày hẹn: ${formData.date}
🕐 Giờ hẹn: ${formData.time}

📝 Ghi chú: ${formData.notes || "Không có ghi chú"}
      `.trim();

      // Send email via API
      const response = await fetch("/api/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email || "no-reply@scalpcarespa.vn",
          phone: formData.phone,
          message: bookingMessage,
          subject: `Đặt lịch mới từ ${formData.name} - ${formData.date} ${formData.time}`,
          adminEmail:
            process.env.NEXT_PUBLIC_ADMIN_EMAIL || "Moorecentre2025@gmail.com",
          adminName: "MOORE Spa Đà Nẵng Admin",
          companyName: "MOORE Spa Đà Nẵng",
          projectName: "MOORE Spa - Chăm Sóc Da Đầu Chuyên Sâu",
          serviceName: selectedServiceData?.name || "dịch vụ chăm sóc da đầu",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Có lỗi xảy ra khi gửi email");
      }

      // Save to Google Sheet
      try {
        const sheetResponse = await fetch("/api/save-to-sheet", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            phone: formData.phone,
            email: formData.email || "",
            service: selectedServiceData?.name || "",
            servicePrice: selectedServiceData?.price || "",
            serviceDuration: selectedServiceData?.duration || "",
            date: formData.date,
            time: formData.time,
            notes: formData.notes || "",
          }),
        });

        const sheetData = await sheetResponse.json();

        if (sheetData.success) {
          console.log("✅ Đã lưu vào Google Sheet");
        } else {
          console.warn("⚠️ Không lưu được vào Google Sheet:", sheetData.error);
        }
      } catch (sheetError) {
        // Don't block the success flow if sheet save fails
        console.error("Sheet save error (non-critical):", sheetError);
      }

      // Show success modal
      setShowSuccess(true);

      // Reset form after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
        setFormData({
          name: "",
          phone: "",
          email: "",
          date: "",
          time: "",
          notes: "",
        });
        setSelectedService("");
      }, 5000);
    } catch (error) {
      console.error("Booking error:", error);
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Có lỗi xảy ra. Vui lòng thử lại hoặc liên hệ hotline: 0862 803 268"
      );
    } finally {
      setIsSubmitting(false);
    }
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

  return (
    <div className="min-h-screen bg-zinc-50 pt-20">
      {/* Hero Section */}
      <section className="relative bg-[#111111] py-12 sm:py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1522338140262-f46f5913618a?w=1920"
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
            <div className="inline-block bg-[#6ba547]/20 text-[#6ba547] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold mb-3 sm:mb-4">
              ĐẶT LỊCH NHANH
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6">
              Đặt Lịch <span className="text-[#6ba547]">Điều Trị</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto px-4">
              Chọn dịch vụ và chuyên gia yêu thích, đặt lịch chỉ trong vài phút
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-5 sm:p-6 md:p-8">
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-5 sm:space-y-6"
                  >
                    {/* Service Selection */}
                    <div>
                      <label className="block text-xs sm:text-sm font-bold text-[#111111] mb-2 sm:mb-3">
                        Chọn Dịch Vụ <span className="text-red-500">*</span>
                      </label>
                      <div className="grid sm:grid-cols-2 gap-2 sm:gap-3">
                        {services.map((service) => (
                          <button
                            key={service.id}
                            type="button"
                            onClick={() => setSelectedService(service.id)}
                            className={`text-left p-3 sm:p-4 rounded-lg border-2 transition-all ${
                              selectedService === service.id
                                ? "border-[#4a7c2e] bg-[#6ba547]/5"
                                : "border-zinc-200 hover:border-[#4a7c2e]/50"
                            }`}
                          >
                            <div className="font-semibold text-sm sm:text-base text-[#111111] mb-1">
                              {service.name}
                            </div>
                            <div className="text-xs sm:text-sm text-zinc-500">
                              {service.price}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Personal Info */}
                    <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <label className="block text-xs sm:text-sm font-bold text-[#111111] mb-2">
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

                    {/* Error Message */}
                    {submitError && (
                      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                        {submitError}
                      </div>
                    )}

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full text-base"
                      disabled={!selectedService || isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="inline-block animate-spin mr-2">
                            ⏳
                          </span>
                          Đang xử lý...
                        </>
                      ) : (
                        "Xác Nhận Đặt Lịch"
                      )}
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
                      <div className="text-sm text-[#4a7c2e] font-bold mt-1">
                        {selectedServiceData.price}
                      </div>
                      <div className="text-xs text-zinc-500 mt-1 flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {selectedServiceData.duration}
                      </div>
                    </div>
                  )}

                  {/* Contact Info */}
                  <div className="bg-[#6ba547]/10 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="h-4 w-4 text-[#4a7c2e]" />
                      <div className="font-semibold text-[#111111]">
                        Cần Hỗ Trợ?
                      </div>
                    </div>
                    <div className="text-sm text-zinc-600 space-y-1">
                      <div>Hotline: 0862 803 268</div>
                      <div>Email: Moorecentre2025@gmail.com</div>
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
            <div className="bg-[#6ba547]/10 rounded-lg p-4 mb-6">
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
