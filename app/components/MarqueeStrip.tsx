"use client";
import { useLang } from "@/lib/lang";

const items = {
  es: ["Salsa", "Hip Hop", "Ballet", "Tap", "Bachata", "Music Teatro", "Puntas", "Grand Champions 2026", "Isabela", "Hatillo", "Puerto Rico 🇵🇷"],
  en: ["Salsa", "Hip Hop", "Ballet", "Tap", "Bachata", "Music Theater", "Pointe", "Grand Champions 2026", "Isabela", "Hatillo", "Puerto Rico 🇵🇷"],
};

export default function MarqueeStrip({ variant = "purple" }: { variant?: "purple" | "gold" }) {
  const { lang } = useLang();
  const list = items[lang];
  const doubled = [...list, ...list];

  const isGold = variant === "gold";
  const textColor = isGold ? "text-yellow-400" : "text-purple-400";
  const dotColor  = isGold ? "#D4AF37" : "#a855f7";
  const borderColor = isGold ? "border-yellow-500/20" : "border-purple-500/20";
  const bgColor = isGold ? "rgba(212,175,55,0.04)" : "rgba(168,85,247,0.04)";

  return (
    <div
      className={`relative overflow-hidden border-y ${borderColor} py-3 sm:py-4`}
      style={{ background: bgColor }}
    >
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: `linear-gradient(to right, #050508, transparent)` }} />
      <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: `linear-gradient(to left, #050508, transparent)` }} />

      <div
        className="marquee-track animate-marquee"
        style={{ ["--marquee-duration" as string]: "25s" }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 px-5 sm:px-6 whitespace-nowrap">
            <span className={`text-xs sm:text-sm font-bold tracking-[0.2em] uppercase font-display ${textColor}`}>
              {item}
            </span>
            <span className="text-[8px]" style={{ color: dotColor }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
