import React from "react";
import "./Contact.module.css";

function Contact() {
  const handleSubmit = async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  await fetch("/enviar_formulario", {
    method: "post",
    body: JSON.stringify({ data: formData.entries() }),
    })
    .then((res) => res.json())
    .then((data) => {
      console.log("Response from server:", data);
    })
    .catch((error) => {
      console.error("Error submitting form:", error);
    });
  };

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
              defaultValue={"Jose"}
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
              defaultValue={"josedago1163@gmail.com"}
              required
            />

            <label htmlFor="mensaje">¿Qué servicio necesitas?</label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows="4"
              defaultValue={"Mensaje"}
              required
            ></textarea>

            <button type="submit">Enviar</button>
          </form>
      </section>
    </main>
    
    </>
  )
}

export default Contact;
