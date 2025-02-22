import React from "react";
import techstackData from "@/db/techstack.json";
import styles from "@/styles/home.module.scss";

export default function TechStack() {
  return (
    <section className={styles.techstack}>
      <div className={styles["techstack-inner"]}>
        <div className={styles.track}>
          {techstackData.frontend.map((item, i) => (
            <div key={i}>
              <span>{item}</span>
              <span className={styles.diamond}>●</span>
            </div>
          ))}
        </div>
        <div className={styles.track}>
          {techstackData.backend.map((item, i) => (
            <div key={i}>
              <span>{item}</span>
              <span className={styles.diamond}>●</span>
            </div>
          ))}
        </div>
        <div className={styles.track}>
          {techstackData.tools_and_utilities.map((item, i) => (
            <div key={i}>
              <span>{item}</span>
              <span className={styles.diamond}>●</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
