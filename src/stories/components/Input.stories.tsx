import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Input } from "@components/Input";
import { StoryContainer } from "../StoryContainer";

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
