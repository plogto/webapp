import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { StoryContainer } from "../StoryContainer";
import { Textarea } from "@components/Textarea";

export default {
  title: "components/Textarea",
  component: Textarea,
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = args => (
  <StoryContainer>
    <Textarea {...args} />
  </StoryContainer>
);

export const TextareaMain = Template.bind({});
TextareaMain.args = {
  name: "bio",
  label: "Bio",
  placeholder: "Bio",
};
