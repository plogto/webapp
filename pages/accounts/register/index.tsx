import { useTranslation } from "react-i18next";
import { Register } from "@features/Auth";
import Head from "next/head";

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
