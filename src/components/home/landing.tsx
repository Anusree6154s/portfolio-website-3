import React from "react";
import Image from "next/image";
import projects from "@/db/projects.json";
import mini_projects from "@/db/mini_projects.json";
import styles from "@/styles/home.module.scss";

export default function Landing() {
  return (
    <section className={styles.landing}>
      <div className={styles.heading}>
        <div className={styles["heading-inner"]}>
          <div className={styles.title}>
            <p className={styles["title-inner"]}>
              <span>Fullstack</span>
              <span>Developer</span>
            </p>
          </div>
          <div className={styles["sub-title"]}>
            {["Code", "Build", "Deploy", "Repeat"].map((item, i) => (
              <div className={styles["sub-title-inner-1"]} key={i}>
                <span className={styles["sub-title-inner-2"]}>
                  {item} <span className={styles.dot}>•</span>
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles["tag-line"]}>
          Turning concepts into reality with seamless, optimized solutions,
          designed to fit your needs.
        </div>
      </div>

      <div className={styles["projects-showcase"]}>
        <div className={styles["projects-showcase-inner"]}>
          <div className={styles.track}>
            {projects.projects.map((item, i) => (
              <Image
                key={i}
                src={item.image}
                alt="Landscape picture"
                width={300}
                height={300}
              />
            ))}
            {projects.projects.map((item, i) => (
              <Image
                key={i}
                src={item.image}
                alt="Landscape picture"
                width={300}
                height={300}
              />
            ))}
          </div>
          <div className={styles.track}>
            {mini_projects.projects.slice(3).map((item, i) => (
              <Image
                key={i}
                src={item.image}
                alt="Landscape picture"
                width={300}
                height={300}
              />
            ))}
            {mini_projects.projects.slice(3).map((item, i) => (
              <Image
                key={i}
                src={item.image}
                alt="Landscape picture"
                width={300}
                height={300}
              />
            ))}
          </div>
          <div className={styles.track}>
            {projects.projects.reverse().map((item, i) => (
              <Image
                key={i}
                src={item.image}
                alt="Landscape picture"
                width={300}
                height={300}
              />
            ))}
            {projects.projects.reverse().map((item, i) => (
              <Image
                key={i}
                src={item.image}
                alt="Landscape picture"
                width={300}
                height={300}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
