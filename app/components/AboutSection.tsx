"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { useLang } from "@/lib/lang";

const statColors = [
  { value: 255, suffix: "",  color: "#a855f7", glow: "glow-purple" },
  { value: 10,  suffix: "+", color: "#ec4899", glow: "glow-pink"   },
  { value: 15,  suffix: "+", color: "#22d3ee", glow: "glow-cyan"   },
  { value: 7,   suffix: "",  color: "#a3e635", glow: "glow-lime"   },
];

const bulletColors = ["#a855f7", "#ec4899", "#22d3ee", "#a3e635"];

function StatCard({ value, suffix, label, color, glow, delay }: {
  value: number; suffix: string; label: string; color: string; glow: string; delay: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, scale: 0.8 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay }}
      className={`glass rounded-2xl p-5 sm:p-6 md:p-7 text-center border hover:${glow} transition-all duration-500`}
      style={{ borderColor: `${color}30` }}
    >
      <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: delay + 0.2 }}
        className="text-3xl sm:text-4xl md:text-5xl font-black mb-2"
        style={{ color, textShadow: `0 0 20px ${color}80` }}>
        {inView ? value : 0}{suffix}
      </motion.div>
      <div className="text-white/40 text-[10px] sm:text-xs uppercase tracking-widest">{label}</div>
    </motion.div>
  );
}

export default function AboutSection() {
  const { tx } = useLang();
  const a = tx.about;

  return (
    <section id="nosotros" className="py-20 sm:py-28 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[200px] sm:w-[300px] md:w-[400px] h-[200px] sm:h-[300px] md:h-[400px] bg-purple-600/10 rounded-full blur-[80px] md:blur-[100px] -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-[200px] sm:w-[300px] md:w-[400px] h-[200px] sm:h-[300px] md:h-[400px] bg-pink-600/10 rounded-full blur-[80px] md:blur-[100px] -translate-y-1/2" />
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] sm:w-[400px] md:w-[600px] h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <p className="text-pink-400 text-[10px] sm:text-xs font-bold tracking-[0.3em] sm:tracking-[0.4em] uppercase mb-3 sm:mb-4">
              {a.tag}
            </p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 sm:mb-8 leading-none">
              {a.title1}{" "}
              <span className="gradient-text-animated">{a.title2}</span>
            </h2>

            <div className="space-y-4 text-white/50 leading-relaxed text-sm sm:text-base">
              <p>{a.p1}</p>
              <p>{a.p2}</p>
            </div>

            <div className="mt-8 space-y-3">
              {a.bullets.map((text, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: bulletColors[i], boxShadow: `0 0 8px ${bulletColors[i]}` }} />
                  <span className="text-white/70 text-sm">{text}</span>
                </div>
              ))}
            </div>

            <motion.a href="#contacto" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              className="inline-block mt-8 sm:mt-10 px-7 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-white border border-pink-500/50 glow-pink glass hover:border-pink-400 transition-all duration-300 text-sm sm:text-base">
              {a.cta}
            </motion.a>
          </motion.div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {statColors.map((s, i) => (
              <StatCard key={i} {...s} label={a.stats[i]} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
