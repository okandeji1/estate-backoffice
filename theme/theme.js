const breakpoints = ["480px", "576px", "768px", "992px", "1280px", "1600px"];

breakpoints.xs = breakpoints[0];
breakpoints.sm = breakpoints[1];
breakpoints.md = breakpoints[2];
breakpoints.lg = breakpoints[3];
breakpoints.xl = breakpoints[4];
breakpoints.xxl = breakpoints[5];

export default {
  colors: {
    primary: "#2fc6e4",
    secondary: "#dd4f46",
    tertiary: "	#a8238a",
    success: "#48bb78",
    danger: "#f56565",
    transparent: "transparent",
    lightPrimary: "#1d2f66",
  },

  breakpoints,
};
