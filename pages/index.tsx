import Head from "next/head";
import styles from "@/styles/Home.module.css";
import LinkButton from "@/components/LinkButton";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="mb-4">Note</h1>

        <LinkButton href="/login" className="bg-blue-500 text-white">
          Login
        </LinkButton>
      </main>
    </div>
  );
}
