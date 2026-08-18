/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './v2.html', './dist/index.html', './dist/v2.html'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#d946ef',
          secondary: '#a855f7',
          bg: '#05020a',
          surface: '#120a17',
          surfaceHighlight: '#1f1129',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        title: ['Oswald', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1.5rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1300px',
          '2xl': '1300px',
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        'marquee-reverse': 'marqueeReverse 45s linear infinite',
        'glow-pulse': 'glowPulse 2.4s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 10px 30px rgba(217,70,239,0.35), 0 0 0 0 rgba(217,70,239,0.35)' },
          '50%': { boxShadow: '0 10px 30px rgba(217,70,239,0.35), 0 0 0 8px rgba(217,70,239,0)' },
        },
      },
    },
  },
  plugins: [],
};
