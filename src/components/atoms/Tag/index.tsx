import type { NextPage } from "next";
import { css, SerializedStyles } from "@emotion/react";
import { COLORS } from "@/styles/variables/Colors";
import React from "react";
import { TAG_NAME, sortNames } from "@/helpers/common/DataTypes";

interface Props {
  _css?: SerializedStyles | SerializedStyles[];
  caution?: boolean;
  tag: sortNames;
  borderStyle?: "dashed" | "solid";
}

const Tag: NextPage<Props> = ({ caution = false, tag, borderStyle, _css }) => {
  return (
    <p
      css={[
        styles.tag,
        borderStyle && tagStyles(borderStyle),
        caution && styles.caution,
      ]}
    >
      {TAG_NAME[tag]}
    </p>
  );
};

const tagStyles = (borderStyle: string) => {
  switch (borderStyle) {
    case borderStyle:
      return css`
        border-radius: 7px;
        border-style: ${borderStyle};
      `;
  }
};

const styles = {
  caution: css`
    background-color: ${COLORS.RED};
    color: ${COLORS.WHITE};
    border-color: ${COLORS.RED};
  `,
  tag: css`
    color: ${COLORS.CADET_BLUE};
    border: 1px ${COLORS.CADET_BLUE};
    padding: 1px 4px;
    vertical-align: middle;
    margin: 0;
    margin-right: 10px;
    font-size: 12px;
    line-height: 14px;
    border-bottom: 1px solid ${COLORS.CADET_BLUE};
  `,
};

export default Tag;
