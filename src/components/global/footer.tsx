"use client";
import React from "react";
import { contact, socials } from "@/db/personal_info.json";
import { scrollToTopSlow } from "@/app/utils/scroll-to-top";
import Link from "next/link";
import Tooltip from "@/components/global/tooltip";

export default function Footer() {

  return (
    <footer>
      {/* {isMounted && ( */}
      <div className="footer-inner">
        <div className="contact">
          <div className="list">
            <Tooltip text={contact.number.text}>
              <Link href={contact.number.url}>Phone</Link>
            </Tooltip>

            <Tooltip text={contact.email.text}>
              <Link href={contact.email.url}>Email</Link>
            </Tooltip>
          </div>
        </div>
        <Link href="/home" className="brand" onClick={scrollToTopSlow}>
          <p className="first-name">Anusree</p>
          <p className="portfolio">Portfolio</p>
          <p className="last-name">Anilkumar</p>
        </Link>
        <div className="socials">
          <div className="list">
            <Link href={socials.linkedin}>Linkedin</Link>
            <Link href={socials.twitter}>Twitter</Link>
            <Link href={socials.github}>Github</Link>
          </div>
        </div>
      </div>
      {/* )} */}
    </footer>
  );
}
