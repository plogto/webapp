import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Loading } from "@components/Loading";
import { StoryContainer } from "../StoryContainer";

export default {
  title: "components/Loading",
  component: Loading,
} as ComponentMeta<typeof Loading>;

const Template: ComponentStory<typeof Loading> = args => (
  <StoryContainer>
    <Loading {...args} />
  </StoryContainer>
);

export const Main = Template.bind({});
Main.args = {
  className: "w-6",
};
