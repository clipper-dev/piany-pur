import Image from "next/image";
import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <Image src={"/res/logo.png"} alt={`Purspray logo`} fill />
          </div>
          <h3>SKONTAKTUJ SIĘ Z NAMI</h3>
          <p>ul. Kolejowa 1</p>
          <p>32-600 Krosno</p>
          <p>tel. 500 500 500</p>
        </div>
        <div className={styles.right}>
          <div className={styles.topForm}>
            <div className={styles.inputField}>
              <div className={styles.label}>Imię:*</div>
              <input type="text" placeholder="Twoje imię" />
            </div>
            <div className={styles.inputField}>
              <div className={styles.label}>Telefon:*</div>
              <input type="text" placeholder="Podaj swój numer telefonu" />
            </div>
          </div>
          <div className={styles.inputField}>
            <div className={styles.label}>Email:*</div>
            <input type="text" placeholder="Podaj swój adres email" />
          </div>
          <div className={styles.inputField}>
            <div className={styles.label}>Wiadomość:*</div>
            <textarea
              className={styles.inputLong}
              placeholder="Wprowadź swoją wiadomość"
            />
          </div>
          <button className={styles.button}>Wyślij</button>
        </div>
      </div>
    </div>
  );
}
