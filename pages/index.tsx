import Navbar from "@/components/Navbar";
import Home from "@/features/Home";
import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home | Poster</title>
      </Head>
      <Home />
      <Navbar />
    </>
  );
}
