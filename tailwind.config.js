/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#713ABE",
        secondary: "#5B0888",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "0.85rem",
          sm: "1rem",
        },
      },
      boxShadow: {
        'custom-light': '4px 4px 10px rgba(0, 0, 0, 0.1)',
        'custom-dark': '10px 10px 20px rgba(0, 0, 0, 0.4)',
        'above': '0 -4px 10px -1px rgba(0, 0, 0, 0.4)',
      }
    },

  },
  plugins: [],
}

