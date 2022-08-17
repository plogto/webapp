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
