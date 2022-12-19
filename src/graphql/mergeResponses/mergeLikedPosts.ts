import type { LikedPostsWithPageInfo } from "@t/likedPost";

export function mergeLikedPosts(
  existing: LikedPostsWithPageInfo,
  incoming: LikedPostsWithPageInfo,
) {
  const existingEdges = existing?.edges || [];
  const incomingEdges = incoming?.edges || [];

  const edges = existing ? [...existingEdges, ...incomingEdges] : incomingEdges;

  return {
    ...incoming,
    edges,
  };
}
