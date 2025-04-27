import React from 'react';

function AboutUs() {
  return (
    <div>

    <section className="container my-5">
            <h2 className="h3 text-center mb-4" tabIndex="0">Sobre Nosotros</h2>
            <p>Conoce nuestra historia y cómo trabajamos para ofrecerte productos saludables y frescos.</p>
    </section>

      <div className="container">
      <section>
            <section>
                <h2 className="section-title">Nuestra Misión</h2>
                <p>
                    En <strong>FreshBites</strong>, nos dedicamos a brindar a nuestros clientes productos frescos, orgánicos y de alta calidad, pensados para aquellos que buscan llevar un estilo de vida saludable. Creemos que la alimentación debe ser no solo deliciosa, sino también responsable con el medio ambiente. Es por eso que cada uno de nuestros productos proviene de cultivos sostenibles, asegurando que lo que consumes sea lo mejor para tu bienestar y el de nuestro planeta.
                </p>
            </section> 

            <section className='mt-5'>
                <h2 className="section-title">Nuestra Visión</h2>
                <p>
                    <strong>FreshBites</strong> aspira a ser un referente en la industria de productos orgánicos, ofreciendo opciones accesibles y de alta calidad para todos. Queremos ser parte de tu día a día, brindándote opciones que no solo cuidan de tu salud, sino también del medio ambiente. Estamos comprometidos con la innovación, la sostenibilidad y la excelencia, trabajando constantemente para ofrecerte lo mejor.
                </p> 
            </section> 

            <section className='mt-5'>
                <h2 className="section-title">Nuestros Valores</h2>
                <ul className="values-list">
                    <li><strong>Sostenibilidad:</strong> Promovemos prácticas agrícolas responsables y respetuosas con la naturaleza.</li>
                    <li><strong>Calidad:</strong> Nuestros productos son seleccionados cuidadosamente para garantizar frescura y sabor en cada entrega.</li>
                    <li><strong>Salud:</strong> Apostamos por un estilo de vida saludable, ofreciendo solo alimentos que enriquecen tu bienestar.</li>
                </ul>
            </section>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;