import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  NormalizedCacheObject,
  RequestHandler,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useMemo } from "react";

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;

const authLink = new ApolloLink((operation, forward) => {
  const token =
    typeof window !== "undefined"
      ? localStorage.getItem("authorization")
      : "null";
  const authorization = `Bearer ${token}`;

  operation.setContext({
    headers: {
      authorization,
    },
  });
  return forward(operation);
});

const httpLink = authLink.concat(
  createUploadLink({
    uri: process.env.NEXT_PUBLIC_BASE_URL + "/query",
  }) as unknown as ApolloLink | RequestHandler,
);

const link = httpLink;

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === "undefined", // set to true for SSR
    link,
    cache: new InMemoryCache(),
  });
}

export function initializeApollo(
  initialState: NormalizedCacheObject | null = null,
): ApolloClient<NormalizedCacheObject> {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client,
  // the initial state gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();

    // Restore the cache using the data passed from
    // getStaticProps/getServerSideProps combined with the existing cached data
    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;

  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}

export function useApollo(
  initialState: NormalizedCacheObject,
): ApolloClient<NormalizedCacheObject> {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
