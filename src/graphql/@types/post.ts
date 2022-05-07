import type { Post, NewReply } from "@t/post";

export interface GetPostByUrlQuery {
  getPostByUrl: Post;
}

export interface GetPostsByUsernameQuery {
  getPostsByUsername: {
    posts: Post[];
  };
}

export interface GetPostsByTagNameQuery {
  getPostsByTagName: {
    posts: Post[];
  };
}

export interface AddPostMutationRequest {
  postId?: string;
  content?: Post["content"];
  attachment?: string[];
}

export interface AddPostMutation {
  addPost: Post;
}

export interface ReplyPostMutation {
  replyPost: NewReply;
}

export interface DeletePostMutation {
  deletePost: Post;
}
