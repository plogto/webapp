import Navbar from "@/components/Navbar";
import FollowRequests from "@/features/FollowRequests";
import Head from "next/head";

export default function FollowRequestsPage() {
  return (
    <>
      <Head>
        <title>Follow Requests | Poster</title>
      </Head>
      <FollowRequests />
      <Navbar />
    </>
  );
}
