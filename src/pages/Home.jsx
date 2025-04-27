import React from 'react';

function Home() {
  return (
    <section className="container my-5">
      {/* Sección de bienvenida */}
      <div className="text-center mb-4">
        <h1 className="display-4">Bienvenidos a FreshBites</h1>
        <p className="lead">Tu tienda de productos frescos y orgánicos, ideales para una vida saludable.</p>
      </div>

      {/* Información sobre la empresa */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <h2 className="h3 text-center">¿Quiénes somos?</h2>
          <p>
            FreshBites es una empresa con más de 5 años de experiencia en el mercado, dedicada a ofrecer
            productos alimenticios orgánicos y frescos. Nos apasiona promover un estilo de vida saludable
            a través de alimentos naturales, sin conservantes ni aditivos artificiales.
          </p>
          <p>
            Nuestra misión es brindarte lo mejor de la naturaleza, directamente a tu mesa, con un enfoque
            en la sostenibilidad y la calidad. Nos comprometemos a ofrecer productos frescos, de origen local,
            y cultivados bajo prácticas responsables con el medio ambiente.
          </p>
        </div>
        <div className="col-md-6">
          <img src="imagen1.avif" alt="Equipo FreshBites" className="img-fluid rounded" />
        </div>
      </div>

      {/* Productos destacados */}
      <div className="text-center mb-5">
        <h2 className="h3">Nuestros Productos</h2>
        <p>Descubre nuestra amplia gama de productos orgánicos y frescos, ideales para toda la familia.</p>
        <a href="/productos" className="btn btn-success">Ver todos los productos</a>
      </div>

      {/* Beneficios de elegir FreshBites */}
      <div className="row text-center">
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="imagen2.jpg" alt="Beneficio 1" className="card-img-top imgbeneficios" />
            <div className="card-body">
              <h5 className="card-title">Productos Frescos</h5>
              <p className="card-text">Te ofrecemos productos frescos todos los días, directamente del campo a tu hogar.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="imagen3.jpg" alt="Beneficio 2" className="card-img-top imgbeneficios" />
            <div className="card-body">
              <h5 className="card-title">Compromiso con el Medio Ambiente</h5>
              <p className="card-text">Apoyamos prácticas sostenibles para garantizar un futuro más verde para todos.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="imagen4.jpg" alt="Beneficio 3" className="card-img-top imgbeneficios" />
            <div className="card-body">
              <h5 className="card-title">Variedad de Productos</h5>
              <p className="card-text">Desde frutas y verduras hasta snacks saludables, tenemos todo lo que necesitas.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonios (opcional) */}
      <div className="text-center mt-5">
        <h2 className="h3">Lo que dicen nuestros clientes</h2>
        <p>"FreshBites ha transformado nuestra manera de comer. Los productos son frescos, saludables y de excelente calidad."</p>
        <p>- Juan Pérez, cliente satisfecho</p>
      </div>
    </section>
  );
}

export default Home;