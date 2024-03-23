import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LoginAdmin from './layouts/LoginAdmin.jsx'
import { AuthProvider } from './backend/contexts/auth.jsx'
import HomeAdminV0 from './layouts/HomeAdminV0.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ProductLayout, QALayout, ServiceLayout } from './layouts'

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
