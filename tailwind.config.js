module.exports = {
  content: [
    "./src/**/*.{html,js, jsx, ts, tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/container/**/*.{js,ts,jsx,tsx}",
],
mode: "jit",
media: false, // or 'media' or 'class' or 'darkMode'
theme: {
  fontFamily: {
    display: ["Open Sans", "sans-serif"],
    body: ["Open Sans", "sans-serif"],
  },
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
    fontSize: {
      "2xs": "0.625rem",
    },
    variants: {},
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
}