import Head from "next/head";
import { useTranslation } from "react-i18next";
import { Layout } from "@components/Layout";
import { Wrapper } from "@components/Wrapper";
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
      <Layout>
        <Wrapper className="p-2 md:p-4">
          <AddPost />
        </Wrapper>
      </Layout>
    </>
  );
}
