/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4A90E2',
          light: '#87CEEB',
          dark: '#2E5C8A',
        },
        accent: {
          gold: '#FFD700',
          silver: '#C0C0C0',
        },
        text: {
          DEFAULT: '#2C3E50',
          light: '#5A6C7D',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

