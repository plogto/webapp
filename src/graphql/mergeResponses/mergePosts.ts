import type { PostsWithPagination } from "@t/post";

export function mergePosts(
  existing: PostsWithPagination,
  incoming: PostsWithPagination,
) {
  const isNewPage = existing?.pagination?.page !== incoming?.pagination?.page;
  const posts =
    isNewPage && existing?.posts?.length
      ? [...existing?.posts, ...incoming?.posts]
      : incoming.posts || [];

  return {
    pagination: incoming.pagination,
    posts,
  };
}
