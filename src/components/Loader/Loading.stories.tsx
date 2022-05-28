import type { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { Loader } from "@components/Loader";
import { StoryContainer } from "@stories/StoryContainer";

export default {
  title: "components/Loader",
  component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = args => (
  <StoryContainer>
    <Loader {...args} />
  </StoryContainer>
);

export const Main = Template.bind({});
Main.args = {
  className: "w-6",
};
