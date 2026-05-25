"use client";
import { motion } from "motion/react";
import { useState } from "react";

const photos = [
  { src: "/fotos/foto1.jpg", alt: "Equipo Sky Dance — Campeones All Dance PR 2026", caption: "🏆 Grand Champions · All Dance Puerto Rico 2026" },
  { src: "/fotos/foto2.jpg", alt: "Medallistas All Dance PR 2026", caption: "🥇 Medallistas · All Dance Puerto Rico 2026" },
  { src: "/fotos/foto3.jpg", alt: "Bailarinas en competencia", caption: "✨ Sky Dance en el escenario" },
  { src: "/fotos/foto4.jpg", alt: "Performance grupal en escenario", caption: "💃 Performance grupal · All Dance PR" },
  { src: "/fotos/foto5.jpg", alt: "Solo contemporáneo", caption: "🌊 Solo contemporáneo · All Dance PR" },
];

export default function GallerySection() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="galeria" className="py-20 sm:py-28 px-4 sm:px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] sm:w-[600px] h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" style={{ background: "linear-gradient(to right, transparent, #FFD700aa, transparent)" }} />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase mb-3" style={{ color: "#FFD700" }}>
            ◈ Logros y Competencias ◈
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3">
            Campeones en{" "}
            <span className="gradient-text-animated">el escenario</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto text-sm sm:text-base">
            Nuestros estudiantes compiten y ganan a nivel nacional. Orgullo puertorriqueño en cada presentación.
          </p>
        </motion.div>

        {/* Trophy banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10 sm:mb-14"
        >
          {[
            { icon: "🏆", text: "Grand Champions", sub: "All Dance PR 2026" },
            { icon: "🥇", text: "Múltiples Oros",   sub: "Competencias Nacionales" },
            { icon: "🎖️", text: "10+ Años",         sub: "Formando Campeones" },
            { icon: "🇵🇷", text: "Orgullo Boricua",  sub: "Isabela · Hatillo" },
          ].map((item, i) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl px-5 py-3 text-center border"
              style={{ borderColor: "#FFD70030" }}
            >
              <div className="text-2xl mb-1">{item.icon}</div>
              <div className="font-black text-white text-sm">{item.text}</div>
              <div className="text-[10px] uppercase tracking-widest" style={{ color: "#FFD700" }}>{item.sub}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              onClick={() => setSelected(i)}
              className={`relative rounded-2xl overflow-hidden cursor-pointer group ${i === 0 ? "col-span-2 sm:col-span-2 row-span-1" : ""}`}
              style={{ aspectRatio: i === 0 ? "16/7" : "4/3" }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white text-xs sm:text-sm font-semibold">{photo.caption}</p>
              </div>
              {/* Glow border on hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-yellow-400/50 transition-all duration-300" style={{ boxShadow: "0 0 0 0 transparent" }} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelected(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full"
          >
            <img
              src={photos[selected].src}
              alt={photos[selected].alt}
              className="w-full rounded-2xl"
            />
            <p className="text-center text-white/70 text-sm mt-3">{photos[selected].caption}</p>
            <button
              onClick={() => setSelected(null)}
              className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-colors text-xs"
            >
              ✕
            </button>
            <div className="flex justify-center gap-3 mt-4">
              <button onClick={() => setSelected(Math.max(0, selected - 1))}
                className="px-4 py-2 rounded-full glass border border-white/10 text-white/60 text-sm hover:text-white transition-colors disabled:opacity-30"
                disabled={selected === 0}>← Anterior</button>
              <button onClick={() => setSelected(Math.min(photos.length - 1, selected + 1))}
                className="px-4 py-2 rounded-full glass border border-white/10 text-white/60 text-sm hover:text-white transition-colors disabled:opacity-30"
                disabled={selected === photos.length - 1}>Siguiente →</button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
