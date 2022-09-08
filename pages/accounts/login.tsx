import { useTranslation } from "react-i18next";
import Head from "next/head";
import { Login } from "@features/Auth";

export default function LoginPage() {
  const { t } = useTranslation(["common", "pages"]);
  return (
    <>
      <Head>
        <title>
          {t("pages:login")} | {t("common:logoName")}
        </title>
      </Head>
      <Login />
    </>
  );
}
