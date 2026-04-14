"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function ParallaxHero({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const media = el.querySelector("video") || el.querySelector("img");
    if (!media) return;

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const y = window.scrollY;
          if (y < window.innerHeight) {
            media.style.transform = `translateY(${y * 0.25}px) scale(1.05)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={ref} className="relative h-screen min-h-[700px] w-full flex items-end overflow-hidden">
      {children}
    </section>
  );
}
