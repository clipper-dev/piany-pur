import "../src/styles/globals.css";
import "../src/styles/coolbiej.css";
import type { AppProps } from "next/app";
import { Navbar } from "../src/components/Navbar";
import { data } from "../src/data/menu";
import Footer from "../src/components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar
        navbarData={data}
        sideBardata={data}
        favicon="/res/logo.png"
        title=""
        phone="+48 664 489 898"
      />
      <Component {...pageProps} />

      <Footer/>
    </>
  );
}

export default MyApp;
