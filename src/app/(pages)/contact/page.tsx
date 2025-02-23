import React from "react";
import styles from "@/styles/contact.module.scss";
import Link from "next/link";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Contact() {
  return (
    <div id="contact" className={styles.contact}>
      <div className={styles["contact-inner"]}>
        <div className={styles.hardcoded}>
          <div className={styles.title}>
            <p>Looking to start a project? </p>
            <p>Feel free to contact me.</p>
          </div>
          <div className={styles.details}>
            <p>
            <i className="bi bi-geo-alt"></i>

              <span>Surat, Gujarat, India</span>
            </p>
            <p>
            <i className="bi bi-envelope"></i>

              <Link href="mailto:anilkumaranusree113@gmail.com">
                anilkumaranusree113@gmail.com
              </Link>
            </p>
            <p>
            <i className="bi bi-telephone"></i>
              <Link href="tel:9699973230">+91 9699973230</Link>
            </p>
          </div>
        </div>
        <div className={styles.form}>
          <div className={styles.top}>
            <input type="text" placeholder="Enter Name" />
            <input type="text" placeholder="Enter Email" />
          </div>
          <textarea placeholder="Enter Message" className={styles.message} />
          <button>Send</button>
        </div>
      </div>
    </div>
  );
}
