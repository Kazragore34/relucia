import { ReactNode, HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hover?: boolean;
}

export function Card({ children, className = '', hover = true, onClick, ...props }: CardProps) {
  return (
    <div className={`card ${hover ? 'hover:shadow-xl' : ''} ${className}`} onClick={onClick} {...props}>
      {children}
    </div>
  );
}

