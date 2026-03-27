import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(), react()
  ],

  build: {
    // This removes console.logs and debuggers from the final build
    minify: 'esbuild',
    target: 'esnext',
    sourcemap: false, // Ensures your raw code isn't exposed
    // Drops console logs
    esbuild: {
      drop: ['console', 'debugger'],
    },
  }
})