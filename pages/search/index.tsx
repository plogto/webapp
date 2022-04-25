import Head from "next/head";
import { useTranslation } from "react-i18next";
import { Layout } from "@components/Layout";
import { Wrapper } from "@components/Wrapper";
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
      <Layout>
        <Wrapper className="p-2 md:p-4">
          <Search />
        </Wrapper>
      </Layout>
    </>
  );
}
