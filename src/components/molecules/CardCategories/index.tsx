import { COLORS } from "@/styles/variables/Colors";
import { css, SerializedStyles } from "@emotion/react";
import React, { FC } from "react";
import { mediaQueries } from "@/styles/mixins/MediaQueries";
import { tagType } from "@/helpers/common/DataTypes";
interface PropTypes {
  selectedTag: string;
  setSortState: (tag: tagType) => void;
  _css?: SerializedStyles | SerializedStyles[];
}

export const CardCategories: FC<PropTypes> = ({
  _css,
  selectedTag,
  setSortState,
}) => {
  const handleSortTag = (tag: tagType) => setSortState(tag);
  return (
    // TODO: 버튼들 반복문을 이용해서 보기 좋게 리팩토링하기.
    <article css={[styles.wrap, _css]}>
      <p
        css={[styles.button, selectedTag === "all" && styles.checkedButton]}
        onClick={() => handleSortTag("all")}
      >
        ALL
      </p>
      <p
        css={[styles.button, selectedTag === "todo" && styles.checkedButton]}
        onClick={() => handleSortTag("todo")}
      >
        할일
      </p>
      <p
        css={[styles.button, selectedTag === "dairy" && styles.checkedButton]}
        onClick={() => handleSortTag("dairy")}
      >
        일기
      </p>
      <p
        css={[styles.button, selectedTag === "memo" && styles.checkedButton]}
        onClick={() => handleSortTag("memo")}
      >
        메모
      </p>
    </article>
  );
};

const styles = {
  wrap: css`
    margin-bottom: 15px;
    margin-left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${mediaQueries("md")} {
      margin-left: 10px;
      justify-content: flex-start;
    }
  `,

  button: css`
    margin: 0;
    border-radius: 10px;
    font-size: 15px;
    font-weight: bold;
    line-height: 35px;
    width: calc(100% / 4 - 10px);
    text-align: center;
    height: 35px;
    padding: 0;
    border: 1px solid ${COLORS.CADET_BLUE};
    color: ${COLORS.WHITE};
    background-color: ${COLORS.CADET_BLUE};
    transition: all 0.4s;
    cursor: pointer;
    box-shadow: 1px 1px 10px 3px rgba(0, 0, 0, 0.13);
    ${mediaQueries("md")} {
      width: auto;
      padding: 0 20px;
      margin-right: 10px;
    }

    &:hover {
      color: ${COLORS.CADET_BLUE};
      background-color: ${COLORS.WHITE};
      transition: all 0.4s;
      box-shadow: none;
    }
  `,
  checkedButton: css`
    color: ${COLORS.CADET_BLUE};
    background-color: ${COLORS.WHITE};
    box-shadow: none;
  `,
};
