"use client";
import { motion } from "motion/react";
import { Spotlight } from "@/components/ui/spotlight";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050508] cyber-grid scanline">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#a855f7" />

      {/* Animated neon orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="animate-float absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-[120px]" />
        <div className="animate-float2 absolute bottom-1/4 -right-32 w-[600px] h-[600px] rounded-full bg-pink-600/15 blur-[120px]" />
        <div className="animate-float absolute top-3/4 left-1/3 w-[300px] h-[300px] rounded-full bg-cyan-600/10 blur-[100px]" />

        {/* Decorative rings */}
        <div className="animate-spin-slow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-purple-500/10" />
        <div className="animate-spin-slow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-pink-500/5" style={{ animationDirection: "reverse" }} />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: ["#a855f7", "#ec4899", "#22d3ee", "#a3e635"][i % 4],
              boxShadow: `0 0 6px ${["#a855f7", "#ec4899", "#22d3ee", "#a3e635"][i % 4]}`,
            }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 1, 0.2] }}
            transition={{
              duration: 3 + Math.random() * 4,
              delay: Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full glass border border-purple-500/30 glow-purple"
        >
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
          <span className="text-purple-300 text-xs font-semibold tracking-[0.3em] uppercase">
            Academia de Baile Premium
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none tracking-tight mb-2">
            <span className="block text-white">SKY</span>
            <span className="block gradient-text-animated">DANCE</span>
          </h1>
        </motion.div>

        {/* Divider line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-48 h-px mx-auto my-8 bg-gradient-to-r from-transparent via-purple-400 to-transparent"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-white/50 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Donde el ritmo se convierte en arte. Aprende a bailar con los mejores instructores
          y descubre tu potencial en la pista.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#clases"
            className="group relative px-10 py-4 rounded-full font-bold text-black overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 transition-all duration-300 group-hover:scale-105" />
            <span className="relative z-10 text-white">Explorar Clases</span>
          </a>
          <a
            href="#contacto"
            className="px-10 py-4 rounded-full font-bold text-purple-300 border border-purple-500/50 glass glow-purple hover:border-purple-400 hover:text-white transition-all duration-300"
          >
            Matricúlate Gratis
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="mt-20 flex flex-wrap justify-center gap-10 text-center"
        >
          {[
            { value: "500+", label: "Alumnos activos", color: "text-purple-400" },
            { value: "10+", label: "Años de experiencia", color: "text-pink-400" },
            { value: "6", label: "Estilos de baile", color: "text-cyan-400" },
          ].map((s) => (
            <div key={s.label}>
              <div className={`text-3xl font-black ${s.color}`}>{s.value}</div>
              <div className="text-white/40 text-xs mt-1 uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/20 text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-12 bg-gradient-to-b from-purple-400/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
