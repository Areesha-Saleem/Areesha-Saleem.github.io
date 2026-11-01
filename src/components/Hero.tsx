import { motion } from "framer-motion";
import { profile } from "../data/profile";
import { useTypewriter } from "../hooks/useTypewriter";
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from "./Icons";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const socials = [
  { href: `mailto:${profile.email}`, label: "Email", Icon: MailIcon },
  { href: profile.linkedin, label: "LinkedIn", Icon: LinkedinIcon, external: true },
  { href: profile.github, label: "GitHub", Icon: GithubIcon, external: true },
  { href: profile.phoneHref, label: "Phone", Icon: PhoneIcon },
];

export default function Hero() {
  const role = useTypewriter(profile.roles);

  return (
    <section id="hero" className="hero">
      <div className="hero-grid" />

      <div className="hero-inner">
        <motion.div className="hero-left" variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="pill">
            <span className="pill-dot" />
            {profile.availability}
          </motion.div>

          <motion.p variants={item} className="hero-greeting">
            Hello, It's Me
          </motion.p>

          <motion.h1 variants={item} className="hero-name">
            <span className="first">{profile.firstName}</span>
            <span className="last">
              {profile.lastName}
              <i className="spark s1" />
              
            </span>
          </motion.h1>

          <motion.div variants={item} className="hero-role">
            <span className="role-line" />
            <span className="role-text">
              <span className="role-typed">{role}</span>
              <span className="caret">|</span>
            </span>
          </motion.div>

          <motion.div variants={item} className="hero-now">
            <span className="now-chip">
              <b>Now</b> {profile.current.role} @ <strong>{profile.current.company}</strong>
            </span>
            <span className="now-chip now-chip-tedx">
              <b>Lead</b> <strong>{profile.leadership}</strong>
            </span>
          </motion.div>

          <motion.p variants={item} className="hero-desc">
            {profile.heroDescription}
          </motion.p>

          <motion.div variants={item} className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects <span aria-hidden>↓</span>
            </a>
            <a href="#contact" className="btn btn-ghost">
              Get In Touch
            </a>
          </motion.div>

          <motion.div variants={item} className="hero-socials">
            {socials.map(({ href, label, Icon, external }) => (
              <a
                key={label}
                href={href}
                title={label}
                aria-label={label}
                className="social-link"
                {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                <Icon />
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="photo-wrap">
            <div className="photo-halo" />
            <div className="photo-frame">
              <div className="photo-clip">
                <img src="/assets/areesha.jpg" alt="Areesha Saleem" />
              </div>
              <span className="photo-shine" />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="hero-scroll">
        Scroll <span className="scroll-track"><span className="scroll-fill" /></span>
      </div>
    </section>
  );
}
