import Head from "next/head";
import { useTranslation } from "react-i18next";
import { Layout } from "@components/Layout";
import { Wrapper } from "@components/Wrapper";
import { ConnectionsProvider } from "@contexts/ConnectionsContext";
import { Connections } from "@features/Connections";

export default function FollowingPage() {
  const { t } = useTranslation(["common", "pages"]);
  return (
    <>
      <Head>
        <title>
          {/* TODO: add username */}
          {t("pages:following")} | {t("common:logoName")}
        </title>
      </Head>
      <ConnectionsProvider>
        <Layout>
          <Wrapper>
            <Connections type="following" />
          </Wrapper>
        </Layout>
      </ConnectionsProvider>
    </>
  );
}
