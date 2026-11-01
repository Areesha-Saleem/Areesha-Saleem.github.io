import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { projectFilters, projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import Section from "./Section";

type Filter = (typeof projectFilters)[number];

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("All");

  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  const counts = useMemo(() => {
    const c: Record<string, number> = { All: projects.length };
    projects.forEach((p) => (c[p.category] = (c[p.category] ?? 0) + 1));
    return c;
  }, []);

  return (
    <Section id="projects" num="04" label="Projects" title="Things I've" accent="Built">
      <LayoutGroup>
        <div className="filters" role="tablist" aria-label="Filter projects">
          {projectFilters.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={filter === f}
              className={`filter ${filter === f ? "is-active" : ""}`}
              onClick={() => setFilter(f)}
            >
              {filter === f && <motion.span layoutId="filter-bg" className="filter-bg" />}
              <span className="filter-label">
                {f} <sup>{counts[f] ?? 0}</sup>
              </span>
            </button>
          ))}
        </div>

        <motion.div layout className="projects-grid">
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>
    </Section>
  );
}
