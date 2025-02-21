"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const [isMounted, setIsMounted] = useState(false);

  // Only run this after hydration is complete
  useEffect(() => {
    // Now it's safe to apply animations
    setIsMounted(true);
  }, []);

  return (
    <>
      {isMounted && (
        <nav
          className={
            pathname === "/"
              ? "animation-slide-up-slow"
              : "animation-slide-up-fast"
          }
        >
          <div className="nav-inner">
            <Link
              className={`projects ${
                pathname === "/projects" ? "color-green" : ""
              }`}
              href="/projects"
            >
              Projects
            </Link>
            <Link
              className="blog"
              href="https://anusree6154s.github.io/documentation/"
            >
              Blog
            </Link>
            <Link href="/#" className="name">
              <p className="first-name">Anusree</p>
              <p className="portfolio-text">Portfolio</p>
            </Link>
            <Link
              className={`resume ${
                pathname === "/resume" ? "color-green" : ""
              }`}
              href="/resume"
            >
              Resume
            </Link>
            <Link
              className={`contact ${
                pathname === "/contact" ? "color-green" : ""
              }`}
              href="/contact"
            >
              Contact
            </Link>
          </div>
        </nav>
      )}
    </>
  );
}
