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

    // Clone items for infinite effect
    const items = Array.from(scrollerRef.current.children);
    items.forEach((item) => {
      const clone = item.cloneNode(true);
      scrollerRef.current!.appendChild(clone);
    });

    containerRef.current.style.setProperty(
      "--animation-duration",
      speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s"
    );
    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );
    setStart(true);
  }, [speed, direction]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="w-[280px] md:w-[350px] max-w-full relative rounded-2xl border border-white/10 flex-shrink-0 px-6 py-5 bg-white/5"
          >
            <blockquote>
              <p className="text-white/70 text-sm leading-relaxed mb-4">&ldquo;{item.quote}&rdquo;</p>
              <footer className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-cyan-400 flex items-center justify-center text-black font-bold text-sm">
                  {item.name[0]}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{item.name}</div>
                  {item.title && (
                    <div className="text-white/40 text-xs">{item.title}</div>
                  )}
                </div>
              </footer>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
}
