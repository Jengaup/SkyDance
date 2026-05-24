"use client";
import { motion } from "motion/react";

const schedule = [
  { clase: "Salsa",         color: "#ec4899", lunes: "7:00 PM", martes: "",        miercoles: "7:00 PM", jueves: "",        viernes: "6:00 PM", sabado: "10:00 AM" },
  { clase: "Hip Hop",       color: "#a855f7", lunes: "",        martes: "7:00 PM", miercoles: "6:00 PM", jueves: "7:00 PM", viernes: "",        sabado: "12:00 PM" },
  { clase: "Ballet",        color: "#f9a8d4", lunes: "5:00 PM", martes: "5:00 PM", miercoles: "",        jueves: "5:00 PM", viernes: "5:00 PM", sabado: "9:00 AM"  },
  { clase: "Tap",           color: "#f97316", lunes: "",        martes: "6:00 PM", miercoles: "6:00 PM", jueves: "",        viernes: "7:00 PM", sabado: "11:00 AM" },
  { clase: "Bachata",       color: "#d946ef", lunes: "8:00 PM", martes: "",        miercoles: "8:00 PM", jueves: "",        viernes: "8:00 PM", sabado: "10:00 AM" },
  { clase: "Music Teatro",  color: "#22d3ee", lunes: "",        martes: "5:00 PM", miercoles: "",        jueves: "6:00 PM", viernes: "",        sabado: "1:00 PM"  },
  { clase: "Puntas",        color: "#a3e635", lunes: "6:00 PM", martes: "",        miercoles: "5:00 PM", jueves: "",        viernes: "6:00 PM", sabado: ""         },
];

const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
const dayKeys = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado"] as const;

export default function ScheduleSection() {
  return (
    <section id="horarios" className="py-28 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-cyan-400 text-xs font-bold tracking-[0.4em] uppercase mb-4">
            ◈ Horarios ◈
          </p>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            Tu semana en{" "}
            <span className="gradient-text-animated">movimiento</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto">
            Horarios flexibles de lunes a sábado para que nunca pierdas una clase.
          </p>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="overflow-x-auto rounded-2xl glass border border-white/5 glow-cyan"
        >
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="px-6 py-5 text-left text-white/30 font-semibold text-xs uppercase tracking-widest">
                  Clase
                </th>
                {days.map((d) => (
                  <th key={d} className="px-4 py-5 text-center text-white/30 font-semibold text-xs uppercase tracking-widest">
                    {d}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {schedule.map((row, i) => (
                <motion.tr
                  key={row.clase}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="border-b border-white/5 hover:bg-white/5 transition-colors group"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-2 h-8 rounded-full"
                        style={{ background: row.color, boxShadow: `0 0 8px ${row.color}` }}
                      />
                      <span className="font-bold text-white group-hover:text-white/90">{row.clase}</span>
                    </div>
                  </td>
                  {dayKeys.map((key) => (
                    <td key={key} className="px-4 py-4 text-center">
                      {row[key] ? (
                        <span
                          className="inline-block px-3 py-1.5 rounded-full text-xs font-bold"
                          style={{
                            color: row.color,
                            background: `${row.color}15`,
                            border: `1px solid ${row.color}40`,
                            boxShadow: `0 0 10px ${row.color}20`,
                          }}
                        >
                          {row[key]}
                        </span>
                      ) : (
                        <span className="text-white/10 text-lg">·</span>
                      )}
                    </td>
                  ))}
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center text-white/20 text-xs mt-6 uppercase tracking-widest"
        >
          ✦ Los horarios pueden variar en días festivos ✦
        </motion.p>
      </div>
    </section>
  );
}
