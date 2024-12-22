import React from 'react'
import ReactDom from 'react-dom/client'
import Navbar from './component/navbar'
import Footer from './component/footer'
import Home from './component/home'
import Product from './component/product'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)