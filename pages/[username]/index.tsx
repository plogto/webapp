import Navbar from "@/components/Navbar";
import Profile from "@/features/Profile";
import Head from "next/head";

export default function ProfilePage() {
  return (
    <>
      <Head>
        <title>Profile | Poster</title>
      </Head>
      <Profile />
      <Navbar />
    </>
  );
}
