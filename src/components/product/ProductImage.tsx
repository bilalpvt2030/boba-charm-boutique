import React, { useState } from 'react';

interface ProductImageProps {
  src: string;
  alt: string;
  placeholder?: string;
  className?: string;
  priority?: boolean;
  loading?: 'lazy' | 'eager';
  onLoad?: () => void;
}

export const ProductImage = React.forwardRef<HTMLImageElement, ProductImageProps>(
  ({ src, alt, className = '', priority = false, loading, onLoad }, ref) => {
    const [error, setError] = useState(false);
    if (error) {
      return (
        <div className="w-full h-full flex items-center justify-center bg-pink-50">
          <span className="text-xs text-pink-300">Image unavailable</span>
        </div>
      );
    }
    return (
      <img
        ref={ref}
        src={src}
        alt={alt}
        loading={loading ?? (priority ? 'eager' : 'lazy')}
        onLoad={onLoad}
        onError={() => setError(true)}
        className={className}
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    );
  }
);

ProductImage.displayName = 'ProductImage';
export default ProductImage;
