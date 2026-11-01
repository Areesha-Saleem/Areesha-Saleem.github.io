import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

/**
 * Full-screen glitter field.
 *  - ambient twinkling dots + 4-point stars drifting slowly
 *  - sparkle trail that follows the pointer
 *  - gentle parallax toward the pointer
 */

const PALETTE = [
  "184,50,77",
  "155,28,53",
  "155,28,53",
  "217,86,111",
  "122,18,41",
  "122,18,41",
  "255,209,217",
] as const;

interface Speck {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  color: string;
  phase: number;
  speed: number;
  star: boolean;
  depth: number;
}

interface Trail {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  r: number;
  color: string;
}

function drawStar(ctx: CanvasRenderingContext2D, x: number, y: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x, y - r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.quadraticCurveTo(x, y, x, y + r);
  ctx.quadraticCurveTo(x, y, x - r, y);
  ctx.quadraticCurveTo(x, y, x, y - r);
  ctx.closePath();
  ctx.fill();
}

export default function Glitter() {
  const ref = useRef<HTMLCanvasElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let W = 0;
    let H = 0;
    let raf = 0;
    let specks: Speck[] = [];
    const trail: Trail[] = [];
    const pointer = { x: 0, y: 0, tx: 0, ty: 0, active: false, lastSpawn: 0 };

    const rand = (a: number, b: number) => a + Math.random() * (b - a);

    const build = () => {
      const count = Math.round(Math.min(60, Math.max(24, (W * H) / 30000)));
      specks = Array.from({ length: count }, () => {
        const star = Math.random() > 0.9;
        return {
          x: Math.random() * W,
          y: Math.random() * H,
          vx: rand(-0.04, 0.04),
          vy: rand(-0.06, -0.01),
          r: star ? rand(1.8, 3.4) : rand(0.5, 1.1),
          color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
          phase: Math.random() * Math.PI * 2,
          speed: rand(0.6, 2.2),
          star,
          depth: rand(0.2, 1),
        };
      });
    };

    const resize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      build();
    };

    const onMove = (e: PointerEvent) => {
      pointer.tx = e.clientX;
      pointer.ty = e.clientY;
      if (!pointer.active) {
        pointer.x = e.clientX;
        pointer.y = e.clientY;
        pointer.active = true;
      }
      const now = performance.now();
      if (!reduced && now - pointer.lastSpawn > 90) {
        pointer.lastSpawn = now;
        trail.push({
          x: e.clientX + rand(-6, 6),
          y: e.clientY + rand(-6, 6),
          vx: rand(-0.5, 0.5),
          vy: rand(0.2, 1.1),
          life: 1,
          r: rand(1.2, 2.6),
          color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
        });
      }
    };

    const onClick = (e: PointerEvent) => {
      if (reduced) return;
      for (let i = 0; i < 8; i++) {
        const a = (Math.PI * 2 * i) / 8 + rand(-0.2, 0.2);
        const s = rand(1.2, 3.4);
        trail.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(a) * s,
          vy: Math.sin(a) * s,
          life: 1,
          r: rand(1.5, 3),
          color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
        });
      }
    };

    const frame = (t: number) => {
      ctx.clearRect(0, 0, W, H);
      // ease parallax pointer
      pointer.x += (pointer.tx - pointer.x) * 0.06;
      pointer.y += (pointer.ty - pointer.y) * 0.06;
      const px = pointer.active ? (pointer.x - W / 2) / W : 0;
      const py = pointer.active ? (pointer.y - H / 2) / H : 0;

      for (const s of specks) {
        if (!reduced) {
          s.x += s.vx;
          s.y += s.vy;
          if (s.y < -10) s.y = H + 10;
          if (s.x < -10) s.x = W + 10;
          if (s.x > W + 10) s.x = -10;
        }
        const twinkle = 0.5 + 0.5 * Math.sin(t * 0.001 * s.speed + s.phase);
        const alpha = 0.1 + twinkle * 0.5;
        const x = s.x - px * 40 * s.depth;
        const y = s.y - py * 40 * s.depth;

        ctx.fillStyle = `rgba(${s.color},${alpha})`;
        if (s.star) {
          ctx.shadowColor = `rgba(${s.color},${alpha})`;
          ctx.shadowBlur = 6;
          drawStar(ctx, x, y, s.r * (0.55 + twinkle * 0.7));
          ctx.shadowBlur = 0;
        } else {
          ctx.beginPath();
          ctx.arc(x, y, s.r, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      for (let i = trail.length - 1; i >= 0; i--) {
        const p = trail[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.02;
        p.life -= 0.02;
        if (p.life <= 0) {
          trail.splice(i, 1);
          continue;
        }
        ctx.fillStyle = `rgba(${p.color},${p.life})`;
        ctx.shadowColor = `rgba(${p.color},${p.life})`;
        ctx.shadowBlur = 10;
        drawStar(ctx, p.x, p.y, p.r * (0.4 + p.life * 0.8));
        ctx.shadowBlur = 0;
      }

      raf = requestAnimationFrame(frame);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onClick, { passive: true });

    if (reduced) {
      frame(0);
      cancelAnimationFrame(raf);
    } else {
      raf = requestAnimationFrame(frame);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onClick);
    };
  }, [reduced]);

  return <canvas ref={ref} className="glitter" aria-hidden="true" />;
}
