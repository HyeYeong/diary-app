import { COLORS } from "@/styles/variables/Colors";
import { css, SerializedStyles } from "@emotion/react";
import React, { FC, ReactNode, ChangeEvent } from "react";

type ColorTypes = "gray" | "navy" | "cadetBlue";

interface PropTypes {
  colorType?: ColorTypes;
  _css?: SerializedStyles | SerializedStyles[];
  onClick: (event: ChangeEvent<HTMLButtonElement>) => void;
  children: ReactNode;
}

export const Button: FC<PropTypes> = ({
  children,
  onClick,
  colorType = "navy",
  _css,
}) => {
  return (
    <div css={_css}>
      <button
        onClick={(event: any) => onClick(event)}
        css={[initialStyle, colorType && styles(colorType)]}
      >
        {children}
      </button>
    </div>
  );
};

const initialStyle = css`
  width: 100%;
  padding: 10px;
  font-size: 15px;
  border-radius: 10px;
  cursor: pointer;
  border: none;
  transition: all 0.2s;

  &:hover {
    opacity: 0.8;
    transition: all 0.2s;
  }
`;

const styles = (colorType: ColorTypes) => {
  switch (colorType) {
    case "navy":
      return css`
        color: ${COLORS.WHITE};
        background-color: ${COLORS.BASECOLOR};
      `;
    case "gray":
      return css`
        background-color: ${COLORS.GRAY[0]};
        color: ${COLORS.WHITE};
      `;
    case "cadetBlue":
      return css`
        background-color: ${COLORS.CADET_BLUE};
        color: ${COLORS.WHITE};
      `;
  }
};
