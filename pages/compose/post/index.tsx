import { useTranslation } from "react-i18next";
import { v4 as uuid } from "uuid";
import Head from "next/head";
import { Layout } from "@components/Layout";
import { AddPostProvider } from "@contexts/AddPostContext";
import { AddPost } from "@features/AddPost";

export default function AddPostPage() {
  const { t } = useTranslation(["common", "pages"]);
  return (
    <AddPostProvider>
      <Head>
        <title>
          {t("pages:addPost")} | {t("common:logoName")}
        </title>
      </Head>
      <Layout showTrends>
        <AddPost key={uuid()} />
      </Layout>
    </AddPostProvider>
  );
}
