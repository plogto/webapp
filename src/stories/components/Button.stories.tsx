import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { StoryContainer } from "../StoryContainer";
import { Button } from "@components/Button";

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
  className: "py-2 px-3.5 text-white bg-primary-500 w-20",
  children: "Log In",
  loading: false,
};