import React from "react";
import styles from "./Features.module.css";
import features from "../../data/features";
import {
  FaBolt,
  FaMoneyBillWave,
  FaShieldAlt,
  FaThermometerHalf,
} from "react-icons/fa";
import { IoMdSpeedometer } from "react-icons/io";
import { HiHeart, HiOutlineMusicalNote, HiSpeakerXMark } from "react-icons/hi2";
import { BsFillDropletFill } from "react-icons/bs";
import { GiRabbitHead } from "react-icons/gi";

export default function Features() {
  function getIcon(icon: string) {
    switch (icon) {
      case "money":
        return <FaMoneyBillWave />;
      case "thermometer":
        return <FaThermometerHalf />;
      case "life":
        return <FaShieldAlt />;
      case "fast":
        return <FaBolt />;
      case "sound":
        return <HiSpeakerXMark />;
      case "condensation":
        return <BsFillDropletFill />;
        case "rat":
          return <GiRabbitHead />;
            case "health":
              return <HiHeart />;
    }
  }
  return (
    <div className={styles.container} id="oferta">
      <section>
        <h2>CO WYRÓŻNIA IZOLACJĘ PIANĄ PUR?</h2>
        <div className={styles.features} >
          {features.map((feature, index) => (
            <div key={index} className={styles.feature} data-aos="fade-right">
              <div className={styles.featureHeader}>
                <div className={styles.icon}>{getIcon(feature.icon)}</div>
                <h3>{feature.name}</h3>
              </div>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
