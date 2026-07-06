import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Ensure this matches your exact GitHub repository name
  base: '/portfolio', 
  plugins: [
    react(),
    tailwindcss(),
  ],
  server:{
    port:3000,
    strictPort:true
  }
})