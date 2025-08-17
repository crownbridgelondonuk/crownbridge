/* eslint-env node */
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default ({ mode } = {}) => {
  const env = loadEnv(mode, process.cwd(), '') // loads .env, .env.production, etc.
  return defineConfig({
    plugins: [react()],
    base: env.VITE_BASE_PATH || '/' // default to root for Vercel
  })
}
