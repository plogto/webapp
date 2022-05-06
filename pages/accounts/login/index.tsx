import { useTranslation } from "react-i18next";
import { Login } from "@features/Auth";
import Head from "next/head";

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
