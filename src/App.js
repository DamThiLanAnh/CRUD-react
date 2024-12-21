// import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './component/Home'
import addUpdate from './component/addUpdate'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path="/update/:id" element={<addUpdate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
