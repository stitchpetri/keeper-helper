import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/keeper-helper/',   // <-- repo name with leading/trailing slashes
  plugins: [react()],
})