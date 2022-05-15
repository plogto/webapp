import { useTranslation } from "react-i18next";
import { Layout } from "@components/Layout";
import { Wrapper } from "@components/Wrapper";
import { ChangePassword } from "@features/ChangePassword";
import Head from "next/head";

export default function ChangePasswordPage() {
  const { t } = useTranslation(["common", "pages"]);
  return (
    <>
      <Head>
        <title>
          {t("pages:settings")} | {t("common:logoName")}
        </title>
      </Head>
      <Layout>
        <Wrapper>
          <ChangePassword />
        </Wrapper>
      </Layout>
    </>
  );
}
