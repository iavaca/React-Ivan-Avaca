import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link, NavLink } from 'react-router-dom';
import CardWidget from './CardWidget';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="/logo.png" alt="Logo" style={{ height: '40px' }} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end>Inicio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/autos/">Autos</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/motos/">Motos</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/camionetas/">Camionetas</NavLink>
            </li>
            <li className="nav-item d-flex align-items-center">
              <CardWidget />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
