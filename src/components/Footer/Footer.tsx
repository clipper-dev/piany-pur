import Image from "next/image";
import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container} id="kontakt">
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <Image src={"/res/logo.png"} alt={`Purspray logo`} fill />
          </div>
          <h3>POROZMAWIAJMY!</h3>
          <div className={styles.line}></div>
          <p>Purspray</p>
          <p>Arkadiusz Wilk</p>
          <p>NIP: 8571030470</p>
          <p>REGON: 522255463</p>
        </div>
        <div className={styles.middle}>
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
        <div className={styles.right}>
            <div className={styles.zachodniopomorskie}>
              <Image
                src={"/res/images/zach.png"}
                alt={`Zachodniopomorskie logo`}
                fill
                />
              </div>
                <h3>DZIAŁAMY W CAŁYM ZACHODNIOPOMORSKIM</h3>
          </div>
      </div>
    </div>
  );
}
