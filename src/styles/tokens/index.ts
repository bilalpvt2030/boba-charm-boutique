// Token System Barrel Exports
// This file aggregates all design tokens for easy importing

export * from './colors';
export * from './typography';
export * from './spacing';
export * from './shadows';
export * from './transitions';
export * from './breakpoints';

// Common Token Combinations
export const DESIGN_TOKENS = {
  colors: () => import('./colors').then(m => m),
    typography: () => import('./typography').then(m => m),
      spacing: () => import('./spacing').then(m => m),
        shadows: () => import('./shadows').then(m => m),
          transitions: () => import('./transitions').then(m => m),
            breakpoints: () => import('./breakpoints').then(m => m),
            } as const;
