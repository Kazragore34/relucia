import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const breadcrumbMap: Record<string, string> = {
  '/': 'Inicio',
  '/servicios': 'Servicios',
  '/contacto': 'Contacto',
};

export function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // No mostrar breadcrumbs en la página de inicio
  if (location.pathname === '/') {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className="bg-gray-50 py-4">
      <div className="container mx-auto px-4">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link
              to="/"
              className="text-text-light hover:text-primary transition-colors flex items-center"
              aria-label="Inicio"
            >
              <Home className="w-4 h-4" />
            </Link>
          </li>
          {pathnames.map((pathname, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            const label = breadcrumbMap[routeTo] || pathname.charAt(0).toUpperCase() + pathname.slice(1);

            return (
              <li key={routeTo} className="flex items-center">
                <ChevronRight className="w-4 h-4 text-text-light mx-2" />
                {isLast ? (
                  <span className="text-text font-medium" aria-current="page">
                    {label}
                  </span>
                ) : (
                  <Link
                    to={routeTo}
                    className="text-text-light hover:text-primary transition-colors"
                  >
                    {label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}

