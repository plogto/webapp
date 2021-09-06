import Navbar from "@/components/Navbar";
import ConnectionsProvider from "@/context/ConnectionsContext";
import Connections from "@/features/Connections";
import Head from "next/head";

export default function FollowersPage() {
  return (
    <>
      <Head>
        <title>Followers | Poster</title>
      </Head>
      <ConnectionsProvider>
        <Connections type="followers" />
      </ConnectionsProvider>
      <Navbar />
    </>
  );
}
