import React from 'react';

const products = [
  {
    id: 1,
    name: 'Manzanas Orgánicas',
    description: 'Manzanas frescas y orgánicas, perfectas para disfrutar en cualquier momento.',
    price: '$2.50',
    image: 'imagen5.webp',
  },
  {
    id: 2,
    name: 'Aguacates',
    description: 'Aguacates de la más alta calidad, ricos en nutrientes y perfectos para ensaladas.',
    price: '$3.00',
    image: 'imagen6.avif',
  },
  {
    id: 3,
    name: 'Zanahorias',
    description: 'Zanahorias frescas, ideales para cocinar o comer crudas como snack.',
    price: '$1.20',
    image: 'imagen7.jpg',
  },
  {
    id: 4,
    name: 'Espinacas Orgánicas',
    description: 'Espinacas frescas y orgánicas, perfectas para ensaladas y batidos.',
    price: '$2.00',
    image: 'imagen8.jpg',
  },
];

function Products() {
  return (
    <section className="container my-5">
      <h2 className="h3 text-center mb-4" tabIndex="0">Nuestros Productos</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-3 mb-4" key={product.id}>
            <div className="card" aria-labelledby={product.name}>
              <img src={product.image} alt={product.name} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title" id={product.name}>{product.name}</h5>
                
                <p className="card-text">{product.description}</p>
                <p className="text-primary">{product.price}</p>
                <div className='text-center'>
                    <button className="btn btn-success">Agregar al carrito</button>
                </div>
            
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;