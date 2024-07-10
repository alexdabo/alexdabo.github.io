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

          // tool
          git:'#de4c36',
          linux:'#505050',

          //web
          astro: '#ff5d01',
          react: '#00d8ff',
          vue: '#41b883',
        },
        primary: {
          '50': '#fffbed',
          '100': '#fff5d5',
          '200': '#ffe8a9',
          '300': '#fed673',
          '400': '#fcb93b',
          '500': '#faa115',
          '600': '#f3890b',
          '700': '#c3660b',
          '800': '#9b5011',
          '900': '#7d4311',
          '950': '#432007',
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
