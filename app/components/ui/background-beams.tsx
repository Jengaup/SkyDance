"use client";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export function BackgroundBeams({ className }: { className?: string }) {
  const beams = [
    { top: "20%", left: "10%", delay: "0s", duration: "8s", width: "2px", height: "120px", rotate: "30deg" },
    { top: "40%", left: "80%", delay: "1s", duration: "10s", width: "2px", height: "200px", rotate: "-20deg" },
    { top: "10%", left: "50%", delay: "2s", duration: "7s", width: "1px", height: "150px", rotate: "45deg" },
    { top: "70%", left: "20%", delay: "0.5s", duration: "9s", width: "2px", height: "100px", rotate: "-45deg" },
    { top: "60%", left: "60%", delay: "1.5s", duration: "6s", width: "1px", height: "180px", rotate: "15deg" },
    { top: "30%", left: "35%", delay: "3s", duration: "11s", width: "2px", height: "130px", rotate: "-30deg" },
    { top: "80%", left: "70%", delay: "2.5s", duration: "8s", width: "1px", height: "90px", rotate: "60deg" },
    { top: "15%", left: "90%", delay: "4s", duration: "7s", width: "2px", height: "160px", rotate: "-15deg" },
  ];

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {beams.map((beam, i) => (
        <div
          key={i}
          className="absolute opacity-0"
          style={{
            top: beam.top,
            left: beam.left,
            width: beam.width,
            height: beam.height,
            transform: `rotate(${beam.rotate})`,
            background: i % 2 === 0
              ? "linear-gradient(to bottom, transparent, #f59e0b, transparent)"
              : "linear-gradient(to bottom, transparent, #06b6d4, transparent)",
            animation: `beam-fade ${beam.duration} ${beam.delay} ease-in-out infinite`,
          }}
        />
      ))}
      <style>{`
        @keyframes beam-fade {
          0%, 100% { opacity: 0; transform: scaleY(0.5) rotate(var(--r, 0deg)); }
          50% { opacity: 0.4; transform: scaleY(1) rotate(var(--r, 0deg)); }
        }
      `}</style>
      {/* Radial grid overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}
