import type { TypePolicies } from "@apollo/client";
import type { PostsWithPagination } from "@t/post";

export const typePolicies: TypePolicies = {
  Query: {
    fields: {
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
    },
  },
};
