import Navbar from "@/components/Navbar";
import ConnectionsProvider from "@/context/ConnectionsContext";
import Connections from "@/features/Connections";
import Head from "next/head";

export default function FollowingPage() {
  return (
    <>
      <Head>
        <title>Following | Poster</title>
      </Head>
      <ConnectionsProvider>
        <Connections type="following" />
      </ConnectionsProvider>
      <Navbar />
    </>
  );
}
