import Head from "next/head";
import { useTranslation } from "react-i18next";
import { Layout } from "@components/Layout";

export default function SettingsPage() {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>
          {t("settings")} | {t("logoName")}
        </title>
      </Head>
      <Layout>
        <div>Settings</div>
      </Layout>
    </>
  );
}
