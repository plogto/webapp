import { useTranslation } from "react-i18next";
import { Layout } from "@components/Layout";
import { Wrapper } from "@components/Wrapper";
import { SavedPostsProvider } from "@contexts/SavedPostsContext";
import { Saved } from "@features/Saved";
import Head from "next/head";

export default function SavedPage() {
  const { t } = useTranslation(["common", "pages"]);
  return (
    <>
      <Head>
        <title>
          {t("pages:saved")} | {t("common:logoName")}
        </title>
      </Head>
      <SavedPostsProvider>
        <Layout>
          <Wrapper paddingSize={2}>
            <Saved />
          </Wrapper>
        </Layout>
      </SavedPostsProvider>
    </>
  );
}
