import React from "react";
import "./Footer.module.css";
import logo from "../../src/assets/images/color-no-fondo.png";

function Footer() {
  return (
  <footer>
      <section>
        <div class="footer-t">
          <div class="footer-lt">
            <div class="footer-logo">
            <img src={logo} />
            </div>
            <div class="footer-text">
              <div class="info-contact">
                <h2>Información de Contacto</h2>
                <div class="textwidget">
                  <p> Teléfonos</p>
                  <span class="phone"><a href="tel:6043669908"> <p>(604) 366 9908 </p></a></span>
                  <span class="cell"><a href="tel:+573108956559"><p> (+ 57) 310 895 65 59 </p></a></span>
                  <p>Dirección</p>
                  <span class="addres"><a href="https://maps.app.goo.gl/uEcbZHnbezJid33k6"><p>CLL 44 No. 79 - 157</p></a></span>
                  <p>Correo Electrónico</p>
                  <span><a href="mailto:info@sosllavesyclaves.com"><p>  info@sosllavesyclaves.com</p></a></span> 
                </div>
              </div>
            </div>
          </div>
          <p>
            S.O.S. Llaves y Claves, 2024. Todos los derechos reservados. Diseño
            y desarrollo por <a href="https://jdavidgonzalez.netlify.app/#">@David</a>
          </p>
        </div>
      <div class="maps">
        <gmp-map center="6.248997211456299,-75.59228515625" zoom="16" map-id="DEMO_MAP_ID">
          <gmp-advanced-marker position="6.248997211456299,-75.59228515625" title="My location">
          </gmp-advanced-marker>
        </gmp-map>
      </div>
      
    </section>

  </footer>
  )
}

export default Footer;