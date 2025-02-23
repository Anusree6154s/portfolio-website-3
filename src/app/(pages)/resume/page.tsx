"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import techstack from "@/db/techstack.json";
import projects from "@/db/projects.json";
import certificates from "@/db/certificates.json";
import extra_curricular from "@/db/extra_curricular.json";
const profileImg = "/assets/images/profile-img-2.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "@/styles/resume.module.scss";

export default function Resume() {
  return (
    <div id="resume" className={styles.resume}>
      <div className={styles["resume-inner"]}>
        <div className={styles.sticky}>
          <div className={styles["sticky-inner"]}>
            <div className={styles.container}>
              <Image src={profileImg} alt="photo" width={500} height={300} />
              <div className={styles.details}>
                <p className={styles.name}>
                  <span>Anusree Anilkumar</span>
                  <span></span>
                </p>
                <div className={styles.languages}>
                  <p className={styles.title}>Languages</p>
                  <p className={styles.content}>
                    <span>English</span>
                    <span>Hindi</span>
                    <span>Malayalam</span>
                  </p>
                </div>
                <div className={styles.contact}>
                  <p className={styles.title}>Contact</p>
                  <p>
                    <i className="bi bi-geo-alt"></i>
                    <span>Surat, Gujarat, India</span>
                  </p>
                  <p>
                    <i className="bi bi-envelope"></i>

                    <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=anilkumaranusree113@gmail.com">
                      anilkumaranusree113@gmail.com
                    </Link>
                  </p>
                  <p>
                    <i className="bi bi-telephone"></i>
                    <Link href="tel:9699973230">+91 9699973230</Link>
                  </p>
                </div>
                <div className={styles.socials}>
                  <p className={styles.title}>Links</p>
                  <div className={styles.content}>
                    <Link href="https://www.linkedin.com/in/anusreeanilkumar1/">
                      <i className="bi bi-linkedin"></i>
                    </Link>
                    <Link href="https://github.com/Anusree6154s">
                      <i className="bi bi-github"></i>
                    </Link>
                    <Link href="https://x.com/anu6154s">
                      <i className="bi bi-twitter-x"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.scroll}>
          <div className={styles["scroll-inner"]}>
            <div className={styles.intro}>
              <p>
                <span className={styles.first}>Fullstack</span>
                <span className={styles.last}>Developer</span>
              </p>
              <span className={styles.quote}>
                <span>
                  Creating web applications that are functional, efficient, and
                  impactful.
                </span>
                <span>
                  I&apos;m a Full Stack Developer, learning advanced MERN stack,
                  including React, Redux, Express, MongoDB, Jest with a sprinkle
                  of Next.js and TypeScript.
                </span>
              </span>
              <Link
                href="https://drive.google.com/file/d/1Y8_r1SKBmwClHUr-pszQpEmI3XLBEbTO/view?usp=sharing"
                className={styles.download}
              >
                Download Resume
              </Link>
            </div>

            <div className={styles.skills}>
              <p className={styles.title}>Skills</p>
              <div className={styles.content}>
                <div className={styles.category}>
                  <p className={styles["category-name"]}>Frontend</p>
                  <p className={styles["category-items"]}>
                    {techstack.frontend.map((item: string, i: number) => (
                      <span key={i}>{item}</span>
                    ))}
                  </p>
                </div>

                <div className={styles.category}>
                  <p className={styles["category-name"]}>Backend</p>
                  <p className={styles["category-items"]}>
                    {techstack.backend.map((item: string, i: number) => (
                      <span key={i}>{item}</span>
                    ))}
                  </p>
                </div>
                <div className={styles.category}>
                  <p className={styles["category-name"]}>Tools</p>
                  <p className={styles["category-items"]}>
                    {techstack.tools_and_utilities.map(
                      (item: string, i: number) => (
                        <span key={i}>{item}</span>
                      )
                    )}
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.projects}>
              <p className={styles.title}>Recent Projects</p>
              <div className={styles.content}>
                {projects.projects.slice(0, 5).map((item, i) => (
                  <a href={item.website} key={i} className={styles.items}>
                    <div key={i} className={styles["items-inner"]}>
                      <Image
                        src={item.image}
                        alt="photo"
                        width={500}
                        height={300}
                      ></Image>
                      <div className={styles.details}>
                        <p className={styles["item-title"]}>{item.title}</p>
                        <p className={styles["item-description"]}>
                          {item.description}
                        </p>
                        <p className={styles["item-techstack"]}>
                          {item.techstack.map((tool: string, i2: number) => (
                            <span key={i2}>{tool}</span>
                          ))}
                        </p>
                      </div>
                      <div className={styles["item-arrow-container"]}>
                        <i
                          className={`bi bi-arrow-up-right ${styles["item-arrow"]}`}
                        ></i>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className={styles.education}>
              <p className={styles.title}>Education</p>
              <div className={styles.content}>
                <div className={styles["content-inner"]}>
                  <i className={`bi bi-mortarboard-fill ${styles.logo}`}></i>
                  <div className={styles.details}>
                    <p>NIT Surat</p>
                    <p className={styles.description}>
                      <span>
                        <i className="bi bi-calendar4"></i>
                        Aug 2019 - May 2023
                      </span>
                      <span>
                        <i className="bi bi-book"></i>
                        Btech - Electrical Engineering
                      </span>
                      <span>
                        <i className="bi bi-geo-alt"></i>
                        Surat, Gujarat, India
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.certification}>
              <p className={styles.title}>Certifications</p>
              <div className={styles.content}>
                {certificates.certificates.map((item, i3: number) => (
                  <div className={styles.items} key={i3}>
                    <div className={styles["items-inner"]}>
                      <i
                        className={`bi bi-patch-check-fill ${styles.logo}`}
                      ></i>
                      <div className={styles.details}>
                        <p>{item.name}</p>
                        <p className={styles.description}>
                          <span>
                            <i className="bi bi-calendar4"></i>
                            {item.start_date} - {item.end_date}
                          </span>
                          <span>
                            <i className="bi bi-bank"></i>
                            {item.institute}
                          </span>
                          <span>
                            <i className="bi bi-geo-alt"></i>
                            {item.location}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles["extra-curricular"]}>
              <p className={styles.title}>Activities</p>
              <div className={styles.content}>
                {extra_curricular.data.map((item, i3: number) => (
                  <div className={styles.items} key={i3}>
                    <div className={styles["items-inner"]}>
                      <i className={`bi bi-flag-fill ${styles.logo}`}></i>
                      <div className={styles.details}>
                        <p>{item.designation}</p>
                        <p className={styles.description}>
                          <span>
                            <i className="bi bi-calendar4"></i>
                            {item.start_date} - {item.end_date}
                          </span>
                          <span>
                            <i className="bi bi-bank"></i>
                            {item.institute}
                          </span>
                          <span>
                            <i className="bi bi-geo-alt"></i>
                            {item.location}
                          </span>
                          <span className={styles.skills}>
                            {item.skills.map((skill, i) => (
                              <span key={i}>{skill}</span>
                            ))}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
