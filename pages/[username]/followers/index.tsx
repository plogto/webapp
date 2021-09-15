import Navbar from "@/components/Navbar";
import ConnectionsProvider from "@/context/ConnectionsContext";
import Connections from "@/features/Connections";
import Head from "next/head";
import { useTranslation } from "react-i18next";

export default function FollowersPage() {
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
        <Connections type="followers" />
      </ConnectionsProvider>
      <Navbar />
    </>
  );
}
