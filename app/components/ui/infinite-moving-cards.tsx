"use client";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Item = { name: string; quote: string; title?: string };

export function InfiniteMovingCards({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: Item[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return;
    const children = Array.from(scrollerRef.current.children);
    children.forEach((item) => {
      scrollerRef.current!.appendChild(item.cloneNode(true));
    });
    containerRef.current.style.setProperty(
      "--animation-duration",
      speed === "fast" ? "20s" : speed === "normal" ? "40s" : "70s"
    );
    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );
    setStart(true);
  }, [speed, direction]);

  const colors = ["#a855f7", "#ec4899", "#22d3ee", "#a3e635", "#f97316", "#d946ef"];

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-2 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => {
          const color = colors[idx % colors.length];
          return (
            <li
              key={idx}
              className="w-[300px] md:w-[380px] max-w-full relative rounded-2xl flex-shrink-0 px-6 py-5 glass"
              style={{ border: `1px solid ${color}25` }}
            >
              <p className="text-white/60 text-sm leading-relaxed mb-5 italic">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center font-black text-sm"
                  style={{ background: `${color}20`, border: `1px solid ${color}50`, color }}
                >
                  {item.name[0]}
                </div>
                <div>
                  <div className="text-white text-sm font-bold">{item.name}</div>
                  {item.title && (
                    <div className="text-xs font-semibold" style={{ color }}>{item.title}</div>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
