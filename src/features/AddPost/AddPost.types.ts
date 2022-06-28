import type { InternalRefetchQueriesInclude } from "@apollo/client/core/types";
import type { Post } from "@t/post";

export interface AddPostProps {
  isEditMode?: boolean;
}
export interface UseAddPostProps {
  isEditMode?: boolean;
}
export interface UseEditPostProps {
  refetchQueries: InternalRefetchQueriesInclude;
}
export interface AddPostForm {
  parentId?: string;
  content?: Post["content"];
  attachment?: string[];
}

export interface AttachmentPreviewProps {
  image?: Blob;
  onClickRemoveButton: () => void;
  showRemoveButton?: boolean;
}

export interface ContentProps {
  content: Post["content"];
}

export interface CounterProps {
  length: number;
  maxLength: number;
}
