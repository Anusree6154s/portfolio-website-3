"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import styles from "@/styles/welcome.module.scss";

export default function Welcome() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/home");
    }, 2500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.welcome}>
      <div className={styles["welcome-inner"]}>
        <p className={styles["first-name"]}>Anusree</p>
        <p className={styles["last-name"]}>Anilkumar</p>
        {/* <p className={styles["portfolio-text"]}>Portfolio</p> */}
      </div>
      <p className={styles["portfolio-text"]}>Portfolio</p>
      <div className={styles["bg-circle"]}></div>
    </div>
  );
}
