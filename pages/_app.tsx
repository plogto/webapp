import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apolloClient";
import "@/styles/globals.css";
import { AppContext } from "@/context";
import { AppInit } from "@/components/AppInit";
import Head from "next/head";
import { SafeHydrate } from "@/components/SafeHydrate";
import "@/locales";

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
          <Component {...pageProps} />
        </AppContext>
      </ApolloProvider>
    </SafeHydrate>
  );
}
