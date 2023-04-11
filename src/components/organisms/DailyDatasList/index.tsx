import { css, SerializedStyles } from "@emotion/react";
import React, { FC, useEffect, useState, useMemo } from "react";
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

  const sortGroupString = useMemo(() => {
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
  }, [sortingArr]);

  const [sortState, setSortState] = useState<tagType>("all");

  useEffect(() => {
    setSortingArr(sortGroupString);
  }, [sortingArr, dailyDatas, sortGroupString, sortState]);

  if (!mounted || !isLoaded) return <>지금까지의 기록을 불러오고 있습니다.</>;

  return (
    mounted && (
      <ContentsWrap _css={styles.wrap}>
        <Title element="H2" _css={styles.title}>
          그간의 기록들
        </Title>
        <CardCategories setSortState={setSortState} selectedTag={sortState} />
        <section css={styles.cardsBlock}>
          {!isLoaded ? (
            <p>지금까지의 기록을 불러오고 있습니다.</p>
          ) : (
            sortingArr
              // NOTE: 카테고리별 정렬 기능
              .filter((dailyData) => {
                if (sortState === "all") return dailyData;
                return dailyData.sort === sortState;
              })
              // NOTE: 키워드 검색
              .filter((dailyData) => {
                if (keyword !== "") {
                  if (
                    dailyData.title
                      .toLowerCase()
                      .includes(keyword.toLowerCase())
                  )
                    return dailyData.title;
                  if (
                    dailyData.comment
                      .toLowerCase()
                      .includes(keyword.toLowerCase())
                  )
                    return dailyData.comment;
                  if (
                    dailyData.date.toLowerCase().includes(keyword.toLowerCase())
                  )
                    return dailyData.date;
                } else {
                  return dailyData;
                }
              })
              .map((item, index) => <DailyDataCard item={item} key={index} />)
          )}
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
};
