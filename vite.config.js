import { defineConfig } from 'vite'
import react from 'vite-preset-react'

// https://vitejs.dev/config/
export default defineConfig({
  // this plugin removes the need to import react to every compoenent when using Vite
  plugins: [react()]
})
