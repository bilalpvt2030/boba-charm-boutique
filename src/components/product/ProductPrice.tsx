import React from 'react';
import { colors } from '../system/colors';
import { spacing } from '../system/spacing';

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
        className={`flex items-baseline gap-2 ${className}`}
        style={{
          paddingRight: spacing.sm,
          paddingLeft: spacing.sm,
        }}
      >
        {/* Current Price in Rupees */}
        <span
          className="font-bold text-lg"
          style={{
            color: colors.primary.accent,
          }}
        >
          ₹{price.toLocaleString('en-IN')}
        </span>

        {/* Original Price (strikethrough) */}
        {hasDiscount && (
          <span
            className="text-sm line-through"
            style={{
              color: colors.neutral.disabled,
            }}
          >
            ₹{originalPrice.toLocaleString('en-IN')}
          </span>
        )}

        {/* Discount Badge */}
        {hasDiscount && (
          <span
            className="text-xs font-bold px-1.5 py-0.5 rounded"
            style={{
              backgroundColor: colors.primary.accent,
              color: colors.primary.background,
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
