import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '@/css/index.css'
import { BrowserRouter } from 'react-router-dom'
import { LoginProvider } from './context/login/provider'
import { QueryClient, QueryClientProvider } from 'react-query'

const client = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={client}>
        <LoginProvider>
          <App />
        </LoginProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
)
