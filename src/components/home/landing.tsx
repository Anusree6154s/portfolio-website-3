import React from "react";
import Image from "next/image";
import projects from "@/db/projects.json";
import mini_projects from "@/db/mini_projects.json";

export default function Landing() {
  return (
    <section className="landing">
      <div className="heading">
        <div className="heading-inner">
          <div className="title">
            <p className="title-inner">
              <span>Fullstack</span>
              <span>Developer</span>
            </p>
          </div>
          <div className="sub-title">
            <div className="sub-title-inner-1">
              <span className="sub-title-inner-2">
                Code <span className="dot">•</span>
              </span>
            </div>
            <div className="sub-title-inner-1">
              <span className="sub-title-inner-2">
                Build<span className="dot">•</span>
              </span>
            </div>
            <div className="sub-title-inner-1">
              <span className="sub-title-inner-2">
                Deploy<span className="dot">•</span>
              </span>
            </div>
            <div className="sub-title-inner-1">
              <span className="sub-title-inner-2">
                Repeat<span className="dot">•</span>
              </span>
            </div>
          </div>
        </div>
        <div className="tag-line">
          Turning concepts into reality with seamless, optimized solutions,
          designed to fit your needs.
        </div>
      </div>

      <div className="projects-showcase">
        <div className="projects-showcase-inner">
          <div className="track">
            {projects.projects.map((item, i) => (
              <Image
                key={i}
                src={item.image}
                alt="Landscape picture"
                width={300}
                height={300}
              />
            ))}
             {projects.projects.map((item, i) => (
              <Image
                key={i}
                src={item.image}
                alt="Landscape picture"
                width={300}
                height={300}
              />
            ))}
          </div>
          <div className="track">
            {mini_projects.projects.slice(3).map((item, i) => (
              <Image
                key={i}
                src={item.image}
                alt="Landscape picture"
                width={300}
                height={300}
              />
            ))}
            {mini_projects.projects.slice(3).map((item, i) => (
              <Image
                key={i}
                src={item.image}
                alt="Landscape picture"
                width={300}
                height={300}
              />
            ))}
          </div>
          <div className="track">
            {projects.projects.reverse().map((item, i) => (
              <Image
                key={i}
                src={item.image}
                alt="Landscape picture"
                width={300}
                height={300}
              />
            ))}
             {projects.projects.reverse().map((item, i) => (
              <Image
                key={i}
                src={item.image}
                alt="Landscape picture"
                width={300}
                height={300}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
