import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="contact">
          <div className="list">
            <a title="+91 9699973230" href="tel:+919699973230">
              Phone
            </a>
            <a
              title="anilkumaranusree113@gmail.com"
              href="mailto:anilkumaranusree113@gmail.com"
            >
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
            <a href="http://www.linkedin.com/in/anusreeanilkumar1">Linkedin</a>
            <a href="http://www.x.com/anu6154s">Twitter</a>
            <a href="http://www.github.com/Anusree6154s">Github</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
