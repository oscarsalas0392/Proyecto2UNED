import React from 'react';

function Location() {
  return (
    <section className="container my-5">
      <h2 className="h3 text-center mb-4" tabIndex="0">Ubicación</h2>
      <p className="text-center">
        Visítanos en nuestra tienda física para ver y probar nuestros productos frescos.
        Estamos ubicados en: <strong>Calle 1, Heredia, Costa Rica</strong>
      </p>
      <div className="d-flex justify-content-center">
        <iframe
          title="Ubicación de FreshBites"
          src="https://www.google.com/maps/embed?pb=...tu_map_url..."
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}

export default Location;