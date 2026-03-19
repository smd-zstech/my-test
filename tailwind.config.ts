import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0b1220',
        foreground: '#e5eefc',
        panel: '#111a2e',
        border: '#22304d',
        muted: '#8ea0bf',
        accent: '#7c3aed',
        success: '#10b981',
        warning: '#f59e0b',
        danger: '#ef4444'
      },
      boxShadow: {
        panel: '0 14px 40px rgba(15, 23, 42, 0.25)'
      }
    }
  },
  plugins: []
} satisfies Config;
