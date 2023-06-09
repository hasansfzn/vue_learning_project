import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
// import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      // "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  plugins: [vue()],
});
