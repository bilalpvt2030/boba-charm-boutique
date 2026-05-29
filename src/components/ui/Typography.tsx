import React from 'react';
import { OPACITY } from '../system';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
  className?: string;
  opacity?: keyof typeof OPACITY;
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ level, children, className = '', opacity = 'full', ...props }, ref) => {
    const sizeStyles = {
      h1: 'text-5xl md:text-6xl lg:text-7xl font-light tracking-tighter',
      h2: 'text-4xl md:text-5xl lg:text-6xl font-light tracking-tight',
      h3: 'text-3xl md:text-4xl lg:text-5xl font-light tracking-tight',
      h4: 'text-2xl md:text-3xl lg:text-4xl font-normal tracking-wide',
      h5: 'text-xl md:text-2xl lg:text-3xl font-normal tracking-wide',
      h6: 'text-lg md:text-xl lg:text-2xl font-normal tracking-wide',
    };

    const Tag = level;
    return (
      <Tag
        ref={ref}
        className={`${sizeStyles[level]} leading-tight ${className}`}
        style={{ opacity: OPACITY[opacity] }}
        {...props}
      >
        {children}
      </Tag>
    );
  }
);

Heading.displayName = 'Heading';

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: 'body' | 'subtitle' | 'label' | 'small' | 'caption';
  children: React.ReactNode;
  className?: string;
  opacity?: keyof typeof OPACITY;
}

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ variant = 'body', children, className = '', opacity = 'full', ...props }, ref) => {
    const variantStyles = {
      body: 'text-base md:text-lg leading-relaxed font-normal',
      subtitle: 'text-lg md:text-xl leading-relaxed font-medium tracking-wide',
      label: 'text-sm md:text-base font-medium tracking-widest uppercase',
      small: 'text-sm md:text-base leading-normal font-normal',
      caption: 'text-xs md:text-sm leading-normal font-normal',
    };

    return (
      <p
        ref={ref}
        className={`${variantStyles[variant]} ${className}`}
        style={{ opacity: OPACITY[opacity] }}
        {...props}
      >
        {children}
      </p>
    );
  }
);

Text.displayName = 'Text';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  className?: string;
  opacity?: keyof typeof OPACITY;
  isRequired?: boolean;
}

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ children, className = '', opacity = 'mediumHigh', isRequired = false, ...props }, ref) => (
    <label
      ref={ref}
      className={`block text-sm font-medium tracking-wide ${className}`}
      style={{ opacity: OPACITY[opacity] }}
      {...props}
    >
      {children}
      {isRequired && <span className="ml-1 text-pink-300">*</span>}
    </label>
  )
);

Label.displayName = 'Label';

interface DescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  className?: string;
}

export const Description = React.forwardRef<HTMLParagraphElement, DescriptionProps>(
  ({ children, className = '', ...props }, ref) => (
    <p
      ref={ref}
      className={`text-sm opacity-60 leading-normal ${className}`}
      {...props}
    >
      {children}
    </p>
  )
);

Description.displayName = 'Description';

export type { HeadingProps, TextProps, LabelProps, DescriptionProps };
