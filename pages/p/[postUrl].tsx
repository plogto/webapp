import Head from "next/head";
import { useTranslation } from "react-i18next";
import { Layout } from "@components/Layout";
import { Wrapper } from "@components/Wrapper";
import { PostProvider } from "@contexts/PostContext";
import { PostContainer } from "@features/Post";

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
      <PostProvider>
        <Layout>
          <Wrapper className="p-2 md:p-5 min-h-screen">
            <PostContainer />
          </Wrapper>
        </Layout>
      </PostProvider>
    </>
  );
}
