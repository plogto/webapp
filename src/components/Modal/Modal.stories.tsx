import type { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { Modal } from "@components/Modal";
import { StoryContainer } from "@stories/StoryContainer";

export default {
  title: "components/Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = args => {
  return (
    <StoryContainer>
      <Modal {...args} isOpen>
        <div className="p-4 flex flex-col justify-center">
          <div className="font-bold text-lg">Modal Component</div>
          <p>
            Incidunt ratione eos deleniti nesciunt mollitia velit quisquam,
            veritatis, commodi, a rerum quidem similique dolorum nam quaerat
            dolores sequi enim? Nostrum, tempora.
          </p>
        </div>
      </Modal>
    </StoryContainer>
  );
};

export const Main = Template.bind({});
Main.args = {};
