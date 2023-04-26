/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,scss,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: `"Source Sans Pro", ${defaultTheme.fontFamily.sans.join(",")}`,
        mono: `"IBM Plex Mono", ${defaultTheme.fontFamily.mono.join(",")}`,
      },
      colors: {
        penpot: {
          DEFAULT: "#31EFB8",
          dark: "#00C38B",
          danger: "#E65244",
          success: "#49D793",
          warning: "#FC8802",
          complete: "#A599C6",
          info: "#59B9E2",
        },
        gray: {
          canvas: "#F6F6F6",
          100: "#E3E3E3",
          200: "#B1B2B5",
          300: "#7B7D85",
          400: "#64666A",
          500: "#303236",
          600: "#1F1F1F",
        },
      },
    },
  },
  plugins: [],
};
