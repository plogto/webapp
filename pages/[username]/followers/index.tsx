import Head from "next/head";
import { useTranslation } from "react-i18next";
import { Layout } from "@components/Layout";
import { Wrapper } from "@components/Wrapper";
import { ConnectionsProvider } from "@context/ConnectionsContext";
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
          <Wrapper className="p-2 md:p-5">
            <Connections type="followers" />
          </Wrapper>
        </Layout>
      </ConnectionsProvider>
    </>
  );
}
