import React from 'react';
import heroImage from '../../../assets/images/hero.jpeg';

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
                  <div className="p-10 rounded-lg text-center" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)' }}>
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white">
          <span className="text-primary">Congregación</span>{' '}
          <span className="text-secondary">Vida y Paz</span>
        </h1>
        <p className="mt-4 text-xl md:text-2xl font-sans">
          Un lugar de encuentro, fe y esperanza para todos.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
