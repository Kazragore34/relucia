import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { SERVICES, WHATSAPP_URL } from '../utils/constants';
import { Home, Hammer, Sparkles, Briefcase, CheckCircle } from 'lucide-react';
import { SEO } from '../components/SEO';

const iconMap: Record<string, any> = {
  Home,
  Hammer,
  Sparkles,
  Briefcase,
};

export function ServicesPage() {
  return (
    <>
      <SEO
        title="Limpieza Madrid y Aranjuez | Limpieza de Casas, Obras y Post-Obra"
        description="Descubre todos nuestros servicios de limpieza profesional en Madrid y Aranjuez: limpieza de casas, limpieza de obras, limpieza post-obra, limpieza profunda y oficinas. Limpieza por horas desde 15€/hora. Materiales incluidos. Profesionales certificados."
        keywords="limpieza Madrid, limpieza Aranjuez, limpieza por horas, limpieza de casas Madrid, limpieza de casas Aranjuez, limpieza obras Madrid, limpieza post obra Madrid, limpieza post obra Aranjuez, limpieza profunda Madrid, limpieza oficinas Madrid, precios limpieza Madrid, empresa limpieza profesional Madrid, limpieza Comunidad Madrid"
        canonical="https://www.relucia.es/servicios"
      />
      <main className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-text mb-4">
            Nuestros Servicios de Limpieza
          </h1>
          <p className="text-lg text-text-light max-w-3xl mx-auto">
            Ofrecemos servicios profesionales de limpieza por horas en Madrid, Aranjuez y toda la Comunidad de Madrid, 
            adaptados a tus necesidades. Especialistas en limpieza de casas, limpieza de obras, limpieza post-obra y más. 
            Todos nuestros servicios incluyen materiales de limpieza profesionales y están realizados por 
            personal certificado y experimentado. Llegamos a Madrid, Aranjuez y zonas cercanas.
          </p>
        </div>

        <div className="space-y-8 mb-12">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon] || Home;
            return (
              <Card key={service.id} className="md:flex items-start gap-6">
                <div className="flex-shrink-0 mb-4 md:mb-0">
                  <div className="p-6 bg-primary-light rounded-xl">
                    <Icon className="w-12 h-12 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h2 className="text-2xl font-heading font-bold text-text mb-2 md:mb-0">
                      {service.name}
                    </h2>
                    {service.price && (
                      <span className="text-primary font-semibold text-lg">{service.price}</span>
                    )}
                  </div>
                  <p className="text-text-light mb-4 text-lg">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1 text-sm text-text-light">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Servicio por horas
                    </span>
                    <span className="inline-flex items-center gap-1 text-sm text-text-light">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Materiales incluidos
                    </span>
                    <span className="inline-flex items-center gap-1 text-sm text-text-light">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Profesionales certificados
                    </span>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-primary to-primary-light rounded-xl p-8 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            ¿No encuentras el servicio que buscas?
          </h2>
          <p className="text-lg mb-6 text-primary-light">
            Contáctanos y te ayudaremos a encontrar la solución perfecta para tus necesidades.
          </p>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => window.open(WHATSAPP_URL, '_blank')}
          >
            Consultar por WhatsApp
          </Button>
        </div>
      </div>
    </main>
    </>
  );
}

