import Navbar from "@/components/Navbar";
import FollowRequestsProvider from "@/context/FollowRequestsContext";
import FollowRequests from "@/features/FollowRequests";
import Head from "next/head";
import { useTranslation } from "react-i18next";

export default function FollowRequestsPage() {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>
          {t("followRequests")} | {t("logoName")}
        </title>
      </Head>
      <FollowRequestsProvider>
        <FollowRequests />
      </FollowRequestsProvider>
      <Navbar />
    </>
  );
}
