import React from "react";
import { css } from "@emotion/react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Tag from ".";

export default {
  title: `atoms/${Tag.name}`,
  component: Tag,
  argTypes: {
    caution: { control: "select" },
    tag: { control: "select" },
    borderStyle: { control: "select" },
  },
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => (
  <Tag {...args} css={initialStyle} />
);

export const DefaultPattern = Template.bind({});

const initialStyle = css`
  width: 30px;
`;

DefaultPattern.args = {
  caution: true,
  tag: "todo",
  borderStyle: "dashed",
};

export const OtherPattern1 = Template.bind({});
export const OtherPattern2 = Template.bind({});
OtherPattern1.args = {
  caution: false,
  tag: "dairy",
  borderStyle: "solid",
};
OtherPattern2.args = {
  caution: false,
  tag: "memo",
  borderStyle: "dashed",
};
