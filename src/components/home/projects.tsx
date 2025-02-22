import React from "react";
import Image from "next/image";
import styles from "@/styles/home.module.scss";

export default function Projects() {
  return (
    <section className={styles.projects}>
      <div className={styles["projects-inner"]}>
        <div className={styles["heading-wrapper"]}>
          <div className={styles.heading}>
            <div className={styles["heading-inner"]}>Featured </div>
          </div>
          <div className={styles.heading}>
            <div className={styles["heading-inner"]}> Projects</div>
          </div>
        </div>

        <div className={styles["description-wrapper"]}>
          <div className={styles.description}>
            <div className={styles["description-inner"]}>
              A collection of projects where ideas take shape through
              code—crafted with curiosity, creativity, and a drive to build
              something new.
            </div>
          </div>
        </div>

        <div className={styles["project-items"]}>
          <div className={styles.heading}>
            <div className={styles.title}>
              <p className={styles["title-inner"]}>Ecommerce</p>
            </div>
            <div className={styles.techstack}>
              <p className={styles["techstack-inner"]}>
                <span>React</span>
                <span>NodeJS</span>
                <span>MongoDB</span>
              </p>
            </div>
          </div>
          <div className={styles.img}>
            <div className={styles["img-inner"]}>
              <Image
                src="/assets/images/projects/ecommerce-app.png"
                alt="Landscape picture"
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>
        <div className={styles["project-items"]}>
          <div className={styles.heading}>
            <div className={styles.title}>
              <p className={styles["title-inner"]}>Music</p>
            </div>
            <div className={styles.techstack}>
              <p className={styles["techstack-inner"]}>
                <span>React</span>
                <span>NodeJS</span>
              </p>
            </div>
          </div>
          <div className={styles.img}>
            <div className={styles["img-inner"]}>
              <Image
                src="/assets/images/projects/music-app.png"
                alt="Landscape picture"
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>
        <div className={styles["project-items"]}>
          <div className={styles.heading}>
            <div className={styles.title}>
              <p className={styles["title-inner"]}>Movies</p>
            </div>
            <div className={styles.techstack}>
              <p className={styles["techstack-inner"]}>
                <span>React</span>
                <span>NodeJS</span>
                <span>MongoDB</span>
              </p>
            </div>
          </div>
          <div className={styles.img}>
            <div className={styles["img-inner"]}>
              <Image
                src="/assets/images/projects/movies-app.png"
                alt="Landscape picture"
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>
        <div className={styles["project-items"]}>
          <div className={styles.heading}>
            <div className={styles.title}>
              <p className={styles["title-inner"]}>Blog</p>
            </div>
            <div className={styles.techstack}>
              <p className={styles["techstack-inner"]}>
                <span>Jekyll</span>
                <span>SCSS</span>
              </p>
            </div>
          </div>
          <div className={styles.img}>
            <div className={styles["img-inner"]}>
              <Image
                src="/assets/images/projects/blog-app.png"
                alt="Landscape picture"
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
}
