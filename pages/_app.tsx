import "@styles/globals.css";
import "@locales";
import { ApolloProvider } from "@apollo/client";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
import { useApollo } from "../lib/apolloClient";
import { AppInit } from "@components/AppInit";
import { SafeHydrate } from "@components/SafeHydrate";
import { AppContext } from "@contexts";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
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

          <Toaster />
          <Component {...pageProps} />
        </AppContext>
      </ApolloProvider>
    </SafeHydrate>
  );
}
