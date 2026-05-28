'use client';

import { CourseCard } from '@/components/pc/CourseCard';
import { Card } from '@/components/pc/Card';
import { Badge } from '@/components/pc/Badge';
import { StreakBadge } from '@/components/pc/StreakBadge';
import { Button } from '@/components/pc/Button';
import { Input } from '@/components/pc/Input';
import { ProgressBar } from '@/components/pc/ProgressBar';
import { Skeleton } from '@/components/pc/Skeleton';
import {
  TrendingUp,
  Users,
  BookOpen,
  Zap,
  ArrowRight,
  Star,
} from 'lucide-react';

const FEATURED_COURSES = [
  {
    title: 'Advanced TypeScript Patterns for Production Systems',
    creator: 'Maya Chen',
    cardCount: 42,
    status: 'published' as const,
    thumbnailUrl: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
    enrolled: true,
    progress: 68,
  },
  {
    title: 'System Design: From Zero to Distributed Scale',
    creator: 'James Okafor',
    cardCount: 58,
    status: 'published' as const,
    thumbnailUrl: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
    enrolled: false,
    progress: 0,
  },
  {
    title: 'Rust for Backend Engineers: Memory Safety in Practice',
    creator: 'Sofia Reinholt',
    cardCount: 35,
    status: 'free' as const,
    thumbnailUrl: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800',
    enrolled: true,
    progress: 22,
  },
];

const METRICS = [
  { label: 'Total Courses', value: '1,247', delta: '+12', icon: BookOpen, color: 'var(--primary)' },
  { label: 'Total Learners', value: '84,391', delta: '+2.3K', icon: Users, color: 'var(--success)' },
  { label: 'Avg Completion', value: '73.4%', delta: '+1.2%', icon: TrendingUp, color: 'var(--warning)' },
  { label: 'Launched Today', value: '18', delta: '+18', icon: Zap, color: 'var(--error)' },
];

