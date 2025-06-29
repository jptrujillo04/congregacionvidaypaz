import React from 'react';

const ServicesTimesSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-serif font-bold text-white mb-6">Horarios de Servicios</h2>
        <div className="text-lg text-gray-300 max-w-md mx-auto">
          <div className="flex justify-between border-b border-gray-600 py-4">
            <span className="font-bold">Culto Principal</span>
            <span>Domingos: 10:00 AM</span>
          </div>
          <div className="flex justify-between border-b border-gray-600 py-4">
            <span className="font-bold">Estudio Bíblico</span>
            <span>Miércoles: 7:00 PM</span>
          </div>
          <div className="flex justify-between py-4">
            <span className="font-bold">Reunión de Jóvenes</span>
            <span>Sábados: 6:00 PM</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesTimesSection;
