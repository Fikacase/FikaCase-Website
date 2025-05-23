import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Combine Tailwind classes and handle conflicts
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Common class combinations
export const commonClasses = {
  // Layout
  container: 'mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl',
  section: 'py-12 sm:py-16 lg:py-20',
  
  // Typography
  h1: 'font-display text-4xl md:text-5xl lg:text-h1 font-bold tracking-tight leading-tight',
  h2: 'font-display text-3xl md:text-4xl lg:text-h2 font-bold tracking-tight leading-tight',
  h3: 'font-display text-2xl md:text-3xl lg:text-h3 font-semibold tracking-tight leading-snug',
  h4: 'font-display text-xl md:text-2xl font-semibold tracking-tight leading-snug',
  body: 'font-sans text-lg md:text-xl lg:text-body leading-relaxed',
  
  // Interactive elements
  button: {
    base: 'inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98]',
    primary: 'bg-white text-black border-2 border-[#FF9900] shadow-sm hover:bg-[#FF9900] hover:text-white hover:shadow-[0_0_15px_rgba(255,153,0,0.35)] hover:scale-[1.02]',
    secondary: 'bg-primary-blue-100 text-primary-blue-900 hover:bg-primary-blue-200',
    sizes: {
      sm: 'h-9 px-4 text-sm',
      md: 'h-10 px-6 text-base',
      lg: 'h-12 px-8 text-lg',
    },
  },
  
  // Cards
  card: {
    base: 'rounded-xl border bg-white shadow-sm',
    hover: 'transition-all duration-300 hover:shadow-lg hover:-translate-y-1',
    interactive: 'cursor-pointer',
  },
  
  // Animations
  animate: {
    fadeIn: 'animate-fadeIn',
    slideIn: 'animate-slideIn',
    pulse: 'animate-pulse',
  },
  
  // Gradients
  gradient: {
    orange: 'bg-gradient-to-r from-[#FF9900] to-[#FF9900]',
    blue: 'bg-gradient-to-r from-primary-blue-100 to-primary-blue-200',
    text: 'bg-clip-text text-transparent',
  },
  
  // Responsive
  responsive: {
    hidden: 'hidden sm:block',
    grid: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6',
    flex: 'flex flex-col sm:flex-row items-center',
  },
} as const;

// Type for theme-aware class generation
export type CommonClasses = typeof commonClasses;

// Helper function to combine common classes with custom ones
export function combineClasses(baseClasses: string, customClasses?: string) {
  return cn(baseClasses, customClasses);
}

// Function to generate responsive classes
export function responsive(base: string, sm?: string, md?: string, lg?: string) {
  return cn(base, sm && `sm:${sm}`, md && `md:${md}`, lg && `lg:${lg}`);
} 