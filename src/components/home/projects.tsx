import React from "react";
import Image from "next/image";
import styles from "@/styles/home.module.scss";
import Link from "next/link";

export default function Projects() {
  const featuredProjects = [
    {
      name: "Ecommerce",
      techstack: ["React", "NodeJS", "MongoDB"],
      link: "https://ebazar-fullstack.vercel.app/home",
      image: "/assets/images/projects/ecommerce-app.png",
    },
    {
      name: "Music",
      techstack: ["React", "NodeJS", "Material UI"],
      link: "https://qtify-ten-gamma.vercel.app/",
      image: "/assets/images/projects/music-app.png",
    },
    {
      name: "Movies",
      techstack: ["React", "NodeJS", "MongoDB"],
      link: "https://xflix-frontend-hazel.vercel.app/",
      image: "/assets/images/projects/movies-app.png",
    },
    {
      name: "Blog",
      techstack: ["Jekyll", "SCSS", "Github Pages"],
      link: "https://anusree6154s.github.io/bits-and-bytes/",
      image: "/assets/images/projects/blog-app.png",
    },
  ];

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
             A collection of projects where ideas are explored through code, built to sharpen skills, experiment with different stacks, and create cleaner, better systems along the way.
            </div>
          </div>
        </div>
        {featuredProjects.map((item, i) => (
          <div key={i} className={styles["project-items"]}>
            <Link href={item.link} target="_blank" className={styles.link} />
            <div className={styles.heading}>
              <div className={styles.title}>
                <p className={styles["title-inner"]}>{item.name}</p>
              </div>
              <div className={styles.techstack}>
                <p className={styles["techstack-inner"]}>
                  {item.techstack.map((stack, i2) => (
                    <span key={i2}>{stack}</span>
                  ))}
                </p>
              </div>
            </div>
            <div className={styles.img}>
              <div className={styles["img-inner"]}>
                <Link href={item.link}>
                  <Image
                    src={item.image}
                    alt="Landscape picture"
                    width={500}
                    height={300}
                  />
                </Link>
              </div>
            </div>
            <Link href={item.link} className={styles["view-button"]}>
              View Website
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
