import Navbar from "@/components/Navbar";
import FollowRequestsProvider from "@/context/FollowRequestsContext";
import FollowRequests from "@/features/FollowRequests";
import Head from "next/head";

export default function FollowRequestsPage() {
  return (
    <>
      <Head>
        <title>Follow Requests | Poster</title>
      </Head>
      <FollowRequestsProvider>
        <FollowRequests />
      </FollowRequestsProvider>
      <Navbar />
    </>
  );
}
