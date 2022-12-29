import type { LikedPostsWithPageInfo } from "@t/likedPost";
import type { PostsWithPageInfo } from "@t/post";
import type { SavedPostsWithPageInfo } from "@t/savedPost";

export function transformSavedPostsToPosts(
  savedPosts?: SavedPostsWithPageInfo,
): PostsWithPageInfo | undefined {
  return (
    savedPosts && {
      totalCount: savedPosts?.totalCount,
      pageInfo: savedPosts?.pageInfo,
      edges: savedPosts?.edges?.map(({ node, cursor }) => ({
        node: node.post,
        cursor,
      })),
    }
  );
}

export function transformLikedPostsToPosts(
  likedPosts?: LikedPostsWithPageInfo,
): PostsWithPageInfo | undefined {
  return (
    likedPosts && {
      totalCount: likedPosts?.totalCount,
      pageInfo: likedPosts?.pageInfo,
      edges: likedPosts?.edges?.map(({ node, cursor }) => ({
        node: node.post,
        cursor,
      })),
    }
  );
}
