"use client";
import { motion } from "motion/react";
import { useState } from "react";

const contactInfo = [
  { icon: "📍", label: "Dirección",       value: "Calle Principal 123, Ciudad",  color: "#a855f7" },
  { icon: "📞", label: "Teléfono",        value: "+1 (555) 000-0000",            color: "#ec4899" },
  { icon: "✉️",  label: "Email",           value: "hola@skydance.com",            color: "#22d3ee" },
  { icon: "🕐", label: "Horario oficina", value: "Lun–Sáb: 9:00 AM – 9:00 PM", color: "#a3e635" },
];

const inputClass =
  "w-full bg-white/5 border border-white/10 text-white placeholder-white/20 rounded-xl px-5 py-3.5 focus:outline-none focus:border-purple-500/60 focus:bg-purple-500/5 transition-all duration-300 text-sm";

export default function ContactSection() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contacto" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      {/* BG glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-purple-400 text-xs font-bold tracking-[0.4em] uppercase mb-4">
            ◈ Contáctanos ◈
          </p>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            ¿Listo para{" "}
            <span className="gradient-text-animated">empezar?</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto">
            Da el primer paso. Tu primera clase es gratis — sin compromisos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {contactInfo.map((item) => (
              <div
                key={item.label}
                className="glass rounded-xl p-5 border border-white/5 flex items-start gap-4 group hover:border-opacity-50 transition-all duration-300"
                style={{ "--hover-color": item.color } as React.CSSProperties}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-lg flex-shrink-0"
                  style={{ background: `${item.color}20`, border: `1px solid ${item.color}40` }}
                >
                  {item.icon}
                </div>
                <div>
                  <div className="text-white/30 text-xs uppercase tracking-widest mb-1">{item.label}</div>
                  <div className="text-white font-semibold text-sm">{item.value}</div>
                </div>
              </div>
            ))}

            {/* Social links */}
            <div className="glass rounded-xl p-5 border border-white/5">
              <p className="text-white/30 text-xs uppercase tracking-widest mb-4">Redes Sociales</p>
              <div className="flex gap-3">
                {[
                  { label: "Instagram", color: "#ec4899", symbol: "IG" },
                  { label: "TikTok", color: "#22d3ee", symbol: "TK" },
                  { label: "WhatsApp", color: "#a3e635", symbol: "WA" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href="#"
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-xs font-black transition-all duration-300"
                    style={{
                      color: s.color,
                      background: `${s.color}15`,
                      border: `1px solid ${s.color}40`,
                    }}
                    aria-label={s.label}
                  >
                    {s.symbol}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            {sent ? (
              <div className="h-full glass rounded-2xl border border-purple-500/30 glow-purple flex flex-col items-center justify-center text-center p-12">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", bounce: 0.5 }}
                  className="text-7xl mb-6"
                >
                  🎉
                </motion.div>
                <h3 className="text-3xl font-black text-white mb-3">¡Mensaje enviado!</h3>
                <p className="text-white/40">Te contactaremos muy pronto. ¡Prepárate para bailar!</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass rounded-2xl border border-purple-500/20 p-8 flex flex-col gap-4"
              >
                <div className="grid grid-cols-2 gap-4">
                  <input type="text"    placeholder="Tu nombre"    required className={inputClass} />
                  <input type="email"   placeholder="Tu email"     required className={inputClass} />
                </div>
                <input type="tel" placeholder="Teléfono (opcional)" className={inputClass} />
                <select required defaultValue="" className={inputClass}>
                  <option value="" disabled>¿Qué clase te interesa?</option>
                  {["Salsa", "Reggaeton", "Hip Hop", "Bachata", "Contemporáneo", "Zumba"].map((c) => (
                    <option key={c} value={c} className="bg-[#050508]">{c}</option>
                  ))}
                </select>
                <textarea
                  placeholder="Cuéntanos algo sobre ti (opcional)"
                  rows={3}
                  className={`${inputClass} resize-none`}
                />

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative w-full py-4 rounded-xl font-black text-white overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 transition-all duration-300 group-hover:opacity-90" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 transition-all duration-500" />
                  <span className="relative z-10">Enviar mensaje ✦</span>
                </motion.button>

                <p className="text-center text-white/20 text-xs">
                  Tu primera clase es completamente gratis 🎵
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
