import React from "react";
import "@/styles/projects.css";
import projects from "@/db/projects.json";
import mini_projects from "@/db/mini_projects.json";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <div id="projects">
      <div className="projects-inner">
        <div className="major-projects">
          <p className="title">Projects</p>
          <div className="content">
            {projects.projects.map((item, i) => (
              <div className="items" key={i}>
                <div className="items-inner">
                  <Image
                    src={item.image}
                    alt="photo"
                    width={500}
                    height={300}
                  />
                  <div className="overlay">
                    <div className="icons">
                      <Link href={item.website}>
                        <i className="bi bi-eye-fill"></i>
                      </Link>
                      <Link href={item.github}>
                        <i className="bi bi-github"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="details">
                    <p className="title">{item.title}</p>
                    <p className="description">{item.description}</p>
                    <p className="techstack">
                      {item.techstack.map((stack, i2) => (
                        <span key={i2}>{stack}</span>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="minor-projects">
          <p className="title">Mini - Projects</p>
          <div className="content">
            {mini_projects.projects.map((item, i) => (
              <div className="items" key={i}>
                <div className="items-inner">
                  <Image
                    src={item.image}
                    alt="photo"
                    width={500}
                    height={300}
                  />
                  <div className="overlay">
                  <div className="icons">
                      <Link href={item.website}>
                        <i className="bi bi-eye-fill"></i>
                      </Link>
                      <Link href={item.github}>
                        <i className="bi bi-github"></i>
                      </Link>
                    </div>
                  </div>

                  <div className="details">
                    <p className="title">{item.title}</p>
                    <p className="description">{item.description}</p>
                    <p className="techstack">
                      {item.techstack.map((stack, i2) => (
                        <span key={i2}>{stack}</span>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
