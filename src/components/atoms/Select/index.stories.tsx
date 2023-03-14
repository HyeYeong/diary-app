import React from "react";
import { css } from "@emotion/react";
import { COLORS } from "@/styles/variables/Colors";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Select } from ".";

export default {
  title: `atoms/${Select.name}`,
  component: Select,
  argTypes: {
    name: { control: "text" },
    selectOptions: { control: "select" },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => (
  <Select {...args} css={initialStyle} />
);

export const DefaultPattern = Template.bind({});
const initialStyle = css`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  line-height: 14px;
  border: 1px solid ${COLORS.GRAY[2]};
`;

DefaultPattern.args = {
  name: "선택항목",
  selectOptions: [
    { label: "할일", value: "todo" },
    { label: "일기", value: "dairy" },
    { label: "메모", value: "memo" },
  ],
};
