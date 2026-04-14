"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox, { photos } from "./lightbox";

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openAt = (src: string) => {
    const i = photos.findIndex((p) => p.src === src);
    setLightboxIndex(i >= 0 ? i : 0);
  };

  return (
    <>
      {lightboxIndex !== null && <Lightbox initial={lightboxIndex} onClose={() => setLightboxIndex(null)} />}

      {/* Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
        <div className="md:col-span-7 aspect-[4/3] md:aspect-auto md:h-[700px] overflow-hidden group relative cursor-pointer" onClick={() => openAt("/photos/livingroom2.jpg")}>
          <Image src="/photos/livingroom2.jpg" alt="Living room with natural light" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 58vw" />
          <div className="absolute bottom-6 left-6 text-white text-[10px] uppercase tracking-widest font-bold">Living Area</div>
        </div>
        <div className="md:col-span-5 grid grid-cols-2 gap-6">
          {[
            { src: "/photos/kitchen.jpg", alt: "Fully equipped kitchen", label: "Kitchen" },
            { src: "/photos/mainbedroom.jpg", alt: "Main bedroom", label: "Main Bedroom" },
            { src: "/photos/secondbedroom.jpg", alt: "Second bedroom", label: "Second Bedroom" },
            { src: "/photos/bathroom.jpg", alt: "Bathroom", label: "Bathroom" },
          ].map((p) => (
            <div key={p.src} className="aspect-square overflow-hidden group relative cursor-pointer" onClick={() => openAt(p.src)}>
              <Image src={p.src} alt={p.alt} fill className="object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" sizes="(max-width: 768px) 50vw, 20vw" />
              <div className="absolute bottom-4 left-4 text-white text-[9px] uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity">{p.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
        <div className="md:col-span-5 grid grid-cols-2 gap-6">
          {[
            { src: "/photos/bathroom2.jpg", alt: "Second bathroom", label: "En-Suite" },
            { src: "/photos/fireplace.jpg", alt: "Fireplace", label: "Fireplace" },
          ].map((p) => (
            <div key={p.src} className="aspect-square overflow-hidden group relative cursor-pointer" onClick={() => openAt(p.src)}>
              <Image src={p.src} alt={p.alt} fill className="object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" sizes="(max-width: 768px) 50vw, 20vw" />
              <div className="absolute bottom-4 left-4 text-white text-[9px] uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity">{p.label}</div>
            </div>
          ))}
          <div className="aspect-square overflow-hidden group relative col-span-2 cursor-pointer" onClick={() => openAt("/photos/fireplace2.jpeg")}>
            <Image src="/photos/fireplace2.jpeg" alt="Fireplace detail" fill className="object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 40vw" />
            <div className="absolute bottom-4 left-4 text-white text-[9px] uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity">Evening Warmth</div>
          </div>
        </div>
        <div className="md:col-span-7 aspect-[4/3] md:aspect-auto md:h-[700px] overflow-hidden group relative cursor-pointer" onClick={() => openAt("/photos/garden.jpg")}>
          <Image src="/photos/garden.jpg" alt="Garden" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 58vw" />
          <div className="absolute bottom-6 left-6 text-white text-[10px] uppercase tracking-widest font-bold">The Garden</div>
        </div>
      </div>

      {/* Row 3 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { src: "/photos/outsitearea.jpg", alt: "Outside seating area", label: "Outdoor Area" },
          { src: "/photos/outsidearea2.jpg", alt: "Outside area with seating", label: "Al Fresco" },
          { src: "/photos/outside.jpg", alt: "Little Louisa exterior", label: "The House" },
        ].map((p) => (
          <div key={p.src} className="aspect-[4/3] overflow-hidden group relative cursor-pointer" onClick={() => openAt(p.src)}>
            <Image src={p.src} alt={p.alt} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
            <div className="absolute bottom-4 left-4 text-white text-[9px] uppercase tracking-widest font-bold">{p.label}</div>
          </div>
        ))}
      </div>
    </>
  );
}
