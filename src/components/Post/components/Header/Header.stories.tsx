import React from "react";

import { PrimaryColor, ThemeColor } from "@enums";
import { StoryContainer } from "@stories/StoryContainer";
import { Header } from ".";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "components/Post/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = args => (
  <StoryContainer>
    <div className="w-96">
      <Header {...args} />
    </div>
  </StoryContainer>
);

export const Main = Template.bind({});

Main.args = {
  user: {
    id: "fake_id",
    fullName: "Jane Cooper",
    username: "jane_cooper",
    email: "jane_cooper@mail.com",
    themeColor: ThemeColor.LIGHT,
    primaryColor: PrimaryColor.BLUE,
  },
};
