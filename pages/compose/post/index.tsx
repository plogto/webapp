import Navbar from "@/components/Navbar";
import AddPost from "@/features/AddPost";
import Head from "next/head";

export default function AddPostPage() {
  return (
    <>
      <Head>
        <title>Add | Poster</title>
      </Head>
      <AddPost />
      <Navbar />
    </>
  );
}
