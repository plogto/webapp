import Navbar from "@/components/Navbar";
import Tag from "@/features/Tag";
import Head from "next/head";

export default function TagPage() {
  return (
    <>
      <Head>
        <title>Tag | Poster</title>
      </Head>
      <Tag />
      <Navbar />
    </>
  );
}
