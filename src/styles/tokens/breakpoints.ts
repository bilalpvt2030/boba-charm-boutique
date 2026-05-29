// Responsive Breakpoints (mobile-first approach)
export const BREAKPOINTS = {
  xs: 0,      // Extra small devices (phones)
    sm: 576,    // Small devices (landscape phones)
      md: 768,    // Medium devices (tablets)
        lg: 992,    // Large devices (laptops)
          xl: 1200,   // Extra large devices (desktops)
            xxl: 1400,  // 2XL devices (large desktops)
            } as const;

            // Media Query Helpers (for CSS-in-JS)
            export const MEDIA_QUERIES = {
              xs: `(min-width: ${BREAKPOINTS.xs}px)`,
                sm: `(min-width: ${BREAKPOINTS.sm}px)`,
                  md: `(min-width: ${BREAKPOINTS.md}px)`,
                    lg: `(min-width: ${BREAKPOINTS.lg}px)`,
                      xl: `(min-width: ${BREAKPOINTS.xl}px)`,
                        xxl: `(min-width: ${BREAKPOINTS.xxl}px)`,
                          smOnly: `(min-width: ${BREAKPOINTS.sm}px) and (max-width: ${BREAKPOINTS.md - 1}px)`,
                            mdOnly: `(min-width: ${BREAKPOINTS.md}px) and (max-width: ${BREAKPOINTS.lg - 1}px)`,
                              lgOnly: `(min-width: ${BREAKPOINTS.lg}px) and (max-width: ${BREAKPOINTS.xl - 1}px)`,
                                xlOnly: `(min-width: ${BREAKPOINTS.xl}px) and (max-width: ${BREAKPOINTS.xxl - 1}px)`,
                                  smAndDown: `(max-width: ${BREAKPOINTS.md - 1}px)`,
                                    mdAndDown: `(max-width: ${BREAKPOINTS.lg - 1}px)`,
                                      lgAndDown: `(max-width: ${BREAKPOINTS.xl - 1}px)`,
                                        xlAndDown: `(max-width: ${BREAKPOINTS.xxl - 1}px)`,
                                        } as const;

                                        // Tailwind Breakpoint Classes
                                        export const TAILWIND_BREAKPOINTS = {
                                          xs: '0',
                                            sm: '576px',
                                              md: '768px',
                                                lg: '992px',
                                                  xl: '1200px',
                                                    xxl: '1400px',
                                                    } as const;

                                                    // Container Queries (for component-level responsive design)
                                                    export const CONTAINER_QUERIES = {
                                                      sm: '(min-width: 480px)',
                                                        md: '(min-width: 768px)',
                                                          lg: '(min-width: 1024px)',
                                                            xl: '(min-width: 1280px)',
                                                            } as const;

                                                            // Type Exports
                                                            export type Breakpoint = keyof typeof BREAKPOINTS;
                                                            export type MediaQuery = keyof typeof MEDIA_QUERIES;
                                                            export type TailwindBreakpoint = keyof typeof TAILWIND_BREAKPOINTS;
