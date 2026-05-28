'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Home, Compass, BookOpen, User } from 'lucide-react';
import { clsx } from 'clsx';

const NAV_ITEMS = [
  { href: '/',          label: 'Home',        icon: Home },
  { href: '/explore',   label: 'Explore',     icon: Compass },
  { href: '/learning',  label: 'My Learning', icon: BookOpen },
  { href: '/profile',   label: 'Profile',     icon: User },
];

export function NavShell({ children }: { children: React.ReactNode }) {
  const [expanded, setExpanded] = useState(false);
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen" style={{ backgroundColor: 'var(--ui-bg)' }}>
      {/* ── Desktop Left Rail ── */}
      <aside
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
        className="hidden md:flex flex-col fixed left-0 top-0 h-full z-50 transition-all"
        style={{
          width: expanded ? '220px' : '56px',
          backgroundColor: 'var(--card-bg)',
          borderRight: '1px solid var(--border)',
          transitionDuration: 'var(--dur-macro)',
          transitionTimingFunction: 'var(--ease)',
        }}
      >
        {/* Logo */}
        <div
          className="flex items-center overflow-hidden"
          style={{
            height: '56px',
            padding: '0 16px',
            borderBottom: '1px solid var(--border)',
            flexShrink: 0,
          }}
        >
          <span
            className="font-sans font-black uppercase tracking-widest whitespace-nowrap"
            style={{ color: 'var(--primary)', fontSize: '13px', letterSpacing: '0.12em' }}
          >
            {expanded ? 'POCKETCLASS' : 'PC'}
          </span>
        </div>

        {/* Nav Items */}
        <nav className="flex flex-col gap-1 p-2 flex-1">
          {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={clsx(
                  'flex items-center gap-3 rounded-sm overflow-hidden transition-all',
                  'h-9 px-2 relative'
                )}
                style={{
                  transitionDuration: 'var(--dur-micro)',
                  transitionTimingFunction: 'var(--ease)',
                  backgroundColor: active ? 'var(--primary-10)' : 'transparent',
                  color: active ? 'var(--text-white)' : 'var(--text-dim)',
                  borderLeft: active ? '4px solid var(--primary)' : '4px solid transparent',
                  paddingLeft: active ? '8px' : '8px',
                }}
                onMouseEnter={(e) => {
                  if (!active) {
                    e.currentTarget.style.color = 'var(--text-white)';
                    e.currentTarget.style.backgroundColor = 'var(--header-bg)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!active) {
                    e.currentTarget.style.color = 'var(--text-dim)';
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                <Icon size={16} style={{ flexShrink: 0 }} />
                <span
                  className="font-mono font-medium uppercase whitespace-nowrap text-label"
                  style={{
                    letterSpacing: '0.08em',
                    opacity: expanded ? 1 : 0,
                    transitionDuration: 'var(--dur-macro)',
                    transitionTimingFunction: 'var(--ease)',
                  }}
                >
                  {label}
                </span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* ── Main Content ── */}
      <main
        className="flex-1 min-h-screen"
        style={{ marginLeft: '0px', paddingBottom: '72px' }}
      >
        <div className="hidden md:block" style={{ marginLeft: '56px' }}>
          {children}
        </div>
        <div className="md:hidden">{children}</div>
      </main>

      {/* ── Mobile Bottom Tab Bar ── */}
      <nav
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex"
        style={{
          backgroundColor: 'var(--card-bg)',
          borderTop: '1px solid var(--border)',
          height: '64px',
        }}
      >
        {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className="flex-1 flex flex-col items-center justify-center gap-1"
              style={{ color: active ? 'var(--primary)' : 'var(--text-dim)' }}
            >
              <Icon size={20} />
              <span
                className="font-mono uppercase"
                style={{ fontSize: '9px', letterSpacing: '0.08em' }}
              >
                {label}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
