import { Layout } from "@components/Layout";
import { Wrapper } from "@components/Wrapper";
import { FollowRequestsProvider } from "@context/FollowRequestsContext";
import { FollowRequests } from "@features/FollowRequests";
import Head from "next/head";
import { useTranslation } from "react-i18next";

export default function FollowRequestsPage(): JSX.Element {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>
          {t("followRequests")} | {t("logoName")}
        </title>
      </Head>
      <FollowRequestsProvider>
        <Layout>
          <Wrapper className="p-2 lg:p-5">
            <FollowRequests />
          </Wrapper>
        </Layout>
      </FollowRequestsProvider>
    </>
  );
}
