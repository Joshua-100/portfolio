import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/portfolio/', // EXACTLY this (matches your repo name)
  plugins: [react()],
})
