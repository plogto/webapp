import { Layout } from "@components/Layout";
import { Wrapper } from "@components/Wrapper";
import { ConnectionsProvider } from "@context/ConnectionsContext";
import { Connections } from "@features/Connections";
import Head from "next/head";
import { useTranslation } from "react-i18next";

export default function FollowersPage(): JSX.Element {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>
          {/* TODO: add username */}
          {t("followers")} | {t("logoName")}
        </title>
      </Head>
      <ConnectionsProvider>
        <Layout>
          <Wrapper className="p-2 lg:p-5">
            <Connections type="followers" />
          </Wrapper>
        </Layout>
      </ConnectionsProvider>
    </>
  );
}
