import type { NextPage } from "next";
import { css, SerializedStyles } from "@emotion/react";
import { COLORS } from "@/styles/variables/Colors";
import React from "react";

interface Props {
  _css?: SerializedStyles | SerializedStyles[];
  size?: "sml" | "md" | "lg";
  classNames: string;
  hoverClassNames: string;
  isHover?: boolean;
  iconColor?: string;
}

const Icon: NextPage<Props> = ({
  size = "md",
  classNames,
  hoverClassNames,
  isHover = false,
  iconColor = COLORS.BASECOLOR,
  _css,
}) => {
  return (
    <i
      className={!isHover ? classNames : hoverClassNames}
      css={[
        styles.icon,
        size && iconSize(size),
        iconColor && setIconColor(iconColor),
        _css,
      ]}
    />
  );
};

const setIconColor = (iconColor: string) => css`
  color: ${iconColor};
`;

const iconSize = (size: "sml" | "md" | "lg") => {
  switch (size) {
    case "sml":
      return css`
        font-size: 10px;
      `;
    case "md":
      return css`
        font-size: 20px;
      `;
    case "lg":
      return css`
        font-size: 24px;
      `;
  }
};

const styles = {
  icon: css`
    transition: 0.3s all;

    &:hover {
      transition: 0.3s all;
    }
  `,
};

export default Icon;
