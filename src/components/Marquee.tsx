import { marqueeItems } from "../data/skills";

export default function Marquee() {
  const row = [...marqueeItems, ...marqueeItems];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {row.map((m, i) => (
          <span key={i} className="marquee-item">
            <span className="marquee-star">✦</span>
            {m}
          </span>
        ))}
      </div>
    </div>
  );
}
