import Head from "next/head";
import { useTranslation } from "react-i18next";
import { Layout } from "@components/Layout";
import { Wrapper } from "@components/Wrapper";
import { Search } from "@features/Search";

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
        <Wrapper className="p-2 md:p-5">
          <Search />
        </Wrapper>
      </Layout>
    </>
  );
}
