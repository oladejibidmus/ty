import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        /* ── Surfaces ── */
        'ui-bg':      'var(--ui-bg)',
        'card-bg':    'var(--card-bg)',
        'header-bg':  'var(--header-bg)',
        'control-bg': 'var(--control-bg)',

        /* ── Text ── */
        'text-main':  'var(--text-main)',
        'text-dim':   'var(--text-dim)',
        'text-white': 'var(--text-white)',

        /* ── Brand ── */
        'brand-primary':    'var(--primary)',
        'brand-primary-10': 'var(--primary-10)',
        'brand-primary-20': 'var(--primary-20)',
        'brand-primary-40': 'var(--primary-40)',
        'brand-link':       'var(--link)',

        /* ── Semantic ── */
        'brand-success':    'var(--success)',
        'brand-success-10': 'var(--success-10)',
        'brand-success-20': 'var(--success-20)',
        'brand-warning':    'var(--warning)',
        'brand-warning-10': 'var(--warning-10)',
        'brand-warning-20': 'var(--warning-20)',
        'brand-error':      'var(--error)',
        'brand-error-10':   'var(--error-10)',
        'brand-error-20':   'var(--error-20)',

        /* shadcn compat */
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },

      /* ── Borders ── */
      borderColor: {
        border:        'var(--border)',
        'border-soft': 'var(--border-soft)',
        primary:       'var(--primary)',
        'primary-40':  'var(--primary-40)',
        success:       'var(--success)',
        warning:       'var(--warning)',
        error:         'var(--error)',
      },

      /* ── Radii ── */
      borderRadius: {
        sm:    'var(--r-sm)',
        card:  'var(--r-card)',
        modal: 'var(--r-modal)',
        pill:  'var(--r-pill)',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
      },

      /* ── Font families ── */
      fontFamily: {
        sans:    ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono:    ['var(--font-jetbrains)', 'ui-monospace', 'Menlo', 'Consolas', 'monospace'],
        display: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },

      /* ── Font sizes ── */
      fontSize: {
        hero:    ['36px', { lineHeight: '1.1' }],
        display: ['28px', { lineHeight: '1.15' }],
        h2:      ['22px', { lineHeight: '1.2' }],
        h3:      ['18px', { lineHeight: '1.3' }],
        body:    ['14px', { lineHeight: '1.55' }],
        small:   ['12px', { lineHeight: '1.5' }],
        label:   ['11px', { lineHeight: '1.4' }],
        xs:      ['10px', { lineHeight: '1.4' }],
      },

      /* ── Spacing ── */
      spacing: {
        'sp-1': '4px',
        'sp-2': '8px',
        'sp-3': '12px',
        'sp-4': '16px',
        'sp-5': '24px',
        'sp-6': '32px',
        'sp-7': '40px',
        'sp-8': '64px',
      },

      /* ── Shadows ── */
      boxShadow: {
        'blue-glow':  '0 4px 14px 0 rgba(0,122,204,0.39)',
        'deep-blue':  '0 10px 30px -10px rgba(0,20,40,0.8)',
        'modal':      '0 20px 50px rgba(0,0,0,0.8)',
        'focus':      '0 0 0 1px var(--primary)',
        'focus-error':'0 0 0 1px var(--error)',
      },

      /* ── Motion ── */
      transitionDuration: {
        micro: '150ms',
        macro: '300ms',
      },
      transitionTimingFunction: {
        ease: 'cubic-bezier(0.2,0,0,1)',
      },

      keyframes: {
        shimmer: {
          '0%':   { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        'accordion-down': {
          from: { height: '0' },
          to:   { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to:   { height: '0' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        shimmer:         'shimmer 2s linear infinite',
        'accordion-down':'accordion-down 0.2s ease-out',
        'accordion-up':  'accordion-up 0.2s ease-out',
        'fade-up':       'fade-up 300ms cubic-bezier(0.2,0,0,1) both',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
