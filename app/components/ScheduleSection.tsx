"use client";
import { motion } from "motion/react";
import { useLang } from "@/lib/lang";

const schedule = [
  { clase: "Salsa",        color: "#ec4899", lunes: "7:00 PM", martes: "",        miercoles: "7:00 PM", jueves: "",        viernes: "6:00 PM", sabado: "10:00 AM" },
  { clase: "Hip Hop",      color: "#a855f7", lunes: "",        martes: "7:00 PM", miercoles: "6:00 PM", jueves: "7:00 PM", viernes: "",        sabado: "12:00 PM" },
  { clase: "Ballet",       color: "#f9a8d4", lunes: "5:00 PM", martes: "5:00 PM", miercoles: "",        jueves: "5:00 PM", viernes: "5:00 PM", sabado: "9:00 AM"  },
  { clase: "Tap",          color: "#f97316", lunes: "",        martes: "6:00 PM", miercoles: "6:00 PM", jueves: "",        viernes: "7:00 PM", sabado: "11:00 AM" },
  { clase: "Bachata",      color: "#d946ef", lunes: "8:00 PM", martes: "",        miercoles: "8:00 PM", jueves: "",        viernes: "8:00 PM", sabado: "10:00 AM" },
  { clase: "Music Teatro", color: "#22d3ee", lunes: "",        martes: "5:00 PM", miercoles: "",        jueves: "6:00 PM", viernes: "",        sabado: "1:00 PM"  },
  { clase: "Puntas",       color: "#a3e635", lunes: "6:00 PM", martes: "",        miercoles: "5:00 PM", jueves: "",        viernes: "6:00 PM", sabado: ""         },
];

const dayKeys = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado"] as const;

export default function ScheduleSection() {
  const { tx } = useLang();
  const s = tx.schedule;

  return (
    <section id="horarios" className="py-20 sm:py-28 px-4 sm:px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] sm:w-[400px] md:w-[600px] h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12 sm:mb-20">
          <p className="text-cyan-400 text-[10px] sm:text-xs font-bold tracking-[0.3em] sm:tracking-[0.4em] uppercase mb-3 sm:mb-4">
            {s.tag}
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-3 sm:mb-4">
            {s.title1} <span className="gradient-text-animated">{s.title2}</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto text-sm sm:text-base">{s.sub}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
          className="overflow-x-auto rounded-2xl glass border border-white/5 glow-cyan -mx-2 sm:mx-0">
          <table className="w-full text-xs sm:text-sm min-w-[520px]">
            <thead>
              <tr className="border-b border-white/10">
                <th className="px-3 sm:px-5 py-3 sm:py-4 text-left text-white/30 font-semibold text-[10px] sm:text-xs uppercase tracking-widest">
                  {tx.nav.classes}
                </th>
                {s.days.map((d) => (
                  <th key={d} className="px-2 sm:px-3 py-3 sm:py-4 text-center text-white/30 font-semibold text-[10px] sm:text-xs uppercase tracking-widest">
                    {d}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {schedule.map((row, i) => (
                <motion.tr key={row.clase}
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                  className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                  <td className="px-3 sm:px-5 py-3 sm:py-4">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-1.5 sm:w-2 h-6 sm:h-8 rounded-full flex-shrink-0"
                        style={{ background: row.color, boxShadow: `0 0 8px ${row.color}` }} />
                      <span className="font-bold text-white text-xs sm:text-sm whitespace-nowrap">{row.clase}</span>
                    </div>
                  </td>
                  {dayKeys.map((key) => (
                    <td key={key} className="px-1 sm:px-2 py-3 sm:py-4 text-center">
                      {row[key] ? (
                        <span className="inline-block px-1.5 sm:px-2.5 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold whitespace-nowrap"
                          style={{ color: row.color, background: `${row.color}15`, border: `1px solid ${row.color}40`, boxShadow: `0 0 8px ${row.color}15` }}>
                          {row[key]}
                        </span>
                      ) : (
                        <span className="text-white/10">·</span>
                      )}
                    </td>
                  ))}
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center text-white/20 text-[10px] sm:text-xs mt-4 sm:mt-6 uppercase tracking-widest">
          {s.note}
        </motion.p>
      </div>
    </section>
  );
}
