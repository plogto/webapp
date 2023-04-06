import type { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { TicketStatusType } from "@enums";
import { Status } from "@components/Status";
import { StoryContainer } from "@stories/StoryContainer";

export default {
  title: "components/Status",
  component: Status,
} as ComponentMeta<typeof Status>;

const Template: ComponentStory<typeof Status> = args => (
  <StoryContainer>
    <Status {...args} />
  </StoryContainer>
);

export const Main = Template.bind({});
Main.args = {
  status: TicketStatusType.APPROVED,
};
