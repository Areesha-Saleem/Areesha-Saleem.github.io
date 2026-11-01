import { achievements, certifications, education } from "../data/misc";
import GlowCard from "./GlowCard";
import Reveal from "./Reveal";
import Section from "./Section";

export function Certifications() {
  return (
    <Section id="certs" num="05" label="Certifications" title="Credentials &" accent="Learning">
      <div className="cert-grid">
        {certifications.map((c, i) => (
          <Reveal key={c.name} delay={(i % 3) * 0.08}>
            <GlowCard className="cert-card">
              <div className="cert-issuer">{c.issuer}</div>
              <div className="cert-name">{c.name}</div>
              <div className="cert-date">{c.date}</div>
            </GlowCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Education() {
  return (
    <Section id="education" num="06" label="Education" title="Academic" accent="Background">
      <div className="edu-list">
        {education.map((e, i) => (
          <Reveal key={e.institution} delay={i * 0.08}>
            <GlowCard className="edu-item">
              <div className="edu-meta">
                <div className="edu-year">{e.year}</div>
                <div className="edu-inst">{e.institution}</div>
              </div>
              <div className="edu-body">
                <div className="edu-degree">{e.degree}</div>
                <div className="edu-detail">{e.detail}</div>
              </div>
            </GlowCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Achievements() {
  return (
    <Section id="achievements" num="07" label="Achievements" title="Beyond" accent="The Code">
      <div className="achieve-grid">
        {achievements.map((a, i) => (
          <Reveal key={a.text} delay={(i % 3) * 0.08}>
            <GlowCard className="achieve-card">
              <div className="achieve-icon">{a.icon}</div>
              <div className="achieve-text">{a.text}</div>
            </GlowCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
