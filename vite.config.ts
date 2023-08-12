import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  build: {
    rollupOptions: {
      input: {
        "index.html": "index.html",
        "demo/index.html": "demo/index.html",
        "demo/livemj.html": "demo/livemj.html",
        "demo/namedcolor.html": "demo/namedcolor.html",
        "fancy/index.html": "fancy/index.html",
        "fancy/timeline.html": "fancy/timeline.html",
      },
    },
  },
});
