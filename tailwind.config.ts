import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'base': ['1rem', { lineHeight: '1.5' }],        /* 16px */
        'lg': ['1.125rem', { lineHeight: '1.5' }],      /* 18px */
        'xl': ['1.25rem', { lineHeight: '1.5' }],       /* 20px */
        '2xl': ['1.5rem', { lineHeight: '1.375' }],     /* 24px */
        '3xl': ['1.875rem', { lineHeight: '1.375' }],   /* 30px */
        '4xl': ['2.25rem', { lineHeight: '1.2' }],      /* 36px */
        '5xl': ['3rem', { lineHeight: '1.2' }],         /* 48px */
        // Semantic sizes based on actual usage
        'h1': ['3.5rem', { lineHeight: '1.2' }],        /* 56px */
        'h2': ['2.5rem', { lineHeight: '1.2' }],        /* 40px */
        'h3': ['1.875rem', { lineHeight: '1.375' }],    /* 30px */
        'body': ['1.25rem', { lineHeight: '1.625' }],   /* 20px */
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};

export default config; 