import React from 'react';

import Principal from './pages/Principal';
import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Principal />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
