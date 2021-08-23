import Navbar from "@/components/Navbar";
import Search from "@/features/Search";
import Head from "next/head";

export default function SearchPage() {
  return (
    <>
      <Head>
        <title>Search | Note</title>
      </Head>
      <Search />
      <Navbar />
    </>
  );
}
