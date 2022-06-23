import { useTranslation } from "react-i18next";
import Head from "next/head";
import { Layout } from "@components/Layout";
import { Search } from "@features/Search";

export default function SearchPage() {
  const { t } = useTranslation(["common", "pages"]);
  return (
    <>
      <Head>
        <title>
          {t("pages:search")} | {t("common:logoName")}
        </title>
      </Head>
      <Layout showTrends>
        <Search />
      </Layout>
    </>
  );
}
