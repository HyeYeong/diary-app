import Head from "next/head";
import { css } from "@emotion/react";
import React, { useState } from "react";
import { mediaQueries } from "@/styles/mixins/MediaQueries";
import { COLORS } from "@/styles/variables/Colors";
import { AddNewDailyData } from "@/components/organisms/AddNewDailyData";
import { SearchDailyDatas } from "@/components/organisms/SearchDailyDatas";
import { DailyDatasList } from "@/components/organisms/DailyDatasList";
import Centering from "@/components/templates/Centering";

export default function Home() {
  type keywordType = string;
  const [keyword, setKeyword] = useState<keywordType>("");

  return (
    <>
      <Head>
        <title>Daily pieces App</title>
        <meta name="description" content="Daily pieces App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main css={styles.global}>
        <SearchDailyDatas keyword={keyword} setKeyword={setKeyword} />
        <Centering>
          <div css={styles.mqWrap}>
            <AddNewDailyData />
            <DailyDatasList keyword={keyword} />
          </div>
        </Centering>
      </main>
    </>
  );
}

const styles = {
  global: css`
    font-family: "Noto Sans KR", "sans-serifui-monospace", "Menlo", "Monaco",
      "Cascadia Mono", "Segoe UI Mono";
  `,
  mqWrap: css`
    margin-top: 57px;
    ${mediaQueries("md")} {
      display: flex;
      justify-content: space-between;
    }
  `,
  title: css`
    color: ${COLORS.BASECOLOR};
    margin-bottom: 100px;

    ${mediaQueries("md")} {
      margin-bottom: 47px;
    }
  `,
};
