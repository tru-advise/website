import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Ensures the build output goes to the 'dist' folder
    outDir: 'dist',
    // Optimizes the build for production
    minify: 'terser',
  },
})