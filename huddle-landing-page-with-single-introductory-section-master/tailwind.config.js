module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    colors: {
      violet: "hsl(257, 40%, 49%)",
      magenta: "hsl(300, 69%, 71%)",
      white: "hsl(0, 0%, 100%)",
    },
    fontFamily: {
      primary: ["Poppins", "sans-serif"],
      secondary: ["Open Sans", "sans-serif"],
    },
    fontWeight: {
      regular: 400,
      semiBold: 600,
    },
  },
  plugins: [],
};
