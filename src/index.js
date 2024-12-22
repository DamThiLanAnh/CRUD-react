import React from 'react'
import ReactDom from 'react-dom/client'
import Navbar from './component/navbar'
import Footer from './component/footer'
function App() {
  return (
    <>
      <Navbar />
      <Footer />
    </>
  )
}

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)