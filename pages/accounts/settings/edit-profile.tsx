import { useTranslation } from "react-i18next";
import { Layout } from "@components/Layout";
import { Wrapper } from "@components/Wrapper";
import { EditProfile } from "@features/EditProfile";
import Head from "next/head";

export default function EditProfilePage() {
  const { t } = useTranslation(["common", "pages"]);
  return (
    <>
      <Head>
        <title>
          {t("pages:settings")} | {t("common:logoName")}
        </title>
      </Head>
      <Layout>
        <Wrapper>
          <EditProfile />
        </Wrapper>
      </Layout>
    </>
  );
}
