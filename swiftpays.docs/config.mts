import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Swift Pays Document",
  description: "Swift Pays - Giải pháp thanh toán tự động - Biến động số dư",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Tài liệu",
        link: "/introduction/swiftpays-la-gi",
      },
      {
        text: "Hỗ trợ & Báo lỗi",
        link: "/introduction/ho-tro-bao-loi",
      },
    ],

    sidebar: [
      {
        text: "Giới thiệu",
        items: [
          { text: "Swift Pays", link: "/introduction/swiftpays-la-gi" },
          { text: "Hỗ trợ & Báo lỗi", link: "/introduction/ho-tro-bao-loi" },
        ],
      },
      {
        text: "Webhook",
        items: [
          { text: "Khái niệm", link: "/webhook/khai-niem" },
          { text: "Tạo Hook", link: "/webhook/tao-hook" },
          { text: "Tài liệu kỹ thuật", link: "/webhook/tai-lieu-ky-thuat" },
        ],
      },
      {
        text: "Kênh thông báo",
        items: [{ text: "Telegram", link: "/notifications/telegram" }],
      },
      {
        text: "API",
        items: [{ text: "Tài liệu API", link: "/api/tai-lieu-api" }],
      },
    ],
    // socialLinks: [
    //   { icon: "github", link: "https://github.com/vuejs/vitepress" },
    // ],
  },
});
