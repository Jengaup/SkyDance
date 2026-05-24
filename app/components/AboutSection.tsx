"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const stats = [
  { value: 500, suffix: "+", label: "Estudiantes formados", color: "#a855f7", glow: "glow-purple" },
  { value: 10,  suffix: "+", label: "Años de experiencia", color: "#ec4899", glow: "glow-pink" },
  { value: 15,  suffix: "+", label: "Instructores certificados", color: "#22d3ee", glow: "glow-cyan" },
  { value: 6,   suffix: "",  label: "Estilos de baile", color: "#a3e635", glow: "glow-lime" },
];

function StatCard({ value, suffix, label, color, glow, delay }: {
  value: number; suffix: string; label: string; color: string; glow: string; delay: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay }}
      className={`glass rounded-2xl p-8 text-center border transition-all duration-500 hover:${glow}`}
      style={{ borderColor: `${color}30` }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: delay + 0.2 }}
        className="text-5xl font-black mb-2"
        style={{ color, textShadow: `0 0 20px ${color}80` }}
      >
        {inView ? value : 0}{suffix}
      </motion.div>
      <div className="text-white/40 text-sm uppercase tracking-widest">{label}</div>
    </motion.div>
  );
}

export default function AboutSection() {
  return (
    <section id="nosotros" className="py-28 px-6 relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-pink-600/10 rounded-full blur-[100px] -translate-y-1/2" />
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-pink-400 text-xs font-bold tracking-[0.4em] uppercase mb-4">
              ◈ Quiénes Somos ◈
            </p>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight">
              Más que clases,{" "}
              <span className="gradient-text-animated">una pasión</span>
            </h2>

            <div className="space-y-6 text-white/50 leading-relaxed">
              <p>
                Sky Dance nació en 2014 con un sueño: hacer que cada persona pueda
                expresarse a través del baile sin importar su nivel. Hoy somos la academia
                más reconocida de la ciudad.
              </p>
              <p>
                Nuestros instructores han competido en torneos nacionales e internacionales
                y traen ese nivel de excelencia a cada clase, adaptándolo para que sea
                accesible, divertido y transformador.
              </p>
            </div>

            {/* Features list */}
            <div className="mt-10 space-y-4">
              {[
                { text: "Clases personalizadas para tu nivel", color: "#a855f7" },
                { text: "Ambiente profesional y acogedor", color: "#ec4899" },
                { text: "Certificados oficiales de nivel", color: "#22d3ee" },
                { text: "Clases de prueba gratuitas", color: "#a3e635" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: item.color, boxShadow: `0 0 8px ${item.color}` }} />
                  <span className="text-white/70 text-sm">{item.text}</span>
                </div>
              ))}
            </div>

            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block mt-10 px-8 py-4 rounded-full font-bold text-white border border-pink-500/50 glow-pink glass hover:border-pink-400 transition-all duration-300"
            >
              Reserva tu clase gratis →
            </motion.a>
          </motion.div>

          {/* Right: stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <StatCard key={stat.label} {...stat} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
