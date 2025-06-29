import React from 'react';
import Button from '../../../components/ui/Button';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif font-bold text-primary text-center mb-12">Contacto</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-serif font-bold text-primary mb-4">Envíanos un Mensaje</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-text mb-2">Nombre</label>
                <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded-lg" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-text mb-2">Email</label>
                <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded-lg" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-text mb-2">Mensaje</label>
                <textarea id="message" rows="4" className="w-full p-2 border border-gray-300 rounded-lg"></textarea>
              </div>
              <Button type="submit">Enviar Mensaje</Button>
            </form>
          </div>
          <div>
            <h3 className="text-2xl font-serif font-bold text-primary mb-4">Nuestra Ubicación</h3>
            <p className="text-text mb-4">
              CONGREGACIÓN VIDA Y PAZ
            </p>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d488.41813661180413!2d-74.24739225683761!3d4.578420201816926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f75ee972cd31f%3A0xc1514323c03ab3af!2sCONGREGACI%C3%93N%20VIDA%20Y%20PAZ!5e0!3m2!1ses!2sco!4v1751215678570!5m2!1ses!2sco"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Ubicación de la Congregación Vida y Paz"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
