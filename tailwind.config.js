/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Fuente corporativa JD: system-ui + stack seria y moderna
        jd: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "\"Segoe UI\"",
          "Roboto",
          "sans-serif",
        ],
      },
      letterSpacing: {
        tightish: "-0.01em",
        wideish: "0.16em",
      },
    },
  },
  plugins: [],
};

