import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Modal } from '../../components/ui/Modal';
import {
  getBookings,
  getBookingsByStatus,
  getTodayBookings,
  updateBookingStatus,
} from '../../services/bookings';
import { Booking, BookingStatus } from '../../types';
import { ArrowLeft, Search, CheckCircle, XCircle, Clock, MessageCircle, Calendar } from 'lucide-react';
import { openWhatsApp, formatBookingNotification } from '../../services/whatsapp';

export function AdminBookings() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('');
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/admin/login');
      return;
    }

    const filter = searchParams.get('filter');
    if (filter) {
      setStatusFilter(filter);
    }

    loadBookings();
  }, [isAuthenticated, navigate, searchParams]);

  const loadBookings = async () => {
    try {
      setLoading(true);
      let data: Booking[];

      if (statusFilter === 'pendiente') {
        data = await getBookingsByStatus('pendiente');
      } else if (statusFilter === 'hoy') {
        data = await getTodayBookings();
      } else {
        data = await getBookings();
      }

      setBookings(data);
    } catch (error) {
      console.error('Error loading bookings:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (id: string, newStatus: BookingStatus) => {
    try {
      await updateBookingStatus(id, newStatus);
      await loadBookings();
      setIsModalOpen(false);
      setSelectedBooking(null);
    } catch (error) {
      console.error('Error updating status:', error);
      alert('Error al actualizar el estado');
    }
  };

  const handleContact = (booking: Booking) => {
    const message = `Hola ${booking.nombre}, te contactamos desde Relucia sobre tu reserva del ${new Date(booking.fecha_servicio).toLocaleDateString('es-ES')}.`;
    const phoneNumber = booking.telefono.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const filteredBookings = bookings.filter((booking) => {
    const matchesSearch =
      booking.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.telefono.includes(searchTerm) ||
      booking.direccion.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const getStatusBadge = (status: BookingStatus) => {
    const styles = {
      pendiente: 'bg-yellow-100 text-yellow-800',
      confirmada: 'bg-blue-100 text-blue-800',
      completada: 'bg-green-100 text-green-800',
      cancelada: 'bg-red-100 text-red-800',
    };

    return (
      <span className={`px-3 py-1 rounded-full text-sm font-medium ${styles[status]}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-text-light">Cargando reservas...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button variant="outline" onClick={() => navigate('/admin')}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver
            </Button>
            <div>
              <h1 className="text-3xl font-heading font-bold text-text">Reservas</h1>
              <p className="text-text-light">Gestiona todas las reservas</p>
            </div>
          </div>
        </div>

        <Card className="mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-light w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar por nombre, teléfono o dirección..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <select
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value);
                loadBookings();
              }}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Todos los estados</option>
              <option value="pendiente">Pendientes</option>
              <option value="confirmada">Confirmadas</option>
              <option value="completada">Completadas</option>
              <option value="cancelada">Canceladas</option>
              <option value="hoy">Hoy</option>
            </select>
          </div>
        </Card>

        <div className="space-y-4">
          {filteredBookings.length === 0 ? (
            <Card className="text-center py-12">
              <p className="text-text-light text-lg">No se encontraron reservas</p>
            </Card>
          ) : (
            filteredBookings.map((booking) => (
              <Card key={booking.id} className="hover:shadow-xl transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="text-xl font-semibold text-text">{booking.nombre}</h3>
                      {getStatusBadge(booking.estado || 'pendiente')}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-text-light">
                      <div className="flex items-center gap-2">
                        <MessageCircle className="w-4 h-4" />
                        <span>{booking.telefono}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {new Date(booking.fecha_servicio).toLocaleDateString('es-ES')} a las{' '}
                          {booking.hora_servicio}
                        </span>
                      </div>
                      <div className="md:col-span-2">
                        <strong>Servicio:</strong> {booking.tipo_servicio === 'Otros' ? booking.tipo_servicio_otro : booking.tipo_servicio}
                      </div>
                      <div className="md:col-span-2">
                        <strong>Dirección:</strong> {booking.direccion}
                      </div>
                      {booking.descripcion && (
                        <div className="md:col-span-2">
                          <strong>Descripción:</strong> {booking.descripcion}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setSelectedBooking(booking);
                        setIsModalOpen(true);
                      }}
                    >
                      Cambiar Estado
                    </Button>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => handleContact(booking)}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Contactar
                    </Button>
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedBooking(null);
        }}
        title="Cambiar Estado de Reserva"
      >
        {selectedBooking && (
          <div className="space-y-4">
            <p>
              Reserva de <strong>{selectedBooking.nombre}</strong>
            </p>
            <p>Estado actual: {getStatusBadge(selectedBooking.estado || 'pendiente')}</p>
            <div className="grid grid-cols-2 gap-2">
              <Button
                variant="outline"
                onClick={() => handleStatusChange(selectedBooking.id!, 'confirmada')}
                disabled={selectedBooking.estado === 'confirmada'}
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                Confirmar
              </Button>
              <Button
                variant="outline"
                onClick={() => handleStatusChange(selectedBooking.id!, 'completada')}
                disabled={selectedBooking.estado === 'completada'}
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                Completar
              </Button>
              <Button
                variant="outline"
                onClick={() => handleStatusChange(selectedBooking.id!, 'cancelada')}
                disabled={selectedBooking.estado === 'cancelada'}
                className="col-span-2"
              >
                <XCircle className="w-4 h-4 mr-2" />
                Cancelar
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

