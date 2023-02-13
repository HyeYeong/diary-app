import { css, SerializedStyles } from "@emotion/react";
import React, { ChangeEvent, FC, useState, useEffect } from "react";
import { Title } from "@/components/atoms/Title";
import { Input } from "@/components/atoms/Input";
import { mediaQueries } from "@/styles/mixins/MediaQueries";
import { Select, OptionType } from "@/components/atoms/Select";
import { Button } from "@/components/atoms/Button";
import ContentsWrap from "@/components/templates/ContentsWrap";
import { DailyDataItemType } from "@/helpers/common/DataTypes";
import { useDailyDatas } from "@/helpers/hooks/useDailyDatas";

interface PropTypes {
  _css?: SerializedStyles | SerializedStyles[];
}

export const AddNewDailyData: FC<PropTypes> = ({ _css }) => {
  const { dailyDatas, setDailyDatas } = useDailyDatas();
  let [nextId] = useState(() => dailyDatas.length || 5);
  const [inputError, setInputError] = useState(false);
  const ERROR_MSG = "내용이 입력되지 않았습니다. 내용을 입력해주세요.";

  const DEFAULT_REVIEW_DATA = {
    id: nextId,
    title: "",
    comment: "",
    score: 0,
    date: "2023/01/01",
  };

  const [inputData, setInputData] =
    useState<DailyDataItemType>(DEFAULT_REVIEW_DATA);

  const [starScoreOptions] = useState<OptionType[]>(() => {
    let arr = [...Array(5)].map((_, index) => {
      const number = index + 1;
      return { label: `${number}점`, value: number };
    });
    arr.push({ label: "비워두기", value: 0 });
    return arr;
  });

  const resetInputs = () => setInputData(DEFAULT_REVIEW_DATA);
  const handleSubmit = (event: ChangeEvent<HTMLButtonElement>) => {
    if (inputData.title === "" || inputData.comment === "") {
      event.preventDefault();
      setInputError(true);
    } else {
      setDailyDatas(dailyDatas.concat(inputData));
      resetInputs();
    }
  };

  const setDate = () => {
    const today = new Date();
  };

  useEffect(() => {
    window.localStorage.setItem("dailyDatas", JSON.stringify(dailyDatas));
  }, [dailyDatas]);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { value, name } = event.target;
    setInputData({
      ...inputData,
      id: nextId,
      [name]: value,
    });
  };

  return (
    <ContentsWrap _css={styles.wrap}>
      <form>
        <Title element="H2" _css={styles.title}>
          하루 이야기
        </Title>

        <Title element="H4" _css={styles.subTitle}>
          제목
        </Title>
        <div>
          <Input
            placeholder={inputError ? ERROR_MSG : "제목을 입력해 주세요"}
            onChange={handleChange}
            value={inputData.title}
            name="title"
            _css={styles.input}
          />
        </div>

        <Title element="H4" _css={styles.subTitle}>
          내용
        </Title>
        <Input
          placeholder={inputError ? ERROR_MSG : "내용을 입력해 주세요"}
          onChange={handleChange}
          value={inputData.comment}
          name="comment"
          _css={styles.input}
        />

        <Title element="H4" _css={styles.subTitle}>
          오늘 하루 만족도
        </Title>
        <Select
          _css={styles.input}
          onChange={handleChange}
          value={inputData.score}
          name="score"
          selectOptions={starScoreOptions}
        />
        <Button colorType={"cadetBlue"} onClick={() => handleSubmit}>
          {"등록"}
        </Button>
      </form>
    </ContentsWrap>
  );
};

const styles = {
  wrap: css`
    ${mediaQueries("md")} {
      width: calc(50% - 5px);
      padding: 0 15px;
    }
  `,
  title: css`
    margin-bottom: 16px;
  `,
  subTitle: css`
    margin-bottom: 8px;
  `,
  input: css`
    margin-bottom: 18px;
  `,
};
