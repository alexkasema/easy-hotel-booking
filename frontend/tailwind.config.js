/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#038C7F',
        secondary: '#F2C641',
        tertiary: {
          dark: '#0097A7',
          light: '#B2EBF2',
        },
      },
    },
    container: {
      padding: {
        md: '10rem',
      },
    }
  },
  plugins: [],
}

