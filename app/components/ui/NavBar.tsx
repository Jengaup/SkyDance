"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-cyan-400 bg-clip-text text-transparent">
          SKY DANCE
        </span>
        <div className="hidden md:flex gap-8 text-sm text-white/80">
          {["Clases", "Nosotros", "Horarios", "Contacto"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}
              className="hover:text-amber-400 transition-colors duration-200">
              {item}
            </a>
          ))}
        </div>
        <a href="#contacto"
          className="bg-gradient-to-r from-amber-400 to-cyan-500 text-black text-sm font-semibold px-5 py-2 rounded-full hover:opacity-90 transition">
          Matricúlate
        </a>
      </div>
    </nav>
  );
}