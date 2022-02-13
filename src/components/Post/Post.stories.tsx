import React from "react";

import { StoryContainer } from "@stories/StoryContainer";
import { Post } from ".";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "components/Post",
  component: Post,
} as ComponentMeta<typeof Post>;

const Template: ComponentStory<typeof Post> = args => (
  <StoryContainer>
    <Post {...args} />
  </StoryContainer>
);

const args = {
  id: "44a0a510-0f53-402e-8742-320dbeb8a86d",
  user: {
    id: "b8ee5f18-ee64-4179-a5e5-af78386451b1",
    username: "mahdineer",
    fullName: "Mahdi",
    connectionStatus: null,
    __typename: "User",
  },
  isLiked: null,
  isSaved: null,
  likes: {
    postLikes: null,
    pagination: {
      totalDocs: 0,
      __typename: "Pagination",
    },
    __typename: "PostLikes",
  },
  replies: {
    posts: [
      {
        id: "53afd761-a9a8-4a61-af6e-8d12179e95c2",
        url: "ocBsMFmLjUqUqmEfSxSo",
        user: {
          id: "efedc2b9-75ad-428c-8a1e-65dbab774391",
          username: "shiva",
          fullName: "Shiva",
          connectionStatus: null,
          __typename: "User",
        },
        isLiked: null,
        isSaved: null,
        likes: {
          postLikes: null,
          pagination: {
            totalDocs: 0,
            __typename: "Pagination",
          },
          __typename: "PostLikes",
        },
        replies: {
          posts: null,
          pagination: {
            totalDocs: 0,
            __typename: "Pagination",
          },
          __typename: "Posts",
        },
        content: "Hello, Mahdi!",
        createdAt: "2022-02-09T21:29:09.795892Z",
        updatedAt: "2022-02-09T21:29:09.795892Z",
        __typename: "Post",
      },
      {
        id: "6098c8cf-7448-4694-8516-2dc1fd0766e2",
        url: "PdnYAykHLCrQfPcQOonN",
        user: {
          id: "efedc2b9-75ad-428c-8a1e-65dbab774391",
          username: "shiva",
          fullName: "Shiva",
          connectionStatus: null,
          __typename: "User",
        },
        isLiked: null,
        isSaved: null,
        likes: {
          postLikes: null,
          pagination: {
            totalDocs: 0,
            __typename: "Pagination",
          },
          __typename: "PostLikes",
        },
        replies: {
          posts: [
            {
              id: "5d82fb49-605d-483a-9dca-4e6553e1fb65",
              url: "pDMrnJjWbHhmuWOxhhFi",
              user: {
                id: "b8ee5f18-ee64-4179-a5e5-af78386451b1",
                username: "mahdineer",
                fullName: "Mahdi",
                connectionStatus: null,
                __typename: "User",
              },
              isLiked: null,
              isSaved: null,
              likes: {
                pagination: {
                  totalDocs: 0,
                  __typename: "Pagination",
                },
                __typename: "PostLikes",
              },
              content:
                "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. ",
              createdAt: "2022-02-10T22:34:28.134968Z",
              updatedAt: "2022-02-11T22:34:22.691353Z",
              __typename: "Post",
            },
            {
              id: "b25c3c9a-a354-4736-958b-0ce291dfff27",
              url: "LSceZXwtgNxRdgpBaGCT",
              user: {
                id: "b8ee5f18-ee64-4179-a5e5-af78386451b1",
                username: "mahdineer",
                fullName: "Mahdi",
                connectionStatus: null,
                __typename: "User",
              },
              isLiked: null,
              isSaved: null,
              likes: {
                pagination: {
                  totalDocs: 0,
                  __typename: "Pagination",
                },
                __typename: "PostLikes",
              },
              content: "Great, thank you.",
              createdAt: "2022-02-10T22:36:41.889549Z",
              updatedAt: "2022-02-10T22:36:41.889549Z",
              __typename: "Post",
            },
          ],
          pagination: {
            totalDocs: 2,
            __typename: "Pagination",
          },
          __typename: "Posts",
        },
        content: "How are you?",
        createdAt: "2022-02-09T21:29:51.489572Z",
        updatedAt: "2022-02-09T21:29:51.489572Z",
        __typename: "Post",
      },
    ],
    __typename: "Posts",
  },
  content: "Hello, world!\n\n#first_post",
  createdAt: "2022-02-08T22:22:34.897652Z",
  updatedAt: "2022-02-08T22:22:34.897652Z",
  __typename: "Post",
};

export const Main = Template.bind({});
Main.args = {
  className: "py-2 px-3.5 text-white bg-primary-500 w-20",
  children: "Log In",
  loading: false,
};
