/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
    fontFamily: {
      playfair: ['"Playfair Display"', "serif"],
      lato: ["Lato", "sans-serif"],
      dmserif: ["DM Serif Display", "serif"],
      urbanist: ["Urbanist", "sans-serif"],
    },
    colors: {
      "lg-grey": "#e5e5e5",
      "dk-grey": "#484848",
      grey: "#8C8582",
      "lg-pink": "#FEF5F7",
      "dk-pink": "#DA2A52",
      pink: "#EB3C79",
      white: "#ffffff",
      black: "#111111",
    },
  },
  plugins: [require("tw-elements/dist/plugin"), require("flowbite/plugin")],
};
