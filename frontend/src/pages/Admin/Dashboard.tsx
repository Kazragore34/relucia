import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { getBookingsByStatus, getTodayBookings, getMonthlyBookings } from '../../services/bookings';
import { Booking } from '../../types';
import { Calendar, Clock, CheckCircle, AlertCircle, LogOut, List } from 'lucide-react';

export function AdminDashboard() {
  const { user, signOut, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    pendientes: 0,
    hoy: 0,
    mes: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/admin/login');
      return;
    }

    loadStats();
  }, [isAuthenticated, navigate]);

  const loadStats = async () => {
    try {
      const [pendientes, hoy, mes] = await Promise.all([
        getBookingsByStatus('pendiente'),
        getTodayBookings(),
        getMonthlyBookings(),
      ]);

      setStats({
        pendientes: pendientes.length,
        hoy: hoy.length,
        mes: mes.length,
      });
    } catch (error) {
      console.error('Error loading stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/admin/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-text-light">Cargando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-heading font-bold text-text">
              Panel de Administración
            </h1>
            <p className="text-text-light">Bienvenido, {user?.email}</p>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" onClick={() => navigate('/admin/reservas')}>
              <List className="w-4 h-4 mr-2" />
              Ver Reservas
            </Button>
            <Button variant="outline" onClick={handleSignOut}>
              <LogOut className="w-4 h-4 mr-2" />
              Cerrar Sesión
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-text-light mb-1">Reservas Pendientes</p>
                <p className="text-3xl font-bold text-text">{stats.pendientes}</p>
              </div>
              <div className="p-4 bg-yellow-100 rounded-full">
                <AlertCircle className="w-8 h-8 text-yellow-600" />
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-text-light mb-1">Reservas de Hoy</p>
                <p className="text-3xl font-bold text-text">{stats.hoy}</p>
              </div>
              <div className="p-4 bg-blue-100 rounded-full">
                <Calendar className="w-8 h-8 text-blue-600" />
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-text-light mb-1">Total del Mes</p>
                <p className="text-3xl font-bold text-text">{stats.mes}</p>
              </div>
              <div className="p-4 bg-green-100 rounded-full">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
            </div>
          </Card>
        </div>

        <Card>
          <h2 className="text-2xl font-heading font-bold text-text mb-4">
            Acciones Rápidas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button
              variant="primary"
              onClick={() => navigate('/admin/reservas?filter=pendiente')}
              className="justify-start"
            >
              <AlertCircle className="w-5 h-5 mr-2" />
              Ver Reservas Pendientes
            </Button>
            <Button
              variant="primary"
              onClick={() => navigate('/admin/reservas?filter=hoy')}
              className="justify-start"
            >
              <Clock className="w-5 h-5 mr-2" />
              Ver Reservas de Hoy
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

