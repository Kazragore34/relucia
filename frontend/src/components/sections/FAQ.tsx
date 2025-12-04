import { useState } from 'react';
import { Card } from '../ui/Card';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: '¿Cuánto cuesta el servicio de limpieza?',
    answer: 'Todos nuestros servicios tienen un precio fijo de 10€/hora. No importa el tipo de servicio: limpieza de casas, limpieza post-obra, limpieza profunda u oficinas, todos tienen el mismo precio transparente. Contacta con nosotros por WhatsApp para reservar tu servicio.',
  },
  {
    question: '¿Qué incluye el servicio de limpieza?',
    answer: 'Incluimos todos los materiales y productos de limpieza necesarios. Nuestros profesionales certificados se encargan de limpiar todas las áreas acordadas: habitaciones, baños, cocina, salón y zonas comunes. También ofrecemos servicios especializados como limpieza de ventanas, alfombras y post-obra.',
  },
  {
    question: '¿Llegan a toda Madrid?',
    answer: 'Sí, ofrecemos cobertura en todo Madrid y alrededores. No tenemos límites de distancia dentro del área metropolitana. Contacta con nosotros para confirmar disponibilidad en tu zona específica.',
  },
  {
    question: '¿Necesito estar presente durante la limpieza?',
    answer: 'No es necesario. Puedes dejarnos las llaves o estar presente, según tu preferencia. Nuestros profesionales son de total confianza y están certificados. Muchos clientes prefieren dejarnos trabajar mientras ellos están fuera.',
  },
  {
    question: '¿Con cuánta antelación debo reservar?',
    answer: 'Recomendamos reservar con al menos 24-48 horas de antelación, aunque intentamos adaptarnos a urgencias cuando es posible. Para limpiezas post-obra o servicios especiales, es mejor avisar con más tiempo.',
  },
  {
    question: '¿Ofrecen limpieza de oficinas?',
    answer: 'Sí, ofrecemos servicios de limpieza para oficinas y espacios comerciales. Adaptamos nuestros servicios a tus horarios y necesidades específicas. Precio fijo de 10€/hora. Contacta para más detalles.',
  },
  {
    question: '¿Qué diferencia a Relucia de otras empresas de limpieza?',
    answer: 'Somos profesionales certificados con años de experiencia. Ofrecemos flexibilidad total (pago por horas), materiales incluidos, y resultados garantizados. Además, llegamos a toda Madrid y nos adaptamos a tus horarios. Tu satisfacción es nuestra prioridad.',
  },
  {
    question: '¿Puedo cancelar o cambiar mi reserva?',
    answer: 'Sí, puedes cancelar o modificar tu reserva con al menos 24 horas de antelación sin ningún coste. Para cambios de última hora, contacta con nosotros por WhatsApp y haremos lo posible por adaptarnos.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Schema.org para FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-20 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            Resolvemos las dudas más comunes sobre nuestros servicios de limpieza en Madrid
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg font-semibold text-text pr-4">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-text-light leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

