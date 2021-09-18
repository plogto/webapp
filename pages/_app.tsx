import "tailwindcss/tailwind.css";
import "@styles/globals.css";
import "@locales";

import { ApolloProvider } from "@apollo/client";
import { AppInit } from "@components/AppInit";
import { SafeHydrate } from "@components/SafeHydrate";
import { AppContext } from "@context";
import type { AppProps } from "next/app";
import Head from "next/head";

import { useApollo } from "../lib/apolloClient";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <SafeHydrate>
      <ApolloProvider client={apolloClient}>
        <AppContext>
          <AppInit />
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover"
            />
          </Head>
          <Component {...pageProps} />
        </AppContext>
      </ApolloProvider>
    </SafeHydrate>
  );
}
