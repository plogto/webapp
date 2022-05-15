import type { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { PostContent } from ".";
import { Card } from "@components/Card";
import { StoryContainer } from "@stories/StoryContainer";

export default {
  title: "components/Post/PostContent",
  component: PostContent,
} as ComponentMeta<typeof PostContent>;

const Template: ComponentStory<typeof PostContent> = args => (
  <StoryContainer>
    <Card className="w-96 p-3">
      <PostContent {...args} />
    </Card>
  </StoryContainer>
);

export const Main = Template.bind({});

Main.argTypes = {
  size: {
    // TODO: refactor this line
    options: ["small", "normal", "large"],
    control: { type: "radio" },
  },
};

Main.args = {
  content:
    "That from where seriously floundering thinks had are an to ability is forward it one a I is audiences that for to about like the them.",
};
