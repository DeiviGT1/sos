// create a header component

import React from 'react';
import './Header.module.css';
import logo from '../../src/assets/images/color-no-fondo.png'
import { useEffect } from 'react';

function Header() {
  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const width = window.innerWidth;

      if (prevScrollPos > currentScrollPos) {
        document.querySelector('header').style.top = '0';
        document.querySelector('header').style.position = 'fixed';
      } else {
        if (currentScrollPos < 10) {
          document.querySelector('header').style.top = '0';
          return;
        } else {
          if (width > 1100) {
            document.querySelector('header').style.top = '-100px';
            document.querySelector('header').style.position = 'fixed';
          } else {
            document.querySelector('header').style.top = '-175px';
            document.querySelector('header').style.position = 'fixed';
          }
        }
      }

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      // Cleanup: remove the event listener when the component unmounts
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // The empty dependency array ensures the effect runs once after the component mounts

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav>
        <ul>
          <li><a href="/">INICIO</a></li>
          <li><a href="/galeria">GALERIA</a></li>
          <li><a href="/contact">CONTACTENOS</a></li>
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
  );
}

export default Header;