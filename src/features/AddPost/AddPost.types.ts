import type { Post } from "@t/post";

export interface AddPostForm {
  postId?: string;
  content?: Post["content"];
  attachment?: string[];
}

export interface AttachmentPreviewProps {
  image?: Blob;
  onClickRemoveButton: () => void;
}

export interface ContentProps {
  content: Post["content"];
}

export interface CounterProps {
  length: number;
  maxLength: number;
}
