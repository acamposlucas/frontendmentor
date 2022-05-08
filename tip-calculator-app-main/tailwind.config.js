module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
      },
      colors: {
        primary: "hsl(172, 67%, 45%)",
        neutral: {
          100: "hsl(183, 100%, 15%)",
          200: "hsl(186, 14%, 43%)",
          300: "hsl(184, 14%, 56%)",
          400: "hsl(185, 41%, 84%)",
          500: "hsl(189, 41%, 97%)",
          600: "hsl(0, 0%, 100%)",
        },
        fontSize: {
          input: "24px",
        },
        fontFamily: {
          sans: ["Space Mono", "monospace"],
        },
        fontWeight: {
          bold: 700,
        },
      },
    },
  },
  plugins: [],
};
