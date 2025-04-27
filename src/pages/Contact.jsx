import React from 'react';

function Contact() {
  return (
    <section className="container my-5">
      <h2 className="h3 text-center mb-4" tabIndex="0">Contáctanos</h2>
      
      {/* Información sobre la empresa */}
      <section className="mb-5">
        <h3 className="h4">Conoce más sobre FreshBites</h3>
        <p>
          En <strong>FreshBites</strong>, nos especializamos en ofrecer productos orgánicos y saludables que contribuyen a un estilo de vida equilibrado. Nuestra misión es brindarte alimentos frescos, libres de químicos y cultivados de manera sostenible, siempre priorizando la salud de nuestros clientes y el cuidado del medio ambiente.
        </p>
        <p>
          Si tienes alguna pregunta, necesitas más información sobre nuestros productos, deseas colaborar con nosotros o simplemente quieres compartir tu experiencia, ¡estamos aquí para ayudarte! Completa el formulario de contacto a continuación y nos pondremos en contacto contigo lo antes posible.
        </p>
      </section>

      {/* Formulario de contacto */}
      <h3 className="h4 text-center">Formulario de Contacto</h3>
      <form action="#" method="POST">
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre</label>
          <input type="text" className="form-control" id="nombre" required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo Electrónico</label>
          <input type="email" className="form-control" id="email" required />
        </div>
        <div className="mb-3">
          <label htmlFor="mensaje" className="form-label">Mensaje</label>
          <textarea className="form-control" id="mensaje" rows="4" required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Enviar mensaje</button>
      </form>
    </section>
  );
}

export default Contact;