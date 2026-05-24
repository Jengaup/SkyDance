"use client";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { motion } from "motion/react";

const testimonials = [
  { name: "María García",     quote: "Sky Dance cambió mi vida. Llegué sin saber bailar y ahora compito a nivel nacional. ¡Los mejores instructores!", title: "Salsa · 2 años" },
  { name: "Carlos Ruiz",      quote: "El ambiente es increíble. Se siente como una familia desde el primer día. Nunca pensé que bailaría así.", title: "Hip Hop · 1 año" },
  { name: "Sofía Martínez",   quote: "Probé mil academias y Sky Dance es diferente. La atención personalizada hace toda la diferencia.", title: "Bachata · 3 años" },
  { name: "Andrés López",     quote: "Vine a Zumba para ejercitarme y terminé aprendiendo salsa, reggaeton y bachata. ¡No me arrepiento!", title: "Multi-estilo · 1.5 años" },
  { name: "Valentina Torres", quote: "Gracias a Sky Dance perdí el miedo a bailar en público. Ahora soy la primera en la pista.", title: "Reggaeton · 8 meses" },
  { name: "Diego Herrera",    quote: "Instructores de clase mundial con corazón de familia. La mejor inversión que he hecho en mi vida.", title: "Contemporáneo · 2 años" },
];

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-10 border-t border-white/5">
      {/* Testimonials */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-purple-400 text-xs font-bold tracking-[0.4em] uppercase mb-3">
            ◈ Testimonios ◈
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white">
            Lo que dicen nuestros{" "}
            <span className="gradient-text-animated">alumnos</span>
          </h2>
        </motion.div>
        <InfiniteMovingCards items={testimonials} direction="left" speed="normal" pauseOnHover />
        <div className="mt-6">
          <InfiniteMovingCards items={[...testimonials].reverse()} direction="right" speed="slow" pauseOnHover />
        </div>
      </div>

      {/* CTA Banner */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden p-10 text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/60 via-pink-900/60 to-cyan-900/60" />
          <div className="absolute inset-0 border border-purple-500/20 rounded-2xl glow-purple" />
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
              Tu primera clase es <span className="gradient-text-animated">gratis</span>
            </h3>
            <p className="text-white/50 mb-6">Sin compromisos. Solo ven y siente la diferencia.</p>
            <a
              href="#contacto"
              className="inline-block px-10 py-4 rounded-full font-black text-white bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 hover:opacity-90 transition-opacity"
            >
              Reservar ahora ✦
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/5">
        <span className="text-2xl font-black gradient-text-animated">SKY DANCE</span>

        <div className="flex gap-6 text-xs text-white/30 uppercase tracking-widest">
          {["Clases", "Nosotros", "Horarios", "Contacto"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-purple-400 transition-colors">
              {item}
            </a>
          ))}
        </div>

        <p className="text-white/20 text-xs">
          © {new Date().getFullYear()} Sky Dance. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
