import Head from "next/head";
import { useTranslation } from "react-i18next";
import { Login } from "@features/Login";

export default function LoginPage() {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>
          {t("login")} | {t("logoName")}
        </title>
      </Head>
      <Login />
    </>
  );
}
