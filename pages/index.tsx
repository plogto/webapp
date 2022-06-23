import { useTranslation } from "react-i18next";
import Head from "next/head";
import { Layout } from "@components/Layout";
import { useAccountContext } from "@contexts/AccountContext";
import { Home } from "@features/Home";
import { Landing } from "@features/Landing";

export default function HomePage() {
  const { isAuthenticated } = useAccountContext();
  const { t } = useTranslation(["common", "pages"]);
  return (
    <>
      <Head>
        <title>
          {t("pages:home")} | {t("common:logoName")}
        </title>
      </Head>
      {isAuthenticated ? (
        <Layout showTrends>
          <Home />
        </Layout>
      ) : (
        <Landing />
      )}
    </>
  );
}
