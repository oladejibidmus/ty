import { forwardRef, ButtonHTMLAttributes } from 'react';
import { clsx } from 'clsx';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'standard' | 'large' | 'small';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const heightMap: Record<ButtonSize, string> = {
  small:    'h-8',
  standard: 'h-9',
  large:    'h-10',
};

const paddingMap: Record<ButtonSize, string> = {
  small:    'px-3',
  standard: 'px-4',
  large:    'px-5',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'standard', className, children, style, ...props }, ref) => {
    const base = clsx(
      'inline-flex items-center justify-center',
      'font-mono font-bold uppercase tracking-widest',
      'text-label rounded-sm',
      'transition-all disabled:opacity-40 disabled:cursor-not-allowed',
      'select-none whitespace-nowrap',
      heightMap[size],
      paddingMap[size]
    );

    const variantStyles: Record<ButtonVariant, React.CSSProperties> = {
      primary: {
        backgroundColor: 'var(--primary)',
        color: 'var(--text-white)',
        border: 'none',
        boxShadow: 'var(--shadow-blue-glow)',
        transitionDuration: 'var(--dur-micro)',
        transitionTimingFunction: 'var(--ease)',
      },
      secondary: {
        backgroundColor: 'var(--control-bg)',
        color: 'var(--text-main)',
        border: '1px solid var(--header-bg)',
        transitionDuration: 'var(--dur-micro)',
        transitionTimingFunction: 'var(--ease)',
      },
      ghost: {
        backgroundColor: 'transparent',
        color: 'var(--text-dim)',
        border: 'none',
        transitionDuration: 'var(--dur-micro)',
        transitionTimingFunction: 'var(--ease)',
      },
    };

    return (
      <button
        ref={ref}
        className={clsx(base, className)}
        style={{ ...variantStyles[variant], letterSpacing: '0.05em', ...style }}
        onMouseEnter={(e) => {
          if (variant === 'ghost') {
            e.currentTarget.style.color = 'var(--text-white)';
          } else if (variant === 'primary') {
            e.currentTarget.style.opacity = '0.88';
          } else if (variant === 'secondary') {
            e.currentTarget.style.backgroundColor = 'var(--header-bg)';
          }
          props.onMouseEnter?.(e);
        }}
        onMouseLeave={(e) => {
          if (variant === 'ghost') {
            e.currentTarget.style.color = 'var(--text-dim)';
          } else if (variant === 'primary') {
            e.currentTarget.style.opacity = '1';
          } else if (variant === 'secondary') {
            e.currentTarget.style.backgroundColor = 'var(--control-bg)';
          }
          props.onMouseLeave?.(e);
        }}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
