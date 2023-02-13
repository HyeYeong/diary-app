import { COLORS } from "@/styles/variables/Colors";
import { css, SerializedStyles } from "@emotion/react";
import React, { ChangeEvent, FC } from "react";

interface PropTypes {
  name: string;
  value: number | string;
  selectOptions: OptionType[];
  _css?: SerializedStyles | SerializedStyles[];
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export interface OptionType {
  label: string;
  value: number | string;
}

export const Select: FC<PropTypes> = ({
  value,
  name,
  onChange,
  selectOptions,
  _css,
}) => {
  return (
    <select
      value={value}
      name={name}
      css={[initialStyle, _css]}
      onChange={onChange}
    >
      {selectOptions.map((option: OptionType, index: number) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

const initialStyle = css`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  line-height: 14px;
  border: 1px solid ${COLORS.GRAY[2]};
`;
