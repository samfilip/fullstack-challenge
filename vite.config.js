import { defineConfig } from 'vite'
import react from 'vite-preset-react'

// https://vitejs.dev/config/
export default defineConfig({
  // injectReact set to false in order for testing to work
  plugins: [react({ injectReact: false })]
})
