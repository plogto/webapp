import { Layout } from "@components/Layout";
import { ConnectionsProvider } from "@context/ConnectionsContext";
import { Connections } from "@features/Connections";
import Head from "next/head";
import { useTranslation } from "react-i18next";

export default function FollowingPage(): JSX.Element {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>
          {/* TODO: add username */}
          {t("following")} | {t("logoName")}
        </title>
      </Head>
      <ConnectionsProvider>
        <Layout>
          <Connections type="following" />
        </Layout>
      </ConnectionsProvider>
    </>
  );
}
