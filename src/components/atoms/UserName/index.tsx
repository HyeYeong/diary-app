import { COLORS } from "@/styles/variables/Colors";
import { css, SerializedStyles } from "@emotion/react";
import React, { ChangeEvent, FC } from "react";

interface PropTypes {
  userName: string | JSX.Element;
  onChange: (event: ChangeEvent) => void;
  _css?: SerializedStyles | SerializedStyles[];
}

export const UserName: FC<PropTypes> = ({ onChange, userName, _css }) => {
  return (
    <div css={[styles.wrap, _css]}>
      <h1 css={styles.username}>
        {userName}
        <span>의 일상의 기록</span>
      </h1>
    </div>
  );
};

const styles = {
  wrap: css`
    display: flex;
  `,
  username: css`
    width: 100%;
    padding: 10px;
    font-size: 2.6rem;
    padding: 0;
    margin: 70px 1rem 1rem 1rem;
    color: ${COLORS.CADET_BLUE};
    span {
      display: inline-block;
      margin-left: 1rem;
      color: ${COLORS.BASECOLOR};
    }
  `,
};
