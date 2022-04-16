import { DateType, RepliesView, PostTypeKey } from "@enums";
import type { Attachment } from "./attachment";
import type { Pagination } from "./pagination";
import type { PostLike, PostLikesWithPagination } from "./postLike";
import type { PostSave } from "./postSave";
import type { ContentSize, DateSize, FooterSize, HeaderSize } from "./size";
import type { User } from "./user";

export type Post = {
  id: string;
  url: string;
  user: User;
  content: string;
  attachment?: Attachment[];
  isLiked?: PostLike;
  isSaved?: PostSave;
  likes?: PostLikesWithPagination;
  replies?: PostsWithPagination;
  createdAt: string;
  updatedAt: string;
};

export type PostsWithPagination = {
  posts: Post[];
  pagination: Pagination;
};

export type NewReply = {
  postId: string;
  content: string;
  attachment?: string;
  status?: string;
};

export type PostType = {
  key: PostTypeKey;
  headerSize: HeaderSize;
  contentSize: ContentSize;
  dateSize: DateSize;
  dateType?: DateType;
  footerSize: FooterSize;
  isContentClickable?: boolean;
  repliesView?: RepliesView;
};

export type PostTypes = {
  [key in PostTypeKey]: PostType;
};
