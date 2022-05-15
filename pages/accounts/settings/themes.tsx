import { useTranslation } from "react-i18next";
import { Layout } from "@components/Layout";
import { Wrapper } from "@components/Wrapper";
import { Themes } from "@features/Themes";
import Head from "next/head";

export default function ThemesPage() {
  const { t } = useTranslation(["common", "pages"]);
  return (
    <>
      <Head>
        <title>
          {t("pages:themes")} | {t("common:logoName")}
        </title>
      </Head>
      <Layout>
        <Wrapper>
          <Themes />
        </Wrapper>
      </Layout>
    </>
  );
}
