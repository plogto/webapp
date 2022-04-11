import React from "react";

import { DateType } from "@enums";
import { StoryContainer } from "@stories/StoryContainer";
import { PostDateTime } from ".";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "components/Post/PostDateTime",
  component: PostDateTime,
} as ComponentMeta<typeof PostDateTime>;

const Template: ComponentStory<typeof PostDateTime> = args => (
  <StoryContainer>
    <div className="w-96">
      <PostDateTime {...args} />
    </div>
  </StoryContainer>
);

export const Main = Template.bind({});

Main.args = {
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  type: DateType.LONG,
};

Main.argTypes = {
  type: {
    options: DateType,
    control: { type: "radio" },
  },
};
