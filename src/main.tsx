import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './AppV2'
import 'bootstrap/dist/css/bootstrap.css'
import { AuthProvider } from './context/AuthProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
    <App />
    </AuthProvider>
  </React.StrictMode>,
)
