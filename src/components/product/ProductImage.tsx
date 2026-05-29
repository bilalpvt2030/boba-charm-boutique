import React, { useState } from 'react';

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
          backgroundColor: '#F5EEF2',
        }}
      >
        {/* Placeholder / Loading state */}
        {isLoading && (
          <div
            className="absolute inset-0 animate-pulse flex items-center justify-center bg-pink-100"
          >
            <span className="text-xs text-pink-300">
              Loading...
            </span>
          </div>
        )}

        {/* Error state */}
        {error && (
          <div
            className="absolute inset-0 flex items-center justify-center flex-col gap-2 p-4"
            style={{ backgroundColor: '#F5EEF2' }}
          >
            <span className="text-sm text-pink-300">
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
