import type { WithPageInfo } from ".";
import { DateType, RepliesView, PostTypeKey } from "@enums";
import { IconNames } from "@components/Icon";
import type { Attachment } from "./attachment";
import type { LikedPost, LikedPostsWithPageInfo } from "./likedPost";
import type { Placeholder } from "./placeholder";
import type { SavedPost } from "./savedPost";
import type { ContentSize, DateSize, FooterSize, HeaderSize } from "./size";
import type { User } from "./user";

export interface Post {
  id: string;
  parent: Post;
  url: string;
  user: User;
  content: string;
  attachment?: Attachment[];
  isLiked?: LikedPost;
  isSaved?: SavedPost;
  likes?: LikedPostsWithPageInfo;
  replies?: PostsWithPageInfo;
  createdAt: string;
  updatedAt: string;
}

export type PostsWithPageInfo = WithPageInfo<Post>;

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
  isShowUserInfo?: boolean;
  repliesView?: RepliesView;
}

export type PostTypes = {
  [key in PostTypeKey]: PostType;
};

export interface PostData {
  data?: PostsWithPageInfo;
  isLoading?: boolean;
}

export interface PostTab {
  title: string;
  icon?: IconNames;
  href: string;
  data: PostData;
  getMoreData: () => void;
  placeholder: Placeholder;
}
