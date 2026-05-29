export * from './colors';
export * from './spacing';
export * from './transitions';

export const DESIGN_SYSTEM = {
  colors: { COLORS, OPACITY, textColor, borderColor, accentColor },
  spacing: { SPACING, CONTAINER, PADDING, SECTION_SPACING, CONTENT_SPACING, GAP },
  transitions: { TRANSITIONS, HOVER, FOCUS, ACTIVE, DISABLED, INTERACTIVE },
} as const;
