import { forwardRef, InputHTMLAttributes } from 'react';
import { clsx } from 'clsx';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  label?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, label, className, id, style, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="font-mono font-medium uppercase"
            style={{ fontSize: '11px', letterSpacing: '0.08em', color: 'var(--text-dim)' }}
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={clsx('w-full outline-none font-sans', className)}
          style={{
            backgroundColor: 'var(--card-bg)',
            border: error ? '1px solid var(--error)' : '1px solid var(--header-bg)',
            borderRadius: 'var(--r-sm)',
            height: '40px',
            padding: '0 var(--sp-3)',
            color: 'var(--text-main)',
            fontSize: 'var(--fs-body)',
            transitionProperty: 'border-color, box-shadow',
            transitionDuration: 'var(--dur-micro)',
            transitionTimingFunction: 'var(--ease)',
            ...style,
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = error ? 'var(--error)' : 'var(--primary)';
            e.currentTarget.style.boxShadow = error
              ? '0 0 0 1px var(--error)'
              : '0 0 0 1px var(--primary)';
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = error ? 'var(--error)' : 'var(--header-bg)';
            e.currentTarget.style.boxShadow = 'none';
            props.onBlur?.(e);
          }}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = 'Input';
