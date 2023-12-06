import React from "react";
import sub from "./Servicios.module.css";
import cerrajero from "../assets/cerrajero2.jpg";

function Servicios() {
  return (
    <>
    
    <main>
      <section className={sub.subtitle}>
        <h2>Apertura</h2>
        <div>
          <p>
            Con los más altos estándares de excelencia, en S.O.S. Llaves y
            Claves ofrecemos servicios de primera calidad para atender
            situaciones de precariedad y prevenir contratiempos. Nos
            especializamos en la apertura, reparación y cambio de claves para
            una amplia gama de cerraduras, desde las más sencillas hasta las de
            seguridad. Además, brindamos soluciones especializadas para puertas
            blindadas, cajas fuertes, registradoras, cerraduras de escritorio,
            archivadores, candados y maletas con clave. <br/><br/>
            En S.O.S. Llaves y
            Claves, también estamos preparados para abrir cualquier tipo de
            vehículo, independientemente de la marca, ya sea Mazda, Renault,
            Toyota, Ford, entre otras. Nuestra misión es proporcionar servicios
            integrales, manteniendo la calidad y la eficiencia en cada
            intervención, para ofrecer tranquilidad y seguridad a nuestros
            clientes en momentos de urgencia y como medida preventiva.
          </p>
          <img src={cerrajero} alt=""/>
        </div>
      </section>
    </main>
    
    </>
  )
}

export default Servicios;