import React from 'react';
import logo from '../../assets/images/logo-vida-y-paz.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <img src={logo} alt="Logo Congregación Vida y Paz" className="h-12 mx-auto mb-4" />
        <p className="text-lg font-serif">Congregación Vida y Paz</p>
        <p className="text-sm text-gray-400 mt-2">
          © {currentYear} Congregación Vida y Paz. Todos los derechos reservados.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://www.facebook.com/profile.php?id=100090382652041" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">Facebook</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
