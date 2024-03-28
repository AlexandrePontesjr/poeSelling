import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import { AuthProvider } from './backend/contexts/auth.jsx'
import './index.css'
import { ProductLayout, QALayout, ServiceLayout } from './layouts'
import LoginAdmin from './layouts/LoginAdmin.jsx'

export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="admin" element={<LoginAdmin />} />
        <Route path="admin/products" element={<ProductLayout />} />
        <Route path="admin/services" element={<ServiceLayout />} />
        <Route path="admin/qas" element={<QALayout />} />
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Main />
    </AuthProvider>
  </React.StrictMode>,
)
