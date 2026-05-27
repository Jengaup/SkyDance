"use client";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useCallback } from "react";
import { useLang } from "@/lib/lang";

const photos = [
  "/fotos/670937440_18416445175134719_1064323023893670023_n.jpg",
  "/fotos/683570671_18418121794134719_1868718503442159110_n.jpg",
  "/fotos/683656743_18418121785134719_1428777532013717841_n.jpg",
  "/fotos/684284593_1424294383065610_4582390303114057001_n.jpg",
  "/fotos/686974308_1424294386398943_2368728705505639202_n.jpg",
  "/fotos/688811298_1426207406207641_4598089432210650265_n.jpg",
  "/fotos/688887466_1425369962958052_4134452874493227124_n.jpg",
  "/fotos/689036465_1426207399540975_8197830958130482299_n.jpg",
  "/fotos/702210791_1439212614907120_8663173996364897358_n.jpg",
  "/fotos/702215301_1439212598240455_7409609665681530803_n.jpg",
  "/fotos/703170403_1439212608240454_5325879376711441794_n.jpg",
];

export default function GallerySection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const { tx } = useLang();
  const g = tx.gallery;

  const go = useCallback((next: number, dir: number) => {
    setDirection(dir);
    setCurrent((next + photos.length) % photos.length);
  }, []);

  const prev = () => go(current - 1, -1);
  const next = () => go(current + 1, 1);

  useEffect(() => {
    if (paused || lightbox !== null) return;
    const id = setInterval(() => go(current + 1, 1), 4000);
    return () => clearInterval(id);
  }, [current, paused, lightbox, go]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  return (
    <section id="galeria" className="py-20 sm:py-28 px-4 sm:px-6 relative">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] sm:w-[600px] h-px"
        style={{ background: "linear-gradient(to right, transparent, #FFD700aa, transparent)" }}
      />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase mb-3" style={{ color: "#FFD700" }}>
            {g.tag}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3">
            {g.title1}{" "}
            <span className="gradient-text-animated">{g.title2}</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto text-sm sm:text-base">
            {g.sub}
          </p>
        </motion.div>

        {/* Trophy banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10 sm:mb-14"
        >
          {g.trophies.map((item, i) => (
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

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden bg-black"
          style={{ aspectRatio: "4/3" }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence custom={direction} initial={false}>
            <motion.img
              key={current}
              src={photos[current]}
              alt={`Sky Dance foto ${current + 1}`}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-contain cursor-pointer"
              onClick={() => setLightbox(current)}
            />
          </AnimatePresence>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

          {/* Prev / Next */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 border border-white/20 text-white text-xl flex items-center justify-center hover:bg-black/60 transition-colors z-10"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 border border-white/20 text-white text-xl flex items-center justify-center hover:bg-black/60 transition-colors z-10"
          >
            ›
          </button>

          {/* Counter */}
          <div className="absolute bottom-4 right-4 text-white/60 text-xs font-mono z-10">
            {current + 1} / {photos.length}
          </div>
        </motion.div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {photos.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i, i > current ? 1 : -1)}
              className="w-2 h-2 rounded-full transition-all duration-300"
              style={{
                background: i === current ? "#FFD700" : "rgba(255,255,255,0.25)",
                transform: i === current ? "scale(1.3)" : "scale(1)",
              }}
            />
          ))}
        </div>

        {/* Thumbnail strip */}
        <div className="flex gap-2 mt-4 overflow-x-auto pb-2 justify-center">
          {photos.map((src, i) => (
            <button
              key={i}
              onClick={() => go(i, i > current ? 1 : -1)}
              className="flex-shrink-0 rounded-lg overflow-hidden transition-all duration-300"
              style={{
                width: 64,
                height: 48,
                outline: i === current ? "2px solid #FFD700" : "2px solid transparent",
                opacity: i === current ? 1 : 0.5,
              }}
            >
              <img src={src} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full"
            >
              <img
                src={photos[lightbox]}
                alt={`Sky Dance foto ${lightbox + 1}`}
                className="w-full rounded-2xl"
              />
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-colors text-xs"
              >
                ✕
              </button>
              <div className="flex justify-center gap-3 mt-4">
                <button
                  onClick={() => setLightbox((lightbox - 1 + photos.length) % photos.length)}
                  className="px-4 py-2 rounded-full glass border border-white/10 text-white/60 text-sm hover:text-white transition-colors"
                >
                  ← Anterior
                </button>
                <button
                  onClick={() => setLightbox((lightbox + 1) % photos.length)}
                  className="px-4 py-2 rounded-full glass border border-white/10 text-white/60 text-sm hover:text-white transition-colors"
                >
                  Siguiente →
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
