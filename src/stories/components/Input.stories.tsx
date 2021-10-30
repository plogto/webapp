import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { StoryContainer } from "../StoryContainer";
import { Input } from "@components/Input";

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

export const PasswordInput = Template.bind({});
PasswordInput.args = {
  type: "password",
  name: "password",
  label: "Password",
  placeholder: "Password",
};
