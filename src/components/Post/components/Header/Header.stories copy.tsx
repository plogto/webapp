import React from "react";

import { StoryContainer } from "@stories/StoryContainer";
import { Header } from ".";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "components/Post/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = args => (
  <StoryContainer>
    <div className="w-96">
      <Header {...args} />
    </div>
  </StoryContainer>
);

export const Main = Template.bind({});

Main.args = {
  user: {
    fullName: "Jane Cooper",
    username: "jane_cooper",
  },
};
