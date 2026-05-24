"use client";
import { motion } from "motion/react";
import { useState } from "react";

const classes = [
  {
    name: "Salsa",
    level: "Todos los niveles",
    desc: "Movimientos sensuales y enérgicos de la salsa cubana y caleña. El ritmo del Caribe en cada paso.",
    icon: "💃",
    color: "#ec4899",
    gradient: "from-pink-600/30 to-rose-600/10",
    border: "border-pink-500/40",
    glow: "glow-pink",
    tag: "HOT",
  },
  {
    name: "Reggaeton",
    level: "Principiante · Intermedio",
    desc: "Los pasos urbanos más populares del momento. Actitud, ritmo y mucho flow.",
    icon: "🔥",
    color: "#f97316",
    gradient: "from-orange-600/30 to-amber-600/10",
    border: "border-orange-500/40",
    glow: "glow-orange",
    tag: "POPULAR",
  },
  {
    name: "Hip Hop",
    level: "Todos los niveles",
    desc: "Expresión libre con coreografías urbanas. Cultura, música y movimiento auténtico.",
    icon: "🎤",
    color: "#a855f7",
    gradient: "from-purple-600/30 to-violet-600/10",
    border: "border-purple-500/40",
    glow: "glow-purple",
    tag: "NUEVO",
  },
  {
    name: "Bachata",
    level: "Todos los niveles",
    desc: "La sensualidad dominicana en cada movimiento. Ideal para parejas y solistas.",
    icon: "🌹",
    color: "#ec4899",
    gradient: "from-rose-600/30 to-fuchsia-600/10",
    border: "border-fuchsia-500/40",
    glow: "glow-pink",
    tag: "PAREJAS",
  },
  {
    name: "Contemporáneo",
    level: "Intermedio · Avanzado",
    desc: "Fusión de técnicas modernas. Arte, expresión y técnica en perfecta armonía.",
    icon: "🌊",
    color: "#22d3ee",
    gradient: "from-cyan-600/30 to-teal-600/10",
    border: "border-cyan-500/40",
    glow: "glow-cyan",
    tag: "ARTE",
  },
  {
    name: "Zumba",
    level: "Todos los niveles",
    desc: "Quema calorías mientras bailas. La clase más divertida de la semana, garantizado.",
    icon: "⚡",
    color: "#a3e635",
    gradient: "from-lime-600/30 to-green-600/10",
    border: "border-lime-500/40",
    glow: "glow-lime",
    tag: "FITNESS",
  },
];

export default function ClassesSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="clases" className="py-28 px-6 relative">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-purple-400 text-xs font-bold tracking-[0.4em] uppercase mb-4">
            ◈ Nuestros Estilos ◈
          </p>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            Elige tu{" "}
            <span className="gradient-text-animated">ritmo</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto">
            Seis estilos únicos, un solo propósito: que te enamores del baile.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {classes.map((cls, i) => (
            <motion.div
              key={cls.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`relative rounded-2xl p-7 border ${cls.border} bg-gradient-to-br ${cls.gradient} glass cursor-default overflow-hidden group transition-all duration-500 ${hovered === i ? cls.glow : ""}`}
            >
              {/* Tag */}
              <div
                className="absolute top-5 right-5 px-2 py-0.5 rounded text-[10px] font-black tracking-widest"
                style={{ color: cls.color, border: `1px solid ${cls.color}40` }}
              >
                {cls.tag}
              </div>

              {/* Icon with glow */}
              <div className="text-5xl mb-5 transition-transform duration-300 group-hover:scale-110">
                {cls.icon}
              </div>

              <h3 className="text-2xl font-black text-white mb-1">{cls.name}</h3>
              <p className="text-xs font-semibold mb-3 uppercase tracking-widest" style={{ color: cls.color }}>
                {cls.level}
              </p>
              <p className="text-white/50 text-sm leading-relaxed">{cls.desc}</p>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
                style={{ background: `linear-gradient(to right, transparent, ${cls.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
