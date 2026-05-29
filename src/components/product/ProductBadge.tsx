import React from 'react';

type BadgeType = 'sale' | 'new' | 'trending';

interface ProductBadgeProps {
  type?: BadgeType;
  label?: string;
  className?: string;
}

const badgeConfig: Record<BadgeType, { label: string; bgColor: string; textColor: string }> = {
  sale: {
    label: 'Sale',
    bgColor: '#FFB1D3',
    textColor: '#FFFFFF',
  },
  new: {
    label: 'New',
    bgColor: '#F5EEF2',
    textColor: '#FFB1D3',
  },
  trending: {
    label: 'Trending',
    bgColor: '#FFB1D3',
    textColor: '#FFFFFF',
  },
};

export const ProductBadge = React.forwardRef<HTMLDivElement, ProductBadgeProps>(
  ({ type = 'new', label, className = '' }, ref) => {
    if (!type) return null;

    const config = badgeConfig[type];
    const displayLabel = label || config.label;

    return (
      <div
        ref={ref}
        className={`inline-flex items-center justify-center rounded-full font-bold text-xs uppercase tracking-wide ${className}`}
        style={{
          backgroundColor: config.bgColor,
          color: config.textColor,
          padding: '4px 8px',
          minWidth: '60px',
          textAlign: 'center',
        }}
      >
        {displayLabel}
      </div>
    );
  }
);

ProductBadge.displayName = 'ProductBadge';

export default ProductBadge;
