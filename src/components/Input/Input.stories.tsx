import React from "react";

import { Input } from "@components/Input";
import { StoryContainer } from "@stories/StoryContainer";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "components/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = args => (
  <StoryContainer>
    <Input {...args} />
  </StoryContainer>
);

export const TextInput = Template.bind({});
TextInput.args = {
  type: "text",
  name: "username",
  label: "Username",
  placeholder: "Username",
};

export const TextInputWithErrorMessage = Template.bind({});
TextInputWithErrorMessage.args = {
  type: "text",
  name: "username",
  label: "Username",
  placeholder: "Username",
  message: "Username is required",
  messageType: "error",
};

export const TextInputWithSuccessMessage = Template.bind({});
TextInputWithSuccessMessage.args = {
  type: "text",
  name: "username",
  label: "Username",
  placeholder: "Username",
  value: "username",
  message: "Great!",
  messageType: "success",
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
  type: "password",
  name: "password",
  label: "Password",
  placeholder: "Password",
};

export const PasswordInputWithErrorMessage = Template.bind({});
PasswordInputWithErrorMessage.args = {
  type: "password",
  name: "password",
  label: "Password",
  placeholder: "Password",
  value: "password",
  message: "Password is not valid",
  messageType: "error",
};

export const PasswordInputWithSuccessMessage = Template.bind({});
PasswordInputWithSuccessMessage.args = {
  type: "password",
  name: "password",
  label: "Password",
  placeholder: "Password",
  value: "password",
  message: "Great!",
  messageType: "success",
};
