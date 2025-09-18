import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',     // auto-injects SW registration
      devOptions: { enabled: true } // lets you see PWA in dev/preview
      // Optional minimal manifest (add icons later)
      // manifest: {
      //   name: 'My App',
      //   short_name: 'MyApp',
      //   start_url: '/',
      //   display: 'standalone',
      //   theme_color: '#000000',
      //   background_color: '#ffffff'
      // }
    })
  ]
})
