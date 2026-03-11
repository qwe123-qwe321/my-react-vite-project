import type { Config } from 'tailwindcss'

export default {
  // 扫描项目中使用 Tailwind 类的文件
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // 主题配置（核心：设计规范对应的值）
  theme: {
    // 1. 配置响应式断点（设计稿的 375px/1440px）
    screens: {
      'mobile': '375px',    // 移动端断点
      'desktop': '1440px',  // 桌面端断点
      // 保留 Tailwind 默认断点（可选，兼容通用写法）
      'sm': '375px',
      'lg': '1440px',
    },
    // 2. 配置字体（Outfit 家族 + 字号 + 字重）
    fontFamily: {
      'outfit': [
        'Outfit',          // 字体家族
        'sans-serif',      // 回退字体
      ],
    },
    fontSize: {
      'body': '15px',      // 设计稿的正文字号 15px
      // 保留默认字号（可选）
      'xs': '12px',
      'sm': '14px',
      'base': '16px',
    },
    fontWeight: {
      'regular': 400,      // 设计稿的 400 字重
      'bold': 700,         // 设计稿的 700 字重
    },
    // 3. 配置颜色（设计稿的 slate 系列 + white）
    colors: {
      'white': 'hsl(0, 0%, 100%)',
      'slate': {
        '300': 'hsl(212, 45%, 89%)',
        '500': 'hsl(216, 15%, 48%)',
        '900': 'hsl(218, 44%, 22%)',
      },
      // 保留默认颜色（可选）
      'black': 'hsl(0, 0%, 0%)',
    },
    // 扩展默认主题（避免覆盖）
    extend: {},
  },
  plugins: [],
} satisfies Config