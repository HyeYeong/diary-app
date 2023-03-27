import { COLORS } from "@/styles/variables/Colors";
import { css, SerializedStyles } from "@emotion/react";
import React, { FC } from "react";
import { Title } from "@/components/atoms/Title";
import Icon from "@/components/atoms/Icon";
import { DailyDataItemType } from "@/helpers/common/DataTypes";
import {
  MINUS_CLASS_NAME,
  MINUS_HOVER_CLASS_NAME,
  PENCIL_CLASS_NAME,
  PENCIL_HOVER_CLASS_NAME,
} from "@/styles/variables/Icons";
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
      <section css={styles.iconSection}>
        {score !== 0 && <Star score={score} />}
        {/* TODO: 카드 수정 및 삭제 기능 구현할 때 아래 dom살리기 */}
        {/* <div css={styles.iconsWrap}>
          <Icon
            classNames={PENCIL_CLASS_NAME}
            hoverClassNames={PENCIL_HOVER_CLASS_NAME}
            iconColor={COLORS.CADET_BLUE}
            isHover={false}
          />
          <Icon
            classNames={MINUS_CLASS_NAME}
            hoverClassNames={MINUS_HOVER_CLASS_NAME}
            iconColor={COLORS.CADET_BLUE}
            isHover={false}
          />
        </div> */}
      </section>
    </article>
  );
};

const styles = {
  wrap: css`
    padding: 10px 15px 20px;
    border-radius: 10px;
    border: 1px solid ${COLORS.GRAY[1]};
    color: ${COLORS.BASECOLOR};
    background-color: ${COLORS.WHITE};
    margin-bottom: 10px;
    box-shadow: 1px 0px 10px 1px rgba(0, 0, 0, 0.1);
    position: relative;
  `,
  title: css`
    margin-bottom: 10px;
    word-wrap: break-word;
  `,
  tagDateWrap: css`
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 8px;
  `,
  comment: css`
    font-size: 14px;
    line-height: 14px;
    margin: 0;
    word-wrap: break-word;
  `,
  iconSection: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  iconsWrap: css`
    display: flex;
    margin-right: 0;
    margin-left: auto;

    i {
      margin-left: 20px;
      cursor: pointer;
      opacity: 0.7;

      &:hover {
        opacity: 1;
      }
    }
  `,
};
