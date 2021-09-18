import { Layout } from "@/components/Layout";
import { Search } from "@/features/Search";
import Head from "next/head";
import { useTranslation } from "react-i18next";

export default function SearchPage() {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>
          {t("search")} | {t("logoName")}
        </title>
      </Head>
      <Layout>
        <Search />
      </Layout>
    </>
  );
}
