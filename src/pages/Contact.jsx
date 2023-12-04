import React from "react";
import "./Contact.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Contact() {
  return(
    <>
    <Header/>
    <main>
      <section className="contacto" style={
        {
          textAlign: "center",
        }
      }>
        <h2>Contacto</h2>
        
        <form action="/enviar_formulario.php" method="post">
          <label for="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" required/>

          <label for="nombre">Celular:</label>
          <input type="text" id="celular" pattern="[0-9]{10}" name="nombre" required/>

          <label for="correo">Correo electrónico:</label>
          <input type="email" id="correo" name="correo" required/>

          <label for="mensaje">Mensaje:</label>
          <textarea id="mensaje" name="mensaje" rows="4" required></textarea>

          <button type="submit">Enviar</button>
        
        </form>
      </section>
    </main>
    
    </>
  )
}

export default Contact;