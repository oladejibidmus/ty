import { Flame } from 'lucide-react';

interface StreakBadgeProps {
  count: number;
  className?: string;
}

export function StreakBadge({ count, className }: StreakBadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-1 font-mono font-medium ${className ?? ''}`}
      style={{
        backgroundColor: 'var(--primary-10)',
        border: '1px solid var(--primary-40)',
        borderRadius: 'var(--r-sm)',
        padding: 'var(--sp-2)',
        fontSize: 'var(--fs-label)',
        color: 'var(--primary)',
        letterSpacing: '0.05em',
      }}
    >
      <Flame size={12} />
      <span>{count}</span>
    </div>
  );
}
