import React from 'react';
import { cn } from '../../lib/utils';

export interface BadgeProps {
  variant?: 'green' | 'amber' | 'clay' | 'cream' | 'dark';
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'green',
  children,
  className,
  icon
}) => {
  const variantStyles = {
    green: 'bg-teagreen-100 text-teagreen-800 border-teagreen-300',
    amber: 'bg-amber-100 text-amber-900 border-amber-300 font-bold',
    clay: 'bg-clay-100 text-clay-800 border-clay-300 font-semibold',
    cream: 'bg-cream-200 text-charcoal-900 border-cream-300',
    dark: 'bg-teagreen-900 text-cream-100 border-teagreen-700',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full border tracking-wide uppercase',
        variantStyles[variant],
        className
      )}
    >
      {icon && <span className="w-3.5 h-3.5 shrink-0">{icon}</span>}
      {children}
    </span>
  );
};
