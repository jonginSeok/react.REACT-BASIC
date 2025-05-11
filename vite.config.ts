import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "url";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
      "@components": fileURLToPath(new URL("./src/components", import.meta.url)),
      "@pages": fileURLToPath(new URL("./src/pages", import.meta.url)),
      "@recoil": fileURLToPath(new URL("./src/recoil", import.meta.url)),
      "@types": fileURLToPath(new URL("./src/types", import.meta.url)),
      "@apis": fileURLToPath(new URL("./src/apis", import.meta.url)),
    },
  },
  // SCSS 전역 사용
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@import "./src/assets/styles/main.scss";`
        // 상대경로 부분을 alias를 사용하여 변경(for Windows)
        // 2023.10.17 추가
        additionalData: `@import "@assets/styles/main.scss";`,
      },
    },
  },
  server: {
    hmr: {
      overlay: true, // false 하면 에러가 뜨지 않음
    },
  },
});
