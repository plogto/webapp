import Navbar from "@/components/Navbar";
import Notifications from "@/features/Notifications";
import Head from "next/head";
import { useTranslation } from "react-i18next";

export default function NotificationsPage() {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>
          {t("notifications")} | {t("logoName")}
        </title>
      </Head>
      <Notifications />
      <Navbar />
    </>
  );
}
