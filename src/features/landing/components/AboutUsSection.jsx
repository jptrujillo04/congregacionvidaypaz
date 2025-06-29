import React from 'react';

const AboutUsSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-serif font-bold text-white mb-6">Sobre Nosotros</h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Somos una comunidad de fe comprometida a compartir el amor de Cristo y el mensaje de esperanza que se encuentra en la Biblia. Creemos en un Dios que transforma vidas y que nos llama a vivir en paz y propósito. Nuestra iglesia es un hogar para todos, sin importar dónde te encuentres en tu viaje espiritual.
        </p>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mt-4">
          Te invitamos a unirte a nosotros para adorar, crecer en tu fe y servir a nuestra comunidad juntos. ¡Esperamos conocerte pronto!
        </p>
      </div>
    </section>
  );
};

export default AboutUsSection;
