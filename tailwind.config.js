/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'biru': '#3f6dab',
        'biru-tekan': '#173445',
        'putih': '#fbfdfd',
        'oranye': '#f8aa55',
      },
      animation: {
        "slide-down": "slide-down 0.3s ease-out",
      },
      keyframes: {
        "slide-down": {
          "0%": { transform: "translateY(-10px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}

