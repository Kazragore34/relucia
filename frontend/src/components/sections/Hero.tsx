import { Button } from '../ui/Button';
import { Sparkles } from 'lucide-react';
import { WHATSAPP_URL } from '../../utils/constants';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-light via-white to-primary-light py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Sparkles className="w-16 h-16 text-accent-gold animate-pulse" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-text mb-6">
            Tu hogar{' '}
            <span className="bg-gradient-to-r from-primary to-accent-gold bg-clip-text text-transparent">
              reluciente
            </span>{' '}
            en Madrid
          </h1>
          
          <p className="text-xl md:text-2xl text-text-light mb-8">
            Servicios profesionales de limpieza por horas. 
            Llegamos a todo Madrid para dejar tu espacio impecable.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              onClick={() => window.open(WHATSAPP_URL, '_blank')}
            >
              Reservar Ahora
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Ver Servicios
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

