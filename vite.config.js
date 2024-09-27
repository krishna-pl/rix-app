import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/rix-app/', // Make sure to set this
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 1500,
  }

})
