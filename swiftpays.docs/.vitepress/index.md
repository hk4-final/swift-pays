---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Swift Pays"
  text: "Giải pháp thanh toán tự động - Biến động số dư"
  tagline: "Tích hợp thanh toán tự động cho tài khoản ngân hàng cá nhân + doanh nghiệp, ví điện tử."
  actions:
    - theme: brand
      text: "Bắt đầu tích hợp"
      link: introduction/swiftpays-la-gi
    - theme: alt
      text: "http://localhost:3000/homepage khoản"
      link: http://localhost:3000/homepage

features:
  - title: "API Ngân hàng"
    details: "Hệ thống sẽ tự động lấy giao dịch mới nhất từ tất cả các ngân hàng mà bạn liên kết vào hệ thống."
  - title: "Tích hợp đơn giản"
    details: "Hỗ trợ nhiều phương thức tích hợp như plugins, modules hay webhooks cực kỳ đơn giản."
  - title: "Hooks linh hoạt"
    details: "Hooks cho phép bạn đẩy dữ liệu đến các nền tảng khác nhau như Slack, Telegram, Larksuite, ..."
  - title: "Giao dịch không giới hạn"
    details: "Swift Pays không giới hạn số lượng giao dịch phát sinh hàng tháng trên tài khoản liên kết của bạn."
---

<style>
.VPFeature:hover {
  transform: scale(0.5);
}

.VPFeature:first-child {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.VPFeature:first-child:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
:root {
  --vp-c-indigo-1: #21BF73;
  --vp-c-indigo-3: #21BF73;
}
.VPNavBarTitle .title {
  color: #21BF73 !important;
}
.VPButton.brand:hover {
  background-color: #14CB73 !important;
}
</style>
