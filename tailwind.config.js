/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#09090b', // Obsidian Black
        surface: {
          DEFAULT: '#171717', // Dark Charcoal
          light: '#262626',
          lighter: '#404040',
        },
        accent: {
          DEFAULT: '#ccff00', // Electric Lime
          glow: '#e2ff66',
          muted: '#84cc16', // Slightly muted lime for borders
        },
        text: {
          DEFAULT: '#f8fafc', // Slate White
          muted: '#94a3b8', // Slate Gray
          dim: '#475569',
        },
        border: {
          DEFAULT: 'rgba(255, 255, 255, 0.05)',
          light: 'rgba(255, 255, 255, 0.1)',
        },
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        heading: ['"Montserrat"', 'sans-serif'],
        accent: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Poppins"', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        'marquee-fast': 'marquee 20s linear infinite',
        pulseSlow: 'pulseSlow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
      },
      backgroundImage: {
        'noise': "url('/noise.png')", // We'll add this via CSS data URI instead for ease
      }
    },
  },
  plugins: [],
}
