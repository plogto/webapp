import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apolloClient";
import "@/styles/globals.css";
import AppContext from "@/context";
import AppInit from "@/components/AppInit";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <AppContext>
        <AppInit />
        <Component {...pageProps} />
      </AppContext>
    </ApolloProvider>
  );
}
