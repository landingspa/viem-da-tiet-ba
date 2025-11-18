# Hướng dẫn setup Google Apps Script để lưu booking vào Google Sheet

## Bước 1: Tạo Google Sheet

1. Truy cập [Google Sheets](https://sheets.google.com)
2. Tạo sheet mới, đặt tên: **MOORE Spa - Booking Management**
3. Tạo header ở row 1 với các cột sau:

```
A1: Thời gian
B1: Họ tên
C1: Số điện thoại
D1: Email
E1: Dịch vụ
F1: Giá
G1: Thời lượng
H1: Ngày hẹn
I1: Giờ hẹn
J1: Ghi chú
K1: Trạng thái
```

## Bước 2: Tạo Google Apps Script

1. Trong Google Sheet, vào **Extensions > Apps Script**
2. Xóa code mặc định và paste code sau:

```javascript
function doPost(e) {
  try {
    // Parse incoming data
    var data = JSON.parse(e.postData.contents);

    // Get active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Append new row with booking data
    sheet.appendRow([
      data.timestamp || new Date().toLocaleString("vi-VN"),
      data.name || "",
      data.phone || "",
      data.email || "",
      data.service || "",
      data.servicePrice || "",
      data.serviceDuration || "",
      data.date || "",
      data.time || "",
      data.notes || "",
      data.status || "Mới",
    ]);

    // Return success response
    return ContentService.createTextOutput(
      JSON.stringify({
        success: true,
        message: "Booking saved successfully",
        timestamp: new Date().toISOString(),
      })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(
      JSON.stringify({
        success: false,
        error: error.toString(),
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({
      message: "MOORE Spa Booking API",
      version: "1.0.0",
      status: "active",
    })
  ).setMimeType(ContentService.MimeType.JSON);
}

// Test function to verify setup
function testBooking() {
  var testData = {
    timestamp: new Date().toLocaleString("vi-VN"),
    name: "Test Customer",
    phone: "0901234567",
    email: "test@example.com",
    service: "Điều trị gàu",
    servicePrice: "500.000đ",
    serviceDuration: "60 phút",
    date: "2025-11-20",
    time: "14:00",
    notes: "Test booking",
    status: "Mới",
  };

  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.appendRow([
    testData.timestamp,
    testData.name,
    testData.phone,
    testData.email,
    testData.service,
    testData.servicePrice,
    testData.serviceDuration,
    testData.date,
    testData.time,
    testData.notes,
    testData.status,
  ]);

  Logger.log("Test booking added successfully!");
}
```

3. Lưu project (đặt tên: **MOORE Spa Booking API**)

## Bước 3: Deploy Web App

1. Click nút **Deploy > New deployment**
2. Click icon ⚙️ bên cạnh "Select type" > chọn **Web app**
3. Cấu hình:
   - **Description**: MOORE Spa Booking API v1
   - **Execute as**: Me (email của bạn)
   - **Who has access**: Anyone
4. Click **Deploy**
5. Click **Authorize access** và cho phép quyền truy cập
6. Copy **Web app URL** (dạng: `https://script.google.com/macros/s/AKfycby.../exec`)

## Bước 4: Cấu hình môi trường

1. Tạo file `.env.local` trong thư mục root project (nếu chưa có)
2. Thêm URL vừa copy:

```env
# Google Sheet API
GOOGLE_SHEET_SCRIPT_URL=https://script.google.com/macros/s/AKfycby.../exec
```

## Bước 5: Test

### Test trực tiếp từ Apps Script:

1. Trong Apps Script, chọn function `testBooking`
2. Click **Run**
3. Kiểm tra Google Sheet, sẽ có dòng test mới

### Test từ website:

1. Restart dev server: `npm run dev`
2. Vào trang booking và điền form
3. Submit và kiểm tra Google Sheet

## Bổ sung: Format đẹp cho Google Sheet

Thêm vào Apps Script để tự động format:

```javascript
function formatSheet() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  // Format header row
  var headerRange = sheet.getRange(1, 1, 1, 11);
  headerRange.setBackground("#6ba547");
  headerRange.setFontColor("#ffffff");
  headerRange.setFontWeight("bold");
  headerRange.setHorizontalAlignment("center");

  // Set column widths
  sheet.setColumnWidth(1, 150); // Thời gian
  sheet.setColumnWidth(2, 150); // Họ tên
  sheet.setColumnWidth(3, 120); // SĐT
  sheet.setColumnWidth(4, 200); // Email
  sheet.setColumnWidth(5, 180); // Dịch vụ
  sheet.setColumnWidth(6, 100); // Giá
  sheet.setColumnWidth(7, 100); // Thời lượng
  sheet.setColumnWidth(8, 100); // Ngày hẹn
  sheet.setColumnWidth(9, 80); // Giờ hẹn
  sheet.setColumnWidth(10, 250); // Ghi chú
  sheet.setColumnWidth(11, 100); // Trạng thái

  // Freeze header row
  sheet.setFrozenRows(1);

  // Add alternating colors for data rows
  var lastRow = sheet.getLastRow();
  if (lastRow > 1) {
    var dataRange = sheet.getRange(2, 1, lastRow - 1, 11);
    dataRange.applyRowBanding(SpreadsheetApp.BandingTheme.LIGHT_GREY);
  }

  Logger.log("Sheet formatted successfully!");
}
```

Chạy function `formatSheet()` một lần để format sheet đẹp hơn.

## Troubleshooting

### Lỗi "Authorization required"

- Đảm bảo đã authorize và cho phép quyền truy cập

### Lỗi "Script has been disabled"

- Vào Deploy > Manage deployments > chọn deployment > Test deployments

### Data không lưu vào sheet

- Kiểm tra URL trong `.env.local` có đúng không
- Kiểm tra console log của Next.js server
- Test bằng function `testBooking()` trong Apps Script

### Sheet bị duplicate data

- Kiểm tra không gọi API nhiều lần
- Thêm loading state trong form

## Bảo mật

1. **Giới hạn origin** (nâng cao):

```javascript
function doPost(e) {
  // Check origin if needed
  var allowedOrigins = ["https://your-domain.com", "http://localhost:8888"];

  // Rest of code...
}
```

2. **Thêm secret key** (tùy chọn):

```javascript
function doPost(e) {
  var data = JSON.parse(e.postData.contents);
  var secretKey = "your-secret-key-here";

  if (data.secretKey !== secretKey) {
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, error: "Unauthorized" })
    ).setMimeType(ContentService.MimeType.JSON);
  }

  // Rest of code...
}
```

## Nâng cao: Gửi email thông báo từ Apps Script

Thêm function gửi email khi có booking mới:

```javascript
function sendNotificationEmail(bookingData) {
  var recipient = "admin@moorescalpcare.com";
  var subject = "🎯 Đặt lịch mới: " + bookingData.name;
  var body =
    "Khách hàng: " +
    bookingData.name +
    "\n" +
    "SĐT: " +
    bookingData.phone +
    "\n" +
    "Dịch vụ: " +
    bookingData.service +
    "\n" +
    "Ngày giờ: " +
    bookingData.date +
    " " +
    bookingData.time;

  MailApp.sendEmail(recipient, subject, body);
}
```

Gọi function này trong `doPost()` sau khi append row thành công.
