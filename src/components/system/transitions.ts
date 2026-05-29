/**
 * Transition System - Smooth, sophisticated animations
 * All transitions respect premium aesthetic:
 * - Subtle easing
 * - Short duration (200-500ms)
 * - No jarring movements
 */

/**
 * Base transition classes
 * Mix and match with Tailwind classes
 */
export const TRANSITIONS = {
  // Fast interactions (200ms)
  fast: 'transition-all duration-200 ease-out',
  fastOpacity: 'transition-opacity duration-200 ease-out',
  fastTransform: 'transition-transform duration-200 ease-out',
  
  // Standard smooth (300ms) - Most common
  smooth: 'transition-all duration-300 ease-in-out',
  smoothOpacity: 'transition-opacity duration-300 ease-in-out',
  smoothTransform: 'transition-transform duration-300 ease-in-out',
  smoothColor: 'transition-colors duration-300 ease-in-out',
  
  // Slow smooth (500ms) - For emphasis
  slowSmooth: 'transition-all duration-500 ease-in-out',
  slowOpacity: 'transition-opacity duration-500 ease-in-out',
  slowTransform: 'transition-transform duration-500 ease-in-out',
} as const;

/**
 * Hover Effects - Subtle state changes
 */
export const HOVER = {
  // Opacity changes
  opacitySubtle: 'hover:opacity-90 transition-opacity duration-300',
  opacityLight: 'hover:opacity-80 transition-opacity duration-300',
  opacityMedium: 'hover:opacity-70 transition-opacity duration-300',
  
  // Transform effects
  liftSubtle: 'hover:translate-y-[-2px] transition-transform duration-300',
  liftSmall: 'hover:translate-y-[-4px] transition-transform duration-300',
  liftMedium: 'hover:translate-y-[-6px] transition-transform duration-300',
  
  // Scale effects
  scaleSubtle: 'hover:scale-[1.02] transition-transform duration-300',
  scaleSmall: 'hover:scale-[1.05] transition-transform duration-300',
  
  // Combined effects
  subtle: 'hover:opacity-85 hover:translate-y-[-1px] transition-all duration-300',
  smooth: 'hover:opacity-75 hover:translate-y-[-2px] transition-all duration-300',
  lift: 'hover:translate-y-[-3px] hover:shadow-md transition-all duration-300',
} as const;

/**
 * Focus Effects - Accessibility-friendly
 */
export const FOCUS = {
  ring: 'focus:outline-none focus:ring-2 focus:ring-pink-200 focus:ring-offset-2',
  ringSubtle: 'focus:outline-none focus:ring-1 focus:ring-pink-200/50',
  outline: 'focus:outline focus:outline-2 focus:outline-pink-300',
} as const;

/**
 * Active Effects - Pressed state
 */
export const ACTIVE = {
  scale: 'active:scale-95 transition-transform duration-150',
  opacity: 'active:opacity-75 transition-opacity duration-150',
  combined: 'active:scale-95 active:opacity-75 transition-all duration-150',
} as const;

/**
 * Disabled Effects - Subtle deactivation
 */
export const DISABLED = {
  opacity: 'disabled:opacity-50 disabled:cursor-not-allowed',
  all: 'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
} as const;

/**
 * Animation Keyframes - Complex animations
 */
export const ANIMATIONS = {
  fadeIn: 'animate-fade-in',
  slideInUp: 'animate-slide-in-up',
  slideInDown: 'animate-slide-in-down',
  slideInLeft: 'animate-slide-in-left',
  slideInRight: 'animate-slide-in-right',
  scaleIn: 'animate-scale-in',
  pulse: 'animate-pulse',
} as const;

/**
 * Combine utilities for common patterns
 */
export const INTERACTIVE = {
  button: `${TRANSITIONS.smooth} ${HOVER.subtle} ${ACTIVE.scale} ${FOCUS.ring}`,
  link: `${TRANSITIONS.smoothColor} ${HOVER.opacitySubtle} ${FOCUS.ring}`,
  input: `${TRANSITIONS.smoothColor} ${FOCUS.ring}`,
  card: `${TRANSITIONS.smooth} ${HOVER.liftSubtle}`,
} as const;

export type TransitionKey = keyof typeof TRANSITIONS;
export type HoverKey = keyof typeof HOVER;
export type FocusKey = keyof typeof FOCUS;
export type ActiveKey = keyof typeof ACTIVE;
export type DisabledKey = keyof typeof DISABLED;
export type AnimationKey = keyof typeof ANIMATIONS;
export type InteractiveKey = keyof typeof INTERACTIVE;

/**
 * Helper function to safely combine transition classes
 */
export const combineTransitions = (...classes: (string | undefined | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};

/**
 * Helper function to get interactive preset
 */
export const getInteractiveClass = (
  type: InteractiveKey,
  custom?: string
): string => {
  return custom ? combineTransitions(INTERACTIVE[type], custom) : INTERACTIVE[type];
};

/**
 * Helper function to create custom transition combinations
 */
export const createTransition = (
  duration: 'fast' | 'smooth' | 'slowSmooth',
  effects: {
    hover?: HoverKey;
    focus?: FocusKey;
    active?: ActiveKey;
    disabled?: DisabledKey;
  }
): string => {
  const parts = [TRANSITIONS[duration]];
  
  if (effects.hover) parts.push(HOVER[effects.hover]);
  if (effects.focus) parts.push(FOCUS[effects.focus]);
  if (effects.active) parts.push(ACTIVE[effects.active]);
  if (effects.disabled) parts.push(DISABLED[effects.disabled]);
  
  return parts.join(' ');
};
