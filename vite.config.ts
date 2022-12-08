import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      // 只有在main.js引入一个其他scss文件或者在.vue文件中使用<style lang="scss"><style> 不能在别的地方引用这个文件
      scss: {
        additionalData: `@import '@/style/variables.scss';`,
      },
    },
  },
});
