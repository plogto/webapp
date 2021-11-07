import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { StoryContainer } from "../StoryContainer";
import { Icon, iconsList } from "@components/Icon";

export default {
  title: "components/Icon",
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = args => (
  <StoryContainer>
    <Icon {...args} width="50" height="50" />
  </StoryContainer>
);

export const Main = Template.bind({});
Main.args = {
  name: "heart",
};

Main.argTypes = {
  name: {
    options: Object.keys(iconsList),
    control: { type: "select" },
  },
  type: {
    options: ["outline", "fill"],
    control: { type: "radio" },
  },
};
