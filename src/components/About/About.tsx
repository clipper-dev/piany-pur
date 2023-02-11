import React from "react";
import { FaFacebookMessenger } from "react-icons/fa";
import Button from "../Button/Button";
import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <section>
        <div className={styles.about} data-aos="fade-left">
          <h2>
            Zajmiemy się Twoją{" "}
            <span style={{ color: "var(--accent)" }}>izolacją,</span>{" "}
            profesjonalnie
          </h2>
          <p>
            Jesteśmy doświadczoną firmą specjalizującą się w izolacjach pianą
            natryskową. Nasze usługi izolacyjne są wykonywane z użyciem
            najnowocześniejszych narzędzi i technik, aby zapewnić doskonałą
            izolację dla Twojego domu lub biznesu.
          </p>
          <p className={"hide-1000"}> Nasza ekipa składa się z
            wykwalifikowanych i doświadczonych profesjonalistów, którzy zawsze
            dbają o jakość swojej pracy i zadowolenie klienta. Zaufaj nam i
            zwiększ komfort i wydajność swojego budynku dzięki naszym usługom
            izolacyjnym.</p>
          <span>
          <button className={styles.button} onClick={(e) => {
                        e.preventDefault();
                        document
                          .querySelector(`#${"kontakt"}`)
                          ?.scrollIntoView({
                            behavior: "smooth",
                          });
                      }}>
            Napisz do nas <FaFacebookMessenger />
          </button>
          </span>
        </div>
      </section>
    </div>
  );
}
