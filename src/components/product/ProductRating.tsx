import React from 'react';
import { colors } from '../system/colors';
import { spacing } from '../system/spacing';

interface ProductRatingProps {
  rating: number;
  reviewCount: number;
  className?: string;
  showLabel?: boolean;
}

export const ProductRating = React.forwardRef<HTMLDivElement, ProductRatingProps>(
  ({ rating, reviewCount, className = '', showLabel = true }, ref) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
      <div
        ref={ref}
        className={`flex items-center gap-2 ${className}`}
        style={{
          paddingRight: spacing.sm,
          paddingLeft: spacing.sm,
        }}
      >
        {/* Stars */}
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => {
            const isFilled = i < fullStars;
            const isHalf = i === fullStars && hasHalfStar;

            return (
              <div
                key={i}
                className="relative text-sm"
                style={{
                  width: '16px',
                  height: '16px',
                }}
              >
                {/* Background star */}
                <span
                  style={{
                    color: colors.neutral.border,
                  }}
                >
                  ★
                </span>

                {/* Filled star */}
                {(isFilled || isHalf) && (
                  <span
                    className="absolute inset-0"
                    style={{
                      color: colors.primary.accent,
                      overflow: 'hidden',
                      width: isFilled ? '100%' : '50%',
                    }}
                  >
                    ★
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Rating text */}
        <div className="flex items-center gap-1.5">
          <span
            className="font-semibold text-sm"
            style={{
              color: colors.primary.text,
            }}
          >
            {rating.toFixed(1)}
          </span>

          {/* Review count */}
          {showLabel && (
            <span
              className="text-xs"
              style={{
                color: colors.neutral.secondary,
              }}
            >
              ({reviewCount.toLocaleString()} reviews)
            </span>
          )}
        </div>
      </div>
    );
  }
);

ProductRating.displayName = 'ProductRating';

export default ProductRating;
