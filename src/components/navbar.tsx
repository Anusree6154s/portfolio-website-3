"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <>
      <nav>
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
    </>
  );
}
