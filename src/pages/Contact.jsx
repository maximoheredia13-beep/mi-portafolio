import { useState } from "react";

function Contact() {

  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");

  const enviarFormulario = (e) => {
    e.preventDefault();

    alert(`Gracias ${nombre}, tu mensaje fue enviado.`);
  };

  return (
    <div className="card p-5 shadow">

      <h2 className="mb-4">
        Contacto
      </h2>

      <form onSubmit={enviarFormulario}>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Tu nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <textarea
          className="form-control mb-3"
          placeholder="Tu mensaje"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
        ></textarea>

        <button
          type="submit"
          className="btn btn-dark"
        >
          Enviar
        </button>

      </form>

    </div>
  );
}

export default Contact;