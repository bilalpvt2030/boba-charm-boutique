export const COLORS = {
  background: '#F5EEF2',
  backgroundRgb: '245, 238, 242',
  accent: '#FFB1D3',
  accentRgb: '255, 177, 211',
  white: '#FFFFFF',
  whiteRgb: '255, 255, 255',
  black: '#000000',
  blackRgb: '0, 0, 0',
} as const;

export const OPACITY = {
  full: 1,
  high: 0.95,
  mediumHigh: 0.85,
  medium: 0.7,
  mediumLow: 0.55,
  low: 0.4,
  subtle: 0.25,
  minimal: 0.1,
} as const;

export const textColor = (opacity: keyof typeof OPACITY): string => {
  return `rgba(0, 0, 0, ${OPACITY[opacity]})`;
};

export const borderColor = (opacity: keyof typeof OPACITY = 'subtle'): string => {
  return `rgba(255, 177, 211, ${OPACITY[opacity]})`;
};

export const accentColor = (opacity: keyof typeof OPACITY = 'medium'): string => {
  return `rgba(255, 177, 211, ${OPACITY[opacity]})`;
};

export const backgroundTint = (opacity: keyof typeof OPACITY = 'minimal'): string => {
  return `rgba(255, 177, 211, ${OPACITY[opacity]})`;
};

export const textOpacity = {
  full: 'text-black',
  high: 'text-black/95',
  mediumHigh: 'text-black/85',
  medium: 'text-black/70',
  mediumLow: 'text-black/55',
  low: 'text-black/40',
  subtle: 'text-black/25',
  minimal: 'text-black/10',
} as const;

export const borderOpacity = {
  full: 'border-pink-300',
  high: 'border-pink-200/95',
  mediumHigh: 'border-pink-200/85',
  medium: 'border-pink-200/70',
  mediumLow: 'border-pink-200/55',
  low: 'border-pink-200/40',
  subtle: 'border-pink-200/25',
  minimal: 'border-pink-200/10',
} as const;

export const bgOpacity = {
  full: 'bg-pink-50',
  high: 'bg-pink-50/95',
  mediumHigh: 'bg-pink-50/85',
  medium: 'bg-pink-50/70',
  mediumLow: 'bg-pink-50/55',
  low: 'bg-pink-50/40',
  subtle: 'bg-pink-50/25',
  minimal: 'bg-pink-50/10',
} as const;

export type OpacityKey = keyof typeof OPACITY;

export const DESIGN_TOKENS = {
  colors: COLORS,
  opacity: OPACITY,
  utilities: {
    textColor,
    borderColor,
    accentColor,
    backgroundTint,
  },
  tailwindClasses: {
    textOpacity,
    borderOpacity,
    bgOpacity,
  },
} as const;
