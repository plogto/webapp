import Head from "next/head";
import { useTranslation } from "react-i18next";
import { Layout } from "@components/Layout";
import { Wrapper } from "@components/Wrapper";
import { FollowRequestsProvider } from "@contexts/FollowRequestsContext";
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
      <FollowRequestsProvider>
        <Layout>
          <Wrapper className="p-2 md:p-5">
            <FollowRequests />
          </Wrapper>
        </Layout>
      </FollowRequestsProvider>
    </>
  );
}
