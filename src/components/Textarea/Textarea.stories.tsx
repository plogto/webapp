import React from "react";

import { Textarea } from "@components/Textarea";
import { StoryContainer } from "@stories/StoryContainer";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "components/Textarea",
  component: Textarea,
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = args => (
  <StoryContainer>
    <Textarea {...args} />
  </StoryContainer>
);

export const Main = Template.bind({});
Main.args = {
  name: "bio",
  label: "Bio",
  placeholder: "Bio",
};

export const MainWithErrorMessage = Template.bind({});
MainWithErrorMessage.args = {
  name: "bio",
  label: "Bio",
  placeholder: "Bio",
  message: "Bio is required",
  messageType: "error",
};

export const MainWithSuccessMessage = Template.bind({});
MainWithSuccessMessage.args = {
  name: "bio",
  label: "Bio",
  placeholder: "Bio",
  value: "Bio",
  message: "Great!",
  messageType: "success",
};
