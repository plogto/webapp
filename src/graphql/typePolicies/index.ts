import type { TypePolicies } from "@apollo/client";
import { mergePosts } from "@graphql/mergeResponses";

export const typePolicies: TypePolicies = {
  Query: {
    fields: {
      getPostsByUsername: {
        keyArgs: ["username"],
        merge: mergePosts,
      },
      getTimelinePosts: {
        keyArgs: false,
        merge: mergePosts,
      },
      getExplorePosts: {
        keyArgs: false,
        merge: mergePosts,
      },
      getSavedPosts: {
        keyArgs: false,
        merge: mergePosts,
      },
      getPostsByTagName: {
        keyArgs: ["tagName"],
        merge: mergePosts,
      },
    },
  },
};
