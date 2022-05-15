import { useTranslation } from "react-i18next";
import { Layout } from "@components/Layout";
import { Wrapper } from "@components/Wrapper";
import { ConnectionsProvider } from "@contexts/ConnectionsContext";
import { Connections } from "@features/Connections";
import Head from "next/head";

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
          <Wrapper>
            <Connections type="followers" />
          </Wrapper>
        </Layout>
      </ConnectionsProvider>
    </>
  );
}
