import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Input } from "@components/Input";

export default {
  title: "components/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = args => (
  <div className="w-screen h-screen flex justify-center items-center">
    <Input {...args} />
  </div>
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
