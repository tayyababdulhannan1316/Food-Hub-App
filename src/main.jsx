import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './config/global'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './contexts/Auth.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> 
    <AuthProvider>  
    <App />
    </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
