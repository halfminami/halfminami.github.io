import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

import { inputs } from "./inputs";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  build: {
    rollupOptions: {
      input: inputs,
    },
  },
});
