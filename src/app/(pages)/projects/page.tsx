import React from "react";
import styles from "@/styles/projects.module.scss";
import projects from "@/db/projects.json";
import mini_projects from "@/db/mini_projects.json";
import Image from "next/image";
import Link from "next/link";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Projects() {
  return (
    <div className={styles.projects}>
      <div className={styles["projects-inner"]}>
        <div className={styles["major-projects"]}>
          <p className={styles.title}>Projects</p>
          <div className={styles.content}>
            {projects.projects.map((item, i) => (
              <div className={styles.items} key={i}>
                <div className={styles["items-inner"]}>
                  <Image
                    src={item.image}
                    alt="photo"
                    width={500}
                    height={300}
                  />
                  {/* <div className={styles.overlay}>
                    <div className={styles.icons}>
                      <Link href={item.website}>
                        <i className="bi bi-eye-fill"></i>
                      </Link>
                      <Link href={item.github}>
                        <i className="bi bi-github"></i>
                      </Link>
                    </div>
                  </div> */}
                  <div className={styles.details}>
                    <p className={styles.title}>{item.title}</p>
                    <p className={styles.description}>{item.description}</p>
                    <p className={styles.techstack}>
                      {item.techstack.map((stack, i2) => (
                        <span key={i2}>{stack}</span>
                      ))}
                    </p>
                  
                  </div>

                  <div className={styles.buttons}>
                      <Link href={item.website}>View Website</Link>
                      <Link href={item.github}>View Code</Link>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles["minor-projects"]}>
          <p className={styles.title}>Mini - Projects</p>
          <div className={styles.content}>
            {mini_projects.projects.map((item, i) => (
              <div className={styles.items} key={i}>
                <div className={styles["items-inner"]}>
                  <Image
                    src={item.image}
                    alt="photo"
                    width={500}
                    height={300}
                  />

                  <div className={styles.details}>
                    <p className={styles.title}>{item.title}</p>
                    <p className={styles.description}>{item.description}</p>
                    <p className={styles.techstack}>
                      {item.techstack.map((stack, i2) => (
                        <span key={i2}>{stack}</span>
                      ))}
                    </p>
                   
                  </div>

                  <div className={styles.buttons}>
                      <Link href={item.website}>View Website</Link>
                      <Link href={item.github}>View Code</Link>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
