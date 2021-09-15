import Navbar from "@/components/Navbar";
import AddPost from "@/features/AddPost";
import Head from "next/head";
import { useTranslation } from "react-i18next";

export default function AddPostPage() {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>
          {t("addPost")} | {t("logoName")}
        </title>
      </Head>
      <AddPost />
      <Navbar />
    </>
  );
}
