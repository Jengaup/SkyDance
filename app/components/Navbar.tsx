"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Clases", "Nosotros", "Horarios", "Contacto"];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-cyan-400 bg-clip-text text-transparent">
          SKY DANCE
        </span>

        <div className="hidden md:flex gap-8 text-sm text-white/80">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-amber-400 transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="#contacto"
          className="hidden md:block bg-gradient-to-r from-amber-400 to-cyan-500 text-black text-sm font-semibold px-5 py-2 rounded-full hover:opacity-90 transition"
        >
          Matricúlate
        </a>

        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <div className="w-6 h-0.5 bg-white mb-1" />
          <div className="w-6 h-0.5 bg-white mb-1" />
          <div className="w-6 h-0.5 bg-white" />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md px-6 pb-6 pt-2 flex flex-col gap-4 text-white/80 text-sm">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="hover:text-amber-400 transition-colors"
            >
              {item}
            </a>
          ))}
          <a
            href="#contacto"
            className="bg-gradient-to-r from-amber-400 to-cyan-500 text-black font-semibold px-5 py-2 rounded-full text-center hover:opacity-90 transition"
          >
            Matricúlate
          </a>
        </div>
      )}
    </nav>
  );
}
