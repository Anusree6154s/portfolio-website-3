import React from "react";
import Image from "next/image";

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
            <Image
              src="https://github.com/user-attachments/assets/7558c916-e7df-4c9d-aa39-92d3e48f8f2d"
              alt="Landscape picture"
              layout="intrinsic"
              width={500}
              height={300}
            />
            <Image
              src="https://github.com/user-attachments/assets/b2f2957b-28b4-493e-b960-ed13aa7bee9b"
              alt="Landscape picture"
              layout="intrinsic"
              width={500}
              height={300}
            />

            <Image
              src="https://github.com/user-attachments/assets/7558c916-e7df-4c9d-aa39-92d3e48f8f2d"
              alt="Landscape picture"
              layout="intrinsic"
              width={500}
              height={300}
            />

            <Image
              src="https://github.com/user-attachments/assets/b2f2957b-28b4-493e-b960-ed13aa7bee9b"
              alt="Landscape picture"
              layout="intrinsic"
              width={500}
              height={300}
            />
          </div>
          <div className="track">
            <Image
              src="https://github.com/user-attachments/assets/68b07401-b2e6-4ebe-b2bc-ad1ce996c957"
              alt="Landscape picture"
              layout="intrinsic"
              width={500}
              height={300}
            />
            <Image
              src="https://github.com/user-attachments/assets/07637b53-e1b4-4a6e-86f4-a837ffa589bf"
              alt="Landscape picture"
              layout="intrinsic"
              width={500}
              height={300}
            />
            <Image
              src="https://github.com/user-attachments/assets/68b07401-b2e6-4ebe-b2bc-ad1ce996c957"
              alt="Landscape picture"
              layout="intrinsic"
              width={500}
              height={300}
            />
            <Image
              src="https://github.com/user-attachments/assets/07637b53-e1b4-4a6e-86f4-a837ffa589bf"
              alt="Landscape picture"
              layout="intrinsic"
              width={500}
              height={300}
            />
             <Image
              src="https://github.com/user-attachments/assets/68b07401-b2e6-4ebe-b2bc-ad1ce996c957"
              alt="Landscape picture"
              layout="intrinsic"
              width={500}
              height={300}
            />
          </div>
          <div className="track">
            <Image
              src="https://github.com/user-attachments/assets/ebe87c30-8a19-496f-af77-29b552b0bdb6"
              alt="Landscape picture"
              layout="intrinsic"
              width={500}
              height={300}
            />
            <Image
              src="https://github.com/user-attachments/assets/01e12f26-2bd5-4ed2-80a5-bcefa74f9f80"
              alt="Landscape picture"
              layout="intrinsic"
              width={500}
              height={300}
            />
            <Image
              src="https://github.com/user-attachments/assets/ebe87c30-8a19-496f-af77-29b552b0bdb6"
              alt="Landscape picture"
              layout="intrinsic"
              width={500}
              height={300}
            />
            <Image
              src="https://github.com/user-attachments/assets/01e12f26-2bd5-4ed2-80a5-bcefa74f9f80"
              alt="Landscape picture"
              layout="intrinsic"
              width={500}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
