import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Breadcrumbs } from './components/layout/Breadcrumbs';
import { WhatsAppButton } from './components/layout/WhatsAppButton';

// Code splitting: Cargar páginas de forma lazy
const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const ServicesPage = lazy(() => import('./pages/Services').then(module => ({ default: module.ServicesPage })));
const Contact = lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })));

// Componente de carga
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <Breadcrumbs />
        <main className="flex-grow">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/servicios" element={<ServicesPage />} />
              <Route path="/contacto" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;

