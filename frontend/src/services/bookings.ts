import { supabase } from './supabase';
import type { Booking } from '../types';

export async function createBooking(booking: Omit<Booking, 'id' | 'created_at' | 'updated_at' | 'estado'>): Promise<Booking> {
  const { data, error } = await supabase
    .from('bookings')
    .insert([{ ...booking, estado: 'pendiente' }])
    .select()
    .single();

  if (error) {
    console.error('Error creating booking:', error);
    console.error('Error details:', {
      message: error.message,
      details: error.details,
      hint: error.hint,
      code: error.code,
    });
    throw new Error(error.message || 'Error al crear la reserva');
  }

  if (!data) {
    throw new Error('No se recibieron datos al crear la reserva');
  }

  return data;
}

export async function getBookings(): Promise<Booking[]> {
  const { data, error } = await supabase
    .from('bookings')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data || [];
}

export async function getBookingById(id: string): Promise<Booking> {
  const { data, error } = await supabase
    .from('bookings')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function updateBookingStatus(id: string, estado: Booking['estado']): Promise<Booking> {
  const { data, error } = await supabase
    .from('bookings')
    .update({ estado, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function getBookingsByStatus(estado: Booking['estado']): Promise<Booking[]> {
  const { data, error } = await supabase
    .from('bookings')
    .select('*')
    .eq('estado', estado)
    .order('created_at', { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data || [];
}

export async function getTodayBookings(): Promise<Booking[]> {
  const today = new Date().toISOString().split('T')[0];
  const { data, error } = await supabase
    .from('bookings')
    .select('*')
    .eq('fecha_servicio', today)
    .order('hora_servicio', { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  return data || [];
}

export async function getMonthlyBookings(): Promise<Booking[]> {
  const startOfMonth = new Date();
  startOfMonth.setDate(1);
  startOfMonth.setHours(0, 0, 0, 0);

  const { data, error } = await supabase
    .from('bookings')
    .select('*')
    .gte('created_at', startOfMonth.toISOString())
    .order('created_at', { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data || [];
}

