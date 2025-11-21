import { WHATSAPP_URL } from '../utils/constants';
import type { Booking } from '../types';

export function openWhatsApp(message?: string): void {
  const url = message 
    ? `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`
    : WHATSAPP_URL;
  window.open(url, '_blank');
}

export function formatBookingNotification(booking: Booking): string {
  const servicio = booking.tipo_servicio === 'Otros' 
    ? booking.tipo_servicio_otro || 'Otros'
    : booking.tipo_servicio;
  
  return `Nueva reserva de ${booking.nombre}

📋 Servicio: ${servicio}
📅 Fecha: ${new Date(booking.fecha_servicio).toLocaleDateString('es-ES')}
🕐 Hora: ${booking.hora_servicio}
📍 Dirección: ${booking.direccion}
📞 Teléfono: ${booking.telefono}
${booking.descripcion ? `📝 Descripción: ${booking.descripcion}` : ''}

Ver detalles en el panel de administración.`;
}

export function formatContactMessage(nombre: string, telefono: string, mensaje: string): string {
  return `Hola, soy ${nombre} (${telefono}).

${mensaje}

Me gustaría recibir más información sobre sus servicios.`;
}

