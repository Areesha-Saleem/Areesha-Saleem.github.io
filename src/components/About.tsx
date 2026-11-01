import { profile } from "../data/profile";
import { certifications } from "../data/misc";
import { projects } from "../data/projects";
import Counter from "./Counter";
import GlowCard from "./GlowCard";
import Reveal from "./Reveal";
import Section from "./Section";

const toolCount = projects.filter((p) => p.category === "Marketing & SEO Tools").length;

const stats = [
  { to: 3.63, decimals: 2, suffix: "", label: "CGPA / 4.0" },
  { to: projects.length, decimals: 0, suffix: "", label: "Projects Built" },
  { to: toolCount, decimals: 0, suffix: "", label: "SEO & Marketing Tools" },
  { to: certifications.length, decimals: 0, suffix: "", label: "Certifications" },
];

export default function About() {
  return (
    <Section id="about" num="01" label="About" title="Results-Driven" accent="Engineer">
      <div className="about-grid">
        <Reveal from="left" delay={0.1} className="about-text">
          <p>
            Hands-on professional experience in AI automation, data engineering, and machine
            learning — backed by a strong academic foundation in Computer Science.
          </p>
          <p>
            Today I'm an{" "}
            <span className="hl">
              {profile.current.role} at {profile.current.company}
            </span>
            , building ad-intelligence, SERP and technical-SEO tools. Before that I spent{" "}
            <span className="hl">1 year and 3 months at 2BTech</span> designing production-ready AI
            pipelines, and started out as an AI &amp; Data Engineering Intern at Digifloat LLC.
          </p>
          <p>
            Outside of code, I'm the <span className="hl">{profile.leadership}</span> — leading a
            team to bring ideas worth spreading to the stage.
          </p>
          <p className="about-meta">
            ◉ {profile.location} &nbsp;·&nbsp; {profile.email}
          </p>
        </Reveal>

        <Reveal from="right" delay={0.15}>
          <div className="stat-grid">
            {stats.map((s) => (
              <GlowCard key={s.label} className="stat-card">
                <div className="stat-num shine-text">
                  <Counter to={s.to} decimals={s.decimals} suffix={s.suffix} />
                </div>
                <div className="stat-label">{s.label}</div>
              </GlowCard>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
