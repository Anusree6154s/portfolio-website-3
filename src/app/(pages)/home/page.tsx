"use client";

import Landing from "@/components/home/landing";
import About from "@/components/home/about";
import Projects from "@/components/home/projects";
import TechStack from "@/components/home/techstack";
import "@/styles/home.css";

export default function Home() {
  return (
    <main id="home">
      <Landing />
      <About />
      <TechStack />
      <Projects />
    </main>
  );
}
