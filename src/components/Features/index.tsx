import React from "react";
import styles from "./Features.module.css";
import features from "../../data/features";
import {
  FaMoneyBillWave,
  FaShieldAlt,
  FaThermometerHalf,
} from "react-icons/fa";
import { IoMdSpeedometer } from "react-icons/io";
import { HiSpeakerXMark } from "react-icons/hi2";
import { BsFillDropletFill } from "react-icons/bs";

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
        return <IoMdSpeedometer />;
      case "sound":
        return <HiSpeakerXMark />;
      case "condensation":
        return <BsFillDropletFill />;
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.features}>
        <h2>Co wyróżnia pianowanie Purspray?</h2>
        {features.map((feature, index) => (
          <div key={index} className={styles.feature}>
            <div className={styles.featureHeader}>
              <div className={styles.icon}>{getIcon(feature.icon)}</div>
              <h3>{feature.name}</h3>
            </div>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
