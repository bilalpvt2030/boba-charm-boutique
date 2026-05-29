import React from 'react';

interface ProductPriceProps {
  price: number;
  originalPrice?: number;
  onSale?: boolean;
  className?: string;
}

export const ProductPrice = React.forwardRef<HTMLDivElement, ProductPriceProps>(
  ({ price, originalPrice, onSale = false, className = '' }, ref) => {
    const hasDiscount = originalPrice && originalPrice > price;
    const discountPercent = hasDiscount
      ? Math.round(((originalPrice - price) / originalPrice) * 100)
      : 0;

    return (
      <div
        ref={ref}
        className={`flex items-baseline gap-2 px-2 ${className}`}
      >
        {/* Current Price in Rupees */}
        <span
          className="font-bold text-lg"
          style={{ color: '#FFB1D3' }}
        >
          ₹{price.toLocaleString('en-IN')}
        </span>

        {/* Original Price (strikethrough) */}
        {hasDiscount && (
          <span
            className="text-sm line-through text-gray-400"
          >
            ₹{originalPrice.toLocaleString('en-IN')}
          </span>
        )}

        {/* Discount Badge */}
        {hasDiscount && (
          <span
            className="text-xs font-bold px-1.5 py-0.5 rounded"
            style={{
              backgroundColor: '#FFB1D3',
              color: '#F5EEF2',
            }}
          >
            -{discountPercent}%
          </span>
        )}
      </div>
    );
  }
);

ProductPrice.displayName = 'ProductPrice';
export default ProductPrice;
