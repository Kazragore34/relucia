import { Card } from '../ui/Card';
import { Award, Users, TrendingUp, Heart } from 'lucide-react';

const stats = [
  {
    icon: Users,
    number: '500+',
    label: 'Clientes Satisfechos',
    description: 'Más de 500 clientes confían en nuestros servicios de limpieza en Madrid y Aranjuez',
  },
  {
    icon: Award,
    number: '5+',
    label: 'Años de Experiencia',
    description: 'Llevamos más de 5 años ofreciendo servicios de limpieza profesional',
  },
  {
    icon: TrendingUp,
    number: '98%',
    label: 'Satisfacción',
    description: 'El 98% de nuestros clientes recomiendan nuestros servicios',
  },
  {
    icon: Heart,
    number: '24/7',
    label: 'Atención',
    description: 'Disponibilidad amplia para adaptarnos a tus horarios',
  },
];

export function AboutSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-light to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text mb-4">
            ¿Por qué Confiar en Relucia?
          </h2>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            Somos una empresa de limpieza profesional en Madrid y Aranjuez con años de experiencia 
            y cientos de clientes satisfechos. Especialistas en limpieza por horas, limpieza de casas y limpieza de obras. 
            Nuestro compromiso es dejar tu espacio reluciente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary-light rounded-full">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <h3 className="text-xl font-semibold text-text mb-2">{stat.label}</h3>
                <p className="text-text-light text-sm">{stat.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <Card className="bg-white">
            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-heading font-bold text-text mb-4">
                Nuestra Misión
              </h3>
              <p className="text-text-light mb-4">
                En Relucia, nos especializamos en ofrecer servicios de limpieza profesional 
                de la más alta calidad en Madrid y Aranjuez. Nuestro equipo de profesionales certificados 
                está comprometido con la excelencia y la satisfacción del cliente.
              </p>
              <p className="text-text-light mb-4">
                Ofrecemos flexibilidad total con nuestro sistema de limpieza por horas, lo que te 
                permite contratar exactamente el servicio que necesitas, cuando lo necesitas. 
                Especialistas en limpieza de casas, limpieza de obras y limpieza post-obra. 
                Todos nuestros servicios incluyen materiales de limpieza profesionales de primera calidad.
              </p>
              <p className="text-text-light">
                Llegamos a Madrid, Aranjuez y toda la Comunidad de Madrid, sin límites de distancia. Ya sea que 
                necesites una limpieza de casa, limpieza de obras, limpieza post-obra, limpieza profunda o limpieza 
                de oficinas, estamos aquí para ayudarte a mantener tu espacio reluciente.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

