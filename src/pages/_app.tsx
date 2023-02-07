import type { AppProps } from "next/app";
import type { NextPage } from "next";
import { AppProvider } from "../../context/context";
import { prefix } from "../../config/config";

interface Props {
  Component?: any;
  pageProps: any;
}

const App: NextPage<AppProps, Props> = ({ Component, pageProps }) => {
  return (
    <AppProvider value={{ prefix }}>
      <Component {...pageProps} />
    </AppProvider>
  );
};

export default App;
