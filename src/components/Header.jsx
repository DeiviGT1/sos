// create a header component

import React from 'react';
import './Header.module.css';
import logo from '../../src/assets/images/color-no-fondo.png'
import Principal from '../pages/Principal';
import Galeria from '../pages/Galeria';
import Contact from '../pages/Contact';
import Servicios from '../pages/Servicios';
import LoginPage from '../components/LoginPage';
import LogoutPage from '../components/LogoutPage';

import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const routes = [];
routes.push({ path: "/", name: "Home", Component: Principal });
routes.push({ path: "/galeria", name: "Galeria", Component: Galeria });
routes.push({ path: "/contact", name: "Contact", Component: Contact });
routes.push({ path: "/servicios", name: "Servicios", Component: Servicios });

const routesLog = [];
routesLog.push({ path: "/login", name: "Login", Component: LoginPage });
routesLog.push({ path: "/logout", name: "Logout", Component: LogoutPage });

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
          {routes.map(({ path, name, Component }) => (
            <li key={path}>
              <NavLink to={path} activeClassName="active"> 
                <span style={{ textTransform: 'uppercase' }}>{name}</span>
              </NavLink>
            </li>
            ))}
        </ul>
        <ul className=".log">
          {routesLog.map(({ path, name, Component }) => (
            <li key={path}>
              <NavLink to={path} activeClassName="active"> 
                <span style={{ textTransform: 'uppercase' }}>{name}</span>
              </NavLink>
            </li>
          ))}

        </ul>
      </nav>
    </header>
  );
}

export default Header;

