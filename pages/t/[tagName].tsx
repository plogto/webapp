import { Layout } from "@components/Layout";
import { Wrapper } from "@components/Wrapper";
import { Tag } from "@features/Tag";
import Head from "next/head";
import { useTranslation } from "react-i18next";

export default function TagPage(): JSX.Element {
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
