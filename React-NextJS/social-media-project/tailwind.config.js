/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D9042B",
        secondary: "#D91448",
        active: "#59081E",
        light: "#F2F2F2",
        dark: "#D0000",
      },
    },
  },
  plugins: [],
};
