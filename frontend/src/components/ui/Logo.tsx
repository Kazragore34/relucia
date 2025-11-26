import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'full' | 'icon' | 'compact';
  className?: string;
  showLink?: boolean;
}

export function Logo({ variant = 'full', className = '', showLink = true }: LogoProps) {
  const logoContent = (
    <div className={`flex items-center ${className}`}>
      {variant === 'full' ? (
        // Logo principal: "logo relucia 2.svg" - RELUCIA sin texto LIMPIEZA
        <svg
          viewBox="0 0 100.95 20.38"
          className="h-10 md:h-14 w-auto"
          style={{ maxWidth: '250px' }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <polygon fill="none" points="4.28 12.2 10.38 6.1 10.38 4.47 4.28 4.47 4.28 12.2"/>
            <polygon fill="#288c91" points="27.9 4.36 32.2 .06 21.51 .06 21.51 4.36 27.9 4.36"/>
            <polygon fill="#288c91" points="31.93 20.38 27.63 16.08 21.51 16.08 21.51 20.38 31.93 20.38"/>
            <rect fill="#288c91" x="51.51" y="16.08" width="5.7" height="4.3"/>
            <rect fill="#288c91" x="67.7" y="16.08" width="5.72" height="4.3"/>
            <rect fill="#288c91" x="67.7" width="5.72" height="4.3"/>
            <polygon fill="#20bec6" points="25.37 12.5 29.23 8.2 21.51 8.2 21.51 12.5 25.37 12.5"/>
            <polygon fill="#288c91" points="91.1 4.3 84.38 20.38 88.95 20.38 92.72 11.31 90.42 6.04 91.1 4.3"/>
            <polygon fill="#20bec6" points="21.51 4.36 21.51 .06 21.51 0 17.23 0 17.23 20.38 19.75 20.38 21.51 20.38 21.51 16.08 21.51 12.5 21.51 8.2 21.51 4.47 21.51 4.36"/>
            <polygon fill="#20bec6" points="100.95 20.38 92.77 0 91.1 4.3 90.42 6.04 92.72 11.31 96.67 20.38 100.95 20.38"/>
            <polygon fill="#20bec6" points="51.51 4.47 51.51 0 47.23 0 47.23 16.08 51.51 20.38 51.51 16.08 51.51 4.47"/>
            <polygon fill="#20bec6" points="78.9 15.91 78.9 20.38 83.18 20.38 83.18 0 78.9 0 78.9 15.91"/>
            <polygon fill="#20bec6" points="63.42 4.36 63.42 16.08 67.7 20.38 67.7 16.08 67.7 4.47 67.7 4.3 67.7 0 63.42 4.36"/>
            <polygon fill="#20bec6" points="73.42 4.3 73.42 4.47 73.42 7.41 77.7 7.41 77.7 4.36 73.42 0 73.42 4.3"/>
            <polygon fill="#20bec6" points="77.7 16.08 77.7 13.36 73.42 13.36 73.42 16.08 73.42 20.38 77.7 16.08"/>
            <polygon fill="#20bec6" points="57.21 16.08 57.21 20.38 61.49 16.08 61.49 4.47 57.21 0 57.21 16.08"/>
            <polygon fill="#20bec6" points="43.19 16.08 37.44 16.08 37.44 4.47 33.17 0 33.17 20.38 35.3 20.38 37.44 20.38 47.49 20.38 43.19 16.08"/>
            <polygon fill="#288c91" points="14.15 7.5 14.15 4.47 10.38 4.47 10.38 6.1 4.28 12.2 4.28 17.48 7.25 14.51 11.07 20.38 16.04 20.38 10.09 11.76 14.15 7.5"/>
            <polygon fill="#20bec6" points="4.28 4.47 10.38 4.47 14.15 4.47 9.72 .03 0 0 0 20.38 4.28 20.38 4.28 17.48 4.28 12.2 4.28 4.47"/>
          </g>
        </svg>
      ) : variant === 'icon' ? (
        // Solo el icono (logo pequeño) - "logo relucia.svg"
        <svg
          viewBox="0 0 24.72 21.89"
          className="h-8 w-8"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <polygon fill="#139097" points="16.95 .03 12.13 8.55 16.12 15.23 24.72 .03 16.95 .03"/>
            <polygon fill="#20bec6" points="16.45 14.63 12.36 21.89 0 .03 7.85 0 16.45 14.63"/>
          </g>
        </svg>
      ) : (
        // Logo compacto (mismo que full, sin texto LIMPIEZA)
        <svg
          viewBox="0 0 100.95 20.38"
          className="h-10 md:h-14 w-auto"
          style={{ maxWidth: '200px' }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <polygon fill="none" points="4.28 12.2 10.38 6.1 10.38 4.47 4.28 4.47 4.28 12.2"/>
            <polygon fill="#288c91" points="27.9 4.36 32.2 .06 21.51 .06 21.51 4.36 27.9 4.36"/>
            <polygon fill="#288c91" points="31.93 20.38 27.63 16.08 21.51 16.08 21.51 20.38 31.93 20.38"/>
            <rect fill="#288c91" x="51.51" y="16.08" width="5.7" height="4.3"/>
            <rect fill="#288c91" x="67.7" y="16.08" width="5.72" height="4.3"/>
            <rect fill="#288c91" x="67.7" width="5.72" height="4.3"/>
            <polygon fill="#20bec6" points="25.37 12.5 29.23 8.2 21.51 8.2 21.51 12.5 25.37 12.5"/>
            <polygon fill="#288c91" points="91.1 4.3 84.38 20.38 88.95 20.38 92.72 11.31 90.42 6.04 91.1 4.3"/>
            <polygon fill="#20bec6" points="21.51 4.36 21.51 .06 21.51 0 17.23 0 17.23 20.38 19.75 20.38 21.51 20.38 21.51 16.08 21.51 12.5 21.51 8.2 21.51 4.47 21.51 4.36"/>
            <polygon fill="#20bec6" points="100.95 20.38 92.77 0 91.1 4.3 90.42 6.04 92.72 11.31 96.67 20.38 100.95 20.38"/>
            <polygon fill="#20bec6" points="51.51 4.47 51.51 0 47.23 0 47.23 16.08 51.51 20.38 51.51 16.08 51.51 4.47"/>
            <polygon fill="#20bec6" points="78.9 15.91 78.9 20.38 83.18 20.38 83.18 0 78.9 0 78.9 15.91"/>
            <polygon fill="#20bec6" points="63.42 4.36 63.42 16.08 67.7 20.38 67.7 16.08 67.7 4.47 67.7 4.3 67.7 0 63.42 4.36"/>
            <polygon fill="#20bec6" points="73.42 4.3 73.42 4.47 73.42 7.41 77.7 7.41 77.7 4.36 73.42 0 73.42 4.3"/>
            <polygon fill="#20bec6" points="77.7 16.08 77.7 13.36 73.42 13.36 73.42 16.08 73.42 20.38 77.7 16.08"/>
            <polygon fill="#20bec6" points="57.21 16.08 57.21 20.38 61.49 16.08 61.49 4.47 57.21 0 57.21 16.08"/>
            <polygon fill="#20bec6" points="43.19 16.08 37.44 16.08 37.44 4.47 33.17 0 33.17 20.38 35.3 20.38 37.44 20.38 47.49 20.38 43.19 16.08"/>
            <polygon fill="#288c91" points="14.15 7.5 14.15 4.47 10.38 4.47 10.38 6.1 4.28 12.2 4.28 17.48 7.25 14.51 11.07 20.38 16.04 20.38 10.09 11.76 14.15 7.5"/>
            <polygon fill="#20bec6" points="4.28 4.47 10.38 4.47 14.15 4.47 9.72 .03 0 0 0 20.38 4.28 20.38 4.28 17.48 4.28 12.2 4.28 4.47"/>
          </g>
        </svg>
      )}
    </div>
  );

  if (showLink) {
    return (
      <Link to="/" className="flex items-center" aria-label="Relucia - Inicio">
        {logoContent}
      </Link>
    );
  }

  return logoContent;
}
