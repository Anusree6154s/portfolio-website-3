"use client";
import { usePathname } from "next/navigation";
import React from "react";

export default function Welcome() {
  const pathname = usePathname();
  return (
    <div className={pathname === "/" ? "welcome" : "display-none"}>
      <div className="welcome-inner">
        <p className="first-name">Anusree</p>
        <p className="last-name">Anilkumar</p>
        <p className="portfolio-text">Portfolio</p>
      </div>
      <div className="bg-circle"></div>
    </div>
  );
}
