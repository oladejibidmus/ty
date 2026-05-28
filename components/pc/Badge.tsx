import { HTMLAttributes } from 'react';
import { clsx } from 'clsx';

type BadgeVariant = 'primary' | 'success' | 'warning' | 'error' | 'neutral';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variantStyles: Record<BadgeVariant, React.CSSProperties> = {
  primary: {
    backgroundColor: 'var(--primary-10)',
    border: '1px solid var(--primary)',
    color: 'var(--primary)',
  },
  success: {
    backgroundColor: 'var(--success-10)',
    border: '1px solid var(--success)',
    color: 'var(--success)',
  },
  warning: {
    backgroundColor: 'var(--warning-10)',
    border: '1px solid var(--warning)',
    color: 'var(--warning)',
  },
  error: {
    backgroundColor: 'var(--error-10)',
    border: '1px solid var(--error)',
    color: 'var(--error)',
  },
  neutral: {
    backgroundColor: 'var(--control-bg)',
    border: '1px solid var(--header-bg)',
    color: 'var(--text-dim)',
  },
};

export function Badge({ variant = 'neutral', className, children, style, ...props }: BadgeProps) {
  return (
    <span
      className={clsx('inline-flex items-center font-mono font-medium uppercase', className)}
      style={{
        fontSize: '11px',
        letterSpacing: '0.05em',
        borderRadius: 'var(--r-sm)',
        padding: '2px 6px',
        lineHeight: '1.4',
        ...variantStyles[variant],
        ...style,
      }}
      {...props}
    >
      {children}
    </span>
  );
}
