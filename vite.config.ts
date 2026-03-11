import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite' // 引入
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()], // 加入插件
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // 保持你已有的路径别名
    },
  },
})