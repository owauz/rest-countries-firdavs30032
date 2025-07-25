import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
  <BrowserRouter>
  <StrictMode>
  <App />
  </StrictMode>
  </BrowserRouter>
  </QueryClientProvider>
)