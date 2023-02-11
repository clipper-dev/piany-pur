import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Bus from "../src/components/Bus";
import Features from "../src/components/Features";
import Hero from "../src/components/Hero";
import styles from "../src/styles/pages/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Purspray - Pianowanie Poddaszy</title>
        <meta
          name="description"
          content="Pianowanie Pur, ocieplanie poddaszy metodą pianową"
        />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main className={styles.main}>
        <Hero />
        <Features/>
        <Bus/>
      </main>
    </div>
  );
};

export default Home;
