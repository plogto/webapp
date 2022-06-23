import { useTranslation } from "react-i18next";
import Head from "next/head";
import { Layout } from "@components/Layout";
import { Settings } from "@features/Settings";
import { Themes } from "@features/Themes";

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
        <Settings title={t("pages:themes")}>
          <Themes />
        </Settings>
      </Layout>
    </>
  );
}
