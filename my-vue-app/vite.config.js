import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes("-"),
        },
      },
    }),
  ],
  build: {
    lib: {
      entry: "./src/hello.js",
      formats: ["es", "cjs"],
      name: "vue-web-comp",
      fileName: (format) => (format === "es" ? "index.js" : "index.cjs"),
    },
    sourcemap: true,
    target: "esnext",
    minify: false,
  },
});
