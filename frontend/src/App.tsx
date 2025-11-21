import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { WhatsAppButton } from './components/layout/WhatsAppButton';
import { Home } from './pages/Home';
import { ServicesPage } from './pages/Services';
import { Contact } from './pages/Contact';
import { AdminLogin } from './pages/Admin/Login';
import { AdminDashboard } from './pages/Admin/Dashboard';
import { AdminBookings } from './pages/Admin/Bookings';
import { useAuth } from './hooks/useAuth';

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<ServicesPage />} />
            <Route path="/contacto" element={<Contact />} />
            <Route
              path="/admin/login"
              element={isAuthenticated ? <AdminDashboard /> : <AdminLogin />}
            />
            <Route
              path="/admin"
              element={isAuthenticated ? <AdminDashboard /> : <AdminLogin />}
            />
            <Route
              path="/admin/reservas"
              element={isAuthenticated ? <AdminBookings /> : <AdminLogin />}
            />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;

