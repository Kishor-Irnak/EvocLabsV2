import path from "path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  return {
    base: "/", // ✅ Adjusted for Custom Domain (www.evoclabs.com)

    server: {
      port: 3000,
      host: "0.0.0.0",
    },

    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "."),
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            "firebase-vendor": [
              "firebase/app",
              "firebase/firestore",
              "firebase/analytics",
            ],
            "ui-vendor": ["framer-motion", "lucide-react"],
            "charts-vendor": ["recharts"],
          },
        },
      },
    },
    optimizeDeps: {
      include: ["firebase/app", "firebase/firestore", "firebase/analytics"],
    },
  };
});
