import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-heading)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      colors: {
        cream: '#F3FAFD',
        sand: '#E6F2F8',
        brown: '#4E7A96',
        gold: '#6F9EB4',
        warm: '#8DB8C9',
        ink: '#0A2134',
        dark: '#061426',
      },
      boxShadow: {
        soft: '0 18px 44px rgba(0, 0, 0, 0.30)',
        lift: '0 28px 72px rgba(0, 0, 0, 0.42)',
      },
      backgroundImage: {
        'paper-grid':
          'radial-gradient(circle at 1px 1px, rgba(199, 162, 74, 0.08) 1px, transparent 0)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;