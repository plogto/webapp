import { Toaster } from "react-hot-toast";
import { AppContext } from "@contexts";
import "@locales";
import { ThemeProvider } from "next-themes";
import { ApolloProvider } from "@apollo/client";
import { AppInit } from "@components/AppInit";
import { SafeHydrate } from "@components/SafeHydrate";
import "@styles/globals.css";
import { useApollo } from "../lib/apolloClient";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <SafeHydrate>
      <ApolloProvider client={apolloClient}>
        <ThemeProvider>
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
        </ThemeProvider>
      </ApolloProvider>
    </SafeHydrate>
  );
}
