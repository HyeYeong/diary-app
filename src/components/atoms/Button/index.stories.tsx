import React from "react";
import { css } from "@emotion/react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from ".";

export default {
  title: `atoms/${Button.name}`,
  component: Button,
  argTypes: {
    colorType: { control: "select" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const DefaultPattern = Template.bind({});
const initialStyle = css`
  width: 200px;
  padding: 10px;
  font-size: 15px;
  border-radius: 10px;
  cursor: pointer;
  border: none;
  transition: all 0.2s;

  &:hover {
    opacity: 0.8;
    transition: all 0.2s;
  }
`;
DefaultPattern.args = {
  colorType: "navy",
  children: "Button",
  _css: initialStyle,
};

export const OtherColor = Template.bind({});
OtherColor.args = {
  colorType: "cadetBlue",
  children: "Button",
};

OtherColor.args = {
  colorType: "gray",
  children: "Button",
};
