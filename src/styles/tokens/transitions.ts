// Transition Durations (milliseconds)
export const TRANSITION_DURATIONS = {
    fast: 150,
    base: 200,
    normal: 250,
    slow: 350,
    slower: 500,
    pageTransition: 600,
} as const;

// Easing Functions (cubic-bezier curves)
export const EASING = {
    smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    linear: 'linear',
    subtle: 'cubic-bezier(0.4, 0, 0.6, 1)',
} as const;

// Transition Presets (duration + easing combinations)
export const TRANSITIONS = {
  default: `all ${TRANSITION_DURATIONS.base}ms ${EASING.smooth}`,
    fast: `all ${TRANSITION_DURATIONS.fast}ms ${EASING.smooth}`,
    normal: `all ${TRANSITION_DURATIONS.normal}ms ${EASING.smooth}`,
    slow: `all ${TRANSITION_DURATIONS.slow}ms ${EASING.smooth}`,
    pageTransition: `all ${TRANSITION_DURATIONS.pageTransition}ms ${EASING.smooth}`,
    fade: `opacity ${TRANSITION_DURATIONS.base}ms ${EASING.smooth}`,
    fadeIn: `opacity ${TRANSITION_DURATIONS.normal}ms ${EASING.easeOut}`,
    fadeOut: `opacity ${TRANSITION_DURATIONS.normal}ms ${EASING.easeIn}`,
    slide: `transform ${TRANSITION_DURATIONS.normal}ms ${EASING.smooth}`,
    slideUp: `transform ${TRANSITION_DURATIONS.normal}ms ${EASING.easeOut}`,
    slideDown: `transform ${TRANSITION_DURATIONS.normal}ms ${EASING.easeOut}`,
    slideLeft: `transform ${TRANSITION_DURATIONS.normal}ms ${EASING.easeOut}`,
    slideRight: `transform ${TRANSITION_DURATIONS.normal}ms ${EASING.easeOut}`,
    scale: `transform ${TRANSITION_DURATIONS.normal}ms ${EASING.smooth}`,
    rotate: `transform ${TRANSITION_DURATIONS.normal}ms ${EASING.smooth}`,
    color: `color ${TRANSITION_DURATIONS.base}ms ${EASING.smooth}`,
    backgroundColor: `background-color ${TRANSITION_DURATIONS.base}ms ${EASING.smooth}`,
    borderColor: `border-color ${TRANSITION_DURATIONS.base}ms ${EASING.smooth}`,
} as const;

// Animation Keyframe Definitions
export const ANIMATIONS = {
    fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
    },
    slideUp: {
          '0%': { transform: 'translateY(16px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
    },
    slideDown: {
          '0%': { transform: 'translateY(-16px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
    },
    slideInRight: {
          '0%': { transform: 'translateX(-16px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
    },
    slideOutRight: {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(16px)', opacity: '0' },
    },
    scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
    },
    pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.75' },
    },
} as const;

// Type Exports
export type TransitionDuration = keyof typeof TRANSITION_DURATIONS;
export type Easing = keyof typeof EASING;
export type Transition = keyof typeof TRANSITIONS;
export type Animation = keyof typeof ANIMATIONS;
