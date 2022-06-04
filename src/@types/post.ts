import { DateType, RepliesView, PostTypeKey } from "@enums";
import type { Attachment } from "./attachment";
import type { Pagination } from "./pagination";
import type { PostLike, PostLikesWithPagination } from "./postLike";
import type { PostSave } from "./postSave";
import type { ContentSize, DateSize, FooterSize, HeaderSize } from "./size";
import type { Status } from "./status";
import type { User } from "./user";

export interface Post {
  id: string;
  parent: Post;
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
}

export interface PostsWithPagination {
  posts: Post[];
  pagination: Pagination;
}

export interface NewReply {
  postId: string;
  content: string;
  attachment?: string;
  status?: string;
}

export interface PostType {
  key: PostTypeKey;
  headerSize: HeaderSize;
  contentSize: ContentSize;
  dateSize?: DateSize;
  dateType?: DateType;
  footerSize?: FooterSize;
  isContentClickable?: boolean;
  showMoreButton?: boolean;
  repliesView?: RepliesView;
}

export type PostTypes = {
  [key in PostTypeKey]: PostType;
};

export interface PostData {
  data?: Post[];
  pagination?: Pagination;
  isLoading?: boolean;
}

export interface Tab {
  title: string;
  href: string;
  data: PostData;
  getMoreData: () => void;
  emptyStatus: Status;
}
