import { ThemeProvider } from "styled-components";

import { lightTheme } from "../themes/default";

import GlobalStyles from "./globals";

const Theme = ({ children }) => (
  <ThemeProvider theme={lightTheme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default Theme;
