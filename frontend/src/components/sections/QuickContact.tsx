import { ContactForm } from '../forms/ContactForm';
import { MessageCircle } from 'lucide-react';

export function QuickContact() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <MessageCircle className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              ¿Tienes alguna pregunta?
            </h2>
            <p className="text-primary-light">
              Contáctanos y te responderemos lo antes posible
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-2xl">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

