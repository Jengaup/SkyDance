"use client";
import { motion } from "motion/react";
import { useState } from "react";
import { useLang } from "@/lib/lang";

const contactInfo = [
  { icon: "📍", label: { es: "Isabela", en: "Isabela" },         value: "Isabela, Puerto Rico",          color: "#a855f7", link: "https://maps.app.goo.gl/ko9AU7mF2EEk7QmT8" },
  { icon: "📍", label: { es: "Hatillo", en: "Hatillo" },         value: "Hatillo, Puerto Rico",           color: "#ec4899", link: "https://maps.app.goo.gl/jghgZB3SAyyF41QE8" },
  { icon: "✉️",  label: { es: "Email",   en: "Email" },           value: "skydancestudio76@gmail.com",    color: "#22d3ee", link: "mailto:skydancestudio76@gmail.com" },
  { icon: "👍", label: { es: "Facebook", en: "Facebook" },       value: "Sky Dance Studio PR",           color: "#a3e635", link: "https://www.facebook.com/skydancestudiopr" },
  { icon: "🕐", label: { es: "Horario oficina", en: "Office hours" }, value: "Lun–Sáb: 9:00 AM – 9:00 PM", color: "#f97316", link: null },
];

const inputClass =
  "w-full bg-white/5 border border-white/10 text-white placeholder-white/20 rounded-xl px-4 sm:px-5 py-3 sm:py-3.5 focus:outline-none focus:border-purple-500/60 focus:bg-purple-500/5 transition-all duration-300 text-sm";

export default function ContactSection() {
  const [sent, setSent] = useState(false);
  const { lang, tx } = useLang();
  const c = tx.contact;

  return (
    <section id="contacto" className="py-20 sm:py-28 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] sm:w-[400px] md:w-[600px] h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[600px] md:w-[800px] h-[200px] sm:h-[300px] md:h-[400px] bg-purple-600/10 rounded-full blur-[80px] md:blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12 sm:mb-20">
          <p className="text-purple-400 text-[10px] sm:text-xs font-bold tracking-[0.3em] sm:tracking-[0.4em] uppercase mb-3 sm:mb-4">
            {c.tag}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 sm:mb-4">
            {c.title1} <span className="gradient-text-animated">{c.title2}</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto text-sm sm:text-base">{c.sub}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10">
          {/* Info */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="lg:col-span-2 flex flex-col gap-3 sm:gap-4">
            {contactInfo.map((item) => {
              const inner = (
                <>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center text-base sm:text-lg flex-shrink-0"
                    style={{ background: `${item.color}20`, border: `1px solid ${item.color}40` }}>
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="text-white/30 text-[10px] sm:text-xs uppercase tracking-widest mb-0.5 sm:mb-1">{item.label[lang]}</div>
                    <div className="text-white font-semibold text-xs sm:text-sm break-words">{item.value}</div>
                  </div>
                </>
              );
              return item.link ? (
                <a key={item.label.es} href={item.link} target="_blank" rel="noopener noreferrer"
                  className="glass rounded-xl p-4 sm:p-5 border border-white/5 flex items-start gap-3 sm:gap-4 hover:border-white/20 transition-colors">
                  {inner}
                </a>
              ) : (
                <div key={item.label.es}
                  className="glass rounded-xl p-4 sm:p-5 border border-white/5 flex items-start gap-3 sm:gap-4">
                  {inner}
                </div>
              );
            })}

            <div className="glass rounded-xl p-4 sm:p-5 border border-white/5">
              <p className="text-white/30 text-[10px] sm:text-xs uppercase tracking-widest mb-3 sm:mb-4">{c.social}</p>
              <div className="flex gap-2 sm:gap-3">
                {[
                  { label: "Facebook",  color: "#1877f2", symbol: "FB", href: "https://www.facebook.com/skydancestudiopr" },
                  { label: "Instagram", color: "#ec4899", symbol: "IG", href: "#" },
                  { label: "TikTok",    color: "#22d3ee", symbol: "TK", href: "#" },
                ].map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg flex items-center justify-center text-xs font-black transition-all duration-300"
                    style={{ color: s.color, background: `${s.color}15`, border: `1px solid ${s.color}40` }}>
                    {s.symbol}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:col-span-3">
            {sent ? (
              <div className="h-full glass rounded-2xl border border-purple-500/30 glow-purple flex flex-col items-center justify-center text-center p-8 sm:p-12 min-h-[320px]">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}
                  transition={{ type: "spring", bounce: 0.5 }} className="text-5xl sm:text-7xl mb-4 sm:mb-6">
                  🎉
                </motion.div>
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-2 sm:mb-3">{c.sent.title}</h3>
                <p className="text-white/40 text-sm sm:text-base">{c.sent.sub}</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="glass rounded-2xl border border-purple-500/20 p-5 sm:p-7 md:p-8 flex flex-col gap-3 sm:gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <input type="text"  placeholder={c.fields.name}  required className={inputClass} />
                  <input type="email" placeholder={c.fields.email} required className={inputClass} />
                </div>
                <input type="tel" placeholder={c.fields.phone} className={inputClass} />
                <select required defaultValue="" className={inputClass}>
                  <option value="" disabled>{c.fields.classSelect}</option>
                  {["Salsa","Hip Hop","Ballet","Tap","Bachata","Music Teatro","Puntas"].map((cl) => (
                    <option key={cl} value={cl} className="bg-[#050508]">{cl}</option>
                  ))}
                </select>
                <select defaultValue="" className={inputClass}>
                  <option value="" disabled>{c.fields.location}</option>
                  {c.locations.map((loc) => (
                    <option key={loc} value={loc.toLowerCase()} className="bg-[#050508]">{loc}</option>
                  ))}
                </select>
                <textarea placeholder={c.fields.message} rows={3} className={`${inputClass} resize-none`} />
                <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  className="relative w-full py-3.5 sm:py-4 rounded-xl font-black text-white overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 group-hover:opacity-90 transition-opacity" />
                  <span className="relative z-10 text-sm sm:text-base">{c.fields.submit}</span>
                </motion.button>
                <p className="text-center text-white/20 text-xs">{c.fields.free}</p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
