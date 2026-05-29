import React, { useState } from 'react';
import { colors } from '../system/colors';
import { spacing } from '../system/spacing';

interface ProductImageProps {
  src: string;
  alt: string;
  placeholder?: string;
  className?: string;
  priority?: boolean;
  onLoad?: () => void;
}

export const ProductImage = React.forwardRef<HTMLDivElement, ProductImageProps>(
  ({ src, alt, placeholder, className = '', priority = false, onLoad }, ref) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    const handleLoad = () => {
      setIsLoading(false);
      onLoad?.();
    };

    const handleError = () => {
      setIsLoading(false);
      setError(true);
    };

    return (
      <div
        ref={ref}
        className={`relative w-full aspect-square overflow-hidden rounded-lg ${className}`}
        style={{
          backgroundColor: colors.primary.background,
        }}
      >
        {/* Placeholder / Loading state */}
        {isLoading && (
          <div
            className="absolute inset-0 animate-pulse flex items-center justify-center"
            style={{
              backgroundColor: colors.neutral.border,
            }}
          >
            <span
              style={{
                color: colors.neutral.disabled,
                fontSize: '12px',
              }}
            >
              Loading...
            </span>
          </div>
        )}

        {/* Error state */}
        {error && (
          <div
            className="absolute inset-0 flex items-center justify-center flex-col gap-2"
            style={{
              backgroundColor: colors.primary.background,
            }}
          >
            <span
              style={{
                color: colors.neutral.disabled,
                fontSize: '14px',
              }}
            >
              Image unavailable
            </span>
          </div>
        )}

        {/* Main image */}
        {!error && (
          <img
            src={src}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            onLoad={handleLoad}
            onError={handleError}
            className="w-full h-full object-cover transition-opacity duration-300"
            style={{
              opacity: isLoading ? 0 : 1,
            }}
          />
        )}
      </div>
    );
  }
);

ProductImage.displayName = 'ProductImage';

export default ProductImage;
