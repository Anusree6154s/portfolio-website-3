"use client";
import React from "react";
import "@/styles/resume.css";
import Image from "next/image";
import Link from "next/link";
import techstack from "@/db/techstack.json";
import projects from "@/db/projects.json";
import certificates from "@/db/certificates.json";
import extra_curricular from "@/db/extra_curricular.json";
const profileImg = "/assets/images/profile-img-2.png";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Resume() {
  return (
    <div id="resume" className="resume">
      <div className="resume-inner">
        <div className="sticky">
          <div className="sticky-inner">
            <div className="container">
              <Image src={profileImg} alt="photo" width={500} height={300} />
              <div className="details">
                <p className="name">
                  <span>Anusree Anilkumar</span>
                  <span></span>
                </p>
                <div className="languages">
                  <p className="title">Languages</p>
                  <p className="content">
                    <span>English</span>
                    <span>Hindi</span>
                    <span>Malayalam</span>
                  </p>
                </div>
                <div className="contact">
                  <p className="title">Contact</p>
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
                    <i className="bi bi-envelope"></i>
                    <Link href="tel:9699973230">+91 9699973230</Link>
                  </p>
                </div>
                <div className="socials">
                  <p className="title">Links</p>
                  <div className="content">
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
        <div className="scroll">
          <div className="scroll-inner">
            <div className="intro">
              <p>
                <span className="first">Fullstack</span>
                <span className="last">Developer</span>
              </p>
              <span className="quote">
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
                className="download"
              >
                Download Resume
              </Link>
            </div>

            <div className="skills">
              <p className="title">Skills</p>
              <div className="content">
                <div className="category">
                  <p className="category-name">Frontend</p>
                  <p className="category-items">
                    {techstack.frontend.map((item: string, i: number) => (
                      <span key={i}>{item}</span>
                    ))}
                  </p>
                </div>

                <div className="category">
                  <p className="category-name">Backend</p>
                  <p className="category-items">
                    {techstack.backend.map((item: string, i: number) => (
                      <span key={i}>{item}</span>
                    ))}
                  </p>
                </div>
                <div className="category">
                  <p className="category-name">Tools</p>
                  <p className="category-items">
                    {techstack.tools_and_utilities.map(
                      (item: string, i: number) => (
                        <span key={i}>{item}</span>
                      )
                    )}
                  </p>
                </div>
              </div>
            </div>

            <div className="projects">
              <p className="title">Recent Projects</p>
              <div className="content">
                {projects.projects.slice(0, 5).map((item, i) => (
                  <a href={item.website} key={i} className="items">
                    <div key={i} className="items-inner">
                      <Image
                        src={item.image}
                        alt="photo"
                        width={500}
                        height={300}
                      ></Image>
                      <div className="details">
                        <p className="item-title">{item.title}</p>
                        <p className="item-description">{item.description}</p>
                        <p className="item-techstack">
                          {item.techstack.map((tool: string, i2: number) => (
                            <span key={i2}>{tool}</span>
                          ))}
                        </p>
                      </div>
                      <div className="item-arrow-container">
                        <i className="bi bi-arrow-up-right item-arrow"></i>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="education">
              <p className="title">Education</p>
              <div className="content">
                <div className="content-inner">
                  <i className="bi bi-mortarboard-fill logo"></i>
                  <div className="details">
                    <p>NIT Surat</p>
                    <p className="description">
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

            <div className="certification">
              <p className="title">Certifications</p>
              <div className="content">
                {certificates.certificates.map((item, i3: number) => (
                  <div className="items" key={i3}>
                    <div className="items-inner">
                      <i className="bi bi-patch-check-fill logo"></i>
                      <div className="details">
                        <p>{item.name}</p>
                        <p className="description">
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

            <div className="extra-curricular">
              <p className="title">Activities</p>
              <div className="content">
                {extra_curricular.data.map((item, i3: number) => (
                  <div className="items" key={i3}>
                    <div className="items-inner">
                      <i className="bi bi-flag-fill logo"></i>
                      <div className="details">
                        <p>{item.designation}</p>
                        <p className="description">
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
                          <span className="skills">
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
