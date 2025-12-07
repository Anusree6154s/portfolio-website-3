"use client";
import React from "react";
import { contact, socials } from "@/db/personal_info.json";

export default function Footer() {
  // const [isMounted, setIsMounted] = useState(false);

  // // Only run this after hydration is complete
  // useEffect(() => {
  //   setIsMounted(true);
  // }, []);

  return (
    <footer>
      {/* {isMounted && ( */}
      <div className="footer-inner">
        <div className="contact">
          <div className="list">
            <a title={contact.number.text} href={contact.number.url}>
              Phone
            </a>
            <a title={contact.email.text} href={contact.email.url}>
              Email
            </a>
          </div>
        </div>
        <a href="#" className="brand">
          <p className="first-name">Anusree</p>
          <p className="portfolio">Portfolio</p>
          <p className="last-name">Anilkumar</p>
        </a>
        <div className="socials">
          <div className="list">
            <a href={socials.linkedin}>Linkedin</a>
            <a href={socials.twitter}>Twitter</a>
            <a href={socials.github}>Github</a>
          </div>
        </div>
      </div>
      {/* )} */}
    </footer>
  );
}
