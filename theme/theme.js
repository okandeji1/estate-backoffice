const breakpoints = ["480px", "576px", "768px", "992px", "1280px", "1600px"];

breakpoints.xs = breakpoints[0];
breakpoints.sm = breakpoints[1];
breakpoints.md = breakpoints[2];
breakpoints.lg = breakpoints[3];
breakpoints.xl = breakpoints[4];
breakpoints.xxl = breakpoints[5];

export default {
  colors: {
    primary: "#0070C0",
    secondary: "#ffc107",
    tertiary: "	#e7e7e7",
    success: "#48bb78",
    danger: "#f56565",
    transparent: "transparent",
    lightPrimary: "#013d79a1",
  },

  // variants: {
  //     container: {
  //         mx: 'auto',
  //         maxWidth: 1200,
  //         width: '100%',
  //         px: 30
  //     }
  // },

  breakpoints,
};
