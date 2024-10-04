/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-inter)", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "hero-image": "url('/images/hero-bg.png')",
      },
      fontFamily: {
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      boxShadow: {
        button: "0px 0px 68px 7px rgba(0, 0, 0, 0.4)",
      },
      colors: {
        'tm': {
          100: '#fafafa',
          200: '#E9E9E9',
          300: '#B3B5B9',
          900: '#000000',
        },
        'primary': {
          100: '#FFD4C0',
          200: '#FBA683',
          300: '#f37848',
          400: '#EB5E28',
          500: '#BF421A',
          700: '#943113',
          900: '#6a210c',
        }
      },
    },
  },
  plugins: [],
};
