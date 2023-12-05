import React from 'react';
import './Header.module.css';
import logo from '../../src/assets/images/color-no-fondo.png'

import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../components/auth';

const routes = [];
routes.push({ path: "/", name: "Home" });
routes.push({ path: "/galeria", name: "Galeria" });
routes.push({ path: "/contact", name: "Contact" });

const routesLog = [];
routesLog.push({ path: "/login", name: "Login", private: false, onlyPublic: true});
routesLog.push({ path: "/profile", name: "Profile", private: true, });
routesLog.push({ path: "/logout", name: "Logout", private: true, });

function Header() {
  const auth = useAuth();

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
        <ul className="log">
        {routesLog.map(routeLog => (
          (routeLog.private && !auth.user) || (routeLog.onlyPublic && auth.user) ? null : (
            <li key={routeLog.path}>
              <NavLink to={routeLog.path} className="active">
                <span style={{ textTransform: 'uppercase' }}>{routeLog.name}</span>
              </NavLink>
            </li>
            )
        ))}


        </ul>
      </nav>
    </header>
  );
}

export default Header;

