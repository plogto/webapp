import { Layout } from "@components/Layout";
import { AddPost } from "@features/AddPost";
import Head from "next/head";
import { useTranslation } from "react-i18next";

export default function AddPostPage(): JSX.Element {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>
          {t("addPost")} | {t("logoName")}
        </title>
      </Head>
      <Layout>
        <AddPost />
      </Layout>
    </>
  );
}
