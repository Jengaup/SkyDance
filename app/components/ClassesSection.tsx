"use client";
import { motion } from "motion/react";
import { HoverEffect } from "@/components/ui/card-hover-effect";

const classes = [
  {
    icon: "💃",
    title: "Salsa",
    tag: "Todos los niveles",
    description: "Aprende los movimientos sensuales y enérgicos de la salsa cubana y caleña.",
  },
  {
    icon: "🔥",
    title: "Reggaeton",
    tag: "Principiante - Intermedio",
    description: "Domina los pasos urbanos más populares con ritmo y actitud.",
  },
  {
    icon: "🎤",
    title: "Hip Hop",
    tag: "Todos los niveles",
    description: "Expresión libre, estilo urbano y coreografías con flow.",
  },
  {
    icon: "🌹",
    title: "Bachata",
    tag: "Todos los niveles",
    description: "La sensualidad del Caribe en cada paso. Ideal para parejas.",
  },
  {
    icon: "🌊",
    title: "Contemporáneo",
    tag: "Intermedio - Avanzado",
    description: "Fusión de técnicas modernas para una expresión artística completa.",
  },
  {
    icon: "⚡",
    title: "Zumba",
    tag: "Todos los niveles",
    description: "Ejercítate bailando. Diversión garantizada en cada clase.",
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
          className="text-center mb-4"
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

        <HoverEffect items={classes} />
      </div>
    </section>
  );
}
