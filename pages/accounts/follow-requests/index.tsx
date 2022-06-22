import { useTranslation } from "react-i18next";
import Head from "next/head";
import { Layout } from "@components/Layout";
import { FollowRequests } from "@features/FollowRequests";

export default function FollowRequestsPage() {
  const { t } = useTranslation(["common", "pages"]);
  return (
    <>
      <Head>
        <title>
          {t("pages:followRequests")} | {t("common:logoName")}
        </title>
      </Head>
      <Layout showTrends>
        <FollowRequests />
      </Layout>
    </>
  );
}
