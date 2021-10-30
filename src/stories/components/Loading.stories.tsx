import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { StoryContainer } from "../StoryContainer";
import { Loading } from "@components/Loading";

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
