import { Dispatch, SetStateAction } from "react";
import { Post } from "@t/post";
import { PostLike, PostLikesWithPagination } from "@t/postLike";
import { User } from "@t/user";

declare global {
  export type PostContext = {
    data?: {
      id: Post["id"];
      user: User;
      content: Post["content"];
      createdAt: Post["createdAt"];
      updatedAt: Post["updatedAt"];
    };
    isLiked?: PostLike;
    likes?: PostLikesWithPagination;
  };

  export type SetPostContext = {
    setData: Dispatch<SetStateAction<PostContext["data"]>>;
    setIsLiked: Dispatch<SetStateAction<PostContext["isLiked"]>>;
    setLikes: Dispatch<SetStateAction<PostContext["likes"]>>;
  };
}
