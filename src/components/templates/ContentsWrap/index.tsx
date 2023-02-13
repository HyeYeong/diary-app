import { mediaQueries } from "@/styles/mixins/MediaQueries";
import { css, SerializedStyles } from "@emotion/react";
import { COLORS } from "@/styles/variables/Colors";
import React, { ReactNode } from "react";
import type { NextPage } from "next";

type COLOR_TYPE = "white" | "gray";
interface PropsTypes {
  children: ReactNode;
  _css?: SerializedStyles;
  backgroudColor?: COLOR_TYPE;
}

const ContentsWrap: NextPage<PropsTypes> = ({
  children,
  backgroudColor = "white",
  _css,
}) => (
  <article
    css={[
      initialStyle,
      backgroundColorStyles && backgroundColorStyles(backgroudColor),
      _css,
    ]}
  >
    {children}
  </article>
);

const initialStyle = css`
  padding-bottom: 20px;
  margin-bottom: 20px;

  ${mediaQueries("md")} {
    margin-bottom: 30px;
    padding-bottom: 20px;
  }
`;

const backgroundColorStyles = (backgroudColor: COLOR_TYPE) => {
  switch (backgroudColor) {
    case "gray":
      return css`
        background-color: ${COLORS.GRAY[1]};
      `;
    default:
      return css``;
  }
};

export default ContentsWrap;
