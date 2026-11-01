import { useCallback, type PointerEvent } from "react";

/**
 * Writes the pointer position (relative to the element) into the
 * --mx / --my CSS variables so a radial-gradient "spotlight" can follow it.
 */
export function useSpotlight<T extends HTMLElement>() {
  const onPointerMove = useCallback((e: PointerEvent<T>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  }, []);

  return { onPointerMove };
}
