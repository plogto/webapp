import type { LikedPostsWithPageInfo } from "@t/likedPost";

export function mergeLikedPosts(
  existing: LikedPostsWithPageInfo,
  incoming: LikedPostsWithPageInfo,
) {
  const edges = existing
    ? [...existing?.edges, ...incoming?.edges]
    : incoming.edges;

  return {
    ...incoming,
    edges,
  };
}
