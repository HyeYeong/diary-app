import { COLORS } from "@/styles/variables/Colors";
import { css, SerializedStyles } from "@emotion/react";
import React, { FC } from "react";
import { Title } from "@/components/atoms/Title";
import { DailyDataItemType } from "@/helpers/common/DataTypes";
import { Star } from "@/components/atoms/Star";
import Tag from "@/components/atoms/Tag";

interface PropTypes {
  item: DailyDataItemType;
  _css?: SerializedStyles | SerializedStyles[];
}

export const DailyDataCard: FC<PropTypes> = ({ _css, item }) => {
  const { title, comment, score, date, sort } = item;

  //TODO: 데이터 삭제 및  수정 기능 추가하기
  return (
    <article css={[styles.wrap, _css]}>
      <Title element="H4" _css={styles.title}>
        {title}
      </Title>
      <p css={styles.comment}>{comment}</p>
      <div css={styles.tagDateWrap}>
        <Tag tag={sort} borderStyle={"solid"} />
        <p css={styles.comment}>{date}</p>
      </div>
      {score !== 0 && <Star score={score} />}
    </article>
  );
};

const styles = {
  wrap: css`
    padding: 10px 15px 25px;
    border-radius: 10px;
    border: 1px solid ${COLORS.GRAY[1]};
    color: ${COLORS.BASECOLOR};
    background-color: ${COLORS.WHITE};
    margin-bottom: 10px;
    box-shadow: 1px 0px 10px 1px rgba(0, 0, 0, 0.1);
  `,
  title: css`
    margin-bottom: 10px;
  `,
  tagDateWrap: css`
    display: flex;
  `,
  comment: css`
    font-size: 14px;
    line-height: 14px;
    margin-bottom: 10px;
  `,
};
