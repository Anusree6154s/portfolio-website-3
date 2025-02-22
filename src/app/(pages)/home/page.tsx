import Landing from "@/components/home/landing";
import About from "@/components/home/about";
import Projects from "@/components/home/projects";
import TechStack from "@/components/home/techstack";
import styles from "@/styles/home.module.scss";

export default function Home() {
  return (
    <main className={styles.home}>
      <Landing />
      <About />
      <TechStack />
      <Projects />
    </main>
  );
}
