import { Layout } from "@components/Layout";
import { Wrapper } from "@components/Wrapper";
import { Notifications } from "@features/Notifications";
import Head from "next/head";
import { useTranslation } from "react-i18next";

export default function NotificationsPage(): JSX.Element {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>
          {t("notifications")} | {t("logoName")}
        </title>
      </Head>
      <Layout>
        <Wrapper className="p-2 lg:p-5">
          <Notifications />
        </Wrapper>
      </Layout>
    </>
  );
}
