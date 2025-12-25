import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],

  server: {
    watch: {
      // Prevent watching heavy folders
      ignored: [
        '**/node_modules/**',
        '**/.git/**',
        '**/dist/**',
        '**/.wrangler/**',
      ],
    },
    hmr: {
      overlay: false, // reduce browser work
    },
  },

  build: {
    sourcemap: false, // dev build lighter
  },
})
