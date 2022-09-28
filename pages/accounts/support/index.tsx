import { useTranslation } from "react-i18next";
import Head from "next/head";
import { Layout } from "@components/Layout";
import { Support } from "@features/Support";

export default function SupportPage() {
  const { t } = useTranslation(["common", "pages"]);
  return (
    <>
      <Head>
        <title>
          {t("pages:support")} | {t("common:logoName")}
        </title>
      </Head>
      <Layout>
        <Support />
      </Layout>
    </>
  );
}
