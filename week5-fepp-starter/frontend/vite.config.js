import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/api": { //matches request path with /api
        target: "http://localhost:4000", // where to send
        changeOrigin: true, // talks to the middleman
      },
    },
  },
});


