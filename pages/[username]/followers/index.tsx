import { useTranslation } from "react-i18next";
import Head from "next/head";
import { Layout } from "@components/Layout";
import { ConnectionsProvider } from "@contexts/ConnectionsContext";
import { Connections } from "@features/Connections";

export default function FollowersPage() {
  const { t } = useTranslation(["common", "pages"]);
  return (
    <>
      <Head>
        <title>
          {/* TODO: add username */}
          {t("common:followers")} | {t("common:logoName")}
        </title>
      </Head>
      <ConnectionsProvider>
        <Layout>
          <Connections type="followers" />
        </Layout>
      </ConnectionsProvider>
    </>
  );
}
