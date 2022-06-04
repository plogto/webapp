import type { PostsWithPagination } from "@t/post";

export const postPolicies = {
  getPostsByUsername: {
    keyArgs: false,
    merge(existing: PostsWithPagination, incoming: PostsWithPagination) {
      return {
        pagination: incoming.pagination,
        posts:
          existing?.posts?.length > 0
            ? [...existing?.posts, ...incoming?.posts]
            : incoming?.posts || [],
      };
    },
  },
};
