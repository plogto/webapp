import { useTranslation } from "react-i18next";
import Head from "next/head";
import { Layout } from "@components/Layout";
import { ModalProvider } from "@contexts/ModalContext";
import { Credits } from "@features/Credits";

export default function EditProfilePage() {
  const { t } = useTranslation(["common", "pages"]);
  return (
    <ModalProvider>
      <Head>
        <title>
          {t("pages:credits")} | {t("common:logoName")}
        </title>
      </Head>
      <Layout>
        <Credits />
      </Layout>
    </ModalProvider>
  );
}
