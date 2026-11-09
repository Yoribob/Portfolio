import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './globals.css'
import { AppLayout } from '../components/layout/AppLayout'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppLayout/>
  </StrictMode>,
)
