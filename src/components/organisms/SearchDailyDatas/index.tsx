import { css, SerializedStyles } from "@emotion/react";
import React, { FC, ChangeEvent, useState } from "react";
import { Title } from "@/components/atoms/Title";
import { Input } from "@/components/atoms/Input";
import Centering from "@/components/templates/Centering";
import ContentsWrap from "@/components/templates/ContentsWrap";
import { COLORS } from "@/styles/variables/Colors";

interface PropTypes {
  _css?: SerializedStyles | SerializedStyles[];
  keyword: string;
  setKeyword: (value: string) => void;
}

export const SearchDailyDatas: FC<PropTypes> = ({
  _css,
  keyword,
  setKeyword,
}) => {
  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    setKeyword(value);
  };

  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <ContentsWrap _css={styles.wrap}>
      <Centering _css={styles.centering}>
        <Title _css={isOpen ? isOpenStyles.title : styles.title} element="H3">
          하루 검색
        </Title>
        {!isOpen && (
          <Input
            colorType="gray"
            placeholder="제목 혹은 내용을 입력해 주세요."
            value={keyword}
            name="keyword"
            onChange={handleChangeSearch}
          />
        )}
      </Centering>
      <div css={styles.searchToggleWrap} onClick={() => setIsOpen(!isOpen)}>
        <span css={[styles.toggleArr, isOpen && isOpenStyles.toggleArr]} />
      </div>
    </ContentsWrap>
  );
};

const styles = {
  wrap: css`
    position: fixed;
    top: 0;
    right: 0;
    bottom: auto;
    left: 0;
    width: 100%;
    background-color: ${COLORS.WHITE};
    z-index: 1;
    padding-bottom: 0 !important;
    opacity: 0.4;
    transition: all 0.4s;

    &:hover {
      opacity: 1;
      transition: all 0.4s;
    }
  `,
  centering: css`
    position: relative;
    padding-bottom: 40px;
  `,
  title: css`
    margin-bottom: 16px;
    transition: all 0.2s;
  `,
  searchToggleWrap: css`
    position: relative;
    border-top: 1px solid ${COLORS.CADET_BLUE};
  `,
  toggleArr: css`
    display: inline-block;
    position: absolute;
    bottom: 0;
    margin: auto;
    width: 100%;
    padding: 10px;
    cursor: pointer;

    &:before {
      display: inline-block;
      position: absolute;
      top: auto;
      right: 0;
      bottom: 8px;
      left: 0;
      margin: auto;
      content: "";
      border: solid ${COLORS.CADET_BLUE};
      border-width: 0 2px 2px 0;
      width: 10px;
      height: 10px;
      display: inline-block;
      padding: 3px;
      transform: rotate(225deg);
    }
  `,
};

const isOpenStyles = {
  title: css`
    margin-bottom: -80px;
    font-size: 1.2rem;
    padding-top: 0;
    transition: all 0.2s;
  `,
  toggleArr: css`
    &:before {
      transform: rotate(45deg);
      bottom: 20px;
    }
  `,
};
