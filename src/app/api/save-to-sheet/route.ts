import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const bookingData = await request.json();

    // Validate required fields
    if (!bookingData.name || !bookingData.phone) {
      return NextResponse.json(
        { error: "Thiếu thông tin bắt buộc" },
        { status: 400 }
      );
    }

    // Google Apps Script Web App URL
    const GOOGLE_SCRIPT_URL =
      process.env.GOOGLE_SHEET_SCRIPT_URL ||
      "https://script.google.com/macros/s/AKfycbyZdzIblLfL_mHxNtX1gsf4LprVkDV4kqcDa_G1Xo_5DTDVn-YO59jOZbpEQBfg7TZdHQ/exec";

    if (!GOOGLE_SCRIPT_URL) {
      console.warn("GOOGLE_SHEET_SCRIPT_URL not configured");
      return NextResponse.json(
        {
          success: false,
          error: "Chưa cấu hình Google Sheet URL",
        },
        { status: 500 }
      );
    }

    // Prepare data to send to Google Sheet
    const sheetData = {
      timestamp: new Date().toLocaleString("vi-VN", {
        timeZone: "Asia/Ho_Chi_Minh",
      }),
      name: bookingData.name,
      phone: bookingData.phone,
      email: bookingData.email || "",
      service: bookingData.service || "",
      servicePrice: bookingData.servicePrice || "",
      serviceDuration: bookingData.serviceDuration || "",
      date: bookingData.date,
      time: bookingData.time,
      notes: bookingData.notes || "",
      status: "Mới",
    };

    // Send data to Google Apps Script
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sheetData),
      redirect: "follow",
    });

    if (!response.ok) {
      throw new Error(`Google Sheet API error: ${response.statusText}`);
    }

    const result = await response.json();

    return NextResponse.json(
      {
        success: true,
        message: "Đã lưu thông tin vào Google Sheet",
        data: result,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Google Sheet save error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Có lỗi khi lưu vào Google Sheet",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

// Handle GET request to show API info
export async function GET() {
  return NextResponse.json({
    message: "Save to Google Sheet API",
    version: "1.0.0",
    endpoints: {
      POST: "/api/save-to-sheet",
      description: "Save booking data to Google Sheet via Apps Script",
      required_fields: ["name", "phone", "date", "time"],
      optional_fields: [
        "email",
        "service",
        "servicePrice",
        "serviceDuration",
        "notes",
      ],
      example_request: {
        name: "Nguyen Van A",
        phone: "0901234567",
        email: "email@example.com",
        service: "Điều trị gàu",
        servicePrice: "500.000đ",
        serviceDuration: "60 phút",
        date: "2025-11-20",
        time: "14:00",
        notes: "Khách muốn tư vấn thêm",
      },
    },
    setup_required: {
      step1: "Tạo Google Sheet cho bookings",
      step2: "Tạo Apps Script (Tools > Script editor)",
      step3: "Deploy as Web App",
      step4: "Thêm GOOGLE_SHEET_SCRIPT_URL vào .env.local",
    },
  });
}
