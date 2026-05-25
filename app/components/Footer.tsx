"use client";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { motion } from "motion/react";

const testimonials = [
  { name: "María García",     quote: "Sky Dance cambió mi vida. Llegué sin saber bailar y ahora compito a nivel nacional. ¡Los mejores instructores!",        title: "Salsa · 2 años"       },
  { name: "Carlos Ruiz",      quote: "El ambiente es increíble. Se siente como una familia desde el primer día. Nunca pensé que bailaría así.",                title: "Hip Hop · 1 año"      },
  { name: "Sofía Martínez",   quote: "Probé mil academias y Sky Dance es diferente. La atención personalizada hace toda la diferencia.",                       title: "Bachata · 3 años"     },
  { name: "Andrés López",     quote: "Vine a clases para ejercitarme y terminé aprendiendo salsa, ballet y bachata. ¡No me arrepiento para nada!",             title: "Multi-estilo · 1.5 años" },
  { name: "Valentina Torres", quote: "Gracias a Sky Dance perdí el miedo a bailar en público. Ahora soy la primera en la pista.",                             title: "Tap · 8 meses"        },
  { name: "Diego Herrera",    quote: "Instructores de clase mundial con corazón de familia. La mejor inversión que he hecho.",                                 title: "Music Teatro · 2 años" },
];

export default function Footer() {
  return (
    <footer className="relative pt-16 sm:pt-20 pb-8 sm:pb-10 border-t border-white/5">
      {/* Testimonials */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12 sm:mb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="text-center mb-8 sm:mb-10">
          <p className="text-purple-400 text-[10px] sm:text-xs font-bold tracking-[0.3em] sm:tracking-[0.4em] uppercase mb-2 sm:mb-3">
            ◈ Testimonios ◈
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
            Lo que dicen nuestros{" "}
            <span className="gradient-text-animated">alumnos</span>
          </h2>
        </motion.div>
        <InfiniteMovingCards items={testimonials} direction="left" speed="normal" pauseOnHover />
        <div className="mt-4 sm:mt-6">
          <InfiniteMovingCards items={[...testimonials].reverse()} direction="right" speed="slow" pauseOnHover />
        </div>
      </div>

      {/* CTA Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12 sm:mb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden p-7 sm:p-10 text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/60 via-pink-900/60 to-cyan-900/60" />
          <div className="absolute inset-0 border border-purple-500/20 rounded-2xl glow-purple" />
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-3 sm:mb-4">
              Tu primera clase es{" "}
              <span className="gradient-text-animated">gratis</span>
            </h3>
            <p className="text-white/50 mb-5 sm:mb-6 text-sm sm:text-base">Sin compromisos. Solo ven y siente la diferencia.</p>
            <a href="#contacto"
              className="inline-block px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-black text-white text-sm sm:text-base bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 hover:opacity-90 transition-opacity">
              Reservar ahora ✦
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 pt-6 sm:pt-8 border-t border-white/5 text-center md:text-left">
        <span className="text-xl sm:text-2xl font-black gradient-text-animated">SKY DANCE STUDIO PR</span>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-[10px] sm:text-xs text-white/30 uppercase tracking-widest">
          {["Clases","Nosotros","Galeria","Horarios","Contacto"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}
              className="hover:text-purple-400 transition-colors py-1">
              {item}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a href="https://www.facebook.com/skydancestudiopr" target="_blank" rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-black transition-all duration-300 hover:scale-110"
            style={{ color: "#1877f2", background: "#1877f215", border: "1px solid #1877f240" }}>FB</a>
          <a href="#" className="w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-black transition-all duration-300 hover:scale-110"
            style={{ color: "#ec4899", background: "#ec489915", border: "1px solid #ec489940" }}>IG</a>
          <a href="#" className="w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-black transition-all duration-300 hover:scale-110"
            style={{ color: "#22d3ee", background: "#22d3ee15", border: "1px solid #22d3ee40" }}>TK</a>
        </div>
      </div>
      <p className="text-center text-white/20 text-[10px] sm:text-xs mt-4 pb-2">
        © {new Date().getFullYear()} Sky Dance Studio PR · skydancestudio76@gmail.com
      </p>
    </footer>
  );
}
