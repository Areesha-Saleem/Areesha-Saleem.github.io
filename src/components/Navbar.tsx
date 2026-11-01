import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { profile } from "../data/profile";
import { useActiveSection } from "../hooks/useActiveSection";

export const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;

const IDS = ["hero", ...NAV_ITEMS.map((n) => n.id), "certs", "achievements"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(IDS);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.div className="progress" style={{ scaleX: progress }} />
      <nav className={`navbar ${scrolled ? "is-scrolled" : ""}`}>
        <a href="#hero" className="nav-logo" onClick={() => setOpen(false)}>
          <span className="nav-logo-star">✦</span> {profile.name}
        </a>

        <ul className={`nav-links ${open ? "is-open" : ""}`}>
          {NAV_ITEMS.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                className={active === n.id ? "is-active" : ""}
                onClick={() => setOpen(false)}
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="btn btn-primary btn-sm nav-cta">
          Hire Me
        </a>

        <button
          className={`nav-burger ${open ? "is-open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
    </>
  );
}
