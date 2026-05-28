import { HTMLAttributes } from 'react';
import { clsx } from 'clsx';

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  height?: string | number;
  width?: string | number;
}

export function Skeleton({ height, width, className, style, ...props }: SkeletonProps) {
  return (
    <div
      className={clsx('shimmer', className)}
      style={{
        height: typeof height === 'number' ? `${height}px` : (height ?? '16px'),
        width: typeof width === 'number' ? `${width}px` : (width ?? '100%'),
        borderRadius: 'var(--r-sm)',
        ...style,
      }}
      {...props}
    />
  );
}
