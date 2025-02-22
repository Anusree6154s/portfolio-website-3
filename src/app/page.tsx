"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import "@/styles/welcome.css";

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
    <div className={pathname === "/" ? "welcome" : "display-none"}>
      <div className="welcome-inner">
        <p className="first-name">Anusree</p>
        <p className="last-name">Anilkumar</p>
        {/* <p className="portfolio-text">Portfolio</p> */}
      </div>
      <p className="portfolio-text">Portfolio</p>
      <div className="bg-circle"></div>
    </div>
  );
}
