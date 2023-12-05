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
import { Route, Routes, HashRouter } from "react-router-dom"
import { AuthProvider, AuthRoute } from "./components/auth"

function App() {
  return (
    <div className="App">
      <HashRouter>
        <AuthProvider>
          <Header />
            <Routes>
            
              <Route path="/" element={<Principal />} />
              <Route path="/galeria" element={<Galeria />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/servicios" element={<Servicios />} />
              
              <Route path="/login" element={<LoginPage />} />
              <Route 
                path="/profile" 
                element={
                  <AuthRoute>
                    <Profile />
                  </AuthRoute>
                } 
                />
              <Route 
                path="/logout" 
                element={
                  <AuthRoute>
                    <LogoutPage />
                  </AuthRoute>
                  } />
            
            </Routes>
          <Footer />
        </AuthProvider>
      </HashRouter>
    </div>
  );
}

export default App;
