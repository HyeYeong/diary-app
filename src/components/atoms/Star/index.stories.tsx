import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Star } from ".";

export default {
  title: `atoms/${Star.name}`,
  component: Star,
  argTypes: {
    starColor: { control: "select" },
    score: { control: "text" },
  },
} as ComponentMeta<typeof Star>;

const Template: ComponentStory<typeof Star> = (args) => <Star {...args} />;

export const DefaultPattern = Template.bind({});

DefaultPattern.args = {
  starColor: "yellow",
  score: 5,
};

export const OtherPattern1 = Template.bind({});
export const OtherPattern2 = Template.bind({});
OtherPattern1.args = {
  starColor: "gray",
  score: 10,
};

OtherPattern2.args = {
  starColor: "blue",
  score: 1,
};
