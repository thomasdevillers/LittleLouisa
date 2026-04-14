"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Amenities", href: "#amenities" },
  { label: "The Area", href: "#area" },
  { label: "Reviews", href: "#reviews" },
  { label: "Book", href: "#booking" },
  { label: "Contact", href: "#contact" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <button onClick={() => setOpen(true)} className="md:hidden ml-4 uppercase tracking-[0.2em] text-[10px] font-bold" aria-label="Open menu">
        Menu
      </button>
      {open && (
        <div className="fixed inset-0 z-[90] bg-white flex flex-col items-center justify-center gap-10 animate-fade-in">
          <button onClick={() => setOpen(false)} className="absolute top-6 right-6 uppercase tracking-[0.2em] text-[10px] font-bold" aria-label="Close menu">
            Close
          </button>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-[family-name:var(--font-headline)] text-4xl tracking-tighter hover:opacity-50 transition-opacity"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
