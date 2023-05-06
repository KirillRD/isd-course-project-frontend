import { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={`p-4 surface-card border-round border-1 surface-border ${className!}`}
    >
      {children}
    </div>
  );
}
