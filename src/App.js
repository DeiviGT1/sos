import React from 'react';
import Principal from './pages/Principal';
import Galeria from './pages/Galeria';
import Contact from './pages/Contact';
import Servicios from './pages/Servicios';
import Profile from './pages/Profile';
import LoginPage from './components/LoginPage';
import LogoutPage from './components/LogoutPage';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom"
import { AuthProvider } from "./components/auth"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Principal />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/servicios" element={<Servicios />} />
            
            <Route path="/login" element={<LoginPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/logout" element={<LogoutPage />} />
          </Routes>
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
