import Head from "next/head";
import { useTranslation } from "react-i18next";
import { Layout } from "@components/Layout";
import { Wrapper } from "@components/Wrapper";
import { ConnectionsProvider } from "@context/ConnectionsContext";
import { Connections } from "@features/Connections";

export default function FollowingPage() {
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
          <Wrapper className="p-2 md:p-5">
            <Connections type="following" />
          </Wrapper>
        </Layout>
      </ConnectionsProvider>
    </>
  );
}
