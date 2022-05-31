import { useTranslation } from "react-i18next";
import Head from "next/head";
import { Layout } from "@components/Layout";
import { TagProvider } from "@contexts/TagContext";
import { Tag } from "@features/Tag";

export default function TagPage() {
  const { t } = useTranslation(["common", "pages"]);
  return (
    <>
      <Head>
        <title>
          {/* TODO: add tagName */}
          {t("pages:tag")} | {t("common:logoName")}
        </title>
      </Head>
      <TagProvider>
        <Layout>
          <Tag />
        </Layout>
      </TagProvider>
    </>
  );
}
