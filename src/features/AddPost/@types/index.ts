import type { Post } from "@t/post";

export type AddPostForm = {
  postId?: string;
  content?: Post["content"];
  attachment?: string[];
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
