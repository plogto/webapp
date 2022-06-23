import { useTranslation } from "react-i18next";
import Head from "next/head";
import { Layout } from "@components/Layout";
import { Notifications } from "@features/Notifications";

export default function NotificationsPage() {
  const { t } = useTranslation(["common", "pages"]);
  return (
    <>
      <Head>
        <title>
          {t("pages:notifications")} | {t("common:logoName")}
        </title>
      </Head>
      <Layout showTrends>
        <Notifications />
      </Layout>
    </>
  );
}
