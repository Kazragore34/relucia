import { Link } from 'react-router-dom';
import { MessageCircle, MapPin, Phone } from 'lucide-react';
import { WHATSAPP_URL, WHATSAPP_NUMBER, COVERAGE_AREA } from '../../utils/constants';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary-dark to-primary text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4">Relucia</h3>
            <p className="text-primary-light mb-4">
              Tu hogar reluciente en Madrid. Servicios profesionales de limpieza por horas 
              para casas, post-obra, oficinas y más. Profesionales certificados con materiales incluidos.
            </p>
            <div className="flex items-center space-x-2 text-primary-light">
              <MapPin className="w-5 h-5" />
              <span>{COVERAGE_AREA}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-light hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-primary-light hover:text-white transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-primary-light hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-primary-light hover:text-white transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp: {WHATSAPP_NUMBER}</span>
              </a>
              <div className="flex items-center space-x-2 text-primary-light">
                <Phone className="w-5 h-5" />
                <span>{WHATSAPP_NUMBER}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-light mt-8 pt-8 text-center text-primary-light">
          <p>&copy; {new Date().getFullYear()} Relucia. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

