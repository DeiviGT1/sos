import React from "react";
import "./Principal.module.css";
import cerrojo from "../assets/cerrojo.jpg";
import cerrajero2 from "../assets/cerrajero2.jpg";
import cerrajero3 from "../assets/candado.jpg";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from "react-router-dom";

function Principal() {
  return(
    <>
    <Header />
      <main>
        <section className="main">
        <h2>S.O.S. Llaves y claves</h2>
      
        <div className="main">
          <div className="main-image"></div>
          <div className="main-text">
            <p>
              Bienvenidos a S.O.S. Llaves y Claves, donde nos dedicamos a superar
              sus expectativas en servicios de cerrajería. Nuestro equipo
              altamente capacitado ofrece soluciones rápidas y eficientes, desde
              aperturas y reparaciones hasta cambios de claves para cerraduras de
              todo tipo. Nos enorgullece brindar seguridad y tranquilidad a
              nuestros clientes con servicios especializados en puertas blindadas
              y cajas fuertes. En S.O.S. Llaves y Claves, su satisfacción y
              seguridad son nuestra prioridad. Confíe en nosotros para solucionar
              sus necesidades de cerrajería de manera confiable y profesional.
            </p>
          </div>
        </div>
          
        </section>
        <section className="servicios">
          <h2>Servicios</h2>
          
            <ul>
              <li className="apertura">
                <h3>Apertura</h3>
                <div className="serv">
                  <img src={cerrojo} alt="" />
                  <ul>
                    <li>Muebles</li>
                    <li>Vehículos</li>
                    <li>Inmuebles</li>
                    <li>Artículos de clave</li>
                    <li>Cajas fuertes</li>
                  </ul>
                  <div>
                    <button>
                      <Link to="/servicios">
                        Ver mas
                      </Link>
                    </button>
                  </div>
                </div>
              </li>
              <li className="cambio-de-clave">
                <h3>Cambios de clave</h3>
                <div className="serv">
                  <img src={cerrajero2} alt="" />
                  <ul>
                    <li>Cerraduras sencilas</li>
                    <li>Cerraduras de seguridad</li>
                    <li>Cinlindros de vehículos</li>
                    <li>Caja fuerte de dial o digital</li>
                  </ul>
                  <div>
                    <button>
                      <Link to="/servicios">
                        Ver mas
                      </Link>
                    </button>
                  </div>
                </div>
              </li>
              <li className="instalacion-de-cerradura">
                <h3>Instalación de cerraduras</h3>
                <div className="serv">
                  <img src={cerrajero3} alt="" />
                  <ul>
                    <li>Platinas de seguridad</li>
                    <li>Ojos mágicos</li>
                    <li>Pivotes de seguridad</li>
                    <li>Pasadores</li>
                    <li>Electroimanes</li>
                    <li>Cantoneras</li>
                    <li>Tope de puerta</li>
                    <li>Gatos hidráulicos</li>
                    <li>Cajas fuertes</li>
                    <li>Puertas de seguridad</li>
                  </ul>
                  <div>
                    <button>
                      <Link to="/servicios">
                        Ver mas
                      </Link>
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </section>      
          <section className="whower">
            <h2>¿Quienes somos?</h2>
            <p>
              SOS Llaves y Claves, establecida desde el 1 de agosto de 2004,
              tiene como objetivo principal ofrecer servicios de seguridad.
              Buscamos generar empleo, bienestar y confianza entre nuestros
              clientes y colaboradores. Contamos con un equipo técnico y
              administrativo altamente capacitado, respaldado por la experiencia
              de 18 años de nuestro fundador. Hemos ganado la confianza de
              empresas reconocidas a nivel departamental y nacional. En SOS Llaves
              y Claves nos especializamos en servicios de seguridad, abarcando
              desde la apertura y reparación de cerraduras hasta el cambio de
              claves. Nos comprometemos a mantener altos estándares de calidad y
              confiabilidad, aspirando a ser su elección preferida para asegurar
              su bienestar y seguridad.
            </p>
          </section>
      </main>
    <Footer />
    </>
  )
}

export default Principal;