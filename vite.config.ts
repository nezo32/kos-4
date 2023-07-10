import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  // @ts-ignore
  plugins: [vue({ script: { defineModel: true } })],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    target: "esnext",
    lib: {
      entry: resolve(__dirname, "src/lib.ts"),
      name: "KLibrary",
      fileName: "KLibaray",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
