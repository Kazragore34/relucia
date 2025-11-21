import { WHATSAPP_URL } from '../utils/constants';

export function openWhatsApp(message?: string): void {
  const url = message 
    ? `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`
    : WHATSAPP_URL;
  window.open(url, '_blank');
}

interface BookingData {
  nombre: string;
  telefono: string;
  tipo_servicio: string;
  fecha_servicio: string;
  hora_servicio: string;
  direccion: string;
  descripcion?: string;
}

export function formatBookingMessage(booking: BookingData): string {
  const fecha = new Date(booking.fecha_servicio).toLocaleDateString('es-ES', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  
  return `Hola, me gustaría hacer una reserva:

👤 Nombre: ${booking.nombre}
📞 Teléfono: ${booking.telefono}
📋 Servicio: ${booking.tipo_servicio}
📅 Fecha: ${fecha}
🕐 Hora: ${booking.hora_servicio}
📍 Dirección: ${booking.direccion}
${booking.descripcion ? `📝 Descripción: ${booking.descripcion}` : ''}

¿Podrían confirmarme la disponibilidad?`;
}

export function formatContactMessage(nombre: string, telefono: string, mensaje: string): string {
  return `Hola, soy ${nombre} (${telefono}).

${mensaje}

Me gustaría recibir más información sobre sus servicios.`;
}

