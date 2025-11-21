import type { Service } from '../types';

export const WHATSAPP_NUMBER = '+34647122461';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}`;

export const SERVICES: Service[] = [
  {
    id: 'limpieza-casa',
    name: 'Limpieza de Casa',
    description: 'Limpieza profunda y detallada de tu hogar. Incluye todas las habitaciones, baños, cocina y zonas comunes.',
    icon: 'Home',
    price: 'Desde 15€/hora',
  },
  {
    id: 'limpieza-obra',
    name: 'Limpieza Post-Obra',
    description: 'Limpieza especializada después de obras. Eliminamos polvo, residuos de construcción y dejamos tu espacio reluciente.',
    icon: 'Hammer',
    price: 'Desde 20€/hora',
  },
  {
    id: 'limpieza-profunda',
    name: 'Limpieza Profunda',
    description: 'Limpieza exhaustiva que incluye zonas de difícil acceso, cristales, muebles y electrodomésticos.',
    icon: 'Sparkles',
    price: 'Desde 18€/hora',
  },
  {
    id: 'limpieza-oficina',
    name: 'Limpieza de Oficinas',
    description: 'Servicio de limpieza para espacios de trabajo. Mantenemos tu oficina limpia y profesional.',
    icon: 'Briefcase',
    price: 'Desde 16€/hora',
  },
];

export const SERVICE_TYPES = [
  'Limpieza de Casa',
  'Limpieza Post-Obra',
  'Limpieza Profunda',
  'Limpieza de Oficinas',
  'Limpieza de Ventanas',
  'Limpieza de Alfombras',
  'Otros',
];

export const COVERAGE_AREA = 'Madrid y alrededores';

export const COMPANY_NAME = 'Relucia';
export const COMPANY_TAGLINE = 'Tu hogar reluciente en Madrid';

