function ProductCard({ image, name, description }) {
    return (
      <div className="card h-100 shadow-sm" tabIndex="0" role="article">
        <img src={image} className="card-img-top" alt={`Imagen de ${name}`} />
        <div className="card-body">
          <h2 className="card-title h5" tabIndex="0">{name}</h2>
          <p className="card-text" tabIndex="0">{description}</p>
        </div>
      </div>
    );
  }
  
  export default ProductCard;