import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Bus from "../src/components/Bus/Bus";
import Features from "../src/components/Features/Features";
import Hero from "../src/components/Hero/Hero";
import Testimonials from "../src/components/Testimonials/Testimonials";
import { data } from "../src/data/testimonials";
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

        <Hero />
        <Features/>
        <Testimonials testimonials={data}/>
        <Bus/>
    </div>
  );
};

export default Home;
