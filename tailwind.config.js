/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        84: "21rem",
        130: "30rem",
        18: "4.5rem",
        w48: "48%",
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1065px",
        xl: "1440px",
      },
      boxShadow: {
        "3xl": "0px 0px 8px 1px #0606061c",
      },
    },
  },
  plugins: [],
};
