import { useTranslation } from "react-i18next";
import Head from "next/head";
import { Layout } from "@components/Layout";
import { AddPost } from "@features/AddPost";

export default function AddPostPage() {
  const { t } = useTranslation(["common", "pages"]);
  return (
    <>
      <Head>
        <title>
          {t("pages:addPost")} | {t("common:logoName")}
        </title>
      </Head>
      <Layout showTrends>
        <AddPost />
      </Layout>
    </>
  );
}
