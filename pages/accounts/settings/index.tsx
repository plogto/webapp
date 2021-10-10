import Head from "next/head";
import { useTranslation } from "react-i18next";
import { Layout } from "@components/Layout";

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
        <div>Settings</div>
      </Layout>
    </>
  );
}
