import { useTranslation } from "react-i18next";
import { Layout } from "@components/Layout";
import { Wrapper } from "@components/Wrapper";
import { Notifications } from "@features/Notifications";
import Head from "next/head";

export default function NotificationsPage() {
  const { t } = useTranslation(["common", "pages"]);
  return (
    <>
      <Head>
        <title>
          {t("pages:notifications")} | {t("common:logoName")}
        </title>
      </Head>
      <Layout>
        <Wrapper>
          <Notifications />
        </Wrapper>
      </Layout>
    </>
  );
}
