import React from 'react';

type BadgeType = 'sale' | 'new' | 'trending' | 'premium';

interface ProductBadgeProps {
  type?: BadgeType | string;
  label?: string;
  className?: string;
}

const badgeConfig: Record<string, { label: string; bgColor: string; textColor: string }> = {
  sale: { label: 'Sale', bgColor: '#FFB1D3', textColor: '#FFFFFF' },
  new: { label: 'New', bgColor: '#F5EEF2', textColor: '#FFB1D3' },
  trending: { label: 'Trending', bgColor: '#FFB1D3', textColor: '#FFFFFF' },
  premium: { label: 'Premium', bgColor: '#D4AF37', textColor: '#FFFFFF' },
};

export const ProductBadge: React.FC<ProductBadgeProps> = ({ type, label, className = '' }) => {
  if (!type) return null;

  const key = type.toLowerCase();
  const config = badgeConfig[key];

  if (!config) return null;

  const displayLabel = label || config.label;

  return (
    <div
      className={`px-2 py-0.5 text-xs font-semibold rounded-full ${className}`}
      style={{
        backgroundColor: config.bgColor,
        color: config.textColor,
      }}
    >
      {displayLabel}
    </div>
  );
};

export default ProductBadge;
