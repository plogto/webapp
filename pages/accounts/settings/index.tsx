import { useTranslation } from "react-i18next";
import Head from "next/head";
import { Layout } from "@components/Layout";
import { Settings } from "@features/Settings";

export default function SettingsPage() {
  const { t } = useTranslation(["common", "pages"]);
  return (
    <>
      <Head>
        <title>
          {t("pages:settings")} | {t("common:logoName")}
        </title>
      </Head>
      <Layout>
        <Settings />
      </Layout>
    </>
  );
}
