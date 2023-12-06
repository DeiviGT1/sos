import React from 'react';
import Principal from './pages/Principal';
import Galeria from './pages/Galeria';
import Contact from './pages/Contact';
import Servicios from './pages/Servicios';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import { Route, Routes, HashRouter } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <HashRouter>

          <Header />
            <Routes>
            
              <Route path="/" element={<Principal />} />
              <Route path="/galeria" element={<Galeria />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/servicios" element={<Servicios />} />
              
            
            </Routes>
          <Footer />

      </HashRouter>
    </div>
  );
}

export default App;
