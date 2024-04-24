/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize:{
      xs: "0.75rem", //12px
      sm: "0.875rem", //14px
      base: "1.0625rem", //17px
      lg: ["1.1875rem", "1.21"], //19px
      xl: "1.3125rem", //21px
      "2xl": "1.5rem", //24px
      "3xl": "1.75rem", //28px
      "4xl": ["2.5rem", "1.1"], //40px
      "5xl": ["4.5rem", "1.05"], //72px
    },
    fontFamily: {
      "roboto": [
        "Roboto",
        "sans-serif",
      ]
    },
    extend: {
      colors: {
        "footer-bg": "rgb(88, 86, 86)",
        "header-bg": "rgb(17,66,144)",
        "extra": "rgb(240, 115, 51)"
      }
    },
  },
  plugins: [],
}

