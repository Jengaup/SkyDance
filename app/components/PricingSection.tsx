"use client";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { useLang } from "@/lib/lang";

type Plan = {
  id: string;
  icon: string;
  name: string;
  price: string;
  period: string;
  desc: string;
  features: string[];
  color: string;
  gradient: string;
  border: string;
  glow: string;
  badge?: string;
};

const plans: { es: Plan[]; en: Plan[] } = {
  es: [
    {
      id: "matricula",
      icon: "🎓",
      name: "Matrícula",
      price: "$25",
      period: "pago único",
      desc: "Inscripción oficial a Sky Dance Studio PR",
      features: ["Registro en el sistema", "Evaluación de nivel gratis", "Kit de bienvenida", "Acceso al portal de alumnos"],
      color: "#a855f7", gradient: "from-purple-600/20 to-violet-600/5",
      border: "border-purple-500/40", glow: "glow-purple",
    },
    {
      id: "mensualidad",
      icon: "💳",
      name: "Mensualidad",
      price: "$80",
      period: "/ mes",
      desc: "Una disciplina — clases ilimitadas en un estilo",
      features: ["Clases ilimitadas en 1 estilo", "Acceso a todas las sesiones", "Evaluaciones mensuales", "Descuento en competencias"],
      color: "#ec4899", gradient: "from-pink-600/20 to-rose-600/5",
      border: "border-pink-500/40", glow: "glow-pink",
      badge: "POPULAR",
    },
    {
      id: "paquete",
      icon: "⭐",
      name: "Paquete Premium",
      price: "$120",
      period: "/ mes",
      desc: "Acceso completo — todos los estilos disponibles",
      features: ["Clases en todos los estilos", "Prioridad en competencias", "Clases privadas con descuento", "Acceso Isabela + Hatillo"],
      color: "#D4AF37", gradient: "from-yellow-600/20 to-amber-600/5",
      border: "border-yellow-500/40", glow: "glow-gold",
      badge: "MEJOR VALOR",
    },
    {
      id: "clase",
      icon: "🎵",
      name: "Clase Suelta",
      price: "$15",
      period: "por clase",
      desc: "Prueba antes de comprometerte",
      features: ["1 clase en cualquier estilo", "Sin compromiso", "Incluye evaluación inicial", "Válida por 30 días"],
      color: "#22d3ee", gradient: "from-cyan-600/20 to-teal-600/5",
      border: "border-cyan-500/40", glow: "glow-cyan",
    },
  ],
  en: [
    {
      id: "matricula",
      icon: "🎓",
      name: "Enrollment Fee",
      price: "$25",
      period: "one-time",
      desc: "Official registration at Sky Dance Studio PR",
      features: ["System registration", "Free level evaluation", "Welcome kit", "Student portal access"],
      color: "#a855f7", gradient: "from-purple-600/20 to-violet-600/5",
      border: "border-purple-500/40", glow: "glow-purple",
    },
    {
      id: "mensualidad",
      icon: "💳",
      name: "Monthly Plan",
      price: "$80",
      period: "/ month",
      desc: "One discipline — unlimited classes in one style",
      features: ["Unlimited classes in 1 style", "Access to all sessions", "Monthly evaluations", "Competition discount"],
      color: "#ec4899", gradient: "from-pink-600/20 to-rose-600/5",
      border: "border-pink-500/40", glow: "glow-pink",
      badge: "POPULAR",
    },
    {
      id: "paquete",
      icon: "⭐",
      name: "Premium Package",
      price: "$120",
      period: "/ month",
      desc: "Full access — all available styles",
      features: ["Classes in all styles", "Competition priority", "Private class discount", "Isabela + Hatillo access"],
      color: "#D4AF37", gradient: "from-yellow-600/20 to-amber-600/5",
      border: "border-yellow-500/40", glow: "glow-gold",
      badge: "BEST VALUE",
    },
    {
      id: "clase",
      icon: "🎵",
      name: "Drop-in Class",
      price: "$15",
      period: "per class",
      desc: "Try before committing",
      features: ["1 class in any style", "No commitment", "Includes initial evaluation", "Valid for 30 days"],
      color: "#22d3ee", gradient: "from-cyan-600/20 to-teal-600/5",
      border: "border-cyan-500/40", glow: "glow-cyan",
    },
  ],
};

type ModalPlan = Plan & { lang: "es" | "en" };

