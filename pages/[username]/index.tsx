import Navbar from "@/components/Navbar";
import ProfileProvider from "@/context/UserProfileContext";
import Profile from "@/features/Profile";
import Head from "next/head";

export default function ProfilePage() {
  return (
    <>
      <Head>
        <title>Profile | Poster</title>
      </Head>
      <ProfileProvider>
        <Profile />
      </ProfileProvider>
      <Navbar />
    </>
  );
}
