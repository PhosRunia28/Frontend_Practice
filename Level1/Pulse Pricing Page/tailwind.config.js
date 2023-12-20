/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        workSans: ["Work Sans", "sans-serif"],
      },
      colors: {
        primary: "#00AD6A",
        secondary: "#EAFAF1",
        info: "#F2F3F3",
        button: "#1FE374",
        footer_bg: "#080C16",
      },
    },
  },
  plugins: [],
};
