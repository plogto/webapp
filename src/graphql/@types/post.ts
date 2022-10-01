import type { PageInfoRequest } from "@t/pageInfo";
import type { Post, NewReply, PostsWithPageInfo } from "@t/post";
import type { SavedPostsWithPageInfo } from "@t/savedPost";
import type { User } from "@t/user";

export interface GetPostByUrlQuery {
  getPostByUrl: Post;
}

export interface GetPostsByUsernameQuery {
  getPostsByUsername: PostsWithPageInfo;
}
export interface GetPostsByUsernameQueryRequest extends PageInfoRequest {
  username: User["username"];
}

export interface GetPostsByTagNameQueryRequest extends PageInfoRequest {
  tagName: string;
}
export interface GetPostsByTagNameQuery {
  getPostsByTagName: PostsWithPageInfo;
}

export type GetTimelinePostsQueryRequest = PageInfoRequest;

export interface GetTimelinePostsQuery {
  getTimelinePosts: PostsWithPageInfo;
}

export type GetExplorePostsQueryRequest = PageInfoRequest;

export interface GetExplorePostsQuery {
  getExplorePosts: PostsWithPageInfo;
}
export interface GetSavedPostsQuery {
  getSavedPosts: SavedPostsWithPageInfo;
}
export type GetSavedPostsQueryRequest = PageInfoRequest;

export interface AddPostMutationRequest {
  parentId?: string;
  content?: Post["content"];
  attachment?: string[];
}

export interface AddPostMutation {
  addPost: Post;
}
export interface EditPostMutationRequest {
  postId: string;
  content?: Post["content"];
}

export interface EditPostMutation {
  editPost: Post;
}

export interface ReplyPostMutation {
  replyPost: NewReply;
}

export interface DeletePostMutation {
  deletePost: Post;
}
