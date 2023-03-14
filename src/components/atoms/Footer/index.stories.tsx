import React from "react";
import { css } from "@emotion/react";
import { COLORS } from "@/styles/variables/Colors";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Footer from ".";

export default {
  title: `atoms/${Footer.name}`,
  component: Footer,
  argTypes: {
    children: { control: "text" },
  },
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => (
  <Footer {...args} css={initialStyles} />
);

export const DefaultPattern = Template.bind({});
const initialStyles = css`
  margin-top: 48px;
  width: 100%;
  box-sizing: border-box;
  padding: 20px 14px;
  color: ${COLORS.CADET_BLUE};
  background: ${COLORS.GRAY[1]};
  text-align: center;
`;
