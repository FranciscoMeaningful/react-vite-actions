import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://FranciscoMeaningful.github.io/react-vite-actions',
  plugins: [react()]
})
