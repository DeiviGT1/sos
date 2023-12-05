// create a header component

import React from 'react';
import './Header.module.css';
import logo from '../../src/assets/images/color-no-fondo.png'
import { useAuth } from '../components/auth';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const routes = [];
routes.push({ path: "/", name: "Home", private: false });
routes.push({ path: "/galeria", name: "Galeria", private: false });
routes.push({ path: "/contact", name: "Contact", private: false });

const routesLog = [];
routesLog.push({ path: "/login", name: "Login", private: false, publicOnly: true });
routesLog.push({ path: "/profile", name: "Profile", private: true });
routesLog.push({ path: "/logout", name: "Logout", private: true });

function Header() {
  const auth = useAuth();

  if (!auth.user) {

  }

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
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header>
      <div className="logo">
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <nav>
        <ul>
          {routes.map(({ path, name }) => (
            <li key={path}>
              <NavLink to={path} className="active"> 
                <span style={{ textTransform: 'uppercase' }}>{name}</span>
              </NavLink>
            </li>
            ))}
        </ul>
        <ul className=".log">
          {routesLog.map(routesLog => {
            if (routesLog.publicOnly && auth.user) return null
            if (routesLog.private && !auth.user) return null 
            
            return(
            <li key={routesLog.path}>
              <NavLink to={routesLog.path} className="active"> 
                <span style={{ textTransform: 'uppercase' }}>
                  {routesLog.name}
                </span>
              </NavLink>
            </li>
            )})}

        </ul>
      </nav>
    </header>
  );
}

export default Header;

