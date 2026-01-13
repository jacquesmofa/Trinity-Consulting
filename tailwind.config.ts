import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        blue: {
          900: '#1e3a8a',
          800: '#1e40af',
        },
        red: {
          600: '#dc2626',
          700: '#b91c1c',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
