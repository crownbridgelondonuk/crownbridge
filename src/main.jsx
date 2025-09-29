import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { inject } from '@vercel/analytics'
inject()

import { SpeedInsights } from "@vercel/speed-insights/react"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <SpeedInsights /> {/* Collects Web Vitals */}
  </StrictMode>,
)
