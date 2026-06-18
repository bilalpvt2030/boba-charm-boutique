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
  ({ src, alt, className = '', priority = false, onLoad }, ref) => {
    const [error, setError] = useState(false);

    return (
      <div ref={ref} className={`w-full h-full ${className}`}>
        {error ? (
          <div className="w-full h-full flex items-center justify-center bg-pink-50">
            <span className="text-xs text-pink-300">Image unavailable</span>
          </div>
        ) : (
          <img
            src={src}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            onLoad={onLoad}
            onError={() => setError(true)}
            className="w-full h-full object-contain"
          />
        )}
      </div>
    );
  }
);

ProductImage.displayName = 'ProductImage';
export default ProductImage;
