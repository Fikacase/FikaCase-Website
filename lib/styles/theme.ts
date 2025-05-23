import { colors } from '../constants/colors';

export type FontSize = {
  xs: string;
  sm: string;
  base: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
  '4xl': string;
  '5xl': string;
};

export type FontWeight = {
  light: number;
  normal: number;
  medium: number;
  semibold: number;
  bold: number;
  extrabold: number;
};

export type Spacing = {
  px: string;
  0: string;
  0.5: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  8: string;
  10: string;
  12: string;
  16: string;
  20: string;
  24: string;
  32: string;
  40: string;
  48: string;
  56: string;
  64: string;
};

export const theme = {
  colors,
  fonts: {
    sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
    display: ['var(--font-cabinet-grotesk)', 'system-ui', 'sans-serif'],
    mono: ['var(--font-jetbrains-mono)', 'monospace'],
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
  } as FontSize,
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  } as FontWeight,
  spacing: {
    px: '1px',
    0: '0',
    0.5: '0.125rem',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    32: '8rem',
    40: '10rem',
    48: '12rem',
    56: '14rem',
    64: '16rem',
  } as Spacing,
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  animations: {
    transition: {
      fast: 'all 0.2s ease',
      medium: 'all 0.3s ease',
      slow: 'all 0.5s ease',
    },
    keyframes: {
      fadeIn: {
        from: { opacity: 0 },
        to: { opacity: 1 },
      },
      slideIn: {
        from: { transform: 'translateX(-100%)' },
        to: { transform: 'translateX(0)' },
      },
    },
  },
} as const;

export type Theme = typeof theme;

// Utility types for accessing theme values with TypeScript support
export type ThemeColors = typeof colors;
export type ThemeFonts = typeof theme.fonts;
export type ThemeBreakpoints = typeof theme.breakpoints;
export type ThemeAnimations = typeof theme.animations; 