import Navbar from "@/components/Navbar";
import Profile from "@/features/Profile";
import Head from "next/head";
import { useTranslation } from "react-i18next";

export default function ProfilePage() {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>
          {/* TODO: add username */}
          {t("profile")} | {t("logoName")}
        </title>
      </Head>
      <Profile />
      <Navbar />
    </>
  );
}
