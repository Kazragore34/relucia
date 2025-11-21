export interface Booking {
  id?: string;
  nombre: string;
  telefono: string;
  tipo_servicio: string;
  tipo_servicio_otro?: string;
  fecha_servicio: string;
  hora_servicio: string;
  direccion: string;
  descripcion?: string;
  estado?: 'pendiente' | 'confirmada' | 'completada' | 'cancelada';
  created_at?: string;
  updated_at?: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  price?: string;
}

export type BookingStatus = 'pendiente' | 'confirmada' | 'completada' | 'cancelada';

