import React from 'react';

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
        className={`flex items-center gap-2 px-2 ${className}`}
      >
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => {
            const isFilled = i < fullStars;
            const isHalf = i === fullStars && hasHalfStar;
            return (
              <div
                key={i}
                className="relative text-sm"
                style={{ width: '16px', height: '16px' }}
              >
                <span style={{ color: '#e5e7eb' }}>★</span>
                {(isFilled || isHalf) && (
                  <span
                    className="absolute inset-0"
                    style={{
                      color: '#FFB1D3',
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
        <div className="flex items-center gap-1.5">
          <span className="font-semibold text-sm text-gray-800">
            {rating.toFixed(1)}
          </span>
          {showLabel && (
            <span className="text-xs text-gray-500">
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
