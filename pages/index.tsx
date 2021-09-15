import Navbar from "@/components/Navbar";
import Home from "@/features/Home";
import Head from "next/head";
import { useTranslation } from "react-i18next";

export default function HomePage() {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>
          {t("home")} | {t("logoName")}
        </title>
      </Head>
      <Home />
      <Navbar />
    </>
  );
}
