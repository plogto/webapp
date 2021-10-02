import { PostSave } from "@t/postSave";

export type SavePostMutation = {
  savePost: PostSave;
};

export type UnsavePostMutation = {
  unsavePost: PostSave;
};
