import Head from "next/head";
import { useTranslation } from "react-i18next";
import { Layout } from "@components/Layout";
import { Wrapper } from "@components/Wrapper";
import { Profile } from "@features/Profile";

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
        <Wrapper className="box-content">
          <Profile />
        </Wrapper>
      </Layout>
    </>
  );
}
