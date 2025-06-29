import React from 'react';
import Card from '../../../components/ui/Card';

const BeliefsSection = () => {
  const beliefs = [
    {
      title: 'La Biblia',
      description: 'Creemos que la Biblia es la palabra inspirada de Dios, nuestra única regla de fe y conducta.',
    },
    {
      title: 'El Espíritu Santo',
      description: 'Creemos en el Espíritu Santo, que mora en nosotros y nos guía a una vida de santidad, dándonos vida y paz. (Romanos 8:6)',
    },
    {
      title: 'La Salvación',
      description: 'Creemos que la salvación es un regalo de Dios, recibido por la fe en Jesucristo, quien murió por nuestros pecados.',
    },
    {
      title: 'La Comunidad',
      description: 'Creemos en la importancia de la iglesia como una comunidad de creyentes que se apoyan mutuamente en amor y unidad.',
    },
  ];

  return (
    <section id="beliefs" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif font-bold text-primary text-center mb-12">Nuestras Creencias</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {beliefs.map((belief, index) => (
            <Card key={index} title={belief.title}>
              {belief.description}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeliefsSection;
