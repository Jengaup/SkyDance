"use client";
import { motion } from "motion/react";

const schedule = [
  { clase: "Salsa", lunes: "7:00 PM", martes: "", miercoles: "7:00 PM", jueves: "", viernes: "6:00 PM", sabado: "10:00 AM" },
  { clase: "Reggaeton", lunes: "6:00 PM", martes: "6:00 PM", miercoles: "", jueves: "6:00 PM", viernes: "", sabado: "11:00 AM" },
  { clase: "Hip Hop", lunes: "", martes: "7:00 PM", miercoles: "6:00 PM", jueves: "7:00 PM", viernes: "", sabado: "12:00 PM" },
  { clase: "Bachata", lunes: "8:00 PM", martes: "", miercoles: "8:00 PM", jueves: "", viernes: "7:00 PM", sabado: "10:00 AM" },
  { clase: "Contemporáneo", lunes: "", martes: "5:00 PM", miercoles: "", jueves: "5:00 PM", viernes: "5:00 PM", sabado: "" },
  { clase: "Zumba", lunes: "5:00 PM", martes: "", miercoles: "5:00 PM", jueves: "", viernes: "8:00 PM", sabado: "9:00 AM" },
];

const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
const dayKeys = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado"] as const;

export default function ScheduleSection() {
  return (
    <section id="horarios" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase">
            Horarios
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Elige tu{" "}
            <span className="bg-gradient-to-r from-amber-400 to-cyan-400 bg-clip-text text-transparent">
              horario ideal
            </span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Tenemos clases de lunes a sábado para que puedas organizar tu semana sin sacrificar el baile.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-x-auto rounded-2xl border border-white/10"
        >
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/5 border-b border-white/10">
                <th className="px-6 py-4 text-left text-white/70 font-semibold">Clase</th>
                {days.map((d) => (
                  <th key={d} className="px-4 py-4 text-center text-white/70 font-semibold">
                    {d}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {schedule.map((row, i) => (
                <tr
                  key={row.clase}
                  className={`border-b border-white/5 hover:bg-white/5 transition-colors ${i % 2 === 0 ? "" : "bg-white/[0.02]"}`}
                >
                  <td className="px-6 py-4 font-semibold text-white">{row.clase}</td>
                  {dayKeys.map((key) => (
                    <td key={key} className="px-4 py-4 text-center">
                      {row[key] ? (
                        <span className="text-amber-400 font-medium">{row[key]}</span>
                      ) : (
                        <span className="text-white/20">—</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
