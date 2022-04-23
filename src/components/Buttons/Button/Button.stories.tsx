import React from "react";

import { Button } from "@components/Buttons/Button";
import { StoryContainer } from "@stories/StoryContainer";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => (
  <StoryContainer>
    <Button {...args} />
  </StoryContainer>
);

export const Main = Template.bind({});
Main.args = {
  className: "py-2 px-3.5 text-background-pure bg-primary w-20",
  children: "Log In",
  loading: false,
};
