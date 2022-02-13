import React from "react";

import { StoryContainer } from "@stories/StoryContainer";
import { Content } from ".";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "components/Post/Content",
  component: Content,
} as ComponentMeta<typeof Content>;

const Template: ComponentStory<typeof Content> = args => (
  <StoryContainer>
    <div className="w-96">
      <Content {...args} />
    </div>
  </StoryContainer>
);

export const Main = Template.bind({});

Main.args = {
  content:
    "That from where seriously floundering thinks had are an to ability is forward it one a I is audiences that for to about like the them.",
};
