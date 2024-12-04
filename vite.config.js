import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/alfie-leave-app/',
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      external: ['lucide-react']
    }
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
