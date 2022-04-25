import Head from "next/head";
import { useTranslation } from "react-i18next";
import { Layout } from "@components/Layout";
import { Wrapper } from "@components/Wrapper";
import { EditProfile } from "@features/EditProfile";

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
        <Wrapper className="p-2 md:p-4">
          <EditProfile />
        </Wrapper>
      </Layout>
    </>
  );
}
