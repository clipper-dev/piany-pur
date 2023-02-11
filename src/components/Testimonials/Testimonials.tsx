import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { Testimonial } from "../../types/types";
import styles from "./Testimonials.module.css";

interface Props {
  testimonials: Testimonial[];
}
export default function Testimonials({ testimonials }: Props) {
  return (
    <div className={styles.container} id={"opinie"}>
      <section>
        <h2>ZADOWOLENI KLIENCI</h2>
        <div className={styles.testimonials}>
          {testimonials.map((testimonial, key) => (
            <div key={key} className={styles.testimonial}>
              <FaQuoteLeft className={styles.quote}/>
              {testimonial.description}
              <div className={styles.footer}>
                <div className={styles.author}>{testimonial.name}</div>
                <div className={styles.company}>{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
