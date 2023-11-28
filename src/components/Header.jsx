// create a header component

import React from 'react';
import './Header.module.css';
import logo from '../../src/assets/images/color-no-fondo.png'

function Header() {
  return  (
    <header>
    <div className="logo">
      <img src={logo} />
    </div>
    <nav>
      
      <ul>
        <li><a href="index.html">INICIO</a></li>
        <li>
          <a href="/galeria.html">GALERIA</a>
        </li>
        <li>
          <a href="index.php?controller=usuario&action=registro"
            >CONTACTENOS</a
          >
        </li>
      </ul>
      <ul className=".log">
        <li className="login">
          <a href="">
            <p>INICIAR SESIÓN</p>
          </a>
        </li>
        <li>
          <a href="index.php?controller=usuario&action=registro">
            <p>REGISTRARSE</p>
          </a>
        </li>
      </ul>
    </nav>
    </header>
  )
}

export default Header;