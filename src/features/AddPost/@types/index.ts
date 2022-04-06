import type { Post } from "@t/post";

export type AddPostForm = {
  content?: Post["content"];
  attachment?: Post["attachment"];
};

export type AttachmentPreviewProps = {
  image?: Blob;
  onClickRemoveButton: () => void;
};

export type ContentProps = {
  content: Post["content"];
};

export type CounterProps = {
  length: number;
  maxLength: number;
};
