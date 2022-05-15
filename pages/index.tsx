import { useTranslation } from "react-i18next";
import { Layout } from "@components/Layout";
import { Wrapper } from "@components/Wrapper";
import { useAccountContext } from "@contexts/AccountContext";
import { Home } from "@features/Home";
import { Landing } from "@features/Landing";
import Head from "next/head";

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
        <>
          <Layout>
            <Wrapper paddingSize={2}>
              <Home />
            </Wrapper>
          </Layout>
        </>
      ) : (
        <Landing />
      )}
    </>
  );
}
