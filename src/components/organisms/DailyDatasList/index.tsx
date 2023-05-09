import { css, SerializedStyles } from "@emotion/react";
import React, { FC, useEffect, useState, useMemo, useRef } from "react";
import { Title } from "@/components/atoms/Title";
import ContentsWrap from "@/components/templates/ContentsWrap";
import { CardCategories } from "@/components/molecules/CardCategories";
import { DailyDataCard } from "@/components/molecules/DailyDataCard";
import { useDailyDatas } from "@/helpers/hooks/useDailyDatas";
import { DailyDataItemType } from "@/helpers/common/DataTypes";
import { mediaQueries } from "@/styles/mixins/MediaQueries";
import { COLORS } from "@/styles/variables/Colors";
import { tagType } from "@/helpers/common/DataTypes";

interface PropTypes {
  _css?: SerializedStyles | SerializedStyles[];
  keyword: string;
}

export const DailyDatasList: FC<PropTypes> = ({ _css, keyword }) => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { dailyDatas } = useDailyDatas();
  const [sortingArr, setSortingArr] = useState<DailyDataItemType[]>(dailyDatas);
  const isLoaded = !!Object.keys(dailyDatas).length;
  useEffect(() => {
    setMounted(true);
  }, []);

  const sortGroupString = () => {
    // const patternKorean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    const patternNumber = /[0-9]/;
    // const patternAlphabet = /[A-Za-z]/;
    const orderLevelDesc = [patternNumber];

    const getLevel = (str: string) => {
      const index = orderLevelDesc.findIndex((pattern) => pattern.test(str));
      return index;
    };

    sortingArr.sort((a, b) => {
      const aLevel = getLevel(a.date.charAt(0));
      const bLevel = getLevel(b.date.charAt(0));
      if (aLevel === bLevel) return a.date.charCodeAt(0) - b.date.charCodeAt(0);
      return bLevel - aLevel;
      // NOTE: 내림 차순 정렬
    });

    return sortingArr.sort((a, b) => {
      const aDate = new Date(a.date);
      const bDate = new Date(b.date);
      return Number(bDate) - Number(aDate);
      // NOTE: 날짜순 정렬
    });
  };

  const [sortState, setSortState] = useState<tagType>("all");

  const errorMsg = () => {
    return (
      <p css={styles.emptyData}>
        앗! <br />
        아직 등록된 이야기가 없거나 불러올 수 없어요 {`:(`}
        <br />
        다음에 다시 시도해 주세요.
      </p>
    );
  };

  useEffect(() => {
    setSortingArr(sortGroupString);
  }, [sortingArr, dailyDatas, sortGroupString, sortState]);

  if (!mounted || !isLoaded) {
    return (
      <ContentsWrap _css={styles.wrap}>
        <section css={styles.cardsBlock}>
          <Title element="H2" _css={styles.title}>
            그간의 기록들
          </Title>
          {errorMsg()}
        </section>
      </ContentsWrap>
    );
  }

  return (
    mounted && (
      <ContentsWrap _css={styles.wrap}>
        <Title element="H2" _css={styles.title}>
          그간의 기록들
        </Title>
        <CardCategories setSortState={setSortState} selectedTag={sortState} />
        <section css={styles.cardsBlock}>
          {sortingArr.length > 0
            ? sortingArr
                // NOTE: 카테고리별 정렬 기능
                .filter((dailyData) => {
                  if (sortState === "all") return dailyData;
                  return dailyData.sort === sortState;
                })
                // NOTE: 키워드 검색
                .filter((dailyData) => {
                  if (keyword !== "") {
                    // NOTE: title에 키워드가 있을 경우 가장 먼저 반환
                    dailyData.title
                      .toLowerCase()
                      .includes(keyword.toLowerCase()) && dailyData.title;
                    // NOTE: 그 다음으로 comment에 키워드가 있다면 반환
                    dailyData.comment
                      .toLowerCase()
                      .includes(keyword.toLowerCase()) && dailyData.comment;
                    // NOTE: 그 다음으로 date에 키워드가 있다면 반환
                    dailyData.date
                      .toLowerCase()
                      .includes(keyword.toLowerCase()) && dailyData.date;
                    // NOTE: 키워드를 입력 후 해당하는 키워드가 없다면 아무것도 반환하지 않음
                  } else {
                    return dailyData;
                  }
                })
                .map((item: DailyDataItemType) => (
                  <DailyDataCard
                    item={item}
                    key={item.id}
                    sortingArr={sortingArr}
                    setSortingArr={setSortingArr}
                  />
                ))
            : errorMsg()}
        </section>
      </ContentsWrap>
    )
  );
};

const styles = {
  wrap: css`
    padding: 24px 15px 0 15px;
    background-color: ${COLORS.GRAY[1]};
    ${mediaQueries("md")} {
      padding-top: 0;
      width: calc(50% - 15px);
      box-sizing: border-box;
      border-left: 1px dashed ${COLORS.CADET_BLUE};
      background-color: transparent;
    }
  `,
  cardsBlock: css`
    ${mediaQueries("md")} {
      overflow-y: scroll;
      height: calc(100vh - 240px);
      padding: 8px;
    }
  `,
  button: css`
    margin-bottom: 10px;
  `,
  title: css`
    margin-bottom: 16px;
  `,
  emptyData: css`
    line-height: 2rem;
    color: ${COLORS.GRAY[0]};
  `,
};
