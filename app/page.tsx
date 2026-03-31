import LoadingScreen from "@/components/ui/LoadingScreen";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      {/* ── SECTION ── Loading Screen */}
      <LoadingScreen />

      {/* ── SECTION ── Hero */}
      <Hero />

      {/* ── SECTION ── About */}
      <About />

      {/* ── SECTION ── Skills */}
      <Skills />

      {/* ── SECTION ── Projects */}
      <Projects />

      {/* ── SECTION ── Experience */}
      <Experience />

      {/* ── SECTION ── Contact */}
      <Contact />
    </>
  );
}
