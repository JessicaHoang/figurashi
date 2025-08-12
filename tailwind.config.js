/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Warm, earthy color palette matching your design
        primary: {
          50: '#fef7ee',
          100: '#fdedd6',
          200: '#fad7ac',
          300: '#f6bb77',
          400: '#f1943d',
          500: '#ed7516',
          600: '#de5a0c',
          700: '#b8440c',
          800: '#933612',
          900: '#762e12',
        },
        // Beige/cream colors
        beige: {
          50: '#fefefe',
          100: '#fdfbf7',
          200: '#faf7f0',
          300: '#f5f0e6',
          400: '#ede6d6',
          500: '#e0d5c0',
          600: '#d1c4a8',
          700: '#b8a88a',
          800: '#9a8b6f',
          900: '#7d7159',
        },
        // Brown colors
        brown: {
          50: '#fdf8f6',
          100: '#faf0eb',
          200: '#f4e1d7',
          300: '#ecc9b8',
          400: '#e0a894',
          500: '#d18b73',
          600: '#c1725a',
          700: '#a85d4a',
          800: '#8a4d3f',
          900: '#714136',
        },
        // Olive green
        olive: {
          50: '#f6f7f4',
          100: '#ecefe6',
          200: '#d9dfcc',
          300: '#bcc7a8',
          400: '#9aab7e',
          500: '#7a8f5a',
          600: '#5f7246',
          700: '#4a5a39',
          800: '#3d4930',
          900: '#333d2a',
        },
        // Light pink accent
        pink: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        japanese: ['Noto Sans JP', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
