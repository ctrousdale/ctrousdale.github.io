import path from "path";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import pluginChecker from "vite-plugin-checker";

// https://vite.dev/config/
export default defineConfig({
  base: "ctrousdale.github.io",
  plugins: [
    react(),
    tailwindcss(),
    pluginChecker({
      typescript: true,
    }),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
