import React from 'react';

const ServicesTimesSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-serif font-bold text-white mb-6">Horarios de Servicios</h2>
        <div className="text-lg text-gray-300 max-w-md mx-auto">
          <div className="flex justify-between items-center border-b border-gray-600 py-4">
            <span className="font-bold text-left pr-4">Culto Principal</span>
            <span className="text-right">Domingos: 10:00 AM</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-600 py-4">
            <span className="font-bold text-left pr-4">Oración de Misericordia</span>
            <span className="text-right">Martes, Jueves y Viernes: 3:00 PM</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-600 py-4">
            <span className="font-bold text-left pr-4">Estudio Bíblico</span>
            <span className="text-right">Miércoles: 7:00 PM</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-600 py-4">
            <span className="font-bold text-left pr-4">Reunión de Caballeros</span>
            <span className="text-right">Primer viernes de cada mes: 7:00 PM</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-600 py-4">
            <span className="font-bold text-left pr-4">Ayuno Congregacional</span>
            <span className="text-right">Sábados: 9:00 AM</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-600 py-4">
            <span className="font-bold text-left pr-4">Escuela CVP Kids</span>
            <span className="text-right">Sábados: 3:00 PM</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-600 py-4">
            <span className="font-bold text-left pr-4">Reunión de Jóvenes</span>
            <span className="text-right">Sábados: 4:30 PM</span>
          </div>
          <div className="flex justify-between items-center py-4">
            <span className="font-bold text-left pr-4">Servicio de Damas</span>
            <span className="text-right">Primer sábado de cada mes: 4:30 PM</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesTimesSection;
