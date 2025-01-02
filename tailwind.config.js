/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary01: "#FF914C",
        primary02: "#0148A9",
        offwhite: "#F2F4F8",
      },
    },
  },
  plugins: [],
};