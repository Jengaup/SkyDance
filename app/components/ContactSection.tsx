"use client";
import { motion } from "motion/react";
import { useState } from "react";

export default function ContactSection() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contacto" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase">
            Contacto
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            ¿Listo para{" "}
            <span className="bg-gradient-to-r from-amber-400 to-cyan-400 bg-clip-text text-transparent">
              empezar?
            </span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Escríbenos y te ayudaremos a encontrar la clase perfecta para ti.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            {[
              { icon: "📍", label: "Dirección", value: "Calle Principal 123, Ciudad" },
              { icon: "📞", label: "Teléfono", value: "+1 (555) 000-0000" },
              { icon: "✉️", label: "Email", value: "hola@skydance.com" },
              { icon: "🕐", label: "Horario oficina", value: "Lun–Sáb: 9:00 AM – 9:00 PM" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <div className="text-white/40 text-xs uppercase tracking-wide mb-1">{item.label}</div>
                  <div className="text-white font-medium">{item.value}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {sent ? (
              <div className="bg-gradient-to-br from-amber-500/20 to-cyan-500/20 border border-amber-400/30 rounded-2xl p-10 text-center">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold text-white mb-2">¡Mensaje enviado!</h3>
                <p className="text-white/60">Te contactaremos pronto. ¡Prepárate para bailar!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Tu nombre"
                  required
                  className="bg-white/5 border border-white/10 text-white placeholder-white/30 rounded-xl px-5 py-3 focus:outline-none focus:border-amber-400/50 transition"
                />
                <input
                  type="email"
                  placeholder="Tu email"
                  required
                  className="bg-white/5 border border-white/10 text-white placeholder-white/30 rounded-xl px-5 py-3 focus:outline-none focus:border-amber-400/50 transition"
                />
                <input
                  type="tel"
                  placeholder="Tu teléfono (opcional)"
                  className="bg-white/5 border border-white/10 text-white placeholder-white/30 rounded-xl px-5 py-3 focus:outline-none focus:border-amber-400/50 transition"
                />
                <select
                  required
                  defaultValue=""
                  className="bg-white/5 border border-white/10 text-white/70 rounded-xl px-5 py-3 focus:outline-none focus:border-amber-400/50 transition"
                >
                  <option value="" disabled>¿Qué clase te interesa?</option>
                  {["Salsa", "Reggaeton", "Hip Hop", "Bachata", "Contemporáneo", "Zumba"].map((c) => (
                    <option key={c} value={c} className="bg-[#0a0a0f]">{c}</option>
                  ))}
                </select>
                <textarea
                  placeholder="Mensaje (opcional)"
                  rows={3}
                  className="bg-white/5 border border-white/10 text-white placeholder-white/30 rounded-xl px-5 py-3 focus:outline-none focus:border-amber-400/50 transition resize-none"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-amber-400 to-cyan-500 text-black font-bold px-8 py-4 rounded-full hover:opacity-90 transition text-lg"
                >
                  Enviar mensaje
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
