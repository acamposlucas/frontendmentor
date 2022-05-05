module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      sm: "375px",
      xl: "1440px",
    },
    colors: {
      cyan: "hsl(193, 38%, 86%)",
      green: "hsl(150, 100%, 66%)",
      blue: {
        100: "hsl(217, 19%, 38%)",
        200: "hsl(217, 19%, 24%)",
        300: "hsl(218, 23%, 16%)",
      },
    },
    fontFamily: {
      sans: ["Manrope", "sans-serif"],
    },
    fontWeight: {
      bold: 800,
    },
    boxShadow: {
      "3xl": "0 0 10px 3px hsl(150, 100%, 66%)",
    },
  },
  plugins: [],
};
