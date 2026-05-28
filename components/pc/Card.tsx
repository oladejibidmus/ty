import { HTMLAttributes, forwardRef } from 'react';
import { clsx } from 'clsx';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ hoverable = true, className, children, style, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx('relative', className)}
        style={{
          backgroundColor: 'var(--card-bg)',
          border: '1px solid var(--header-bg)',
          borderRadius: 'var(--r-card)',
          padding: 'var(--sp-5)',
          transitionProperty: 'border-color, box-shadow',
          transitionDuration: 'var(--dur-macro)',
          transitionTimingFunction: 'var(--ease)',
          ...style,
        }}
        onMouseEnter={(e) => {
          if (hoverable) {
            e.currentTarget.style.borderColor = 'var(--primary)';
            e.currentTarget.style.boxShadow = 'var(--shadow-deep-blue)';
          }
          props.onMouseEnter?.(e);
        }}
        onMouseLeave={(e) => {
          if (hoverable) {
            e.currentTarget.style.borderColor = 'var(--header-bg)';
            e.currentTarget.style.boxShadow = 'none';
          }
          props.onMouseLeave?.(e);
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
