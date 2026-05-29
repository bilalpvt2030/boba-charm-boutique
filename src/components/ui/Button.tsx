import React, { forwardRef, type ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * Button variant for different styles
     * @default "primary"
     */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';

  /**
     * Button size
     * @default "md"
     */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';

  /**
     * Whether the button is loading
     * @default false
     */
  isLoading?: boolean;

  /**
     * Whether the button is disabled
     * @default false
     */
  isDisabled?: boolean;

  /**
     * Full width button
     * @default false
     */
  isFullWidth?: boolean;

  /**
     * Icon element to display
     */
  icon?: React.ReactNode;

  /**
     * Icon position
     * @default "left"
     */
  iconPosition?: 'left' | 'right';

  /**
     * Aria label for accessibility
     */
  ariaLabel?: string;
}

/**
 * Button Component
 * A reusable, accessible button component with multiple variants and sizes
 * 
 * @example
 * ```tsx
 * <Button variant="primary" size="md">Click me</Button>
 * <Button variant="outline" icon={<Icon />}>With Icon</Button>
 * <Button isLoading>Loading...</Button>
 * ```
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({
          variant = 'primary',
          size = 'md',
          isLoading = false,
          isDisabled = false,
          isFullWidth = false,
          icon,
          iconPosition = 'left',
          ariaLabel,
          className = '',
          children,
          disabled,
          ...props
    }, ref) => {
          // Merge disabled states
      const finalDisabled = isDisabled || disabled || isLoading;

      // Base styles
      const baseStyles = `
            inline-flex
                  items-center
                        justify-center
                              font-family-base
                                    font-weight-semibold
                                          border-none
                                                rounded-md
                                                      transition-all
                                                            duration-base
                                                                  cursor-pointer
                                                                        focus:outline-none
                                                                              focus:ring-2
                                                                                    focus:ring-offset-2
                                                                                          focus:ring-offset-background
                                                                                                disabled:opacity-60
                                                                                                      disabled:cursor-not-allowed
                                                                                                          `;

      // Variant styles
      const variantStyles = {
              primary: `
                      bg-accent
                              text-background
                                      hover:bg-accent-500
                                              focus:ring-accent
                                                      active:bg-accent-600
                                                            `,
              secondary: `
                      bg-accent
                              bg-opacity-10
                                      text-accent
                                              hover:bg-opacity-20
                                                      focus:ring-accent
                                                              active:bg-opacity-30
                                                                    `,
              outline: `
                      border-2
                              border-accent
                                      text-accent
                                              bg-transparent
                                                      hover:bg-accent
                                                              hover:bg-opacity-5
                                                                      focus:ring-accent
                                                                              active:bg-accent
                                                                                      active:bg-opacity-10
                                                                                            `,
              ghost: `
                      text-accent
                              bg-transparent
                                      hover:bg-accent
                                              hover:bg-opacity-10
                                                      focus:ring-accent
                                                              active:bg-accent
                                                                      active:bg-opacity-20
                                                                            `,
              danger: `
                      bg-red-500
                              text-white
                                      hover:bg-red-600
                                              focus:ring-red-500
                                                      active:bg-red-700
                                                            `,
      };

      // Size styles
      const sizeStyles = {
              xs: `
                      px-3
                              py-1.5
                                      text-xs
                                              gap-1.5
                                                    `,
              sm: `
                      px-4
                              py-2
                                      text-sm
                                              gap-2
                                                    `,
              md: `
                      px-6
                              py-2.5
                                      text-base
                                              gap-2.5
                                                    `,
              lg: `
                      px-8
                              py-3
                                      text-lg
                                              gap-3
                                                    `,
              xl: `
                      px-10
                              py-4
                                      text-xl
                                              gap-3
                                                    `,
      };

      // Full width
      const widthStyles = isFullWidth ? 'w-full' : '';

      // Combine all styles
      const combinedClassName = [
              baseStyles,
              variantStyles[variant],
              sizeStyles[size],
              widthStyles,
              className,
            ]
            .filter(Boolean)
            .join(' ');

      return (
              <button
                        ref={ref}
                        disabled={finalDisabled}
                        aria-label={ariaLabel}
                        aria-busy={isLoading}
                        aria-disabled={finalDisabled}
                        className={combinedClassName}
                {...props}
                      >
                {icon && iconPosition === 'left' && (
                                  <span className="flex items-center justify-center">
                                    {icon}
                                  </span>span>
                      )}
              
                {isLoading ? (
                                  <span className="inline-flex items-center gap-2">
                                              <svg
                                                              className="animate-spin h-4 w-4"
                                                              xmlns="http://www.w3.org/2000/svg"
                                                              fill="none"
                                                              viewBox="0 0 24 24"
                                                              aria-hidden="true"
                                                            >
                                                            <circle
                                                                              className="opacity-25"
                                                                              cx="12"
                                                                              cy="12"
                                                                              r="10"
                                                                              stroke="currentColor"
                                                                              strokeWidth="4"
                                                                            />
                                                            <path
                                                                              className="opacity-75"
                                                                              fill="currentColor"
                                                                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                                            />
                                              </svg>svg>
                                    {children}
                                  </span>span>
                                ) : (
                                  <>
                                    {children && <span>{children}</span>span>}
                                  </>>
                                )}
              
                {icon && iconPosition === 'right' && (
                                  <span className="flex items-center justify-center">
                                    {icon}
                                  </span>span>
                      )}
              </button>button>
            );
    },
  );

Button.displayName = 'Button';

export default Button;</></button>
