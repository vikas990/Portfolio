// import TrophyMessageContext from "context/trophyContext";

// import Layout from "components/layout/Layout";

import Theme from "../styles/theme";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Theme>
        {/* <QueryClientProvider client={queryClient}> */}
        {/*<TrophyMessageContext.Provider value={setShowTrophyMessage}>*/}
        {/*<Layout>*/}
        <Component {...pageProps} />
        {/*</Layout></Theme>*/}
        {/* </TrophyMessageContext.Provider>*/}
        {/* </QueryClientProvider> </>*/}
      </Theme>
    </>
  );
}

export default MyApp;
