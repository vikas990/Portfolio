const light = {
  colors: {
    bg: {
      primaryBg: "#000000",
    },

    text: {
      primary: "white",
      secondary: "#DB2048",
    },

    primary: {
      c1: "hsl(191, 31%, 20%)",
      c2: "#ffea4f",
      c3: "#2f454a",
    },
    secondary: {
      c1: "#fff",
      c2: "#0276F9",
      c3: "#2f454a",
    },
  },
};

const defaultTheme = {
  fonts: {
    main: "Rubik', sans-serif;",
  },

  breakpoints: {
    xmn: "screen and (max-width: 300px)",
    mn: "screen and (max-width: 450px)",
    sm: "screen and (max-width: 576px)",
    md: "screen and (max-width: 768px)",
    lg: "screen and (max-width: 992px)",
    xl: "screen and (max-width: 1200px)",
    xxl: "screen and (max-width: 1300px)",
  },

  gridBreakpoints: {
    sm: "screen and (min-width: 576px)",
    md: "screen and (min-width: 768px)",
    lg: "screen and (min-width: 992px)",
    xl: "screen and (min-width: 1300px)",
  },
};

export const lightTheme = { ...defaultTheme, ...light };
