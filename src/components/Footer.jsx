import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-4 bg-dark text-white">
      <div className="container text-center">
        <div className="mb-3">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white me-4" aria-label="Facebook">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white me-4" aria-label="Twitter">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white" aria-label="Instagram">
            <FaInstagram size={24} />
          </a>
        </div>
        <span>&copy; {new Date().getFullYear()} Concesionaria React. Todos los derechos reservados.</span>
      </div>
    </footer>
  );
};

export default Footer;