import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Tools from "./components/Tools";
import Navbar from "./components/Navbar";
import CursorGlow from "./components/CursorGlow";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Tools />
      <Skills />
      <Contact />
      <CursorGlow />
    </main>
  );
}
