import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Principal from './pages/Principal';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Principal />
      <Footer />
    </div>
  );
}

export default App;
