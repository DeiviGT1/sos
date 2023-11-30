import React from 'react';
import Principal from './pages/Principal';
import Galeria from './pages/Galeria';
import Contact from './pages/Contact';
import Servicios from './pages/Servicios';
import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/galeria" element={<Galeria/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/servicios" element={<Servicios />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
