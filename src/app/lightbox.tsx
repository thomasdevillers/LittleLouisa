"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const photos = [
  { src: "/photos/livingroom2.jpg", label: "Living Area" },
  { src: "/photos/kitchen.jpg", label: "Kitchen" },
  { src: "/photos/mainbedroom.jpg", label: "Main Bedroom" },
  { src: "/photos/2ndbedroom.jpg", label: "Second Bedroom" },
  { src: "/photos/bathroom.jpg", label: "Bathroom" },
  { src: "/photos/bathroom2.jpg", label: "En-Suite" },
  { src: "/photos/fireplace.jpg", label: "Fireplace" },
  { src: "/photos/fireplace2.jpeg", label: "Evening Warmth" },
  { src: "/photos/garden.jpg", label: "The Garden" },
  { src: "/photos/outsitearea.jpg", label: "Outdoor Area" },
  { src: "/photos/outsidearea2.jpg", label: "Al Fresco" },
  { src: "/photos/outside.jpg", label: "The House" },
];

export { photos };

export default function Lightbox({ initial, onClose }: { initial: number; onClose: () => void }) {
  const [index, setIndex] = useState(initial);

  const next = useCallback(() => setIndex((i) => (i + 1) % photos.length), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + photos.length) % photos.length), []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handler);
    };
  }, [onClose, next, prev]);

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center" onClick={onClose}>
      <div className="absolute top-6 right-6 flex items-center gap-6 z-10">
        <span className="text-white/40 text-[10px] uppercase tracking-widest font-bold">
          {index + 1} / {photos.length}
        </span>
        <button onClick={onClose} className="text-white/60 hover:text-white uppercase tracking-[0.2em] text-[10px] font-bold transition-colors">
          Close
        </button>
      </div>
      <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 md:left-8 text-white/40 hover:text-white text-3xl transition-colors z-10" aria-label="Previous">
        &#8592;
      </button>
      <div className="relative w-full h-full max-w-5xl max-h-[80vh] mx-16" onClick={(e) => e.stopPropagation()}>
        <Image
          src={photos[index].src}
          alt={photos[index].label}
          fill
          className="object-contain transition-opacity duration-500"
          sizes="90vw"
          priority
        />
      </div>
      <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 md:right-8 text-white/40 hover:text-white text-3xl transition-colors z-10" aria-label="Next">
        &#8594;
      </button>
      <div className="absolute bottom-8 text-center w-full">
        <p className="text-white/60 uppercase tracking-widest text-[10px] font-bold">{photos[index].label}</p>
      </div>
    </div>
  );
}
