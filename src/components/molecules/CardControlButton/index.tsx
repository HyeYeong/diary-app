import { COLORS } from "@/styles/variables/Colors";
import { css, SerializedStyles } from "@emotion/react";
import React, { FC, ChangeEvent, useEffect } from "react";
import { useDailyDatas } from "@/helpers/hooks/useDailyDatas";
import Icon from "@/components/atoms/Icon";
import { DailyDataItemType } from "@/helpers/common/DataTypes";

import {
  MINUS_CLASS_NAME,
  MINUS_HOVER_CLASS_NAME,
  PENCIL_CLASS_NAME,
  PENCIL_HOVER_CLASS_NAME,
} from "@/styles/variables/Icons";

type ButtonType = "EDIT" | "DELETE";
interface PropTypes {
  buttonType: ButtonType;
  iconColor?: string;
  isHover?: boolean;
  itemId: number | string;
  _css?: SerializedStyles | SerializedStyles[];
  sortingArr: DailyDataItemType[];
  setSortingArr: React.Dispatch<React.SetStateAction<DailyDataItemType[]>>;
}

export const CardControlButton: FC<PropTypes> = ({
  _css,
  iconColor = COLORS.CADET_BLUE,
  isHover = false,
  buttonType,
  itemId,
  sortingArr,
  setSortingArr,
}) => {
  const { dailyDatas, setDailyDatas } = useDailyDatas();

  const iconType = (buttonType: ButtonType) => {
    switch (buttonType) {
      case "EDIT":
        return {
          class: PENCIL_CLASS_NAME,
          hoverClass: PENCIL_HOVER_CLASS_NAME,
        };
      case "DELETE":
        return {
          class: MINUS_CLASS_NAME,
          hoverClass: MINUS_HOVER_CLASS_NAME,
        };
    }
  };

  const handleDelete = () => {
    setSortingArr(sortingArr.filter((data) => data.id !== itemId));
    setDailyDatas(dailyDatas.filter((data) => data.id !== itemId));
  };

  return (
    <button onClick={() => handleDelete()} css={[styles.iconButtonReset, _css]}>
      <Icon
        classNames={iconType(buttonType).class}
        hoverClassNames={iconType(buttonType).hoverClass}
        iconColor={iconColor}
        isHover={isHover}
      />
    </button>
  );
};

const styles = {
  iconButtonReset: css`
    background-color: transparent;
    border: none;
    padding: 0;
    margin: 0;
  `,
};
