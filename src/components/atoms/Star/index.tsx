import { COLORS } from "@/styles/variables/Colors";
import { css, SerializedStyles } from "@emotion/react";
import React, { FC } from "react";

type ColorTypes = "yellow" | "gray" | "black" | "blue";

interface PropTypes {
  starColor?: ColorTypes;
  score: number;
  _css?: SerializedStyles | SerializedStyles[];
}

export const Star: FC<PropTypes> = ({ starColor = "yellow", _css, score }) => {
  const STAR_CLASS_NAME = "fa fa-star";

  const makeStars = (score: number) => {
    const icons = [];
    const integerScore = Math.floor(score);
    // NOTE: 점수 만큼의 별
    for (let index = 0; index < integerScore; index++) {
      icons.push(
        <span
          key={index}
          className={STAR_CLASS_NAME}
          css={[initialStyle.star, starColors(starColor)]}
        />
      );
    }

    for (let index = 0; index < 5 - integerScore; index++) {
      // NOTE: 점수 이외의 회색 별
      icons.push(
        <span
          key={integerScore + index}
          className={STAR_CLASS_NAME}
          css={initialStyle.star}
        />
      );
    }
    return icons;
  };

  return <div css={[initialStyle.wrap, _css]}>{makeStars(score)}</div>;
};

const initialStyle = {
  wrap: css`
    display: flex;
  `,
  star: css`
    width: 15px;
    line-height: 15px;
    padding-right: 2px;
    font-size: 15px;
    display: inline-block;
    color: ${COLORS.GRAY[1]};
  `,
};

const starColors = (starColor: ColorTypes) => {
  switch (starColor) {
    case "yellow":
      return css`
        color: ${COLORS.YELLOW};
      `;
    case "gray":
      return css`
        color: ${COLORS.GRAY[2]};
      `;

    case "black":
      return css`
        color: ${COLORS.BLACK};
      `;

    case "blue":
      return css`
        color: ${COLORS.BASECOLOR};
      `;
  }
};
