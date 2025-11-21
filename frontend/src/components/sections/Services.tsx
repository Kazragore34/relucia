import { Card } from '../ui/Card';
import { SERVICES } from '../../utils/constants';
import { Home, Hammer, Sparkles, Briefcase } from 'lucide-react';

const iconMap: Record<string, any> = {
  Home,
  Hammer,
  Sparkles,
  Briefcase,
};

export function Services() {
  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            Ofrecemos servicios de limpieza profesionales adaptados a tus necesidades
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon] || Home;
            return (
              <Card key={service.id} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary-light rounded-full">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-text mb-3">{service.name}</h3>
                <p className="text-text-light mb-4">{service.description}</p>
                {service.price && (
                  <p className="text-primary font-semibold">{service.price}</p>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

