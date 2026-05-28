/**
 * Typography Token System - Boba Charms
 * Decorative: Italiana (hero, section headings)
 * Body: Inter (all body text, buttons, labels)
 */

export const TYPOGRAPHY = {
    fonts: {
          display: '"Italiana", "Cormorant Garamond", serif',
          serif: '"Cormorant Garamond", serif',
          sans: '"Inter", sans-serif',
    },

    hero: {
          fontSize: {
                  mobile: '32px',
                  tablet: '40px',
                  desktop: '48px',
          },
          fontWeight: 400,
          lineHeight: 1.2,
          letterSpacing: '-0.02em',
          fontFamily: '"Italiana", serif',
    },

    h1: {
          fontSize: {
                  mobile: '28px',
                  tablet: '32px',
                  desktop: '36px',
          },
          fontWeight: 400,
          lineHeight: 1.3,
          letterSpacing: '-0.01em',
          fontFamily: '"Italiana", serif',
    },

    h2: {
          fontSize: {
                  mobile: '24px',
                  tablet: '26px',
                  desktop: '28px',
          },
          fontWeight: 400,
          lineHeight: 1.35,
          letterSpacing: '-0.005em',
          fontFamily: '"Italiana", serif',
    },

    h3: {
          fontSize: { mobile: '18px', tablet: '20px', desktop: '20px' },
          fontWeight: 500,
          lineHeight: 1.4,
          fontFamily: '"Inter", sans-serif',
    },

    body: {
          lg: { fontSize: '16px', fontWeight: 400, lineHeight: 1.6, fontFamily: '"Inter", sans-serif' },
          base: { fontSize: '14px', fontWeight: 400, lineHeight: 1.6, fontFamily: '"Inter", sans-serif' },
          sm: { fontSize: '13px', fontWeight: 400, lineHeight: 1.5, fontFamily: '"Inter", sans-serif' },
    },

    button: {
          fontSize: '12px',
          fontWeight: 500,
          lineHeight: 1.4,
          letterSpacing: '0.05em',
          fontFamily: '"Inter", sans-serif',
          textTransform: 'uppercase' as const,
    },

    label: {
          fontSize: '12px',
          fontWeight: 500,
          lineHeight: 1.4,
          letterSpacing: '0.05em',
          fontFamily: '"Inter", sans-serif',
    },

    caption: {
          fontSize: '11px',
          fontWeight: 400,
          lineHeight: 1.4,
          letterSpacing: '0.02em',
          fontFamily: '"Inter", sans-serif',
    },

    price: {
          fontSize: { mobile: '14px', desktop: '16px' },
          fontWeight: 500,
          lineHeight: 1.4,
          fontFamily: '"Inter", sans-serif',
    },

    nav: {
          fontSize: '11px',
          fontWeight: 500,
          lineHeight: 1.4,
          letterSpacing: '0.22em',
          fontFamily: '"Inter", sans-serif',
          textTransform: 'uppercase' as const,
    },
} as const;

export type TypographyToken = keyof typeof TYPOGRAPHY;
