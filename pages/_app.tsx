import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import Head from "next/head";
import { AppContext } from "@contexts";
import "@locales";
import { ApolloProvider } from "@apollo/client";
import { AppInit } from "@components/AppInit";
import { SafeHydrate } from "@components/SafeHydrate";
import { TOAST_OPTIONS } from "@constants/toast";
import { useApollo } from "@lib/apolloClient";
import "@styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo();

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

            <Toaster toastOptions={TOAST_OPTIONS} />
            <Component {...pageProps} />
          </AppContext>
        </ThemeProvider>
      </ApolloProvider>
    </SafeHydrate>
  );
}
