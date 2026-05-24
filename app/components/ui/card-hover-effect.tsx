"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

type Item = {
  title: string;
  description: string;
  icon?: string;
  tag?: string;
};

export function HoverEffect({
  items,
  className,
}: {
  items: Item[];
  className?: string;
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2", className)}>
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group p-2 cursor-default"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-white/5 block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
              />
            )}
          </AnimatePresence>
          <div className="relative z-20 rounded-2xl h-full w-full p-6 border border-white/10 group-hover:border-amber-400/30 transition-colors duration-300 bg-white/[0.02]">
            {item.icon && <div className="text-4xl mb-4">{item.icon}</div>}
            <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
            {item.tag && (
              <span className="text-xs text-white/40 uppercase tracking-widest font-medium">
                {item.tag}
              </span>
            )}
            <p className="text-white/60 text-sm mt-3 leading-relaxed">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
