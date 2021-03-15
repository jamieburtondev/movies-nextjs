import Head from "next/head";
import styles from "../styles/Home.module.css";

import Search from '../components/search';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Movies Project
        </h1>
        <Search />
      </main>
    </div>
  );
}
