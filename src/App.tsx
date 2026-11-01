import About from "./components/About";
import Contact from "./components/Contact";
import { Achievements, Certifications, Education } from "./components/Credentials";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Glitter from "./components/Glitter";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  return (
    <>
      <div className="bg-layer" aria-hidden="true" />
      <Glitter />
      <Navbar />

      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Education />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
