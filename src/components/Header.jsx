import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-success text-white py-3" role="banner">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="h3 mb-0" tabIndex="0">FreshBites</h1>
        <nav aria-label="Navegación principal">
          <ul className="nav">
            <li className="nav-item">
              <Link to="/" className="nav-link text-white" aria-current="page">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link to="/productos" className="nav-link text-white">Productos</Link>
            </li>
            <li className="nav-item">
              <Link to="/sobre-nosotros" className="nav-link text-white">Sobre Nosotros</Link>
            </li>
            <li className="nav-item">
              <Link to="/ubicacion" className="nav-link text-white">Ubicación</Link>
            </li>
            <li className="nav-item">
              <Link to="/contacto" className="nav-link text-white">Contáctenos</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;