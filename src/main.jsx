import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '@/css/index.css'
import { BrowserRouter } from 'react-router-dom'
import { LoginProvider } from './context/login/provider'
import { PreferencesProvider } from './context/preferences'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <LoginProvider>
        <PreferencesProvider>
          <App />
        </PreferencesProvider>
      </LoginProvider>
    </BrowserRouter>
  </React.StrictMode>
)
