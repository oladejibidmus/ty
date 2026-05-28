interface ProgressBarProps {
  value: number;
  className?: string;
}

export function ProgressBar({ value, className }: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, value));

  return (
    <div
      className={className}
      style={{
        height: '4px',
        borderRadius: 'var(--r-pill)',
        backgroundColor: 'var(--control-bg)',
        overflow: 'hidden',
      }}
      role="progressbar"
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        style={{
          height: '100%',
          width: `${clamped}%`,
          backgroundColor: 'var(--primary)',
          borderRadius: 'var(--r-pill)',
          transitionProperty: 'width',
          transitionDuration: 'var(--dur-macro)',
          transitionTimingFunction: 'var(--ease)',
        }}
      />
    </div>
  );
}
