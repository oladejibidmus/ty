'use client';

import { useRef } from 'react';
import { Badge } from '@/components/pc/Badge';
import { ProgressBar } from '@/components/pc/ProgressBar';
import { BookOpen } from 'lucide-react';

type CourseStatus = 'published' | 'draft' | 'free';

interface CourseCardProps {
  title: string;
  creator: string;
  cardCount: number;
  status: CourseStatus;
  thumbnailUrl?: string;
  enrolled?: boolean;
  progress?: number;
  className?: string;
}

const statusVariantMap: Record<CourseStatus, 'primary' | 'neutral' | 'success'> = {
  published: 'primary',
  draft:     'neutral',
  free:      'success',
};

const statusLabelMap: Record<CourseStatus, string> = {
  published: 'Published',
  draft:     'Draft',
  free:      'Free',
};

export function CourseCard({
  title,
  creator,
  cardCount,
  status,
  thumbnailUrl,
  enrolled,
  progress = 0,
  className,
}: CourseCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (!cardRef.current) return;
    cardRef.current.style.borderColor = 'var(--primary)';
    cardRef.current.style.boxShadow = 'var(--shadow-deep-blue)';
    if (overlayRef.current) {
      overlayRef.current.style.opacity = '1';
    }
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.borderColor = 'var(--header-bg)';
    cardRef.current.style.boxShadow = 'none';
    if (overlayRef.current) {
      overlayRef.current.style.opacity = '0';
    }
  };

  return (
    <div
      ref={cardRef}
      className={`flex flex-col ${className ?? ''}`}
      style={{
        backgroundColor: 'var(--card-bg)',
        border: '1px solid var(--header-bg)',
        borderRadius: 'var(--r-card)',
        overflow: 'hidden',
        transitionProperty: 'border-color, box-shadow',
        transitionDuration: 'var(--dur-macro)',
        transitionTimingFunction: 'var(--ease)',
        cursor: 'pointer',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Thumbnail */}
      <div
        style={{
          position: 'relative',
          paddingTop: '56.25%',
          backgroundColor: 'var(--header-bg)',
          overflow: 'hidden',
        }}
      >
        {thumbnailUrl ? (
          <img
            src={thumbnailUrl}
            alt={title}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        ) : (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <BookOpen size={32} style={{ color: 'var(--text-dim)', opacity: 0.4 }} />
          </div>
        )}

        {/* Hover overlay gradient */}
        <div
          ref={overlayRef}
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(0,122,204,0.15) 0%, transparent 60%)',
            opacity: 0,
            transitionProperty: 'opacity',
            transitionDuration: 'var(--dur-macro)',
            transitionTimingFunction: 'var(--ease)',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Card content */}
      <div
        className="flex flex-col gap-2 flex-1"
        style={{ padding: 'var(--sp-4)', paddingBottom: enrolled ? 'var(--sp-3)' : 'var(--sp-4)' }}
      >
        {/* Meta row */}
        <div className="flex items-center gap-2">
          <Badge variant={statusVariantMap[status]}>{statusLabelMap[status]}</Badge>
          <span
            className="font-mono"
            style={{ fontSize: 'var(--fs-label)', color: 'var(--text-dim)', letterSpacing: '0.05em' }}
          >
            {cardCount} CARDS
          </span>
        </div>

        {/* Title */}
        <h3
          className="font-sans font-bold leading-snug"
          style={{
            fontSize: 'var(--fs-h3)',
            color: 'var(--text-white)',
            lineHeight: '1.3',
          }}
        >
          {title}
        </h3>

        {/* Creator */}
        <p
          className="font-mono uppercase mt-auto"
          style={{
            fontSize: 'var(--fs-label)',
            color: 'var(--text-dim)',
            letterSpacing: '0.08em',
          }}
        >
          {creator}
        </p>
      </div>

      {/* Progress bar (enrolled only) */}
      {enrolled && (
        <div style={{ padding: '0 var(--sp-4) var(--sp-4)' }}>
          <ProgressBar value={progress} />
        </div>
      )}
    </div>
  );
}
