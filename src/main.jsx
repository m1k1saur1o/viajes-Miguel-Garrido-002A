import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Tailwind y estilos globales
import './tailwind.css'
import './index.css'

import App from './App.jsx'

// La aplicación no tiene backend real: MSW simula las APIs REST y GraphQL.
// Por eso el worker se inicia siempre (también en `vite preview`).
async function enableMocking() {
  const { worker } = await import('./mocks/browser')
  return worker.start({ onUnhandledFrame: 'bypass' })
}

enableMocking().then(() => {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
})
