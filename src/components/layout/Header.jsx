import React from 'react';
import logo from '../../assets/images/logo-vida-y-paz.png';

const Header = () => {
  const navLinks = [
    { title: 'Inicio', id: 'hero' },
    { title: 'Sobre Nosotros', id: 'about' },
    { title: 'Creencias', id: 'beliefs' },
    { title: 'Horarios', id: 'services' },
    { title: 'Contacto', id: 'contact' },
  ];

  return (
    <header className="bg-gray-800 shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div>
          <img src={logo} alt="Logo Congregación Vida y Paz" className="h-16" />
        </div>
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-gray-300 hover:text-white transition-colors duration-300 font-semibold"
            >
              {link.title}
            </a>
          ))}
        </div>
        {/* Mobile Menu Button - can be implemented later */}
        <div className="md:hidden">
          <button className="text-gray-300 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
