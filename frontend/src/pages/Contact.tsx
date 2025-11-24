import { Card } from '../components/ui/Card';
import { BookingForm } from '../components/forms/BookingForm';
import { MessageCircle, MapPin, Clock } from 'lucide-react';
import { WHATSAPP_URL, WHATSAPP_NUMBER, COVERAGE_AREA } from '../utils/constants';
import { SEO } from '../components/SEO';

export function Contact() {
  return (
    <>
      <SEO
        title="Reserva Limpieza Madrid y Aranjuez - Relucia | Contacto y Reservas"
        description="Reserva tu servicio de limpieza profesional en Madrid y Aranjuez. Formulario rápido y fácil. WhatsApp: +34 647 122 461. Cobertura en Madrid, Aranjuez y toda la Comunidad de Madrid. Horario: Lunes a Domingo 8:00-20:00."
        keywords="reservar limpieza Madrid, reservar limpieza Aranjuez, contacto limpieza Madrid, WhatsApp limpieza Madrid, reserva limpieza profesional Madrid, formulario limpieza Madrid, limpieza por horas Madrid"
        canonical="https://www.relucia.es/contacto"
      />
      <main className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-text mb-4">
            Reserva tu Servicio
          </h1>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            Completa el formulario y nos pondremos en contacto contigo lo antes posible. 
            También puedes contactarnos directamente por WhatsApp para una respuesta más rápida. 
            Estamos disponibles de lunes a domingo de 8:00 a 20:00 para atenderte.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="text-center">
            <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-text mb-2">WhatsApp</h3>
            <p className="text-text-light mb-4">Contáctanos directamente</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              {WHATSAPP_NUMBER}
            </a>
          </Card>

          <Card className="text-center">
            <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-text mb-2">Área de Cobertura</h3>
            <p className="text-text-light">{COVERAGE_AREA}</p>
          </Card>

          <Card className="text-center">
            <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-text mb-2">Horario</h3>
            <p className="text-text-light">Lunes a Domingo</p>
            <p className="text-text-light">8:00 - 20:00</p>
          </Card>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card>
            <h2 className="text-2xl font-heading font-bold text-text mb-6">
              Formulario de Reserva
            </h2>
            <BookingForm />
          </Card>
        </div>
      </div>
    </main>
    </>
  );
}

