"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const links = [
  { label: "Clases", href: "#clases" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Horarios", href: "#horarios" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "glass-dark border-b border-purple-500/20 py-3" : "bg-transparent py-4 md:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          <a href="#" className="relative">
            <span className="text-xl sm:text-2xl font-black tracking-wider gradient-text-animated">
              SKY DANCE
            </span>
          </a>

          <div className="hidden md:flex gap-6 lg:gap-8 text-sm font-medium">
            {links.map((link) => (
              <a key={link.label} href={link.href}
                className="text-white/60 hover:text-white transition-colors duration-200 relative group">
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          <a href="#contacto"
            className="hidden md:block relative px-4 lg:px-6 py-2 lg:py-2.5 rounded-full text-sm font-bold text-white border border-purple-500/60 glow-purple hover:border-purple-400 transition-all duration-300 group overflow-hidden">
            <span className="relative z-10">Matricúlate</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>

          <button onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-3 -mr-1" aria-label="Menú">
            <motion.span animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-purple-400 block origin-center transition-all" />
            <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-purple-400 block" />
            <motion.span animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-purple-400 block origin-center transition-all" />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-14 sm:top-16 left-0 right-0 z-40 glass-dark border-b border-purple-500/20 px-4 sm:px-6 py-5 flex flex-col gap-3 md:hidden"
          >
            {links.map((link) => (
              <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}
                className="text-white/70 hover:text-purple-300 font-medium transition-colors text-base py-2">
                {link.label}
              </a>
            ))}
            <a href="#contacto" onClick={() => setMenuOpen(false)}
              className="mt-1 text-center px-6 py-3 rounded-full font-bold text-white border border-purple-500/60 glow-purple">
              Matricúlate
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
