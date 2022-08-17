import type { SavedPost } from "@t/savedPost";

export interface SavePostMutation {
  savePost: SavedPost;
}

export interface UnsavePostMutation {
  unsavePost: SavedPost;
}
