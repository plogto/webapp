import type { PostsWithPageInfo } from "@t/post";

export function mergePosts(
  existing: PostsWithPageInfo,
  incoming: PostsWithPageInfo,
) {
  const existingEdges = existing?.edges || [];
  const incomingEdges = incoming?.edges || [];

  const edges = existing ? [...existingEdges, ...incomingEdges] : incomingEdges;

  return {
    ...incoming,
    edges,
  };
}
