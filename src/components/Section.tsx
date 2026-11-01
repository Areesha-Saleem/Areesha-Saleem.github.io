import type { ReactNode } from "react";
import Reveal from "./Reveal";

interface Props {
  id: string;
  num: string;
  label: string;
  title: ReactNode;
  accent: string;
  children: ReactNode;
}

export default function Section({ id, num, label, title, accent, children }: Props) {
  return (
    <section className="section" id={id}>
      <Reveal>
        <div className="sec-label">
          <span className="sec-num">{num}</span>
          <span className="sec-line" />
          {label}
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="sec-title">
          {title} <em className="shine-text">{accent}</em>
        </h2>
      </Reveal>
      {children}
    </section>
  );
}
