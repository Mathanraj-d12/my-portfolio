import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default {
  server: {
    port: process.env.PORT || 4173,
    host: '0.0.0.0', // Bind to all interfaces for Render
  },
  preview: {
    port: process.env.PORT || 4173,
    host: '0.0.0.0',
    allowedHosts: ['my-portfolio-2-oij3.onrender.com', '.onrender.com'], // Allow Render's domain
  },
}
