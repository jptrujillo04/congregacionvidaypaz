import React from 'react';

const Card = ({ title, children }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h3 className="text-xl font-serif font-bold text-primary mb-2">{title}</h3>
      <p className="text-text">{children}</p>
    </div>
  );
};

export default Card;
