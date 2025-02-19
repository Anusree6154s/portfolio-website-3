import React from "react";
import techstackData from "@/db/techstack.json";

export default function TechStack() {
  return (
    <section className="techstack">
      <div className="techstack-inner">
        <div className="track">
          {techstackData.frontend.map((item, i) => (
            <div key={i}>
              <span>{item}</span>
              <span className="diamond">●</span>
            </div>
          ))}
        </div>
        <div className="track">
          {techstackData.backend.map((item, i) => (
            <div key={i}>
              <span>{item}</span>
              <span className="diamond">●</span>
            </div>
          ))}
        </div>
        <div className="track">
          {techstackData.tools_and_utilities.map((item, i) => (
            <div key={i}>
              <span>{item}</span>
              <span className="diamond">●</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
