import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Props {
  to: number;
  decimals?: number;
  suffix?: string;
}

/** Counts up from 0 to `to` when scrolled into view. */
export default function Counter({ to, decimals = 0, suffix = "" }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setValue(v),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref}>
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}
