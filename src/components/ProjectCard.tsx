import { motion } from "framer-motion";
import type { PointerEvent } from "react";
import type { Project } from "../types";
import { ArrowUpRight, LinkOffIcon } from "./Icons";

interface Props {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: Props) {
  const { title, description, stack, url, badge, featured, category } = project;
  const hasLink = url.trim().length > 0;

  const onMove = (e: PointerEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
    if (e.pointerType === "touch") return;
    el.style.setProperty("--ry", `${((x / r.width) - 0.5) * 9}deg`);
    el.style.setProperty("--rx", `${(0.5 - y / r.height) * 9}deg`);
  };

  const onLeave = (e: PointerEvent<HTMLElement>) => {
    e.currentTarget.style.setProperty("--rx", "0deg");
    e.currentTarget.style.setProperty("--ry", "0deg");
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.92 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="project-slot"
    >
      <article
        className={`project-card glow-card foil ${featured ? "is-featured" : ""}`}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
      >
        <div className="project-top">
          <span className="project-num">{String(index + 1).padStart(2, "0")}</span>
          {badge && <span className={`badge badge-${badge.toLowerCase()}`}>{badge}</span>}
        </div>

        <h3 className="project-title">{title}</h3>
        <div className="project-cat">{category}</div>
        <p className="project-desc">{description}</p>

        <div className="stack">
          {stack.map((s) => (
            <span key={s} className="pill-stack">
              {s}
            </span>
          ))}
        </div>

        <div className="project-foot">
          {hasLink ? (
            <a
              className="visit"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${title}`}
            >
              Visit project <ArrowUpRight width={16} height={16} />
            </a>
          ) : (
            <span className="visit is-soon" title="Add this project's URL in src/data/projects.ts">
              <LinkOffIcon width={15} height={15} /> Link coming soon
            </span>
          )}
        </div>
      </article>
    </motion.div>
  );
}
