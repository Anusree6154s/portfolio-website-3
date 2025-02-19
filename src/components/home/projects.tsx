import React from "react";
import Image from "next/image";
import musicApp from "@/assets/images/music-app.png";
import ecommerceApp from "@/assets/images/ecommerce-app.png";
import moviesApp from "@/assets/images/movies-app.png";
import blogApp from "@/assets/images/blog-app.png";

export default function Projects() {
  return (
    <section className="projects">
      <div className="projects-inner">
        <div className="heading-wrapper">
          <div className="heading">
            <div className="heading-inner">Featured </div>
          </div>
          <div className="heading">
            <div className="heading-inner"> Projects</div>
          </div>
        </div>

        <div className="description-wrapper">
          <div className="description">
            <div className="description-inner">
              A collection of projects where ideas take shape through
              code—crafted with curiosity, creativity, and a drive to build
              something new.
            </div>
          </div>
        </div>

        <div className="project-items">
          <div className="heading">
            <div className="title">
              <p className="title-inner">Ecommerce</p>
            </div>
            <div className="techstack">
              <p className="techstack-inner">
                <span>React</span>
                <span>NodeJS</span>
                <span>MongoDB</span>
              </p>
            </div>
          </div>
          <div className="img">
            <div className="img-inner">
              <Image
                src={ecommerceApp}
                alt="Landscape picture"
                layout="intrinsic"
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>
        <div className="project-items">
          <div className="heading">
            <div className="title">
              <p className="title-inner">Music</p>
            </div>
            <div className="techstack">
              <p className="techstack-inner">
                <span>React</span>
                <span>NodeJS</span>
              </p>
            </div>
          </div>
          <div className="img">
            <div className="img-inner">
              <Image
                src={musicApp}
                alt="Landscape picture"
                layout="intrinsic"
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>
        <div className="project-items">
          <div className="heading">
            <div className="title">
              <p className="title-inner">Movies</p>
            </div>
            <div className="techstack">
              <p className="techstack-inner">
                <span>React</span>
                <span>NodeJS</span>
                <span>MongoDB</span>
              </p>
            </div>
          </div>
          <div className="img">
            <div className="img-inner">
              <Image
                src={moviesApp}
                alt="Landscape picture"
                layout="intrinsic"
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>
        <div className="project-items">
          <div className="heading">
            <div className="title">
              <p className="title-inner">Blog</p>
            </div>
            <div className="techstack">
              <p className="techstack-inner">
                <span>Jekyll</span>
                <span>SCSS</span>
              </p>
            </div>
          </div>
          <div className="img">
            <div className="img-inner">
              <Image
                src={blogApp}
                alt="Landscape picture"
                layout="intrinsic"
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
}
