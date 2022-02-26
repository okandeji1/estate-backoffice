module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  content: [
    "./pages/**/*.{js, jsx, ts, tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./container/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // @ignore-prettier
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        tertiary: "var(--color-tertiary)",
        succes: "var(--color-success)",
        error: "var(--color-error)",
        transparent: "var(--color-transparent)",
        lightPrimary: "var(--color-light-primary)",
      },
      minHeight: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
      },
      spacing: {
        13: "13rem",
      },
      width: {
        10: "10%"
      },
      fontSize: {
        "2xs": "0.625rem",
      },
      variants: {},
      screens: {
        mf: "990px",
      },
      keyframes: {
        "slide-in": {
          "0%": {
            "-webkit-transform": "translateX(120%)",
            transform: "translateX(120%)",
          },
          "100%": {
            "-webkit-transform": "translateX(0%)",
            transform: "translateX(0%)",
          },
        },
      },
      animation: {
        "slide-in": "slide-in 0.5s ease-out",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
