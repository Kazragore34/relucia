import { Card } from '../ui/Card';
import { Clock, Shield, MapPin, Star } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Servicio por Horas',
    description: 'Paga solo por el tiempo que necesites. Flexibilidad total para adaptarnos a tu horario.',
  },
  {
    icon: Shield,
    title: 'Profesionales Certificados',
    description: 'Equipo experimentado y confiable. Tu tranquilidad es nuestra prioridad.',
  },
  {
    icon: MapPin,
    title: 'Cobertura Madrid y Aranjuez',
    description: 'Llegamos a Madrid, Aranjuez y toda la Comunidad de Madrid. Sin límites de distancia.',
  },
  {
    icon: Star,
    title: 'Resultados Garantizados',
    description: 'Comprometidos con la excelencia. Tu satisfacción es nuestro objetivo principal.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text mb-4">
            ¿Por qué elegir Relucia?
          </h2>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            Somos más que un servicio de limpieza en Madrid y Aranjuez. Somos tu aliado para mantener tu espacio reluciente. 
            Limpieza por horas, limpieza de casas, limpieza de obras. Profesionales certificados, materiales incluidos y resultados garantizados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-accent-gold bg-opacity-20 rounded-full">
                    <Icon className="w-8 h-8 text-accent-gold" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-text mb-3">{feature.title}</h3>
                <p className="text-text-light">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

