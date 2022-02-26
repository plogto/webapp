import React from "react";
import { Card } from "@components/Card";
import { StoryContainer } from "@stories/StoryContainer";
import { Content } from ".";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "components/Post/Content",
  component: Content,
} as ComponentMeta<typeof Content>;

const Template: ComponentStory<typeof Content> = args => (
  <StoryContainer>
    <Card className="w-96 p-3">
      <Content {...args} />
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
