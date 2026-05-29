export const SPACING = {
  0: '0',
    1: '4px',
      2: '8px',
        3: '12px',
          4: '16px',
            5: '20px',
              6: '24px',
                7: '28px',
                  8: '32px',
                    9: '36px',
                      10: '40px',
                        12: '48px',
                          14: '56px',
                            16: '64px',
                              20: '80px',
                                24: '96px',
                                  32: '128px',
                                  } as const;

                                  export const COMPONENT_SPACING = {
                                    button: {
                                        sm: { px: SPACING[3], py: SPACING[2] },
                                            md: { px: SPACING[4], py: SPACING[2] },
                                                lg: { px: SPACING[6], py: SPACING[3] },
                                                  },
                                                    card: {
                                                        sm: SPACING[4],
                                                            md: SPACING[6],
                                                                lg: SPACING[8],
                                                                  },
                                                                    input: {
                                                                        px: SPACING[3],
                                                                            py: SPACING[2],
                                                                              },
                                                                                section: {
                                                                                    mobile: { px: SPACING[4], py: SPACING[8] },
                                                                                        tablet: { px: SPACING[6], py: SPACING[12] },
                                                                                            desktop: { px: SPACING[8], py: SPACING[16] },
                                                                                              },
                                                                                                gap: {
                                                                                                    xs: SPACING[2],
                                                                                                        sm: SPACING[3],
                                                                                                            md: SPACING[4],
                                                                                                                lg: SPACING[6],
                                                                                                                    xl: SPACING[8],
                                                                                                                      },
                                                                                                                        header: {
                                                                                                                            py: { mobile: SPACING[4], desktop: SPACING[5] },
                                                                                                                              },
                                                                                                                                product_card: {
                                                                                                                                    padding: SPACING[4],
                                                                                                                                        gap: SPACING[3],
                                                                                                                                          },
                                                                                                                                          } as const;
                                                                                                                                          
                                                                                                                                          export type SpacingToken = keyof typeof SPACING;
                                                                                                                                          export type ComponentSpacingToken = keyof typeof COMPONENT_SPACING;
