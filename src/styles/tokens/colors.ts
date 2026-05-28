/**
 * Color Token System - Boba Charms
 * Pink-only luxury palette using soft pink (#FFB1D3) with opacity hierarchy
 */

export const COLORS = {
    background: '#F5EEF2',
        accent: '#FFB1D3',

        text: {
    primary: 'rgba(255, 177, 211, 0.9)',
          secondary: 'rgba(255, 177, 211, 0.75)',
          muted: 'rgba(255, 177, 211, 0.5)',
          light: 'rgba(255, 177, 211, 0.3)',
      },

        border: {
default: 'rgba(255, 177, 211, 0.3)',
      light: 'rgba(255, 177, 211, 0.15)',
      dark: 'rgba(255, 177, 211, 0.5)',
      divider: 'rgba(255, 177, 211, 0.2)',
  },

    interactive: {
    hover: 'rgba(255, 177, 211, 0.85)',
          active: 'rgba(255, 177, 211, 0.9)',
          focus: 'rgba(255, 177, 211, 0.6)',
          disabled: 'rgba(255, 177, 211, 0.25)',
      },

        background_light: 'rgba(255, 177, 211, 0.08)',
            background_lighter: 'rgba(255, 177, 211, 0.05)',
            background_lightest: 'rgba(255, 177, 211, 0.02)',
          } as const;

export const COLOR_ALIASES = {
    button_primary: COLORS.text.primary,
        button_secondary: COLORS.accent,
        button_hover: COLORS.interactive.hover,
        button_active: COLORS.interactive.active,
        card_border: COLORS.border.default,
        card_background: COLORS.background,
        input_border: COLORS.border.default,
        input_focus: COLORS.interactive.focus,
        input_disabled: COLORS.interactive.disabled,
        link_default: COLORS.text.primary,
        link_hover: COLORS.interactive.hover,
        heading: COLORS.text.primary,
        body: COLORS.text.secondary,
        label: COLORS.text.secondary,
        hint: COLORS.text.light,
        divider: COLORS.border.divider,
        separator: COLORS.border.light,
      } as const;

export type ColorToken = keyof typeof COLORS;
export type ColorAlias = keyof typeof COLOR_ALIASES;
