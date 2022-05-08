import { useTranslation } from "react-i18next";
import { Layout } from "@components/Layout";
import { Wrapper } from "@components/Wrapper";
import { Profile } from "@features/Profile";
import Head from "next/head";

export default function ProfilePage() {
  const { t } = useTranslation(["common", "pages"]);
  return (
    <>
      <Head>
        <title>
          {/* TODO: add username */}
          {t("pages:profile")} | {t("common:logoName")}
        </title>
      </Head>
      <Layout>
        <Wrapper paddingSize={2}>
          <Profile />
        </Wrapper>
      </Layout>
    </>
  );
}
