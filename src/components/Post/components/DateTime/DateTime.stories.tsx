import React from "react";

import { DateType } from "@enums";
import { StoryContainer } from "@stories/StoryContainer";
import { DateTime } from ".";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "components/Post/DateTime",
  component: DateTime,
} as ComponentMeta<typeof DateTime>;

const Template: ComponentStory<typeof DateTime> = args => (
  <StoryContainer>
    <div className="w-96">
      <DateTime {...args} />
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
