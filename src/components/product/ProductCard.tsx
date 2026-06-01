import React from 'react';
import type { Product } from '../../lib/products';
import { ProductImage } from './ProductImage';
import { ProductPrice } from './ProductPrice';
import { ProductBadge } from './ProductBadge';

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
        {/* Image Container with Badge */}
        <div className="relative mb-4">
          <ProductImage
            src={product.image}
            alt={product.name}
            priority={false}
            className="group-hover:opacity-90"
          />
          {/* Badge - Top Right */}
          {product.badge && (
            <div
              className="absolute top-3 right-3"
              style={{
                opacity: isHovered ? 1 : 0.85,
                transition: 'opacity 200ms ease-out',
              }}
            >
              <ProductBadge type={product.badge} />
            </div>
          )}
          {/* Stock Status */}
          {!product.inStock && (
            <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/30">
              <span className="font-bold text-white text-sm">Out of Stock</span>
            </div>
          )}
        </div>

        {/* Content Container */}
        <div className="flex flex-col gap-3 px-2">
          {/* Product Name */}
          <h3
            className="font-semibold line-clamp-2 group-hover:opacity-75 text-sm leading-snug"
            style={{
              transition: 'opacity 200ms ease-out',
            }}
          >
            {product.name}
          </h3>
          {/* Price */}
          <ProductPrice
            price={product.price}
            originalPrice={product.originalPrice}
            onSale={!!product.originalPrice}
          />
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
