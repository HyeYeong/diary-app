import type { AppProps } from "next/app";
import type { NextPage } from "next";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
// import { AppProvider } from "../../context/context";
// import { prefix } from "../../config/config";

interface Props {
  Component?: any;
  pageProps: any;
}

const App: NextPage<AppProps, Props> = ({ Component, pageProps }) => {
  return (
    <RecoilRoot>
      {/* <AppProvider value={{ prefix }}> */}
      <Component {...pageProps} />
      {/* </AppProvider> */}
    </RecoilRoot>
  );
};

export default App;
