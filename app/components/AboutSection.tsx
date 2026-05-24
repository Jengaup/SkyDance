"use client";
import { motion } from "motion/react";

const stats = [
  { value: "10+", label: "Años de experiencia" },
  { value: "500+", label: "Estudiantes formados" },
  { value: "6", label: "Estilos de baile" },
  { value: "15+", label: "Instructores certificados" },
];

export default function AboutSection() {
  return (
    <section id="nosotros" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase">
              Sobre Nosotros
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6 leading-tight">
              Más que una academia,{" "}
              <span className="bg-gradient-to-r from-amber-400 to-cyan-400 bg-clip-text text-transparent">
                una familia
              </span>
            </h2>
            <p className="text-white/60 leading-relaxed mb-4">
              Sky Dance nació de la pasión por el baile y el deseo de compartirla con el mundo.
              Desde hace más de 10 años formamos bailarines con técnica, disciplina y mucho amor
              por el arte del movimiento.
            </p>
            <p className="text-white/60 leading-relaxed mb-8">
              Nuestros instructores son profesionales con años de experiencia en competencias
              nacionales e internacionales, comprometidos con el desarrollo personal de cada estudiante.
            </p>
            <a
              href="#contacto"
              className="inline-block bg-gradient-to-r from-amber-400 to-cyan-500 text-black font-bold px-8 py-3 rounded-full hover:opacity-90 transition"
            >
              Conoce al equipo
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center"
              >
                <div className="text-4xl font-extrabold bg-gradient-to-r from-amber-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-white/50 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
