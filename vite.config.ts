import path from "path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  return {
    base: "/", // ✅ REQUIRED for custom domain

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

    optimizeDeps: {
      include: ["firebase/app", "firebase/firestore", "firebase/analytics"],
    },
  };
});
