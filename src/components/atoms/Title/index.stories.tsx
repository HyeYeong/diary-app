import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Tag from ".";

export default {
  title: `atoms/${Tag.name}`,
  component: Tag,
  argTypes: {
    element: { control: "select" },
    description: { control: "text" },
    startDate: { control: "text" },
    endDate: { control: "text" },
  },
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const DefaultPattern = Template.bind({});

DefaultPattern.args = {
  element: "H1",
  children: "title",
};

export const OtherPattern1 = Template.bind({});
export const OtherPattern2 = Template.bind({});

OtherPattern1.args = {
  element: "H3",
  startDate: "2023-03-03",
  children: "title 3, and date",
};
OtherPattern2.args = {
  element: "H2",
  description: "title 2",
  startDate: "2023-03-03",
  endDate: "2023-10-06",
  children: "title 2",
};
