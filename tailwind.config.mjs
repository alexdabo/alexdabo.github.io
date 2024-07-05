/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        logo: {
          // api
          express: "#252525",
          loopback: "#ffffff",
          nest: "#e0234e",
          graphql: "#e10098",
          sri: "#0758a1",

          //db
          mongodb: '#01ec64',
          mysql: '#00546b',
          postgres: '#336791',

          // lang
          go: '#00A7D0',
          java: '#5382a1',
          node: '#41873F',
          typescript: '#3178c6',

          //web
          astro: '#ff5d01',
          react: '#00d8ff',
          vue: '#41b883',
        },
        primary: {
          50: "#f3f1ff",
          100: "#ebe5ff",
          200: "#d9ceff",
          300: "#bea6ff",
          400: "#9f75ff",
          500: "#843dff",
          600: "#7916ff",
          700: "#6b04fd",
          800: "#5a03d5",
          900: "#4b05ad",
          950: "#2c0076",
        },
      },
    },
  },
  safelist: [
    'bg-gray-800/90',
    { pattern: /bg-logo-(.*)/ },
    { pattern: /shadow-logo-(.*)/ ,variants:['hover','dark','hover:dark']},
    { pattern: /border-t-logo-(.*)/, variants: ['after'] },
    { pattern: /border-t-gray-800/, variants: ['after'] },

  ],
  plugins: [],
};
