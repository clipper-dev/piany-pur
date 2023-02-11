import Image from "next/image";
import React from "react";
import { FaFacebookMessenger } from "react-icons/fa";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <header className={styles.container} id="home">
      <section>
        <article className={styles.content}>
          <h1>OCIEPLANIE PIANĄ PUR</h1>
          <p>
            Nasza niezawodna izolacja pianą PUR to świetne rozwiązanie, jeśli
            chcesz oszczędzać pieniądze i stworzyć ciepłe, przytulne i zdrowe
            środowisko w domu.
          </p>
          <ul>
            <li>Efektywna izolacja</li>
            <li>Oszczędność pieniędzy</li>
            <li>Wysoka trwałość</li>
          </ul>
          <button className={styles.button}>
            Napisz do nas <FaFacebookMessenger />
          </button>
        </article>
        <div className={styles.imageWrapper}>
          <div className={styles.image}>
            <Image
              style={{ objectFit: "cover" }}
              src="/res/images/d2.png"
              fill
              alt="Pianownaie poddaszy pianą PUR"
            />
          </div>
        </div>
      </section>
    </header>
  );
}