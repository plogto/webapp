import { useTranslation } from "react-i18next";
import Head from "next/head";
import { Layout } from "@components/Layout";
import { AddPostProvider } from "@contexts/AddPostContext";
import { AddPost } from "@features/AddPost";

export default function EditPostPage() {
  const { t } = useTranslation(["common", "pages"]);
  return (
    <AddPostProvider>
      <Head>
        <title>
          {/* TODO: add username*/}
          {t("pages:post")} | {t("common:logoName")}
        </title>
      </Head>
      <Layout showTrends>
        <AddPost isEditMode />
      </Layout>
    </AddPostProvider>
  );
}
