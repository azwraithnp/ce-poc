import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith("bl-ce-"),
        },
      },
    }),
  ],
  build: {
    lib: {
      entry: "./src/hello.js",
      formats: ["es", "cjs"],
      name: "say-hello",
      fileName: (format) => (format === "es" ? "index.js" : "index.cjs"),
    },
    sourcemap: true,
    target: "esnext",
    minify: false,
  },
  server: {
    port: 3000,
  },
});
