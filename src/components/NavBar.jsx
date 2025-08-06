import React, { useState } from 'react'; 
import '../css/NavBar.css'; 
import CardWidget from './CardWidget';
const Navbar = () => {  
  // Estado para controlar si el menú móvil está abierto o cerrado
  const [isOpen, setIsOpen] = useState(false);

  // Función para alternar el estado del menú
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
       
        <img src="/logo.png" alt="Logo" />
      </div>

      {/* Botón de hamburguesa para pantallas pequeñas */}
      <button 
        className={`hamburger-button ${isOpen ? 'open' : ''}`} 
        onClick={toggleMenu}
        aria-label="Toggle navigation menu" // Accesibilidad
      >
        <span className="hamburger-icon"></span>
        <span className="hamburger-icon"></span>
        <span className="hamburger-icon"></span>
      </button>

      {/* Lista de enlaces, con clase condicional para mostrar/ocultar en móvil */}
      <ul className={`navbar__links ${isOpen ? 'navbar__links--open' : ''}`}>
        <li><a href="/">Inicio</a></li>
        <li><a href="/about">Acerca de</a></li>
        <li><a href="/contact">Contacto</a></li>
        <li><CardWidget/></li>
      </ul>
    </nav>
  );
}

export default Navbar;
