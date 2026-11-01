import { motion } from "framer-motion";
import { skillGroups } from "../data/skills";
import GlowCard from "./GlowCard";
import Section from "./Section";

export default function Skills() {
  return (
    <Section id="skills" num="02" label="Skills" title="Technical" accent="Arsenal">
      <div className="skills-grid">
        {skillGroups.map((g, gi) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: (gi % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <GlowCard className="skill-group">
              <div className="skill-head">
                <span className="skill-icon">{g.icon}</span>
                <span className="skill-title">{g.title}</span>
                {g.isNew && <span className="new-badge">✦ New</span>}
              </div>
              <div className="tags">
                {g.items.map((item, i) => (
                  <motion.span
                    key={item}
                    className="tag"
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + i * 0.04, duration: 0.35 }}
                    whileHover={{ y: -3 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </GlowCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
