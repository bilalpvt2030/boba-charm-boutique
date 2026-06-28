import React from 'react';
import type { Product } from '../../lib/products';
import { formatINR } from '../../lib/products';
import { ProductBadge } from './ProductBadge';

interface ProductCardProps {
  product: Product;
  onClick?: () => void;
  className?: string;
}

export const ProductCard = React.forwardRef<HTMLDivElement, ProductCardProps>(
  ({ product, onClick, className = '' }, ref) => {
    const [imgError, setImgError] = React.useState(false);

    return (
      <div
        ref={ref}
        onClick={onClick}
        className={`cursor-pointer group ${className}`}
      >
        {/* Square image container */}
        <div className="relative overflow-hidden rounded-lg bg-pink-50" style={{ aspectRatio: '1 / 1' }}>
          {imgError ? (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-xs text-pink-300">Image unavailable</span>
            </div>
          ) : (
            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
              onError={() => setImgError(true)}
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
          )}
          {/* Badge - top left */}
          {product.badge && (
            <div className="absolute top-2 left-2 z-10">
              <ProductBadge type={product.badge} />
            </div>
          )}
          {/* Out of stock overlay */}
          {!product.inStock && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-lg">
              <span className="font-bold text-white text-sm">Out of Stock</span>
            </div>
          )}
        </div>

        {/* Card content: name, price, button ONLY */}
        <div className="mt-3 flex flex-col gap-1 px-1">
          <h3 className="font-semibold line-clamp-2 text-sm leading-snug">
            {product.name}
          </h3>
          <p className="text-sm font-medium text-gray-700">
            {formatINR(product.price)}
          </p>
          <button
            disabled={!product.inStock}
            className="mt-1 w-full min-h-[44px] py-2.5 font-semibold text-sm rounded-lg transition-all duration-300 uppercase tracking-wide"
            style={{
              backgroundColor: product.inStock ? '#FFB1D3' : '#CCCCCC',
              color: product.inStock ? '#FFFFFF' : '#999999',
              cursor: product.inStock ? 'pointer' : 'not-allowed',
            }}
          >
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>
      </div>
    );
  }
);

ProductCard.displayName = 'ProductCard';
export default ProductCard;
