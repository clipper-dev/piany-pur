import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Bus from "../src/components/Bus";
import Features from "../src/components/Features";
import Hero from "../src/components/Hero";
import HeroAlt from "../src/components/Hero/HeroAlt";
import Testimonials from "../src/components/Testimonials/Testimonials";
import { data } from "../src/data/testimonials";
import styles from "../src/styles/pages/Home.module.css";

const Home: NextPage = () => {
  return (
    <main className={styles.container}>
      <Head>
        <title>Purspray - Pianowanie Poddaszy</title>
        <meta
          name="description"
          content="Pianowanie Pur, ocieplanie poddaszy metodą pianową"
        />
        <link rel="icon" href="/logo.png" />
      </Head>

        <HeroAlt />
        <Features/>
        <Testimonials testimonials={data}/>
        <Bus/>
    </main>
  );
};

export default Home;
