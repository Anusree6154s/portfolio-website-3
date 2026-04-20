"use client";
import { scrollToTopSlow } from "@/app/utils/scroll-to-top";
import "bootstrap-icons/font/bootstrap-icons.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(false);

  return (
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
          // href="https://anusree6154s.github.io/bits-and-bytes/all-posts"
          href="/blog"
        >
          Blog
        </Link>
        <Link
          href="/home"
          className="name"
          onClick={() => {
            setIsActive(false);
            scrollToTopSlow();
          }}
        >
          <p className="first-name">Anusree</p>
          <p className="portfolio-text">Portfolio</p>
        </Link>
        <Link
          className={`resume ${pathname === "/resume" ? "color-green" : ""}`}
          href="/resume"
        >
          Resume
        </Link>
        <Link
          className={`contact ${pathname === "/contact" ? "color-green" : ""}`}
          href="/contact"
        >
          Contact
        </Link>
        <i
          className="bi bi-list hamburger"
          onClick={() => setIsActive(!isActive)}
        ></i>
      </div>
      <div
        className="nav-drawer"
        style={{
          transform: isActive ? "translateY(0%)" : "translateY(-100%)",
          // opacity: isActive ? "1" : "0",
        }}
      >
        <Link
          className={`projects ${pathname === "/home" ? "color-green" : ""}`}
          href="/home"
          onClick={() => setIsActive(false)}
        >
          Home
        </Link>
        <Link
          className={`projects ${
            pathname === "/projects" ? "color-green" : ""
          }`}
          href="/projects"
          onClick={() => setIsActive(false)}
        >
          Projects
        </Link>
        <Link className="blog" href="/blog" onClick={() => setIsActive(false)}>
          Blog
        </Link>

        <Link
          className={`resume ${pathname === "/resume" ? "color-green" : ""}`}
          href="/resume"
          onClick={() => setIsActive(false)}
        >
          Resume
        </Link>
        <Link
          className={`contact ${pathname === "/contact" ? "color-green" : ""}`}
          href="/contact"
          onClick={() => setIsActive(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
