import Image from "next/image";
import React from "react";
import styles from "@/styles/home.module.scss";

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.heading}>
        <div className={styles["heading-inner"]}>About Me</div>
      </div>
      <div className={styles.content}>
        <div className={styles.img}>
          <div className={styles["img-inner"]}>
            <Image
              src="/assets/images/profile-img.png"
              alt="avatar"
              width={500}
              height={300}
            />
          </div>
        </div>
        <div className={styles.text}>
          <p>
            Hi! I&apos;m <span>Anusree Anilkumar</span>, a
            <span>Full-Stack Developer</span> exploring React, Node.js, Next.js,
            and TypeScript, and constantly refining my craft. From building
            <span> 5+ major projects</span> to experimenting with countless
            mini-projects, I believe every line of code teaches something new.
          </p>
          <p>
            Right now, I&apos;m focused on mastering the technical side, but my
            goal is to build apps with better performance, design, and
            scalability. The journey of learning never stops—there&apos;s always
            room to grow, innovate, and improve.
          </p>
        </div>
      </div>
    </section>
  );
}
