import React from "react";
import "./Contact.module.css";
import Modal from "../components/Modal";
import { useState } from "react";

function Contact() {
  const [isOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  const data = {
    nombre: formData.get("nombre"),
    celular: formData.get("celular"),
    correo: formData.get("correo"),
    mensaje: formData.get("mensaje"),
  };

  const response = await fetch("enviar_formulario", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
  
  .then(() => {
    console.log(isOpen)
    setIsModalOpen(true)
    console.log(isOpen)
  })
  .then(() => {
    console.log(isOpen)})
  }
  
  // .then(() => {
  //   window.location.href = "/";
  //   })

  const handleClose = () => {
    setIsModalOpen(false);
  }

  return(
    <>
    <main>
      <section className="contacto" style={
        {
          textAlign: "center",
        }
      }>
        <h2>Contacto</h2>
        
        <form onSubmit={handleSubmit}>
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              //placeholder={"David Gonzalez"}
              defaultValue={"David Gonzalez"}
              required
            />

            <label htmlFor="celular">Celular:</label>
            <input
              type="text"
              id="celular"
              pattern="[0-9]{10}"
              name="celular"
              defaultValue={"3173737496"}
              required
            />

            <label htmlFor="correo">Correo electrónico:</label>
            <input
              type="email"
              id="correo"
              name="correo"
              defaultValue={"tucorreo@gmail.com"}
            />

            <label htmlFor="direccion">Dirección:</label>
            <input
              type="direccion"
              id="direccion"
              name="direccion"
              defaultValue={"Carrera 73 # 43-04"} 
              required
            />

            <label htmlFor="servicio">¿Qué servicio solicitas?</label>
            <textarea
              type="servicio"
              id="servicio"
              name="servicio"
              rows="8"
              defaultValue={"Apertura de puertas, cambio de cerraduras, etc."}
              required
            ></textarea>
            <button type="submit">Enviar</button>
          </form>
      </section>
    </main>
    <div>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <h2>¡Gracias por contactarnos!</h2>
        <p>En breve nos comunicaremos contigo.</p>
      </Modal>
    </div>
    </>
  )
}

export default Contact;
