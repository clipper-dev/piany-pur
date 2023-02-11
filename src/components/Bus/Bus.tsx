import Image from "next/image";
import React from "react";
import styles from "./Bus.module.css";

export default function Bus() {
  return (
    <div className={styles.container}>
      <section data-aos="fade-right">
        <div className={styles.image}>
          <Image
            src={"/res/images/bus.png"}
            alt={`Zachodniopomorskie logo`}
            fill
          />
        </div>
        <div className={styles.right}>
          <div className={styles.zachodniopomorskie}>
            <Image
              src={"/res/images/zach.png"}
              alt={`Zachodniopomorskie logo`}
              fill
            />
          </div>
          <h2>Dotrzemy wszędzie w Zachodniopomorskim 🚐</h2>
        </div>
      </section>
    </div>
  );
}