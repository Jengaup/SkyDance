"use client";
import { motion } from "motion/react";
import { Spotlight } from "@/components/ui/spotlight";
import { useLang } from "@/lib/lang";

export default function HeroSection() {
  const { tx } = useLang();
  const h = tx.hero;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050508] cyber-grid scanline">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#a855f7" />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="animate-float absolute top-1/4 -left-20 sm:-left-32 w-[250px] sm:w-[350px] md:w-[500px] h-[250px] sm:h-[350px] md:h-[500px] rounded-full bg-purple-600/20 blur-[80px] md:blur-[120px]" />
        <div className="animate-float2 absolute bottom-1/4 -right-20 sm:-right-32 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] rounded-full bg-pink-600/15 blur-[80px] md:blur-[120px]" />
        <div className="animate-float absolute top-3/4 left-1/3 w-[150px] sm:w-[200px] md:w-[300px] h-[150px] sm:h-[200px] md:h-[300px] rounded-full bg-cyan-600/10 blur-[60px] md:blur-[100px]" />
        <div className="animate-spin-slow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] md:w-[700px] h-[350px] sm:h-[500px] md:h-[700px] rounded-full border border-purple-500/10" />
        <div className="animate-spin-slow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] sm:w-[650px] md:w-[900px] h-[450px] sm:h-[650px] md:h-[900px] rounded-full border border-pink-500/5" style={{ animationDirection: "reverse" }} />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(16)].map((_, i) => (
          <motion.div key={i} className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${10 + (i * 5.5) % 80}%`, top: `${10 + (i * 7.3) % 80}%`,
              background: ["#a855f7","#ec4899","#22d3ee","#a3e635"][i % 4],
              boxShadow: `0 0 6px ${["#a855f7","#ec4899","#22d3ee","#a3e635"][i % 4]}`,
            }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 3 + (i % 4), delay: (i * 0.3) % 3, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-6 sm:mb-8 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full glass border border-purple-500/30 glow-purple">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
          <span className="text-purple-300 text-[10px] sm:text-xs font-semibold tracking-[0.2em] sm:tracking-[0.3em] uppercase">
            {h.badge}
          </span>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black leading-none tracking-tight mb-2">
            <span className="block text-white">SKY</span>
            <span className="block gradient-text-animated">DANCE</span>
          </h1>
        </motion.div>

        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.6 }}
          className="w-24 sm:w-32 md:w-48 h-px mx-auto my-6 sm:my-8 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}
          className="text-white/50 text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-2">
          {h.sub}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <a href="#clases" className="group relative w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-bold overflow-hidden text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 transition-all duration-300 group-hover:opacity-90" />
            <span className="relative z-10 text-white">{h.cta1}</span>
          </a>
          <a href="#contacto"
            className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-bold text-purple-300 border border-purple-500/50 glass glow-purple hover:border-purple-400 hover:text-white transition-all duration-300 text-center">
            {h.cta2}
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.3 }}
          className="mt-14 sm:mt-20 flex flex-wrap justify-center gap-6 sm:gap-10 text-center">
          {h.stats.map((s, i) => (
            <div key={i}>
              <div className={`text-2xl sm:text-3xl font-black ${["text-purple-400","text-pink-400","text-cyan-400"][i]}`}>{s.value}</div>
              <div className="text-white/40 text-[10px] sm:text-xs mt-1 uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/20 text-[10px] uppercase tracking-widest">{h.scroll}</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-10 sm:h-12 bg-gradient-to-b from-purple-400/60 to-transparent" />
      </motion.div>
    </section>
  );
}
