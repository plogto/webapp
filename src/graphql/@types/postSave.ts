import type { PostSave } from "@t/postSave";

export interface SavePostMutation {
  savePost: PostSave;
}

export interface UnsavePostMutation {
  unsavePost: PostSave;
}
