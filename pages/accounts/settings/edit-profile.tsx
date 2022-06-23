import { useTranslation } from "react-i18next";
import Head from "next/head";
import { Layout } from "@components/Layout";
import { EditProfile } from "@features/EditProfile";
import { Settings } from "@features/Settings";

export default function EditProfilePage() {
  const { t } = useTranslation(["common", "pages"]);
  return (
    <>
      <Head>
        <title>
          {t("pages:editProfile")} | {t("common:logoName")}
        </title>
      </Head>
      <Layout>
        <Settings title={t("pages:editProfile")}>
          <EditProfile />
        </Settings>
      </Layout>
    </>
  );
}
