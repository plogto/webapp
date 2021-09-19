import Head from "next/head";
import { useTranslation } from "react-i18next";
import { Layout } from "@components/Layout";
import { Wrapper } from "@components/Wrapper";
import { Tag } from "@features/Tag";

export default function TagPage() {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>
          {/* TODO: add tagName */}
          {t("tag")} | {t("logoName")}
        </title>
      </Head>
      <Layout>
        <Wrapper>
          <Tag />
        </Wrapper>
      </Layout>
    </>
  );
}
