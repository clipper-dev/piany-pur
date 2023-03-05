import Image from "next/image";
import React from "react";
import styles from "./Footer.module.css";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  /* refs */
  const emailRef = React.useRef<HTMLInputElement>(null);
  const nameRef = React.useRef<HTMLInputElement>(null);
  const phoneRef = React.useRef<HTMLInputElement>(null);
  const messageRef = React.useRef<HTMLTextAreaElement>(null);

  const [error, setError] = useState(false);

  function isValidEmail(email: string) {
    return /\S+@\S+\.\S+/.test(email);
  }
  function handleEmail(e: any) {
    if (e.target.value.length > 0) {
      setError(!isValidEmail(e.target.value));
    } else {
      setError(false);
    }
    setEmail(e.target.value);
  }
  function handleSubmit(e: any) {
    e.preventDefault();
    const _mail = {
      email: email,
      name: name,
      phone: phone,
      message: message,
    };
    let _error = !isValidEmail(email);
    setError(_error);
    if (_error) {
      alert("Niepoprawny adres email");
    } else {
      /* send email */
      console.log("🚀 ~ file: Footer.tsx:39 ~ handleSubmit ~ _mail:", _mail);
    }
  }
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
          <p>+48 600 370 109</p>
          <p>purspray@gmail.com</p>
          <p>NIP: 8571030470</p>
          <p>REGON: 522255463</p>
        </div>
        <form className={styles.middle}>
          <div className={styles.topForm}>
            <div className={styles.inputField}>
              <div className={styles.label}>Imię:*</div>
              <input
                type="text"
                placeholder="Twoje imię"
                ref={nameRef}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={styles.inputField}>
              <div className={styles.label}>Telefon:*</div>
              <input
                type="text"
                placeholder="Podaj swój numer telefonu"
                ref={phoneRef}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.inputField}>
            <div className={styles.label}>
              {error ? "Email:* email niepoprawny" : "Email:*"}
            </div>
            {/* input field with validation for email */}
            <input
              className={error ? styles.wrong : ""}
              type="text"
              placeholder="Podaj swój adres email"
              ref={emailRef}
              onChange={(e) => handleEmail(e)}
            />
          </div>
          <div className={styles.inputField}>
            <div className={styles.label}>Wiadomość:*</div>
            <textarea
              className={styles.inputLong}
              placeholder="Wprowadź swoją wiadomość"
              ref={messageRef}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            onClick={(e) => handleSubmit(e)}
            className={styles.button}
          >
            Wyślij
          </button>
        </form>
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
