import { Html, Head, Main, NextScript } from "next/document";
import { css } from "@emotion/react";

export default function Document() {
  return (
    <Html lang="kor">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
      </Head>
      <body css={resetStyle}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

const resetStyle = css`
  margin: 0;
  padding: 0;
`;
