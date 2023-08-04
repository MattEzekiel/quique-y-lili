/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'principal': "#23605B",
        'secundario': "#9E7148",
        'terciario': "#A36A7B",
        'cuaternario': "#EBD9E5",
        'gradient-blue': '#55AAC0',
        'gradient-pink': '#F0C4A9',
      },
      rotate: {
        '270' : '270deg',
      }
    },
  },
  plugins: [],
}
