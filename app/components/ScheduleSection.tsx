"use client";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { useLang } from "@/lib/lang";

type DayKey = "lunes" | "martes" | "miercoles" | "jueves" | "viernes" | "sabado";
type ScheduleRow = { clase: string; color: string } & Record<DayKey, string>;

const scheduleIsabela: ScheduleRow[] = [
  { clase: "Salsa",        color: "#ec4899", lunes: "7:00 PM", martes: "",        miercoles: "7:00 PM", jueves: "",        viernes: "6:00 PM", sabado: "10:00 AM" },
  { clase: "Hip Hop",      color: "#a855f7", lunes: "",        martes: "7:00 PM", miercoles: "6:00 PM", jueves: "7:00 PM", viernes: "",        sabado: "12:00 PM" },
  { clase: "Ballet",       color: "#f9a8d4", lunes: "5:00 PM", martes: "5:00 PM", miercoles: "",        jueves: "5:00 PM", viernes: "5:00 PM", sabado: "9:00 AM"  },
  { clase: "Tap",          color: "#f97316", lunes: "",        martes: "6:00 PM", miercoles: "6:00 PM", jueves: "",        viernes: "7:00 PM", sabado: "11:00 AM" },
  { clase: "Bachata",      color: "#d946ef", lunes: "8:00 PM", martes: "",        miercoles: "8:00 PM", jueves: "",        viernes: "8:00 PM", sabado: "10:00 AM" },
  { clase: "Music Teatro", color: "#22d3ee", lunes: "",        martes: "5:00 PM", miercoles: "",        jueves: "6:00 PM", viernes: "",        sabado: "1:00 PM"  },
  { clase: "Puntas",       color: "#a3e635", lunes: "6:00 PM", martes: "",        miercoles: "5:00 PM", jueves: "",        viernes: "6:00 PM", sabado: ""         },
];

// ⚠️ Actualiza estos horarios con los reales de Hatillo
const scheduleHatillo: ScheduleRow[] = [
  { clase: "Salsa",        color: "#ec4899", lunes: "6:00 PM", martes: "",        miercoles: "6:00 PM", jueves: "",        viernes: "7:00 PM", sabado: "11:00 AM" },
  { clase: "Hip Hop",      color: "#a855f7", lunes: "7:00 PM", martes: "",        miercoles: "",        jueves: "7:00 PM", viernes: "6:00 PM", sabado: "1:00 PM"  },
  { clase: "Ballet",       color: "#f9a8d4", lunes: "",        martes: "5:00 PM", miercoles: "5:00 PM", jueves: "",        viernes: "5:00 PM", sabado: "9:00 AM"  },
  { clase: "Tap",          color: "#f97316", lunes: "",        martes: "",        miercoles: "7:00 PM", jueves: "6:00 PM", viernes: "",        sabado: "10:00 AM" },
  { clase: "Bachata",      color: "#d946ef", lunes: "8:00 PM", martes: "",        miercoles: "",        jueves: "8:00 PM", viernes: "8:00 PM", sabado: ""         },
  { clase: "Music Teatro", color: "#22d3ee", lunes: "",        martes: "6:00 PM", miercoles: "",        jueves: "",        viernes: "6:00 PM", sabado: "12:00 PM" },
  { clase: "Puntas",       color: "#a3e635", lunes: "",        martes: "5:00 PM", miercoles: "6:00 PM", jueves: "",        viernes: "",        sabado: ""         },
];

const dayKeys: DayKey[] = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];

export default function ScheduleSection() {
  const { tx } = useLang();
  const s = tx.schedule;
  const [location, setLocation] = useState<"isabela" | "hatillo">("isabela");

  const schedule = location === "isabela" ? scheduleIsabela : scheduleHatillo;
  const accentColor = location === "isabela" ? "#a855f7" : "#22d3ee";
  const glowClass   = location === "isabela" ? "glow-purple" : "glow-cyan";
  const borderClass = location === "isabela" ? "border-purple-500/30" : "border-cyan-500/30";

  return (
    <section id="horarios" className="py-20 sm:py-28 px-4 sm:px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] sm:w-[400px] md:w-[600px] h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-10 sm:mb-14">
          <p className="text-cyan-400 text-[10px] sm:text-xs font-bold tracking-[0.3em] sm:tracking-[0.4em] uppercase mb-3 sm:mb-4">
            {s.tag}
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-3 sm:mb-4">
            {s.title1} <span className="gradient-text-animated">{s.title2}</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto text-sm sm:text-base">{s.sub}</p>
        </motion.div>

        {/* Location tabs */}
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-8 sm:mb-10">
          <div className="inline-flex glass rounded-2xl p-1 border border-white/10 gap-1">
            {(["isabela", "hatillo"] as const).map((loc) => {
              const active = location === loc;
              const color  = loc === "isabela" ? "#a855f7" : "#22d3ee";
              return (
                <button
                  key={loc}
                  onClick={() => setLocation(loc)}
                  className="relative px-6 sm:px-10 py-2.5 sm:py-3 rounded-xl text-sm font-bold tracking-wide transition-all duration-300"
                  style={active ? {
                    background: `${color}20`,
                    color,
                    border: `1px solid ${color}50`,
                    boxShadow: `0 0 15px ${color}30`,
                  } : {
                    color: "rgba(255,255,255,0.35)",
                    border: "1px solid transparent",
                  }}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-base">📍</span>
                    {s[loc]}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Schedule table */}
        <AnimatePresence mode="wait">
          <motion.div
            key={location}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className={`overflow-x-auto rounded-2xl glass border ${borderClass} ${glowClass} -mx-2 sm:mx-0`}
          >
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
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors">
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
        </AnimatePresence>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center text-white/20 text-[10px] sm:text-xs mt-4 sm:mt-6 uppercase tracking-widest">
          {s.note}
        </motion.p>
      </div>
    </section>
  );
}