function CloverModal({ plan, onClose }: { plan: ModalPlan; onClose: () => void }) {
  const isEs = plan.lang === "es";
  const [step, setStep] = useState<"detail" | "form" | "processing" | "done">("detail");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md bg-[#0a0a10] rounded-3xl overflow-hidden border border-white/10"
      >
        {/* Clover header */}
        <div className="px-6 py-4 flex items-center justify-between border-b border-white/8"
          style={{ background: "linear-gradient(135deg, #1a1a2e, #0d0d1a)" }}>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-black"
              style={{ background: "#00A651", color: "white" }}>C</div>
            <div>
              <p className="text-white font-bold text-sm">Clover</p>
              <p className="text-white/40 text-[10px]">Sky Dance Studio PR</p>
            </div>
          </div>
          <button onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-colors text-xs">
            ✕
          </button>
        </div>

        <div className="p-6">
          {step === "detail" && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              {/* Plan summary */}
              <div className="rounded-2xl p-4 mb-5 border"
                style={{ background: `${plan.color}10`, borderColor: `${plan.color}30` }}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{plan.icon}</span>
                    <span className="text-white font-bold">{plan.name}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-white font-black text-xl" style={{ color: plan.color }}>{plan.price}</span>
                    <span className="text-white/40 text-xs ml-1">{plan.period}</span>
                  </div>
                </div>
                <p className="text-white/50 text-xs">{plan.desc}</p>
              </div>

              {/* What's included */}
              <p className="text-white/30 text-[10px] uppercase tracking-widest mb-3">
                {isEs ? "Incluye" : "Includes"}
              </p>
              <ul className="space-y-2 mb-6">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-white/70 text-sm">
                    <span style={{ color: plan.color }}>✓</span> {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setStep("form")}
                className="w-full py-3.5 rounded-xl font-black text-white text-sm transition-all duration-200 hover:opacity-90 active:scale-95"
                style={{ background: `linear-gradient(135deg, ${plan.color}, ${plan.color}aa)` }}
              >
                {isEs ? "Continuar al pago →" : "Continue to payment →"}
              </button>
              <p className="text-center text-white/20 text-[10px] mt-3">
                {isEs ? "🔒 Pago seguro procesado por Clover" : "🔒 Secure payment processed by Clover"}
              </p>
            </motion.div>
          )}

          {step === "form" && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <button onClick={() => setStep("detail")} className="text-white/40 text-xs mb-4 flex items-center gap-1 hover:text-white/70 transition-colors">
                ← {isEs ? "Volver" : "Back"}
              </button>
              <p className="text-white font-bold mb-4 text-sm">
                {isEs ? "Información de pago" : "Payment information"}
              </p>

              {/* Mock card form */}
              <div className="space-y-3 mb-5">
                <div>
                  <label className="text-white/40 text-[10px] uppercase tracking-widest block mb-1">
                    {isEs ? "Número de tarjeta" : "Card number"}
                  </label>
                  <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white/30 text-sm flex items-center justify-between">
                    <span>•••• •••• •••• ••••</span>
                    <span className="text-[10px] flex gap-1">
                      <span className="bg-white/10 px-1.5 py-0.5 rounded">VISA</span>
                      <span className="bg-white/10 px-1.5 py-0.5 rounded">MC</span>
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-white/40 text-[10px] uppercase tracking-widest block mb-1">
                      {isEs ? "Vencimiento" : "Expiry"}
                    </label>
                    <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white/30 text-sm">
                      MM / AA
                    </div>
                  </div>
                  <div>
                    <label className="text-white/40 text-[10px] uppercase tracking-widest block mb-1">CVV</label>
                    <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white/30 text-sm">
                      •••
                    </div>
                  </div>
                </div>
                <div>
                  <label className="text-white/40 text-[10px] uppercase tracking-widest block mb-1">
                    {isEs ? "Nombre en la tarjeta" : "Cardholder name"}
                  </label>
                  <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white/20 text-sm">
                    {isEs ? "Tu nombre completo" : "Your full name"}
                  </div>
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between items-center py-3 border-t border-white/10 mb-4">
                <span className="text-white/50 text-sm">{isEs ? "Total a pagar" : "Total"}</span>
                <span className="text-white font-black text-lg" style={{ color: plan.color }}>{plan.price}</span>
              </div>

              <button
                onClick={() => { setStep("processing"); setTimeout(() => setStep("done"), 2000); }}
                className="w-full py-3.5 rounded-xl font-black text-white text-sm transition-all duration-200 hover:opacity-90 active:scale-95 flex items-center justify-center gap-2"
                style={{ background: "#00A651" }}
              >
                <span>🔒</span>
                {isEs ? `Pagar ${plan.price}` : `Pay ${plan.price}`}
              </button>
              <p className="text-center text-white/20 text-[10px] mt-3">
                {isEs ? "Powered by Clover · Encriptación SSL 256-bit" : "Powered by Clover · 256-bit SSL encryption"}
              </p>
            </motion.div>
          )}

          {step === "processing" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="py-10 flex flex-col items-center gap-4 text-center">
              <div className="w-14 h-14 rounded-full border-4 border-white/10 border-t-green-400 animate-spin" />
              <p className="text-white font-bold">{isEs ? "Procesando pago..." : "Processing payment..."}</p>
              <p className="text-white/30 text-xs">{isEs ? "No cierres esta ventana" : "Do not close this window"}</p>
            </motion.div>
          )}

          {step === "done" && (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              className="py-8 flex flex-col items-center gap-4 text-center">
              <motion.div
                initial={{ scale: 0 }} animate={{ scale: 1 }}
                transition={{ type: "spring", bounce: 0.5, delay: 0.1 }}
                className="w-16 h-16 rounded-full flex items-center justify-center text-3xl"
                style={{ background: "#00A65120", border: "2px solid #00A651" }}>
                ✓
              </motion.div>
              <div>
                <p className="text-white font-black text-xl mb-1">{isEs ? "¡Pago exitoso!" : "Payment successful!"}</p>
                <p className="text-white/50 text-sm">{isEs ? "Recibirás un correo de confirmación." : "You'll receive a confirmation email."}</p>
              </div>
              <div className="glass rounded-xl px-5 py-3 border border-white/10 w-full text-left">
                <p className="text-white/30 text-[10px] uppercase tracking-widest mb-1">{isEs ? "Resumen" : "Summary"}</p>
                <p className="text-white text-sm font-bold">{plan.name} — {plan.price}</p>
                <p className="text-white/40 text-xs">Sky Dance Studio PR</p>
              </div>
              <button onClick={onClose}
                className="w-full py-3 rounded-xl font-bold text-white/70 border border-white/10 hover:border-white/30 transition-colors text-sm">
                {isEs ? "Cerrar" : "Close"}
              </button>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function PricingSection() {
  const { lang, tx } = useLang();
  const [selected, setSelected] = useState<(Plan & { lang: "es" | "en" }) | null>(null);
  const isEs = lang === "es";
  const currentPlans = plans[lang];

  return (
    <>
      <section id="precios" className="py-20 sm:py-28 px-4 sm:px-6 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] sm:w-[600px] h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} className="text-center mb-12 sm:mb-16">
            <p className="text-purple-400 text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase mb-3" >
              {isEs ? "◈ Planes y Precios ◈" : "◈ Plans & Pricing ◈"}
            </p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-3">
              {isEs ? "Invierte en tu " : "Invest in your "}
              <span className="gradient-text-animated">{isEs ? "pasión" : "passion"}</span>
            </h2>
            <p className="text-white/40 max-w-xl mx-auto text-sm sm:text-base">
              {isEs
                ? "Elige el plan que mejor se adapte a ti. Todos incluyen la primera clase gratis."
                : "Choose the plan that fits you best. All plans include the first class free."}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {currentPlans.map((plan, i) => (
              <motion.div key={plan.id}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className={`relative rounded-2xl p-5 sm:p-6 border ${plan.border} bg-gradient-to-br ${plan.gradient} glass flex flex-col`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-black tracking-widest whitespace-nowrap"
                    style={{ background: plan.color, color: "#000" }}>
                    {plan.badge}
                  </div>
                )}

                <div className="text-3xl mb-3">{plan.icon}</div>
                <h3 className="text-white font-black text-base mb-1">{plan.name}</h3>
                <p className="text-white/40 text-xs mb-4 leading-relaxed">{plan.desc}</p>

                <div className="mb-4">
                  <span className="font-display text-4xl" style={{ color: plan.color }}>{plan.price}</span>
                  <span className="text-white/30 text-xs ml-1">{plan.period}</span>
                </div>

                <ul className="space-y-2 mb-6 flex-1">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-white/60 text-xs">
                      <span className="mt-0.5 flex-shrink-0" style={{ color: plan.color }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  onClick={() => setSelected({ ...plan, lang })}
                  className="w-full py-3 rounded-xl font-black text-sm transition-all duration-200"
                  style={{
                    background: `${plan.color}20`,
                    color: plan.color,
                    border: `1px solid ${plan.color}50`,
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = `${plan.color}35`; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = `${plan.color}20`; }}
                >
                  {isEs ? "Pagar ahora" : "Pay now"} →
                </motion.button>
              </motion.div>
            ))}
          </div>

          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-center text-white/20 text-[10px] mt-8 uppercase tracking-widest">
            🔒 {isEs
              ? "Pagos seguros procesados por Clover · SSL 256-bit"
              : "Secure payments processed by Clover · SSL 256-bit"}
          </motion.p>
        </div>
      </section>

      <AnimatePresence>
        {selected && (
          <CloverModal plan={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
