import Navbar from "@/components/Navbar";
import Notifications from "@/features/Notifications";
import Head from "next/head";

export default function NotificationsPage() {
  return (
    <>
      <Head>
        <title>Notifications | Poster</title>
      </Head>
      <Notifications />
      <Navbar />
    </>
  );
}
