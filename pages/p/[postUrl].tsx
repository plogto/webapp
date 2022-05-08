import { useTranslation } from "react-i18next";
import { Layout } from "@components/Layout";
import { Wrapper } from "@components/Wrapper";
import { PostContainer } from "@features/Post";
import Head from "next/head";

export default function PostPage() {
  const { t } = useTranslation(["common", "pages"]);
  return (
    <>
      <Head>
        <title>
          {/* TODO: add username*/}
          {t("pages:post")} | {t("common:logoName")}
        </title>
      </Head>
      <Layout>
        <Wrapper>
          <PostContainer />
        </Wrapper>
      </Layout>
    </>
  );
}
