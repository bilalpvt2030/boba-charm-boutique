import React from 'react';
import type { Product } from '../../lib/products';
import { ProductImage } from './ProductImage';
import { ProductBadge } from './ProductBadge';
import { formatINR } from '../../lib/products';

interface ProductCardProps {
  product: Product;
  onClick?: () => void;
  className?: string;
}

export const ProductCard = React.forwardRef<HTMLDivElement, ProductCardProps>(
  ({ product, onClick, className = '' }, ref) => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
      <div
        ref={ref}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`cursor-pointer group ${className}`}
      >
        {/* Image Container */}
        <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-pink-50">
          <ProductImage
            src={product.image}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          {/* Badge */}
          {product.badge && (
            <div
              className="absolute top-3 right-3 z-10"
              style={{
                opacity: isHovered ? 1 : 0.85,
                transition: 'opacity 200ms ease-out',
              }}
            >
              <ProductBadge type={product.badge} />
            </div>
          )}
          {/* Out of Stock overlay */}
          {!product.inStock && (
            <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/30">
              <span className="font-bold text-white text-sm">Out of Stock</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="mt-3 flex flex-col gap-1 px-1">
          {/* Product Name */}
          <h3
            className="font-semibold line-clamp-2 text-sm leading-snug"
            style={{ transition: 'opacity 200ms ease-out' }}
          >
            {product.name}
          </h3>
          {/* Price */}
          <p className="text-sm font-medium text-gray-700">
            {formatINR(product.price)}
          </p>
          {/* Add to Cart Button */}
          <button
            disabled={!product.inStock}
            className="mt-1 w-full py-2.5 font-semibold text-sm rounded-lg transition-all duration-300 uppercase tracking-wide"
            style={{
              backgroundColor: product.inStock ? '#FFB1D3' : '#CCCCCC',
              color: product.inStock ? '#FFFFFF' : '#999999',
              opacity: isHovered && product.inStock ? 1 : 0.95,
              transform: isHovered && product.inStock ? 'scale(1.02)' : 'scale(1)',
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
