import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '../../lib/utils';

export interface RatingProps {
  rating: number;
  maxRating?: number;
  reviewCount?: number;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Rating: React.FC<RatingProps> = ({
  rating,
  maxRating = 5,
  reviewCount,
  showText = true,
  size = 'md',
  className
}) => {
  const iconSizes = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  return (
    <div className={cn('inline-flex items-center gap-1.5', className)}>
      <div className="flex items-center gap-0.5 text-amber-500">
        {Array.from({ length: maxRating }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              iconSizes[size],
              i < Math.floor(rating)
                ? 'fill-amber-400 text-amber-400'
                : i < rating
                ? 'fill-amber-400/50 text-amber-400'
                : 'text-gray-300'
            )}
          />
        ))}
      </div>
      {showText && (
        <span className="text-xs font-semibold text-charcoal-800 tracking-wide">
          {rating.toFixed(2)}
          {reviewCount !== undefined && (
            <span className="text-charcoal-800/60 font-normal ml-1">
              ({reviewCount.toLocaleString()} reviews)
            </span>
          )}
        </span>
      )}
    </div>
  );
};
