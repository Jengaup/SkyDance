"use client";
import { motion } from "motion/react";
import { Spotlight } from "@/components/ui/spotlight";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function HeroSection() {
  const words = [
    { text: "Mueve" },
    { text: "tu" },
    { text: "cuerpo,", className: "text-amber-400" },
    { text: "libera" },
    { text: "tu" },
    { text: "alma.", className: "bg-gradient-to-r from-amber-400 to-cyan-400 bg-clip-text text-transparent" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0f]">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      <BackgroundBeams />

      {/* Glow circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-amber-400 text-sm font-semibold tracking-widest uppercase mb-6 border border-amber-400/30 px-4 py-1 rounded-full">
            Academia de Baile
          </span>
        </motion.div>

        <div className="mb-8">
          <TypewriterEffect
            words={words}
            className="text-4xl md:text-6xl lg:text-7xl"
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-white/60 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
        >
          Clases para todos los niveles. Desde principiantes hasta avanzados,
          encontrarás tu ritmo en Sky Dance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
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

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 text-xs"
      >
        <span>Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent animate-bounce" />
      </motion.div>
    </section>
  );
}
