// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    
    host: '0.0.0.0',
    port: 10003, // atau port lain
    allowedHosts: [
      'pengurus-app.simsmk.sch.id'
    ]
  },
})
