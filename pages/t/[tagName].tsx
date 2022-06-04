import { useTranslation } from "react-i18next";
import Head from "next/head";
import { Layout } from "@components/Layout";
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
      <Layout>
        <Tag />
      </Layout>
    </>
  );
}
