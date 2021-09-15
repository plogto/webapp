import Navbar from "@/components/Navbar";
import Head from "next/head";
import { useTranslation } from "react-i18next";

export default function SettingsPage() {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>
          {t("settings")} | {t("logoName")}
        </title>
      </Head>
      <div>Settings</div>
      <Navbar />
    </>
  );
}
