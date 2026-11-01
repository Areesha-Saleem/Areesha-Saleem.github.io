import { motion } from "framer-motion";
import { experience } from "../data/experience";
import GlowCard from "./GlowCard";
import Section from "./Section";

export default function Experience() {
  return (
    <Section id="experience" num="03" label="Experience" title="Where I've" accent="Worked">
      <div className="timeline">
        <span className="timeline-rail" />
        {experience.map((e, i) => (
          <motion.div
            key={e.id}
            className={`tl-item ${e.current ? "is-current" : ""}`}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.65, delay: Math.min(i, 3) * 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="tl-node" />
            <GlowCard className="tl-card">
              <div className="tl-meta">
                <div className="tl-date">
                  {e.current && <span className="live-dot" />}
                  {e.period}
                </div>
                <div className="tl-company">{e.company}</div>
              </div>
              <div className="tl-body">
                <div className="tl-role">{e.role}</div>
                <ul className="tl-bullets">
                  {e.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                {e.badge && <div className="award">{e.badge}</div>}
              </div>
            </GlowCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
