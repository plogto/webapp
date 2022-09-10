import { useTranslation } from "react-i18next";
import Head from "next/head";
import { Register } from "@features/Auth";

export default function RegisterPage() {
  const { t } = useTranslation(["common", "pages"]);
  return (
    <>
      <Head>
        <title>
          {t("pages:register")} | {t("common:logoName")}
        </title>
      </Head>
      <Register />
    </>
  );
}
