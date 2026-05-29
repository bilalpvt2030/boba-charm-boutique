/**
 * Spacing System - Luxury Whitespace
 * Based on 8px baseline grid for consistency
 * Maintains elegant spacing rhythm across all breakpoints
 */

export const SPACING = {
  xs: '0.25rem', // 4px
  sm: '0.5rem',  // 8px
  md: '1rem',    // 16px
  lg: '1.5rem',  // 24px
  xl: '2rem',    // 32px
  '2xl': '3rem',   // 48px
  '3xl': '4rem',   // 64px
  '4xl': '6rem',   // 96px
  '5xl': '8rem',   // 128px
} as const;

/**
 * Container System - Responsive max-widths
 * Maintains luxury aspect ratio and readability
 */
export const CONTAINER = {
  xs: {
    mobile: '100%',
    maxWidth: '100%',
  },
  sm: {
    mobile: '100%',
    tablet: '640px',
    maxWidth: '640px',
  },
  md: {
    mobile: '100%',
    tablet: '728px',
    desktop: '896px',
    maxWidth: '896px',
  },
  lg: {
    mobile: '100%',
    tablet: '768px',
    desktop: '1024px',
    maxWidth: '1024px',
  },
  xl: {
    mobile: '100%',
    tablet: '800px',
    desktop: '1280px',
    maxWidth: '1280px',
  },
  full: {
    mobile: '100%',
    tablet: '100%',
    desktop: '100%',
    maxWidth: '100%',
  },
} as const;

/**
 * Padding System - Responsive content padding
 */
export const PADDING = {
  mobile: SPACING.md,    // 16px
  tablet: SPACING.lg,    // 24px
  desktop: SPACING.xl,   // 32px
} as const;

/**
 * Section Spacing - Controls vertical rhythm
 * Creates consistent gaps between major sections
 */
export const SECTION_SPACING = {
  compact: {
    mobile: SPACING.xl,    // 32px
    tablet: SPACING['2xl'], // 48px
    desktop: SPACING['3xl'], // 64px
  },
  normal: {
    mobile: SPACING['2xl'],  // 48px
    tablet: SPACING['3xl'],  // 64px
    desktop: SPACING['4xl'], // 96px
  },
  spacious: {
    mobile: SPACING['3xl'],  // 64px
    tablet: SPACING['4xl'],  // 96px
    desktop: SPACING['5xl'], // 128px
  },
} as const;

/**
 * Content Spacing - Internal element spacing
 */
export const CONTENT_SPACING = {
  tight: {
    mobile: SPACING.md,
    tablet: SPACING.lg,
    desktop: SPACING.lg,
  },
  normal: {
    mobile: SPACING.lg,
    tablet: SPACING.xl,
    desktop: SPACING.xl,
  },
  spacious: {
    mobile: SPACING.xl,
    tablet: SPACING['2xl'],
    desktop: SPACING['2xl'],
  },
} as const;

/**
 * Gap System - For flex and grid layouts
 */
export const GAP = {
  xs: SPACING.xs,
  sm: SPACING.sm,
  md: SPACING.md,
  lg: SPACING.lg,
  xl: SPACING.xl,
  '2xl': SPACING['2xl'],
  '3xl': SPACING['3xl'],
} as const;

/**
 * Tailwind-compatible spacing map
 */
export const spacingMap = {
  0: '0',
  1: SPACING.xs,
  2: SPACING.sm,
  4: SPACING.md,
  6: SPACING.lg,
  8: SPACING.xl,
  12: SPACING['2xl'],
  16: SPACING['3xl'],
  24: SPACING['4xl'],
  32: SPACING['5xl'],
} as const;

export type SpacingKey = keyof typeof SPACING;
export type ContainerSize = keyof typeof CONTAINER;
export type SectionSpacingSize = keyof typeof SECTION_SPACING;
