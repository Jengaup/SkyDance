"use client";
import { motion } from "motion/react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fondo con gradiente animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#0f0a1a] to-[#0a1020]" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 border border-amber-400/30 px-4 py-1 rounded-full">
            Academia de Baile
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight"
        >
          Mueve tu cuerpo,{" "}
          <span className="bg-gradient-to-r from-amber-400 to-cyan-400 bg-clip-text text-transparent">
            libera tu alma
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/60 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
        >
          En Sky Dance te enseñamos a bailar con pasión. Clases para todos los niveles,
          desde principiantes hasta avanzados.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#clases"
            className="bg-gradient-to-r from-amber-400 to-cyan-500 text-black font-bold px-8 py-4 rounded-full hover:opacity-90 transition text-lg"
          >
            Ver Clases
          </a>
          <a
            href="#contacto"
            className="border border-white/20 text-white font-semibold px-8 py-4 rounded-full hover:border-amber-400 hover:text-amber-400 transition text-lg"
          >
            Matricúlate
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 text-xs"
      >
        <span>Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent animate-bounce" />
      </motion.div>
    </section>
  );
}
