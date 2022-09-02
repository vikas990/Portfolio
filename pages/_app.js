import { ThemeProvider } from "styled-components";
import { DarkTheme, lightTheme } from "../themes/default";
import GlobalStyles from "../styles/globals";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("dark");

  return (
    <>
      {/* <QueryClientProvider client={queryClient}> */}
      {/*<TrophyMessageContext.Provider value={setShowTrophyMessage}>*/}
      {/*<Layout>*/}
      <ThemeProvider theme={theme === "light" ? lightTheme : DarkTheme}>
        <GlobalStyles />

        <Component {...pageProps} setTheme={setTheme} theme={theme} />
      </ThemeProvider>
      {/*</Layout></Theme>*/}
      {/* </TrophyMessageContext.Provider>*/}
      {/* </QueryClientProvider> </>*/}
    </>
  );
}

export default MyApp;