export default function HomePage() {
  return (
    <div
      style={{
        backgroundColor: 'var(--ui-bg)',
        minHeight: '100vh',
        padding: 'var(--sp-6)',
        paddingTop: 'var(--sp-7)',
        maxWidth: '1200px',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      {/* ── Hero Block ── */}
      <section
        style={{
          borderLeft: '4px solid var(--primary)',
          paddingLeft: 'var(--sp-5)',
          marginBottom: 'var(--sp-8)',
        }}
      >
        <div className="flex items-center gap-3 mb-3">
          <Badge variant="primary">Platform Overview</Badge>
          <StreakBadge count={14} />
        </div>
        <h1
          className="font-sans font-black uppercase"
          style={{
            fontSize: 'clamp(28px, 5vw, 36px)',
            color: 'var(--text-white)',
            letterSpacing: '-0.01em',
            lineHeight: '1.05',
            marginBottom: 'var(--sp-3)',
          }}
        >
          Learn anything.<br />5 minutes at a time.
        </h1>
        <p
          className="font-sans"
          style={{
            fontSize: 'var(--fs-body)',
            color: 'var(--text-dim)',
            maxWidth: '480px',
            lineHeight: '1.6',
            marginBottom: 'var(--sp-5)',
          }}
        >
          PocketClass delivers precision-crafted microlearning through swipe-based cards.
          Built for creators who take education seriously, and learners who value their time.
        </p>
        <div className="flex items-center gap-3 flex-wrap">
          <Button variant="primary" size="large">
            Start Learning
            <ArrowRight size={14} style={{ marginLeft: '6px' }} />
          </Button>
          <Button variant="secondary" size="large">
            Explore Courses
          </Button>
          <Button variant="ghost" size="large">
            Create a Course
          </Button>
        </div>
      </section>

      {/* ── Metrics Row ── */}
      <section style={{ marginBottom: 'var(--sp-8)' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 'var(--sp-4)',
          }}
        >
          {METRICS.map(({ label, value, delta, icon: Icon, color }) => (
            <Card key={label} style={{ padding: 'var(--sp-5)' }}>
              <div className="flex items-start justify-between mb-3">
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: 'var(--r-sm)',
                    backgroundColor: `color-mix(in srgb, ${color} 12%, transparent)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: `1px solid color-mix(in srgb, ${color} 30%, transparent)`,
                  }}
                >
                  <Icon size={16} style={{ color }} />
                </div>
                <span
                  className="font-mono font-medium"
                  style={{ fontSize: 'var(--fs-label)', color: 'var(--success)', letterSpacing: '0.05em' }}
                >
                  {delta}
                </span>
              </div>
              <div
                className="font-sans font-black"
                style={{ fontSize: 'var(--fs-display)', color: 'var(--text-white)', lineHeight: '1', marginBottom: '4px' }}
              >
                {value}
              </div>
              <div
                className="font-mono uppercase"
                style={{ fontSize: 'var(--fs-label)', color: 'var(--text-dim)', letterSpacing: '0.08em' }}
              >
                {label}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* ── Section Header: Featured Courses ── */}
      <section style={{ marginBottom: 'var(--sp-8)' }}>
        <div
          className="flex items-center justify-between"
          style={{
            paddingBottom: 'var(--sp-4)',
            marginBottom: 'var(--sp-5)',
            borderBottom: '1px solid var(--border)',
          }}
        >
          <h2
            className="font-mono font-bold uppercase"
            style={{ fontSize: 'var(--fs-h2)', color: 'var(--primary)', letterSpacing: '0.04em' }}
          >
            Featured Courses
          </h2>
          <Button variant="ghost" size="small">
            View All
            <ArrowRight size={12} style={{ marginLeft: '4px' }} />
          </Button>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: 'var(--sp-5)',
          }}
        >
          {FEATURED_COURSES.map((course) => (
            <CourseCard key={course.title} {...course} />
          ))}
        </div>
      </section>

      {/* ── Section Header: Component Showcase ── */}
      <section style={{ marginBottom: 'var(--sp-8)' }}>
        <div
          style={{
            paddingBottom: 'var(--sp-4)',
            marginBottom: 'var(--sp-5)',
            borderBottom: '1px solid var(--border)',
          }}
        >
          <h2
            className="font-mono font-bold uppercase"
            style={{ fontSize: 'var(--fs-h2)', color: 'var(--primary)', letterSpacing: '0.04em' }}
          >
            Design System
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: 'var(--sp-5)',
          }}
        >
          {/* Buttons */}
          <Card>
            <div
              className="font-mono font-bold uppercase"
              style={{
                fontSize: 'var(--fs-label)',
                color: 'var(--text-dim)',
                letterSpacing: '0.1em',
                marginBottom: 'var(--sp-4)',
              }}
            >
              Buttons
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 flex-wrap">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <Button variant="primary" size="large">Large</Button>
                <Button variant="primary" size="standard">Standard</Button>
                <Button variant="primary" size="small">Small</Button>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <Button variant="primary" disabled>Disabled</Button>
                <Button variant="secondary" disabled>Disabled</Button>
              </div>
            </div>
          </Card>

          {/* Badges + Streak */}
          <Card>
            <div
              className="font-mono font-bold uppercase"
              style={{
                fontSize: 'var(--fs-label)',
                color: 'var(--text-dim)',
                letterSpacing: '0.1em',
                marginBottom: 'var(--sp-4)',
              }}
            >
              Badges & Status
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 flex-wrap">
                <Badge variant="primary">Primary</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="error">Error</Badge>
                <Badge variant="neutral">Neutral</Badge>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <StreakBadge count={7} />
                <StreakBadge count={30} />
                <StreakBadge count={100} />
              </div>
              <div className="flex items-center gap-3">
                {[
                  { color: 'var(--success)', shadow: '0 0 8px var(--success)', label: 'Online' },
                  { color: 'var(--warning)', shadow: 'none', label: 'Warn' },
                  { color: 'var(--error)', shadow: 'none', label: 'Error' },
                  { color: 'var(--text-dim)', shadow: 'none', label: 'Idle' },
                ].map(({ color, shadow, label }) => (
                  <div key={label} className="flex items-center gap-2">
                    <div
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: color,
                        boxShadow: shadow,
                        flexShrink: 0,
                      }}
                    />
                    <span
                      className="font-mono"
                      style={{ fontSize: 'var(--fs-label)', color: 'var(--text-dim)' }}
                    >
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Inputs */}
          <Card>
            <div
              className="font-mono font-bold uppercase"
              style={{
                fontSize: 'var(--fs-label)',
                color: 'var(--text-dim)',
                letterSpacing: '0.1em',
                marginBottom: 'var(--sp-4)',
              }}
            >
              Inputs
            </div>
            <div className="flex flex-col gap-3">
              <Input label="Course Title" placeholder="Enter course title..." />
              <Input label="Creator Handle" placeholder="@username" />
              <Input label="Invalid Field" placeholder="Something went wrong..." error />
            </div>
          </Card>

          {/* Progress + Skeletons */}
          <Card>
            <div
              className="font-mono font-bold uppercase"
              style={{
                fontSize: 'var(--fs-label)',
                color: 'var(--text-dim)',
                letterSpacing: '0.1em',
                marginBottom: 'var(--sp-4)',
              }}
            >
              Progress & Skeletons
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                {[24, 58, 91].map((v) => (
                  <div key={v} className="flex items-center gap-3">
                    <ProgressBar value={v} className="flex-1" />
                    <span
                      className="font-mono"
                      style={{
                        fontSize: 'var(--fs-label)',
                        color: 'var(--text-dim)',
                        minWidth: '32px',
                        textAlign: 'right',
                      }}
                    >
                      {v}%
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-2 pt-2" style={{ borderTop: '1px solid var(--border)' }}>
                <Skeleton height={16} width="70%" />
                <Skeleton height={14} width="50%" />
                <Skeleton height={14} width="85%" />
                <div className="flex gap-2 mt-1">
                  <Skeleton height={24} width={60} />
                  <Skeleton height={24} width={80} />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* ── Trending Section ── */}
      <section style={{ marginBottom: 'var(--sp-6)' }}>
        <div
          style={{
            paddingBottom: 'var(--sp-4)',
            marginBottom: 'var(--sp-5)',
            borderBottom: '1px solid var(--border)',
          }}
        >
          <h2
            className="font-mono font-bold uppercase"
            style={{ fontSize: 'var(--fs-h2)', color: 'var(--primary)', letterSpacing: '0.04em' }}
          >
            Trending Now
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {[
            { rank: 1, title: 'Mastering React Server Components', creator: 'Alex Wu', learners: '12.4K', rating: 4.9 },
            { rank: 2, title: 'Go Concurrency Patterns Deep Dive', creator: 'Priya Sharma', learners: '9.8K', rating: 4.8 },
            { rank: 3, title: 'Database Internals: How B-Trees Work', creator: 'Luca Bianchi', learners: '8.1K', rating: 4.7 },
            { rank: 4, title: 'Kubernetes Operators from Scratch', creator: 'Dana Kim', learners: '6.3K', rating: 4.8 },
          ].map(({ rank, title, creator, learners, rating }) => (
            <div
              key={rank}
              className="flex items-center gap-4"
              style={{
                padding: 'var(--sp-4)',
                backgroundColor: 'var(--card-bg)',
                border: '1px solid var(--header-bg)',
                borderRadius: 'var(--r-card)',
                cursor: 'pointer',
                transitionProperty: 'border-color, background-color',
                transitionDuration: 'var(--dur-micro)',
                transitionTimingFunction: 'var(--ease)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--primary)';
                e.currentTarget.style.backgroundColor = 'var(--header-bg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--header-bg)';
                e.currentTarget.style.backgroundColor = 'var(--card-bg)';
              }}
            >
              <span
                className="font-mono font-bold"
                style={{
                  fontSize: 'var(--fs-h2)',
                  color: rank === 1 ? 'var(--primary)' : 'var(--header-bg)',
                  minWidth: '32px',
                  lineHeight: '1',
                }}
              >
                {String(rank).padStart(2, '0')}
              </span>
              <div className="flex-1 min-w-0">
                <div
                  className="font-sans font-bold truncate"
                  style={{ fontSize: 'var(--fs-body)', color: 'var(--text-white)' }}
                >
                  {title}
                </div>
                <div
                  className="font-mono uppercase mt-1"
                  style={{ fontSize: 'var(--fs-label)', color: 'var(--text-dim)', letterSpacing: '0.08em' }}
                >
                  {creator}
                </div>
              </div>
              <div className="flex items-center gap-4 flex-shrink-0">
                <div className="flex items-center gap-1">
                  <Star size={11} style={{ color: 'var(--warning)', fill: 'var(--warning)' }} />
                  <span
                    className="font-mono"
                    style={{ fontSize: 'var(--fs-label)', color: 'var(--warning)' }}
                  >
                    {rating}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Users size={11} style={{ color: 'var(--text-dim)' }} />
                  <span
                    className="font-mono"
                    style={{ fontSize: 'var(--fs-label)', color: 'var(--text-dim)' }}
                  >
                    {learners}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
