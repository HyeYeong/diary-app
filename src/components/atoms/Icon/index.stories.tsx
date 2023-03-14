import React from "react";
import { css } from "@emotion/react";
import { COLORS } from "@/styles/variables/Colors";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  STAR_CLASS_NAME,
  MINUS_CLASS_NAME,
  MINUS_HOVER_CLASS_NAME,
  PENCIL_CLASS_NAME,
  PENCIL_HOVER_CLASS_NAME,
} from "@/styles/variables/Icons";

import Icon from ".";

export default {
  title: `atoms/${Icon.name}`,
  component: Icon,
  argTypes: {
    size: { control: "select" },
    classNames: { control: "text" },
    hoverClassNames: { control: "text" },
    isHover: { control: "select" },
    iconColor: { control: "text" },
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const DefaultPattern = Template.bind({});
DefaultPattern.args = {
  size: "sml",
  classNames: PENCIL_CLASS_NAME,
  hoverClassNames: PENCIL_HOVER_CLASS_NAME,
  iconColor: COLORS.CADET_BLUE,
  isHover: false,
};

export const OtherPattern1 = Template.bind({});
export const OtherPattern2 = Template.bind({});

OtherPattern1.args = {
  size: "md",
  classNames: STAR_CLASS_NAME,
  isHover: false,
  iconColor: COLORS.YELLOW,
};

OtherPattern2.args = {
  size: "lg",
  classNames: MINUS_CLASS_NAME,
  hoverClassNames: MINUS_HOVER_CLASS_NAME,
  isHover: true,
  iconColor: COLORS.GREEN,
};
