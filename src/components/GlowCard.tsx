import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { useSpotlight } from "../hooks/useSpotlight";

interface Props extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  children: ReactNode;
}

/** A card with a pointer-following spotlight and a foil (rainbow) border on hover. */
export default function GlowCard({ as: Tag = "div", className = "", children, ...rest }: Props) {
  const { onPointerMove } = useSpotlight<HTMLElement>();
  return (
    <Tag className={`glow-card foil ${className}`} onPointerMove={onPointerMove} {...rest}>
      {children}
    </Tag>
  );
}
