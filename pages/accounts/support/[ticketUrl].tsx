import { useTranslation } from "react-i18next";
import Head from "next/head";
import { Layout } from "@components/Layout";
import { ModalProvider } from "@contexts/ModalContext";
import { Ticket } from "@features/Ticket";

export default function SupportPage() {
  const { t } = useTranslation(["common", "pages"]);
  return (
    <ModalProvider>
      <Head>
        <title>
          {t("pages:support")} | {t("common:logoName")}
        </title>
      </Head>
      <Layout>
        <Ticket />
      </Layout>
    </ModalProvider>
  );
}
