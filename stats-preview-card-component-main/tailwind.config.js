module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    screens: {
      sm: "375px",
      xl: "1440px",
    },
    colors: {
      "blue-900": "hsl(233, 47%, 7%)",
      "blue-800": "hsl(244, 38%, 16%)",
      violet: "hsl(277, 64%, 61%)",
      "white-900": "hsl(0, 0%, 100%)",
      "white-100": "hsla(0, 0%, 100%, 0.075)",
      "white-200": "hsla(0, 0%, 100%, 0.6)",
    },
    fontFamily: {
      primary: ["Inter", "sans-serif"],
      secondary: ["Lexend Deca", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
