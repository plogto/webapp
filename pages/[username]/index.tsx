import { Layout } from "@components/Layout";
import { Wrapper } from "@components/Wrapper";
import { Profile } from "@features/Profile";
import Head from "next/head";
import { useTranslation } from "react-i18next";

export default function ProfilePage(): JSX.Element {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>
          {/* TODO: add username */}
          {t("profile")} | {t("logoName")}
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
