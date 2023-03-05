import Image from "next/image";
import React from "react";
import { HiChatBubbleOvalLeft } from "react-icons/hi2";
import styles from "./HeroAlt.module.css";

export default function HeroAlt() {
  return (
    <header className={styles.container} id="home">
      <article className={styles.content}>
        <div className={styles.header}>
          <h2>Autoryzowany wykonawca </h2>
          <Image
            src="/res/images/cels-logo.svg"
            height={30}
            width={100}
            alt=""
          />
        </div>
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
        <button
          className={styles.button}
          onClick={(e) => {
            e.preventDefault();
            document.querySelector(`#${"kontakt"}`)?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          Napisz do nas <HiChatBubbleOvalLeft />
        </button>
      </article>
      <div className={styles.imageWrapper}>
        <div className={styles.image}>
          <Image
            style={{ objectFit: "cover" }}
            src="/res/images/dom1.webp"
            placeholder="blur"
            blurDataURL="/res/images/dom1-temp.webp"
            fill
            alt="Pianownaie poddaszy pianą PUR"
          />
        </div>
      </div>
    </header>
  );
}
