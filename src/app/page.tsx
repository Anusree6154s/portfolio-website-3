"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import styles from "@/styles/welcome.module.scss";

export default function Welcome() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/home");
    }, 2500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={pathname === "/" ? styles.welcome : styles["display-none"]}>
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
