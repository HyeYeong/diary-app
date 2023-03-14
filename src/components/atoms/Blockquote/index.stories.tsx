import React from "react";
import { css } from "@emotion/react";
import { COLORS } from "@/styles/variables/Colors";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Blockquote from ".";

export default {
  title: `atoms/${Blockquote.name}`,
  component: Blockquote,
  argTypes: {
    children: { control: "text" },
  },
} as ComponentMeta<typeof Blockquote>;

const Template: ComponentStory<typeof Blockquote> = (args) => (
  <Blockquote {...args} css={initialStyle.wrap} />
);

export const DefaultPattern = Template.bind({});
const initialStyle = {
  wrap: css`
    border-left: 4px solid ${COLORS.GRAY[2]};
    padding-left: 20px;
    margin: 20px 0;
    color: ${COLORS.GRAY[0]};
    line-height: 24px;

    &:hover {
      transition: all 0.1s;
      background-color: ${COLORS.WHITE};
      opacity: 0.9;
    }
  `,
};
DefaultPattern.args = {
  children: "Blockquote",
};
