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
        // Logo completo con texto "LIMPIEZA"
        <svg
          viewBox="0 0 100.95 27.03"
          className="h-10 md:h-14 w-auto"
          style={{ maxWidth: '250px' }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <style>
              {`.logo-fill-1 { fill: #fff; }
                .logo-fill-2 { fill: none; }
                .logo-fill-3 { fill: #20bec6; }
                .logo-fill-4 { fill: #288c91; }`}
            </style>
          </defs>
          <g>
            <polygon className="logo-fill-2" points="4.28 12.2 10.38 6.1 10.38 4.47 4.28 4.47 4.28 12.2"/>
            <polygon className="logo-fill-4" points="27.9 4.36 32.2 .06 21.51 .06 21.51 4.36 27.9 4.36"/>
            <polygon className="logo-fill-4" points="31.93 20.38 27.63 16.08 21.51 16.08 21.51 20.38 31.93 20.38"/>
            <rect className="logo-fill-4" x="51.51" y="16.08" width="5.7" height="4.3"/>
            <rect className="logo-fill-4" x="67.7" y="16.08" width="5.72" height="4.3"/>
            <rect className="logo-fill-4" x="67.7" width="5.72" height="4.3"/>
            <polygon className="logo-fill-3" points="25.37 12.5 29.23 8.2 21.51 8.2 21.51 12.5 25.37 12.5"/>
            <polygon className="logo-fill-4" points="91.1 4.3 84.38 20.38 88.95 20.38 92.72 11.31 90.42 6.04 91.1 4.3"/>
            <polygon className="logo-fill-3" points="21.51 4.36 21.51 .06 21.51 0 17.23 0 17.23 20.38 19.75 20.38 21.51 20.38 21.51 16.08 21.51 12.5 21.51 8.2 21.51 4.47 21.51 4.36"/>
            <polygon className="logo-fill-3" points="100.95 20.38 92.77 0 91.1 4.3 90.42 6.04 92.72 11.31 96.67 20.38 100.95 20.38"/>
            <polygon className="logo-fill-3" points="51.51 4.47 51.51 0 47.23 0 47.23 16.08 51.51 20.38 51.51 16.08 51.51 4.47"/>
            <polygon className="logo-fill-3" points="78.9 15.91 78.9 20.38 83.18 20.38 83.18 0 78.9 0 78.9 15.91"/>
            <polygon className="logo-fill-3" points="63.42 4.36 63.42 16.08 67.7 20.38 67.7 16.08 67.7 4.47 67.7 4.3 67.7 0 63.42 4.36"/>
            <polygon className="logo-fill-3" points="73.42 4.3 73.42 4.47 73.42 7.41 77.7 7.41 77.7 4.36 73.42 0 73.42 4.3"/>
            <polygon className="logo-fill-3" points="77.7 16.08 77.7 13.36 73.42 13.36 73.42 16.08 73.42 20.38 77.7 16.08"/>
            <polygon className="logo-fill-3" points="57.21 16.08 57.21 20.38 61.49 16.08 61.49 4.47 57.21 0 57.21 16.08"/>
            <polygon className="logo-fill-3" points="43.19 16.08 37.44 16.08 37.44 4.47 33.17 0 33.17 20.38 35.3 20.38 37.44 20.38 47.49 20.38 43.19 16.08"/>
            <polygon className="logo-fill-4" points="14.15 7.5 14.15 4.47 10.38 4.47 10.38 6.1 4.28 12.2 4.28 17.48 7.25 14.51 11.07 20.38 16.04 20.38 10.09 11.76 14.15 7.5"/>
            <polygon className="logo-fill-3" points="4.28 4.47 10.38 4.47 14.15 4.47 9.72 .03 0 0 0 20.38 4.28 20.38 4.28 17.48 4.28 12.2 4.28 4.47"/>
            <path className="logo-fill-1" d="M76.54,27.03v-3.87h.75v3.21h1.98v.66h-2.73Z"/>
            <path className="logo-fill-1" d="M79.73,27.03v-3.87h.75v3.87h-.75Z"/>
            <path className="logo-fill-1" d="M84.45,27.03v-2.56l-1,1.91h-.41l-1-1.91v2.56h-.75v-3.87h.81l1.15,2.2,1.16-2.2h.8v3.87h-.75Z"/>
            <path className="logo-fill-1" d="M86.01,27.03v-3.87h1.64c.18,0,.34.04.49.11.15.07.28.17.39.29.11.12.19.26.26.41.06.15.09.31.09.47s-.03.32-.09.48-.14.29-.25.41c-.11.12-.23.22-.38.29s-.31.11-.49.11h-.92v1.3h-.75ZM86.77,25.08h.87c.14,0,.25-.06.35-.17.09-.11.14-.27.14-.46,0-.1-.01-.19-.04-.26s-.07-.14-.11-.2-.1-.1-.17-.12-.13-.04-.19-.04h-.84v1.25Z"/>
            <path className="logo-fill-1" d="M89.42,27.03v-3.87h.75v3.87h-.75Z"/>
            <path className="logo-fill-1" d="M93.67,26.37v.66h-2.69v-3.87h2.64v.66h-1.89v.93h1.63v.61h-1.63v1.01h1.94Z"/>
            <path className="logo-fill-1" d="M94.02,26.47l2.19-2.64h-2.13v-.66h3v.57l-2.12,2.64h2.13v.66h-3.07v-.57Z"/>
            <path className="logo-fill-1" d="M98.78,23.17h.67l1.47,3.87h-.78l-.36-.96h-1.35l-.35.96h-.78l1.48-3.87ZM99.65,25.54l-.54-1.52-.56,1.52h1.09Z"/>
          </g>
        </svg>
      ) : variant === 'icon' ? (
        // Solo el icono (logo pequeño)
        <svg
          viewBox="0 0 24.72 21.89"
          className="h-8 w-8"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <style>
              {`.logo-icon-1 { fill: #139097; }
                .logo-icon-2 { fill: #20bec6; }`}
            </style>
          </defs>
          <g>
            <polygon className="logo-icon-1" points="16.95 .03 12.13 8.55 16.12 15.23 24.72 .03 16.95 .03"/>
            <polygon className="logo-icon-2" points="16.45 14.63 12.36 21.89 0 .03 7.85 0 16.45 14.63"/>
          </g>
        </svg>
      ) : (
        // Logo compacto sin texto
        <svg
          viewBox="0 0 100.95 20.38"
          className="h-10 md:h-14 w-auto"
          style={{ maxWidth: '200px' }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <style>
              {`.logo-compact-1 { fill: none; }
                .logo-compact-2 { fill: #20bec6; }
                .logo-compact-3 { fill: #288c91; }`}
            </style>
          </defs>
          <g>
            <polygon className="logo-compact-1" points="4.28 12.2 10.38 6.1 10.38 4.47 4.28 4.47 4.28 12.2"/>
            <polygon className="logo-compact-3" points="27.9 4.36 32.2 .06 21.51 .06 21.51 4.36 27.9 4.36"/>
            <polygon className="logo-compact-3" points="31.93 20.38 27.63 16.08 21.51 16.08 21.51 20.38 31.93 20.38"/>
            <rect className="logo-compact-3" x="51.51" y="16.08" width="5.7" height="4.3"/>
            <rect className="logo-compact-3" x="67.7" y="16.08" width="5.72" height="4.3"/>
            <rect className="logo-compact-3" x="67.7" width="5.72" height="4.3"/>
            <polygon className="logo-compact-2" points="25.37 12.5 29.23 8.2 21.51 8.2 21.51 12.5 25.37 12.5"/>
            <polygon className="logo-compact-3" points="91.1 4.3 84.38 20.38 88.95 20.38 92.72 11.31 90.42 6.04 91.1 4.3"/>
            <polygon className="logo-compact-2" points="21.51 4.36 21.51 .06 21.51 0 17.23 0 17.23 20.38 19.75 20.38 21.51 20.38 21.51 16.08 21.51 12.5 21.51 8.2 21.51 4.47 21.51 4.36"/>
            <polygon className="logo-compact-2" points="100.95 20.38 92.77 0 91.1 4.3 90.42 6.04 92.72 11.31 96.67 20.38 100.95 20.38"/>
            <polygon className="logo-compact-2" points="51.51 4.47 51.51 0 47.23 0 47.23 16.08 51.51 20.38 51.51 16.08 51.51 4.47"/>
            <polygon className="logo-compact-2" points="78.9 15.91 78.9 20.38 83.18 20.38 83.18 0 78.9 0 78.9 15.91"/>
            <polygon className="logo-compact-2" points="63.42 4.36 63.42 16.08 67.7 20.38 67.7 16.08 67.7 4.47 67.7 4.3 67.7 0 63.42 4.36"/>
            <polygon className="logo-compact-2" points="73.42 4.3 73.42 4.47 73.42 7.41 77.7 7.41 77.7 4.36 73.42 0 73.42 4.3"/>
            <polygon className="logo-compact-2" points="77.7 16.08 77.7 13.36 73.42 13.36 73.42 16.08 73.42 20.38 77.7 16.08"/>
            <polygon className="logo-compact-2" points="57.21 16.08 57.21 20.38 61.49 16.08 61.49 4.47 57.21 0 57.21 16.08"/>
            <polygon className="logo-compact-2" points="43.19 16.08 37.44 16.08 37.44 4.47 33.17 0 33.17 20.38 35.3 20.38 37.44 20.38 47.49 20.38 43.19 16.08"/>
            <polygon className="logo-compact-3" points="14.15 7.5 14.15 4.47 10.38 4.47 10.38 6.1 4.28 12.2 4.28 17.48 7.25 14.51 11.07 20.38 16.04 20.38 10.09 11.76 14.15 7.5"/>
            <polygon className="logo-compact-2" points="4.28 4.47 10.38 4.47 14.15 4.47 9.72 .03 0 0 0 20.38 4.28 20.38 4.28 17.48 4.28 12.2 4.28 4.47"/>
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

