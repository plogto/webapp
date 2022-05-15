import { useTranslation } from "react-i18next";
import { Layout } from "@components/Layout";
import { Wrapper } from "@components/Wrapper";
import { Search } from "@features/Search";
import Head from "next/head";

export default function SearchPage() {
  const { t } = useTranslation(["common", "pages"]);
  return (
    <>
      <Head>
        <title>
          {t("pages:search")} | {t("common:logoName")}
        </title>
      </Head>
      <Layout>
        <Wrapper>
          <Search />
        </Wrapper>
      </Layout>
    </>
  );
}
