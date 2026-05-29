import React from 'react';

type ContainerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  maxWidth?: ContainerSize;
  padding?: 'compact' | 'normal' | 'spacious' | 'none';
  centered?: boolean;
  children: React.ReactNode;
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      maxWidth = 'lg',
      padding = 'normal',
      centered = true,
      children,
      className = '',
      ...props
    },
    ref
  ) => {
    const maxWidthClasses = {
      xs: 'max-w-sm',
      sm: 'max-w-md',
      md: 'max-w-2xl',
      lg: 'max-w-4xl',
      xl: 'max-w-6xl',
      full: 'w-full',
    };

    const paddingClasses = {
      compact: 'px-4 md:px-6',
      normal: 'px-4 md:px-8 lg:px-12',
      spacious: 'px-6 md:px-12 lg:px-16',
      none: 'px-0',
    };

    return (
      <div
        ref={ref}
        className={`
          w-full
          ${maxWidthClasses[maxWidth]}
          ${paddingClasses[padding]}
          ${centered ? 'mx-auto' : ''}
          ${className}
        `}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = 'Container';

type SectionPadding = 'compact' | 'normal' | 'spacious';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  padding?: SectionPadding;
  spacing?: SectionPadding | 'none';
  background?: 'white' | 'pink' | 'transparent' | string;
  divider?: boolean;
  children: React.ReactNode;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    {
      padding = 'normal',
      spacing = 'normal',
      background = 'white',
      divider = false,
      children,
      className = '',
      ...props
    },
    ref
  ) => {
    const paddingClasses = {
      compact: 'py-8 md:py-12 lg:py-16',
      normal: 'py-12 md:py-16 lg:py-24',
      spacious: 'py-16 md:py-24 lg:py-32',
    };

    const spacingClasses = {
      compact: 'mb-8 md:mb-12 lg:mb-16',
      normal: 'mb-12 md:mb-16 lg:mb-24',
      spacious: 'mb-16 md:mb-24 lg:mb-32',
      none: 'mb-0',
    };

    const backgroundClasses = {
      white: 'bg-white',
      pink: 'bg-pink-50',
      transparent: 'bg-transparent',
    };

    const bgClass = backgroundClasses[background as keyof typeof backgroundClasses] || background;

    return (
      <section
        ref={ref}
        className={`
          w-full
          ${paddingClasses[padding]}
          ${spacingClasses[spacing]}
          ${bgClass}
          ${divider ? 'border-b border-pink-200/20' : ''}
          ${className}
        `}
        {...props}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = 'Section';

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  colsMobile?: number;
  colsTablet?: number;
  colsDesktop?: number;
  gap?: 'compact' | 'normal' | 'spacious';
  children: React.ReactNode;
}

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  (
    {
      colsMobile = 1,
      colsTablet = 2,
      colsDesktop = 3,
      gap = 'normal',
      children,
      className = '',
      ...props
    },
    ref
  ) => {
    const colClasses = `grid-cols-${colsMobile} md:grid-cols-${colsTablet} lg:grid-cols-${colsDesktop}`;
    const gapClasses = {
      compact: 'gap-4 md:gap-6',
      normal: 'gap-6 md:gap-8',
      spacious: 'gap-8 md:gap-12',
    };

    return (
      <div
        ref={ref}
        className={`
          grid
          ${colClasses}
          ${gapClasses[gap]}
          ${className}
        `}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Grid.displayName = 'Grid';

export type { ContainerProps, SectionProps, GridProps };
