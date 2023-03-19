import type { NextPage } from "next";
import { fontSize } from "@/styles/variables/FontSize";
import { COLORS } from "@/styles/variables/Colors";
import { css, SerializedStyles } from "@emotion/react";
import { ReactNode } from "react";

const ELEMENTS = {
  H1: "h1",
  H2: "h2",
  H3: "h3",
  H4: "h4",
} as const;

type HeaderElement = keyof typeof ELEMENTS;

interface PropTypes {
  children: string | JSX.Element | ReactNode;
  element: HeaderElement;
  requirement?: boolean;
  description?: string;
  startDate?: string;
  endDate?: string;
  _css?: SerializedStyles | SerializedStyles[];
}

export const Title: NextPage<PropTypes> = ({
  element,
  requirement,
  children,
  description,
  startDate,
  endDate,
  _css,
}) => {
  const ROOT_ELEMENT = ELEMENTS[element];

  return (
    <ROOT_ELEMENT
      css={[
        initialStyles,
        element && titleStyles(element),
        requirement && requirementStyle,
        _css,
      ]}
    >
      {children}
      {(description || startDate || endDate) && (
        <p css={haveDateStyles}>
          <span>{startDate}</span>
          <span>{endDate}</span>
        </p>
      )}
    </ROOT_ELEMENT>
  );
};

const initialStyles = css`
  font-weight: bold;
  color: ${COLORS.BASECOLOR};
  position: relative;
`;

const requirementStyle = css`
  &:after {
    content: "*";
    display: inline;
    padding-left: 5px;
    font-weight: normal;
    font-size: 90%;
    vertical-align: text-top;
    color: ${COLORS.CADET_BLUE};
  }
`;

const titleStyles = (element: string) => {
  switch (element) {
    case "H1":
      return css`
        font-size: ${fontSize.h1};
        line-height: 3rem;
        margin-top: 58px;
        margin-bottom: 24px;

        &:after {
          content: "";
          position: absolute;
          top: auto;
          bottom: -18px;
          width: 20px;
          height: 3px;
          display: block;
          background-color: ${COLORS.BASECOLOR};
        }
      `;
    case "H2":
      return css`
        font-size: ${fontSize.h2};
        line-height: 2.6rem;
        margin-bottom: 22px;
      `;
    case "H3":
      return css`
        font-size: ${fontSize.h3};
        line-height: 2rem;
        margin-top: 16px;
        margin-bottom: 18px;
      `;
    case "H4":
      return css`
        font-size: ${fontSize.h4};
        line-height: 1.4rem;
        margin-top: 20px;
        margin-bottom: 12px;
      `;
  }
};

const haveDateStyles = css`
  font-size: ${fontSize.dateFont};
  opacity: 0.9;
  margin: 0;
  font-weight: 400;

  span:first-of-type {
    &:after {
      display: inline-block;
      content: "~";
      margin: 0 3px;
    }
  }
`;

export default Title;
