import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   base: '/',
//   plugins: [react()], // Must be present for React/JSX support
//   server: {
//     port: process.env.PORT || 4173,
//     host: '0.0.0.0',
//   },
//   preview: {
//     port: process.env.PORT || 4173,
//     host: '0.0.0.0',
//     allowedHosts: ['my-portfolio-3-rr9y.onrender.com', '.onrender.com'],
//   },
//   build: {
//     outDir: 'dist',
//   },
// })



// {
//   "name": "my-portfolio-react",
//   "private": true,
//   "version": "0.0.0",
//   "type": "module",
//   "scripts": {
//     "start": "vite preview --port $PORT --host 0.0.0.0",
//     "dev": "vite",
//     "build": "vite build",
//     "lint": "eslint .",
//     "preview": "vite preview"
//   },
//   "dependencies": {
//     "@emailjs/browser": "^4.4.1",
//     "react": "^19.1.1",
//     "react-dom": "^19.1.1"
//   },
//   "devDependencies": {
//     "@eslint/js": "^9.36.0",
//     "@types/react": "^19.1.16",
//     "@types/react-dom": "^19.1.9",
//     "@vitejs/plugin-react": "^5.0.4",
//     "eslint": "^9.36.0",
//     "eslint-plugin-react-hooks": "^5.2.0",
//     "eslint-plugin-react-refresh": "^0.4.22",
//     "globals": "^16.4.0",
//     "vite": "^7.1.7"
//   }
// }