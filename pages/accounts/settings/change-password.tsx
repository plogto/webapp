import { useTranslation } from "react-i18next";
import Head from "next/head";
import { Layout } from "@components/Layout";
import { ChangePassword } from "@features/ChangePassword";
import { Settings } from "@features/Settings";

export default function ChangePasswordPage() {
  const { t } = useTranslation(["common", "pages"]);
  return (
    <>
      <Head>
        <title>
          {t("pages:changePassword")} | {t("common:logoName")}
        </title>
      </Head>
      <Layout>
        <Settings title={t("pages:changePassword")}>
          <ChangePassword />
        </Settings>
      </Layout>
    </>
  );
}
