"use client";
import { motion } from "motion/react";

const classes = [
  {
    name: "Salsa",
    level: "Todos los niveles",
    desc: "Aprende los movimientos sensuales y enérgicos de la salsa cubana y caleña.",
    icon: "💃",
    color: "from-amber-500/20 to-amber-500/5",
    border: "border-amber-500/30",
  },
  {
    name: "Reggaeton",
    level: "Principiante - Intermedio",
    desc: "Domina los pasos urbanos más populares con ritmo y actitud.",
    icon: "🔥",
    color: "from-orange-500/20 to-orange-500/5",
    border: "border-orange-500/30",
  },
  {
    name: "Hip Hop",
    level: "Todos los niveles",
    desc: "Expresión libre, estilo urbano y coreografías con flow.",
    icon: "🎤",
    color: "from-cyan-500/20 to-cyan-500/5",
    border: "border-cyan-500/30",
  },
  {
    name: "Bachata",
    level: "Todos los niveles",
    desc: "La sensualidad del Caribe en cada paso. Ideal para parejas.",
    icon: "🌹",
    color: "from-rose-500/20 to-rose-500/5",
    border: "border-rose-500/30",
  },
  {
    name: "Contemporáneo",
    level: "Intermedio - Avanzado",
    desc: "Fusión de técnicas modernas para una expresión artística completa.",
    icon: "🌊",
    color: "from-purple-500/20 to-purple-500/5",
    border: "border-purple-500/30",
  },
  {
    name: "Zumba",
    level: "Todos los niveles",
    desc: "Ejercítate bailando. Diversión garantizada en cada clase.",
    icon: "⚡",
    color: "from-green-500/20 to-green-500/5",
    border: "border-green-500/30",
  },
];

export default function ClassesSection() {
  return (
    <section id="clases" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase">
            Nuestras Clases
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Encuentra tu{" "}
            <span className="bg-gradient-to-r from-amber-400 to-cyan-400 bg-clip-text text-transparent">
              ritmo
            </span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Ofrecemos una variedad de estilos para que descubras el que más te apasiona.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.map((cls, i) => (
            <motion.div
              key={cls.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`bg-gradient-to-br ${cls.color} border ${cls.border} rounded-2xl p-6 hover:scale-105 transition-transform duration-300 cursor-default`}
            >
              <div className="text-4xl mb-4">{cls.icon}</div>
              <h3 className="text-xl font-bold text-white mb-1">{cls.name}</h3>
              <span className="text-xs text-white/40 font-medium uppercase tracking-wide">
                {cls.level}
              </span>
              <p className="text-white/60 text-sm mt-3 leading-relaxed">{cls.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
