import React from 'react';

const Button = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-secondary text-white font-bold py-2 px-6 rounded-lg hover:bg-yellow-600 transition-colors duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
