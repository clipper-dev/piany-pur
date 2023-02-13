import Image from "next/image";
import React from "react";
import styles from "./Bus.module.css";

export default function Bus() {
  return (
    <div className={styles.container}>
      <section>
        <div className={styles.image} data-aos="fade-right">
          <Image
            src={"/res/images/bus.png"}
            alt={`Zachodniopomorskie logo`}
            fill
            style={{objectFit:"cover"}}
          />
        </div>
        <div className={styles.right} data-aos="fade-left">
          {/* <div className={styles.zachodniopomorskie}>
            <Image
              src={"/res/images/zach.png"}
              alt={`Zachodniopomorskie logo`}
              fill
            />
          </div> */}
          <h2>DOTRZEMY WSZĘDZIE W {" "} <span style={{color:"var(--accent)"}}>ZACHODNIOPOMORSKIM</span></h2>
        </div>
      </section>
    </div>
  );
}
