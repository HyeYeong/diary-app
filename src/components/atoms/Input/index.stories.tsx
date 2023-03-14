import React from "react";
import { css } from "@emotion/react";
import { COLORS } from "@/styles/variables/Colors";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Input } from ".";

export default {
  title: `atoms/${Input.name}`,
  component: Input,
  argTypes: {
    name: { control: "text" },
    placeholder: { control: "text" },
    colorType: { control: "select" },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
  <Input {...args} css={initialStyle} />
);

export const DefaultPattern = Template.bind({});
const initialStyle = css`
  font-size: 15px;
  color: ${COLORS.BASECOLOR};
`;

DefaultPattern.args = {
  name: "제목",
  colorType: "default",
  placeholder: "내용을 입력해주세요",
};

export const OtherPattern = Template.bind({});
OtherPattern.args = {
  colorType: "gray",
  placeholder: "placeholder",
};
