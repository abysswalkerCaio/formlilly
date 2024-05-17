import { _fontFamily } from "#tailwind-config/theme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        "deep-blush": {
          "50": "#fef2f4",
          "100": "#fce7ea",
          "200": "#f9d2d9",
          "300": "#f5acbb",
          "400": "#ec6f8c",
          "500": "#e35076",
          "600": "#cf2f60",
          "700": "#ae2250",
          "800": "#921f49",
          "900": "#7d1e43",
          "950": "#450c21",
        },
      },
    },
  },
  plugins: [],
};
