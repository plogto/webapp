import { Layout } from "@components/Layout";
import { useAccountContext } from "@context/AccountContext";
import { Home } from "@features/Home";
import { Landing } from "@features/Landing";
import Head from "next/head";
import { useTranslation } from "react-i18next";

export default function HomePage(): JSX.Element {
  const { isAuthenticated } = useAccountContext();
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>
          {t("home")} | {t("logoName")}
        </title>
      </Head>
      {isAuthenticated ? (
        <>
          <Layout>
            <Home />
          </Layout>
        </>
      ) : (
        <Landing />
      )}
    </>
  );
}
