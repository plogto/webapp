import type { PostsWithPageInfo } from "@t/post";

export function mergePosts(
  existing: PostsWithPageInfo,
  incoming: PostsWithPageInfo,
) {
  const edges = existing
    ? [...existing?.edges, ...incoming?.edges]
    : incoming.edges;

  return {
    ...incoming,
    edges,
  };
}
