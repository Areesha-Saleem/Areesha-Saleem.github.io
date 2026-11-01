import { profile } from "../data/profile";
import { ArrowUpRight } from "./Icons";
import Reveal from "./Reveal";
import Section from "./Section";

const links = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "LinkedIn", value: "linkedin.com/in/areeshaasaleem", href: profile.linkedin, external: true },
  { label: "GitHub", value: "github.com/Areesha-Saleem", href: profile.github, external: true },
  { label: "Phone", value: profile.phone, href: profile.phoneHref },
];

export default function Contact() {
  return (
    <Section id="contact" num="08" label="Contact" title="Let's" accent="Connect">
      <div className="contact-inner">
        <Reveal from="left" delay={0.1} className="contact-text">
          <p>
            Open to freelance projects, remote work, and exciting opportunities in AI automation,
            data engineering and marketing-intelligence tooling.
          </p>
          <p>
            Whether you have a workflow to automate, a dataset to analyse, or an idea to build —
            reach out.
          </p>
          <a href={`mailto:${profile.email}`} className="btn btn-primary">
            Send Email <ArrowUpRight width={16} height={16} />
          </a>
        </Reveal>

        <Reveal from="right" delay={0.15}>
          <div className="contact-links">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="contact-link glow-card foil"
                {...(l.external ? { target: "_blank", rel: "noreferrer" } : {})}
                onPointerMove={(e) => {
                  const r = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
                  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
                }}
              >
                <span className="contact-lbl">{l.label}</span>
                <span className="contact-val">{l.value}</span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
