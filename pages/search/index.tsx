import { Layout } from "@components/Layout";
import { Wrapper } from "@components/Wrapper";
import { Search } from "@features/Search";
import Head from "next/head";
import { useTranslation } from "react-i18next";

export default function SearchPage(): JSX.Element {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>
          {t("search")} | {t("logoName")}
        </title>
      </Head>
      <Layout>
        <Wrapper className="p-2 lg:p-5">
          <Search />
        </Wrapper>
      </Layout>
    </>
  );
}
