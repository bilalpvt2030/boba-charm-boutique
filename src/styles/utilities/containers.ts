// Container Utility Classes for Responsive Layouts
// Provides scalable, flexible container sizes for different breakpoints

export const CONTAINER_SIZES = {
    // Fluid containers that adjust to viewport width
  full: '100%',
      max: '100%',

      // Fixed container widths based on breakpoints
      xs: '100%',      // 0px - phones
      sm: '540px',     // 576px+ - landscape phones
      md: '720px',     // 768px+ - tablets
      lg: '960px',     // 992px+ - small laptops
      xl: '1140px',    // 1200px+ - desktops
      '2xl': '1320px', // 1400px+ - large desktops
    } as const;

export const CONTAINER_PADDING = {
    xs: '1rem',      // 0.5rem on mobile (16px total = 8px padding each side)
        sm: '1.5rem',    // Standard padding for small screens
        md: '2rem',      // Medium screens
        lg: '3rem',      // Large screens
        xl: '4rem',      // Extra large screens
      } as const;

export const CONTAINER_CLASSES = {
    // Responsive container wrapper
  container: `
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: var(--space-md);
    padding-right: var(--space-md);
  `,

  // Full width container with max content width
  contentContainer: `
    width: 100%;
    max-width: 1140px;
    margin-left: auto;
    margin-right: auto;
    padding-left: var(--space-md);
    padding-right: var(--space-md);
  `,

  // Narrow container for focused content
  narrow: `
    width: 100%;
    max-width: 720px;
    margin-left: auto;
    margin-right: auto;
    padding-left: var(--space-md);
    padding-right: var(--space-md);
  `,

  // Wide container for visual impact
  wide: `
    width: 100%;
    max-width: 1320px;
    margin-left: auto;
    margin-right: auto;
    padding-left: var(--space-md);
    padding-right: var(--space-md);
  `,

  // Full bleed (no max-width)
  fullBleed: `
    width: 100%;
    padding-left: var(--space-md);
    padding-right: var(--space-md);
  `,

  // Grid container with standard gap
  gridContainer: `
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--space-lg);
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: var(--space-md);
    padding-right: var(--space-md);
  `,

  // Flex container for horizontal layouts
  flexContainer: `
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-md);
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: var(--space-md);
    padding-right: var(--space-md);
  `,

  // Stack container for vertical layouts
  stackContainer: `
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: var(--space-md);
    padding-right: var(--space-md);
  `,
    } as const;

// Responsive padding utilities
export const RESPONSIVE_PADDING = {
  // Mobile-first approach
  base: 'var(--space-md)',        // 1rem
    small: 'var(--space-sm)',       // 0.5rem
    medium: 'var(--space-lg)',      // 1.5rem
    large: 'var(--space-xl)',       // 2rem
    extraLarge: 'var(--space-2xl)', // 2.5rem
  } as const;

// Responsive margins utilities
export const RESPONSIVE_MARGINS = {
    base: 'var(--space-md)',        // 1rem
        small: 'var(--space-sm)',       // 0.5rem
        medium: 'var(--space-lg)',      // 1.5rem
        large: 'var(--space-xl)',       // 2rem
        extraLarge: 'var(--space-2xl)', // 2.5rem
      } as const;

// Type exports
export type ContainerSize = keyof typeof CONTAINER_SIZES;
export type ContainerPadding = keyof typeof CONTAINER_PADDING;
export type ContainerClass = keyof typeof CONTAINER_CLASSES;
export type ResponsivePadding = keyof typeof RESPONSIVE_PADDING;
export type ResponsiveMargin = keyof typeof RESPONSIVE_MARGINS;
